document.addEventListener('DOMContentLoaded', () => {

  /* footer year */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* mobile nav toggle */
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('is-open');
      navToggle.classList.toggle('is-open', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  /* hover hints inside the terminal card */
  const hintText = document.getElementById('termHintText');
  const rows = document.querySelectorAll('.contact-row[data-hint]');
  const defaultHint = hintText ? hintText.textContent : '';

  rows.forEach(row => {
    row.addEventListener('mouseenter', () => {
      if (hintText) hintText.textContent = row.dataset.hint;
    });
    row.addEventListener('mouseleave', () => {
      if (hintText) hintText.textContent = defaultHint;
    });
  });

  /* click-to-copy email address */
  const emailRow = document.getElementById('emailRow');
  const emailArrow = document.getElementById('emailArrow');

  if (emailRow) {
    emailRow.addEventListener('click', async (e) => {
      const email = emailRow.dataset.email;
      if (!email || !navigator.clipboard) return; // fall back to the mailto link

      e.preventDefault();
      try {
        await navigator.clipboard.writeText(email);
        emailRow.classList.add('is-copied');
        if (emailArrow) emailArrow.textContent = 'copied';
        if (hintText) hintText.textContent = 'email address copied to clipboard';

        setTimeout(() => {
          emailRow.classList.remove('is-copied');
          if (emailArrow) emailArrow.textContent = '↗';
        }, 2200);
      } catch (err) {
        // clipboard blocked — just let the mailto link behave normally
        window.location.href = `mailto:${email}`;
      }
    });
  }

});
