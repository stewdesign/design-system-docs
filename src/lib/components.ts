import { getCollection } from 'astro:content';

// Components shown on the site. Drafts (`draft: true`) are left out of
// production builds — no page, nav entry or search result — but stay
// visible in `npm run dev` so they can still be reviewed.
export async function getComponents() {
  const all = await getCollection('components');
  const visible = import.meta.env.PROD ? all.filter((c) => !c.data.draft) : all;
  return visible.sort((a, b) => a.data.title.localeCompare(b.data.title));
}
