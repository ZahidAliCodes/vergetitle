const hamburger = document.querySelector('.hamburger-menu');
const mobileNav = document.querySelector('.mobile-nav');
const closeBtn = document.querySelector('.close-btn');

hamburger.addEventListener('click', () => {
  mobileNav.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  mobileNav.classList.remove('open');
});

document.addEventListener('click', function(e) {
  if (!mobileNav.contains(e.target) && !hamburger.contains(e.target) && mobileNav.classList.contains('open')) {
    mobileNav.classList.remove('open');
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768 && mobileNav.classList.contains('open')) {
    mobileNav.classList.remove('open');
  }
});
