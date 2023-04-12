function openTab(e, tabName) {
  let i, tabcontent, tablinks;

  // Hide all tab__content elements
  tabcontent = document.getElementsByClassName('tab__content');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }

  // Remove active class from tab__links
  tablinks = document.getElementsByClassName('tab__links');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }

  // Show current tab, add 'active' class to the button that opened the tab
  document.getElementById(tabName).style.display = 'block';

  e.currentTarget.className += ' active';
}
document.getElementById('defaultOpen').click();
