document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const primaryMenu = document.getElementById('primary-menu');

  if (menuToggle && primaryMenu) {
    // Toggle click handler
    menuToggle.addEventListener('click', () => {
      const isOpen = primaryMenu.classList.toggle('is-open');

      menuToggle.setAttribute('aria-expanded', isOpen);
      primaryMenu.setAttribute('aria-hidden', !isOpen);
      menuToggle.setAttribute('aria-label', isOpen ? 'Close main menu' : 'Open main menu');
      menuToggle.textContent = isOpen ? 'Close' : 'Menu';
    });

    // Handle browser resize to desktop breakpoint (600px / 37.5em)
    const mediaQuery = window.matchMedia('(min-width: 37.5em)');

    function handleScreenResize(e) {
      if (e.matches) {
        // If screen becomes desktop size, close the mobile menu state
        primaryMenu.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        primaryMenu.setAttribute('aria-hidden', 'false'); // Visible by default on desktop
        menuToggle.setAttribute('aria-label', 'Open main menu');
        menuToggle.textContent = 'Menu';
      } else {
        // Re-apply aria-hidden true when scaling back down to mobile and closed
        if (!primaryMenu.classList.contains('is-open')) {
          primaryMenu.setAttribute('aria-hidden', 'true');
        }
      }
    }

    mediaQuery.addEventListener('change', handleScreenResize);
  }

  // Search dialog: click the Search button, or press Cmd+K (Mac) / Ctrl+K
  // (Windows/Linux) anywhere on the page, to open a modal holding the
  // Pagefind search box. Escape or clicking the backdrop closes it.
  const searchToggle = document.getElementById('search-toggle');
  const searchDialog = document.getElementById('search-dialog');

  if (searchToggle && searchDialog) {
    const focusSearchInput = () => {
      const input = searchDialog.querySelector('input');
      if (input) input.focus();
    };

    const openSearch = () => {
      searchDialog.classList.add('is-open');
      searchDialog.setAttribute('aria-hidden', 'false');
      document.body.classList.add('search-open');
      // The Pagefind search box upgrades asynchronously, so try focusing
      // now and again on the next frame in case it isn't ready yet.
      focusSearchInput();
      requestAnimationFrame(focusSearchInput);
    };

    const closeSearch = () => {
      searchDialog.classList.remove('is-open');
      searchDialog.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('search-open');
      searchToggle.focus();
    };

    searchToggle.addEventListener('click', openSearch);

    searchDialog.querySelectorAll('[data-search-dismiss]').forEach((el) => {
      el.addEventListener('click', closeSearch);
    });

    document.addEventListener('keydown', (e) => {
      const isMac = navigator.platform.toUpperCase().includes('MAC');
      const shortcutPressed = (isMac ? e.metaKey : e.ctrlKey) && e.key.toLowerCase() === 'k';

      if (shortcutPressed) {
        e.preventDefault();
        searchDialog.classList.contains('is-open') ? closeSearch() : openSearch();
      } else if (e.key === 'Escape' && searchDialog.classList.contains('is-open')) {
        closeSearch();
      }
    });
  }
});
