const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(contactForm);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const subject = String(data.get('subject') || '').trim();
    const story = String(data.get('story') || '').trim();

    const mailSubject = encodeURIComponent(`Nieuwe aanmelding Incasso Tabako: ${subject}`);
    const mailBody = encodeURIComponent(
      `Naam: ${name}\nE-mailadres: ${email}\nOnderwerp: ${subject}\n\nSituatie:\n${story}`
    );

    window.location.href = `mailto:incassotabako@gmail.com?subject=${mailSubject}&body=${mailBody}`;
  });
}
