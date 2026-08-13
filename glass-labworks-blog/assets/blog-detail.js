(function () {
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const mobileNav = document.querySelector('[data-mobile-nav]');

  if (menuToggle && mobileNav) {
    const setOpen = (isOpen) => {
      mobileNav.classList.toggle('is-open', isOpen);
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    };

    menuToggle.addEventListener('click', () => {
      setOpen(!mobileNav.classList.contains('is-open'));
    });

    window.addEventListener('resize', () => {
      if (window.matchMedia('(min-width: 900px)').matches) {
        setOpen(false);
      }
    });
  }

  document.querySelectorAll('[data-faq-item]').forEach((item) => {
    const button = item.querySelector('.faq-item__header');
    if (!button) return;

    button.setAttribute('aria-expanded', item.getAttribute('aria-expanded') === 'true' ? 'true' : 'false');

    button.addEventListener('click', () => {
      const expanded = item.getAttribute('aria-expanded') === 'true';
      document.querySelectorAll('[data-faq-item]').forEach((other) => {
        other.setAttribute('aria-expanded', 'false');
        const otherButton = other.querySelector('.faq-item__header');
        if (otherButton) otherButton.setAttribute('aria-expanded', 'false');
      });
      item.setAttribute('aria-expanded', expanded ? 'false' : 'true');
      button.setAttribute('aria-expanded', expanded ? 'false' : 'true');
    });
  });
})();
