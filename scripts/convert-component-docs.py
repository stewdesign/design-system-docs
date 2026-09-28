"""Convert the team's component docs (source-docs/components/*.md) into site
content files (src/content/components/*.md).

Run from the repo root:  python3 scripts/convert-component-docs.py
Needs PyYAML (pip install pyyaml). Re-run whenever a source doc changes: it
overwrites the generated files, so edit the source doc, not the output.

Faithful, mechanical mapping: every source point lands on the page or is
recorded as a gap. No content is invented.
"""
import re, sys, os, glob, datetime
import yaml

SRC = sys.argv[1] if len(sys.argv) > 1 else 'source-docs/components'
OUT = sys.argv[2] if len(sys.argv) > 2 else 'src/content/components'
TODAY = datetime.date.today().isoformat()
PH = 'https://placehold.co/1280x720'
FIGMA = 'https://www.figma.com/design/ftKlYPN3ybfppm54r2CyjK/Toolbox?node-id='

SLUGS = sorted((os.path.basename(p)[:-3] for p in glob.glob(f'{SRC}/*.md')), key=len, reverse=True)

def display(slug):
    s = re.sub(r'^aa-', '', slug).replace('-', ' ')
    return s[0].upper() + s[1:]

NAME_RE = re.compile(r'(?<![\w-])(' + '|'.join(map(re.escape, SLUGS)) + r')(?![\w-])')

TODO_RE = re.compile(r'_TODO:?\s*(.*?)_(?=\s*$|\s*[|.]?\s*$)', re.S)

def plain(t, names=True):
    t = re.sub(r'\*\*(.+?)\*\*', r'\1', t)
    t = t.replace('`', '')
    t = re.sub(r'(?<![\w])_(\(.+?\))_(?![\w])', r'\1', t)  # _(aside)_
    t = t.replace('\\|', '|')
    if names:
        t = NAME_RE.sub(lambda m: display(m.group(1)), t)
    return re.sub(r'\s+', ' ', t).strip()

def cap(t, raw=None):
    if raw is not None and raw.lstrip(' *(').startswith('`'):
        return t
    return t[:1].upper() + t[1:] if t else t

def split_todo(t):
    """Return (text without TODO, todo text or None)."""
    m = re.search(r'_TODO:?\s*(.+?)_\s*\.?\s*$', t)
    if not m:
        return t, None
    return t[:m.start()].rstrip(' —-'), m.group(1).strip()

def sections(md):
    """{'## H2': {'_': [lines], '### H3': [lines]}}"""
    out, h2, h3 = {}, None, '_'
    for line in md.splitlines():
        if line.startswith('## '):
            h2, h3 = line[3:].strip(), '_'
            out[h2] = {'_': []}
        elif line.startswith('### ') and h2:
            h3 = line[4:].strip()
            out[h2][h3] = []
        elif h2:
            out[h2][h3].append(line)
    return out

def bullets(lines):
    """Top-level bullets with nested sub-bullets folded in as children."""
    items = []
    for l in lines:
        if re.match(r'^(- |\d+\. )', l):
            items.append({'text': re.sub(r'^(- |\d+\. )', '', l), 'children': []})
        elif re.match(r'^\s{2,}- ', l) and items:
            items[-1]['children'].append(l.strip()[2:])
        elif l.strip() and items and not l.startswith('|') and not l.startswith('_TODO'):
            items[-1]['text'] += ' ' + l.strip()
    return items

def paras(lines):
    ps, cur = [], []
    for l in lines:
        if l.strip():
            cur.append(l.strip())
        elif cur:
            ps.append(' '.join(cur)); cur = []
    if cur:
        ps.append(' '.join(cur))
    return ps

def table(lines):
    rows = [l for l in lines if l.startswith('|')]
    out = []
    for r in rows[2:]:
        cells = [c.strip() for c in re.split(r'(?<!\\)\|', r.strip())[1:-1]]
        out.append(cells)
    return out

def labelled(text):
    m = re.match(r'^\*\*(.+?)\*\*\s*[:—-]?\s*(.*)$', text)
    if m:
        return m.group(1).rstrip(':'), m.group(2)
    return None, text

class Gaps(list):
    def add(self, where, todo):
        self.append(f'{where}: {plain(todo)}')

def text_items(lines, where, gaps):
    """Bullets, or paragraphs if no bullets; TODOs recorded as gaps."""
    raw = [b['text'] for b in bullets(lines)] or paras([l for l in lines if not l.startswith('|')])
    out = []
    for r in raw:
        t, todo = split_todo(r)
        if todo:
            gaps.add(where, todo)
        if t.strip():
            out.append(cap(plain(t), t))
    return out

