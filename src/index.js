import Rellax from 'rellax';

// parallax
new Rellax('.c-hero__image', {
  speed: -3,
  center: false,
  wrapper: null,
  round: true,
  vertical: true,
  horizontal: false
});

// appear
const appearBlocs = document.querySelectorAll('.js-appear');
const threshold = .1;
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > threshold) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    // } else {
    //   entry.target.classList.remove('is-visible');
    }
  });
}, {
  threshold
});

appearBlocs.forEach(block => {
  block.classList.add('has-appear')
  block.style.transition = 'none'
  requestAnimationFrame(() => {
    block.classList.add('has-appear')
    block.style.transition = ''
    observer.observe(block);
  })
});

// nav
const nav = document.querySelector('.js-nav');
const toggleNav = document.querySelector('.js-toggle-nav');
const onToggle = () => {
  nav.classList.toggle('is-opened')
  toggleNav.classList.toggle('is-opened')
}

toggleNav.addEventListener('click', onToggle)