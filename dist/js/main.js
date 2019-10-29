//Select DOM Items

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set initial state of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if(!showMenu) {
  menuBtn.classList.add('close');
  menu.classList.add('show');
  menuNav.classList.add('show');
  menuBranding.classList.add('show');
  navItems.forEach(item => item.classList.add('show'));

  // Set Menu state
  showMenu = true;
  } else {
  menuBtn.classList.remove('close');
  menu.classList.remove('show');
  menuNav.classList.remove('show');
  menuBranding.classList.remove('show');
  navItems.forEach(item => item.classList.remove('show'));

  // Set Menu state
  showMenu = false;
  }
}


// Get modal elements
var modal  = document.getElementById('simpleModal');
// Get open modal button
var modalBtn = document.getElementById('modalBtn');
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// listen for open click
modalBtn.addEventListener('click', openModal);
// listen for close click
closeBtn.addEventListener('click', closeModal);
// Listen for outside click
window.addEventListener('click', outsideClick);

// function to open modal
function openModal(){
  modal.style.display = 'block';
}

// function to close modal
function closeModal(){
  modal.style.display = 'none';
}

// function to close modal if outside click
function outsideClick(e){
  if(e.target == modal){
    modal.style.display = 'none';
  }
}