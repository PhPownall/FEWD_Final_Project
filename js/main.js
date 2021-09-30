// hambuger menu
const hamburgerId = document.getElementById('hamburgerId');
const hamburgerClass = document.querySelector('.hamburger');

hamburgerId.addEventListener('click',arrowAnimation);
function arrowAnimation() {
  hamburgerId.classList.toggle('is-active');
  document.querySelector('.menu').classList.toggle('menu-open');
}

// modals
const modalOne = document.querySelector('#myModalOne');
const imgOne = document.querySelector('#imgOne');
const closeOne = document.querySelector('#closeOne');
imgOne.onclick = function() {
  modalOne.style.display = 'block';
};
closeOne.onclick = function() {
  modalOne.style.display = "none";
};

const modalTwo = document.querySelector('#myModalTwo');
const imgTwo = document.querySelector('#imgTwo');
const closeTwo = document.querySelector('#closeTwo');
imgTwo.onclick = function() {
  modalTwo.style.display = 'block';
};
closeTwo.onclick = function() {
modalTwo.style.display = "none";
};

const modalThree = document.querySelector('#myModalThree');
const imgThree = document.querySelector('#imgThree');
const closeThree = document.querySelector('#closeThree');
imgThree.onclick = function() {
  modalThree.style.display = 'block';
};
closeThree.onclick = function() {
modalThree.style.display = "none";
};

const modalFour = document.querySelector('#myModalFour');
const imgFour = document.querySelector('#imgFour');
const closeFour = document.querySelector('#closeFour');
imgFour.onclick = function() {
  modalFour.style.display = 'block';
};
closeFour.onclick = function() {
modalFour.style.display = "none";
};

const modalFive = document.querySelector('#myModalFive');
const imgFive = document.querySelector('#imgFive');
const closeFive = document.querySelector('#closeFive');
imgFive.onclick = function() {
  modalFive.style.display = 'block';
};
closeFive.onclick = function() {
modalFive.style.display = "none";
};

const modalSix = document.querySelector('#myModalSix');
const imgSix = document.querySelector('#imgSix');
const closeSix = document.querySelector('#closeSix');
imgSix.onclick = function() {
  modalSix.style.display = 'block';
};
closeSix.onclick = function() {
modalSix.style.display = "none";
};

const modalSeven = document.querySelector('#myModalSeven');
const imgSeven = document.querySelector('#imgSeven');
const closeSeven = document.querySelector('#closeSeven');
imgSeven.onclick = function() {
  modalSeven.style.display = 'block';
};
closeSeven.onclick = function() {
modalSeven.style.display = "none";
};

const modalEight = document.querySelector('#myModalEight');
const imgEight = document.querySelector('#imgEight');
const closeEight = document.querySelector('#closeEight');
imgEight.onclick = function() {
  modalEight.style.display = 'block';
};
closeEight.onclick = function() {
modalEight.style.display = "none";
};

const modalNine = document.querySelector('#myModalNine');
const imgNine = document.querySelector('#imgNine');
const closeNine = document.querySelector('#closeNine');
imgNine.onclick = function() {
  modalNine.style.display = 'block';
};
closeNine.onclick = function() {
modalNine.style.display = "none";
};