def convert(path):
    slug = os.path.basename(path)[:-3]
    title = display(slug)
    md = open(path).read()
    S = sections(md)
    gaps = Gaps()
    secs = []

    # ─ Overview → description, figmaUrl
    ov = [p for p in paras(S['Overview']['_'])]
    figma = ''
    desc = []
    for p in ov:
        if p.startswith('Figma'):
            m = re.search(r'node `?(\d+:\d+)', p)
            if m:
                figma = FIGMA + m.group(1).replace(':', '-')
            continue
        t, todo = split_todo(p)
        if todo: gaps.add('Overview', todo)
        desc.append(plain(t))
    description = ' '.join(desc)

    # ─ Anatomy
    an = S['Anatomy']['_']
    parts = []
    for b in bullets(an):
        t, todo = split_todo(b['text'])
        if todo: gaps.add('Anatomy', todo)
        if t: parts.append(plain(t).replace(' — ', ': ', 1))
        for c in b['children']:
            parts.append(plain(b['text'].split(' — ')[0]) + ' › ' + plain(c).replace(' — ', ': ', 1))
    for l in an:
        if l.startswith('_TODO'):
            gaps.add('Anatomy', split_todo(l)[1] or l)
    if parts:
        secs.append({'type': 'anatomy', 'heading': 'Anatomy', 'items': parts, 'image': PH,
                     'imageAlt': f'Labelled {title} anatomy diagram'})

    # ─ Examples → two-col
    ex_rows = []
    for b in bullets(S['Examples']['_']):
        t, todo = split_todo(b['text'])
        if todo: gaps.add('Examples', todo)
        if not t.strip(): continue
        name, rest = labelled(t)
        if name is None:
            name, rest = 'Example', t
        m = re.match(r'^(\(.+?\))\s*(.*)$', rest)
        if m:
            name, rest = f'{name} {m.group(1)}', m.group(2)
        rest = rest.lstrip('—- ').strip() or plain(name)
        ex_rows.append({'title': plain(name), 'description': cap(plain(rest), rest),
                        'image': PH, 'imageAlt': f'{title}: {plain(name)}'})
    for l in S['Examples']['_']:
        if l.startswith('_TODO'): gaps.add('Examples', split_todo(l)[1] or l)
    if ex_rows:
        secs.append({'type': 'two-col', 'heading': 'Examples', 'items': ex_rows})

    # ─ Behaviour → two-col
    rows, general = [], []
    for b in bullets(S['Behaviour']['_']):
        t, todo = split_todo(b['text'])
        name, rest = labelled(t)
        if todo:
            gaps.add(f'Behaviour ({plain(name)})' if name else 'Behaviour', todo)
        kids = [plain(c) for c in b['children']]
        if not rest.strip():
            if not (name and kids):
                continue
            rest, kids = kids[0], kids[1:]
        if name:
            row = {'title': plain(name), 'description': cap(plain(rest), rest)}
            if kids: row['list'] = kids
            rows.append(row)
        else:
            general.append(cap(plain(t), t))
            general.extend(cap(plain(k), k) for k in b['children'])
    if general:
        g = {'title': 'General behaviour', 'description': general[0]}
        if len(general) > 1: g['list'] = general[1:]
        rows.insert(0, g)
    for r in rows:
        r.update({'image': PH, 'imageAlt': f'{title}: {r["title"].lower()}'})
    if rows:
        secs.append({'type': 'two-col', 'heading': 'Behaviour and states', 'items': rows})

    # ─ Usage → best-practices
    use = text_items(S['Usage'].get('When to use', []), 'When to use', gaps)
    avoid = text_items(S['Usage'].get('When not to use', []), 'When not to use', gaps)
    if use or avoid:
        bp = {'type': 'best-practices', 'heading': 'When to use',
              'doHeading': 'Use it for', 'dontHeading': "Don't use it for"}
        if use: bp['do'] = use
        if avoid: bp['dont'] = avoid
        secs.append(bp)

    # ─ Content guidance → side-by-side
    cg = S['Content guidance']
    rules = text_items(cg.get('What to write', []), 'Content guidance (what to write)', gaps) + \
            text_items(cg.get('How to write', []), 'Content guidance (how to write)', gaps)
    pairs = []
    for cells in table(cg.get('How to write', []) + cg.get('What to write', []) + cg['_']):
        if len(cells) < 2 or 'TODO' in cells[0]: continue
        d, n = plain(cells[0]), plain(cells[1])
        pairs.append({'figures': [
            {'image': PH, 'imageAlt': f'{title} example: {d}', 'label': 'Do', 'caption': d},
            {'image': PH, 'imageAlt': f'{title} example: {n}', 'label': "Don't", 'caption': n}]})
    if rules or pairs:
        s = {'type': 'side-by-side', 'heading': 'Content guidance'}
        if rules: s['list'] = rules
        if pairs: s['items'] = pairs
        secs.append(s)

    # ─ Things to consider → side-by-side (list only)
    tc = text_items(S['Things to consider']['_'], 'Things to consider', gaps)
    if tc:
        secs.append({'type': 'side-by-side', 'heading': 'Things to consider', 'list': tc})

    # ─ Properties
    pr = S['Properties']
    tables = []
    groups = [(k, v) for k, v in pr.items() if k != '_'] or [(None, pr['_'])]
    for k, lines in groups:
        rows_ = []
        for c in table(lines):
            if len(c) < 4: continue
            row = {'name': plain(c[0], False), 'options': plain(c[1], False)}
            dv = plain(c[2], False)
            extra = re.match(r'^_undefined_\s+(.+)$', dv)
            if extra:
                row['defaultValue'] = 'None ' + extra.group(1)
            elif dv and dv not in ('_undefined_', '—', '-', 'undefined') and not dv.startswith('_'):
                row['defaultValue'] = dv
            row['description'] = cap(plain(c[3]), c[3])
            rows_.append(row)
        if rows_:
            t = {'rows': rows_}
            if k: t['title'] = display(k.strip('`'))
            tables.append(t)
    for l in pr['_']:
        if l.startswith('_TODO'): gaps.add('Properties', split_todo(l)[1] or l)
    if tables:
        secs.append({'type': 'properties', 'heading': 'Properties', 'tables': tables})

    # ─ Accessibility
    A = S['Accessibility']
    acc = {'type': 'accessibility'}
    fo = text_items(A.get('Focus order', []), 'Focus order', gaps)
    if fo: acc['focusOrder'] = fo
    kb = []
    for c in table(A.get('Keyboard interactions', [])):
        if len(c) >= 2 and 'TODO' not in c[0] and c[0].strip():
            kb.append({'key': plain(c[0], False), 'action': cap(plain(c[1]), c[1])})
        elif c and 'TODO' in c[0]:
            gaps.add('Keyboard interactions', split_todo(c[0])[1] or c[0])
    for l in A.get('Keyboard interactions', []):
        if l.startswith('_TODO'): gaps.add('Keyboard interactions', split_todo(l)[1] or l)
        elif l.strip() and not l.startswith('|'):
            kb_note = plain(l)
            acc.setdefault('focusOrder', []).append(kb_note)
    if kb: acc['keyboard'] = kb
    ar = text_items(A.get('ARIA', []), 'ARIA', gaps)
    if ar: acc['aria'] = ar
    seo = text_items(A.get('SEO and AI discovery', []), 'SEO and AI discovery', gaps)
    if seo: acc['seo'] = seo
    if len(acc) > 1:
        secs.append(acc)

    # ─ Related components
    rel = []
    for b in bullets(S['Related components']['_']):
        t, todo = split_todo(b['text'])
        if todo: gaps.add('Related components', todo)
        m = re.match(r'^((?:`aa-[\w-]+`(?:\s*(?:/|,|and)\s*)?)+)\s*(?:\(.*?\))?\s*[—-]\s*(.*)$', t)
        names = [n for n in re.findall(r'`(aa-[\w-]+)`', m.group(1))] if m else []
        known = [n for n in names if n in SLUGS]
        if known:
            note = cap(plain(m.group(2)), m.group(2))
            for n in known:
                rel.append({'label': display(n), 'href': '/components/' + n[3:], 'note': note or None})
            for n in set(names) - set(known):
                gaps.add('Related components (no page for this component)', n)
        elif t.strip():
            gaps.add('Related components (not a linkable component)', t)
    for l in S['Related components']['_']:
        if l.startswith('_TODO'): gaps.add('Related components', split_todo(l)[1] or l)
    if rel:
        for r in rel:
            if not r['note']: del r['note']
        secs.append({'type': 'related-components', 'items': rel})

    if slug == 'aa-button' and not figma:
        figma = FIGMA + '4185-3778'
    fm = {'title': title, 'description': description, 'storybookUrl': '', 'figmaUrl': figma,
          'previewImage': PH, 'lastUpdated': TODAY, 'platforms': ['Web', 'Mobile app'], 'sections': secs}

    class D(yaml.SafeDumper): pass
    def s_rep(d, v):
        style = '>' if len(v) > 80 else None
        return d.represent_scalar('tag:yaml.org,2002:str', v, style=style)
    D.add_representer(str, s_rep)
    body = yaml.dump(fm, Dumper=D, sort_keys=False, allow_unicode=True, width=78)
    head = ''
    if gaps:
        head = '# Gaps from the source doc (TODOs), for review:\n' + \
               ''.join(f'#   - {g}\n' for g in dict.fromkeys(gaps))
    out = f'---\n{head}{body}---\n'
    dest = os.path.join(OUT, slug[3:] + '.md')
    open(dest, 'w').write(out)
    return slug, len(secs), len(set(gaps))

if __name__ == '__main__':
    for p in sorted(glob.glob(f'{SRC}/*.md')):
        s, n, g = convert(p)
        print(f'{s:32} sections={n} gaps={g}')
