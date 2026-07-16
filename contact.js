/* =====================================================
   ACM-W BPHC — Contact Us page behaviour
   Mirrors the theme-toggle / nav / dropdown logic from
   the homepage's script.js so this page matches its
   look and feel exactly, plus the contact-card interactions.
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------------------------------------------------
     THEME TOGGLE — same behaviour as the homepage.
     --------------------------------------------------- */
  const themeToggle = document.getElementById('themeToggle');
  function currentTheme(){
    return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }
  function setTheme(theme){
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('acmw-theme', theme);
    if(themeToggle){
      themeToggle.setAttribute('aria-pressed', theme === 'dark');
      themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    }
  }
  if(themeToggle){
    setTheme(currentTheme());
    themeToggle.addEventListener('click', () => {
      setTheme(currentTheme() === 'dark' ? 'light' : 'dark');
    });
  }

  /* ---------------------------------------------------
     MOBILE NAV TOGGLE
     --------------------------------------------------- */
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  if(navToggle && mainNav){
    navToggle.addEventListener('click', () => {
      const open = mainNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
  }

  /* ---------------------------------------------------
     DOMAINS DROPDOWN
     --------------------------------------------------- */
  const domainsBtn = document.getElementById('domainsBtn');
  const domainsPanel = document.getElementById('domainsPanel');
  if(domainsBtn && domainsPanel){
    domainsBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = domainsPanel.classList.toggle('is-open');
      domainsBtn.setAttribute('aria-expanded', String(open));
    });
    document.addEventListener('click', (e) => {
      if(!e.target.closest('.nav-dropdown')){
        domainsPanel.classList.remove('is-open');
        domainsBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------------------------------------------------
     FOOTER YEAR
     --------------------------------------------------- */
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------------------------------------------------
     TERMINAL HOVER HINTS
     --------------------------------------------------- */
  const hintText = document.getElementById('termHintText');
  const rows = document.querySelectorAll('.contact-row[data-hint]');
  const defaultHint = hintText ? hintText.textContent : '';
  rows.forEach(row => {
    row.addEventListener('mouseenter', () => {
      if(hintText) hintText.textContent = row.dataset.hint;
    });
    row.addEventListener('mouseleave', () => {
      if(hintText) hintText.textContent = defaultHint;
    });
  });

  /* ---------------------------------------------------
     CLICK-TO-COPY EMAIL ADDRESS
     --------------------------------------------------- */
  const emailRow = document.getElementById('emailRow');
  const emailArrow = document.getElementById('emailArrow');
  if(emailRow){
    emailRow.addEventListener('click', async (e) => {
      const email = emailRow.dataset.email;
      if(!email || !navigator.clipboard) return; // fall back to the mailto link
      e.preventDefault();
      try{
        await navigator.clipboard.writeText(email);
        emailRow.classList.add('is-copied');
        if(emailArrow) emailArrow.textContent = 'copied';
        if(hintText) hintText.textContent = 'email address copied to clipboard';
        setTimeout(() => {
          emailRow.classList.remove('is-copied');
          if(emailArrow) emailArrow.textContent = '↗';
        }, 2200);
      }catch(err){
        window.location.href = `mailto:${email}`;
      }
    });
  }
});
