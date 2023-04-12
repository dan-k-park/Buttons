const menuBtn = document.querySelector('.hamburger-menu');
const menuBBtn = document.querySelector('.hamburger-menuB');
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
});
menuBBtn.addEventListener('click', () => {
  menuBBtn.classList.toggle('open');
});

var acc = document.getElementsByClassName('accordian');
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('active');
    var panel = this.nextElementSibling;
    console.log(panel.style);
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
}
