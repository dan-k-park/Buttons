const menuBtn = document.querySelector('.hamburger-menu');
const menuBBtn = document.querySelector('.hamburger-menuB');
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
});
menuBBtn.addEventListener('click', () => {
  menuBBtn.classList.toggle('open');
});
