let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

// let themeToggler = document.querySelector('.theme-toggler');
// let toggleBtn = document.querySelector('.toggle-btn');

// toggleBtn.onclick = () =>{
//   themeToggler.classList.toggle('active');
// }

// window.onscroll = () =>{
//   menu.classList.remove('fa-times');
//   navbar.classList.remove('active');
//   themeToggler.classList.remove('active');
// }

// document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn =>{
  
//   btn.onclick = () =>{
//     let color = btn.style.background;
//     document.querySelector(':root').style.setProperty('--main-color', color);
//   }

// });



var slideIndex = 0;
var slideIndexCurrent = 0;
showSlides();
//showSlidesCurrent(slideIndexCurrent);

function currentSlide(n) {
  showSlidesCurrent(slideIndexCurrent = n);

}


/*** CURRENT SLIDE on click ***/
function currentSlide(n) {
  showSlidesCurrent(slideIndexCurrent = n);

}

function showSlidesCurrent(n) {
  //var slideIndex = 1;
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndexCurrent = 1}   

  if (n < 0) {slideIndexCurrent = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexCurrent-1].style.display = "block";  
  dots[slideIndexCurrent-1].className += " active";
  slideIndexCurrent++;
}


/*** SHOW SLIDE with timer ***/
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";

  setTimeout(showSlides, 3000); // Change image every x seconds
}


//  showSlidesCurrent(slideIndexCurrent);

window.addEventListener("load", function(){
  setTimeout(
      function open(event){
          document.querySelector(".popup").style.display = "block";
      },
      1000
  )
});
document.querySelector("#close").addEventListener("click", function(){
  document.querySelector(".popup").style.display = "none";
});


