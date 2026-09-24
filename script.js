document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('is-open', !open);
    });
  }

  const copyButton = document.getElementById('copy-email');
  if (copyButton) {
    copyButton.addEventListener('click', async () => {
      const email = copyButton.dataset.email || '';
      try {
        await navigator.clipboard.writeText(email);
        const original = copyButton.textContent;
        copyButton.textContent = 'Gekopieerd ✓';
        setTimeout(() => { copyButton.textContent = original; }, 1800);
      } catch (_) {
        window.prompt('Kopieer het e-mailadres:', email);
      }
    });
  }

  const newsletterForm = document.getElementById('newsletter-form');
  const newsletterFrame = document.getElementById('newsletter-submit-frame');
  const newsletterSuccess = document.getElementById('newsletter-success');
  const newsletterTimeout = document.getElementById('newsletter-timeout');
  const newsletterState = document.getElementById('newsletter-form-state');
  const newsletterSubmit = document.getElementById('newsletter-submit');
  const newsletterAgain = document.getElementById('newsletter-again');

  if (newsletterForm && newsletterFrame) {
    let submitted = false;
    let timer;

    newsletterForm.addEventListener('submit', () => {
      submitted = true;
      if (newsletterSubmit) {
        newsletterSubmit.disabled = true;
        newsletterSubmit.textContent = 'Aanmelden…';
      }
      clearTimeout(timer);
      timer = setTimeout(() => {
        if (submitted && newsletterTimeout) {
          newsletterTimeout.hidden = false;
          if (newsletterSubmit) {
            newsletterSubmit.disabled = false;
            newsletterSubmit.textContent = 'Aanmelden voor dossierupdates';
          }
        }
      }, 12000);
    });

    newsletterFrame.addEventListener('load', () => {
      if (!submitted) return;
      submitted = false;
      clearTimeout(timer);
      if (newsletterState) newsletterState.hidden = true;
      if (newsletterTimeout) newsletterTimeout.hidden = true;
      if (newsletterSuccess) newsletterSuccess.hidden = false;
    });
  }

  if (newsletterAgain) {
    newsletterAgain.addEventListener('click', () => {
      if (newsletterSuccess) newsletterSuccess.hidden = true;
      if (newsletterState) newsletterState.hidden = false;
      if (newsletterForm) newsletterForm.reset();
      if (newsletterSubmit) {
        newsletterSubmit.disabled = false;
        newsletterSubmit.textContent = 'Aanmelden voor dossierupdates';
      }
    });
  }
});
