/*Initlise Animate on screen JavaScript libary using the rule to disable the liabary
if the screen is greater then 800 */
AOS.init({
  disable: window.innerWidth > 800
});
  window.onscroll = function() {scrollFunction()};
  function scrollFunction(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("topButton").style.display = "initial";
  } else {
      document.getElementById("topButton").style.display = "none";
  }
  }
  function tothetopfucntion(){
      document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
  }
  function backbutton(){
  window.history.back();
  }
  var slideIndex = 1;
  showSlides(slideIndex);
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    try{
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
      captionText.innerHTML = dots[slideIndex-1].alt;
    }
   catch (e) {
    }
  }
