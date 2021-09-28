console.log("testing");
console.log("you are awesome");
const hamburgerId = document.getElementById('hamburgerId');
const hamburgerClass = document.querySelector('.hamburger');

// hambuger menu
hamburgerId.addEventListener('click',arrowAnimation);

function arrowAnimation() {
  hamburgerId.classList.toggle('is-active');
  document.querySelector('.menu').classList.toggle('menu-open');
}

// modals
var modal = document.getElementById("myModal");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgOne = document.getElementById("myImgOne");
var imgTwo = document.getElementById("myImgTwo");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption01");


imgOne.onclick = function(){
  modal.style.display = "block";
  captionText = this.alt;
  modalImg.src = this.src;
}
var captionTextTwo = document.getElementById("caption02");
console.log(captionTextTwo);

imgTwo.onclick = function(){
  modal.style.display = "block";
  captionTextTwo = this.alt;
  modalImg.src = this.src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
