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
var modalOne  = document.getElementById('simpleModalOne');
var modalTwo = document.getElementById('simpleModalTwo');
var modalThree  = document.getElementById('simpleModalThree');
var modalFour  = document.getElementById('simpleModalFour');
// Get the button that opens the modal
var modalBtnOne = document.getElementById('modalBtnOne');
var modalBtnTwo = document.getElementById('modalBtnTwo');
var modalBtnThree = document.getElementById('modalBtnThree');
var modalBtnFour = document.getElementById('modalBtnFour');
// Get close buttons
var closeBtnOne = document.getElementById('closeBtnOne');
var closeBtnTwo = document.getElementById('closeBtnTwo');
var closeBtnThree = document.getElementById('closeBtnThree');
var closeBtnFour = document.getElementById('closeBtnFour');

// listen for open click
modalBtnOne.addEventListener('click', openModalOne);
modalBtnTwo.addEventListener('click', openModalTwo);
modalBtnThree.addEventListener('click', openModalThree);
modalBtnFour.addEventListener('click', openModalFour);
// listen for close click
closeBtnOne.addEventListener('click', closeModalOne);
closeBtnTwo.addEventListener('click', closeModalTwo);
closeBtnThree.addEventListener('click', closeModalThree);
closeBtnFour.addEventListener('click', closeModalFour);
// Listen for outside click
window.addEventListener('click', outsideClick);

// function to open modal popups
function openModalOne(){
  modalOne.style.display = 'block';
}
function openModalTwo(){
  modalTwo.style.display = 'block';
}
function openModalThree(){
  modalThree.style.display = 'block';
}
function openModalFour(){
  modalFour.style.display = 'block';
}

// function to close modals
function closeModalOne(){
  modalOne.style.display = 'none';
}
function closeModalTwo(){
  modalTwo.style.display = 'none';
}
function closeModalThree(){
  modalThree.style.display = 'none';
}
function closeModalFour(){
  modalFour.style.display = 'none';
}


// function to close modal if outside click
function outsideClick(e){
  if(e.target == modalOne){
    modalOne.style.display = 'none';
  }
  if(e.target == modalTwo){
    modalTwo.style.display = 'none';
  }
  if(e.target == modalThree){
    modalThree.style.display = 'none';
  }
  if(e.target == modalFour){
    modalFour.style.display = 'none';
  }
}