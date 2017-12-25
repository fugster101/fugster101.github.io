window.addEventListener('load', function() {
  document.getElementById("backbutton-black-up").addEventListener('click' , backbutton, true);
  document.getElementById("mobile-top-button").addEventListener('click', tothetopfucntion, true);
  document.getElementById("mobile-top-button").style.display = "none";
  window.addEventListener('scroll', scrollFunction, true);
  colorLanguages();


console.log(data);
});
/*
Custom Made local JSON data for my website incroperated in the about me section
try to use xml and fetch api request but becaues of chrome secutiy is not possible,
however it is possible using jquery AJAX call.
*/
function colorLanguages() {
document.getElementById('dmu').style.color = "#A30005";
document.getElementById('dmu').style.cursor = "pointer";
document.getElementById('java').style.color = "#FFA518";
document.getElementById('swift').style.color = "#FF4029";
document.getElementById('html').style.color = "#E34C26";
document.getElementById('css').style.color = "#1572B6";
document.getElementById('javascript').style.color = "#F8DC3D";
document.getElementById('sql').style.color = "#F80000";
}
/*
Could have used the data object to inject code
into HTML directly but syntactically its incorrect
docuumnet.getElementById.innerHTMl = data.Computer_Languages[0..7];
*/
 let data = {
  "firstname": "Furqan",
  "lastname": "Agwan",
  "age": 21,
  "University": "De Montfort University",
  "Course": "Computer Science",
  "Computer Languages": [
    "Java",
    "C",
    "php",
    "HTML",
    "CSS",
    "JavaScript",
    "JSON",
    "Swift"
  ]
}
function backbutton(){
  window.history.back();
}
function tothetopfucntion(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function scrollFunction(){
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("mobile-top-button").style.display = "initial";
  } else {
    document.getElementById("mobile-top-button").style.display = "none";
  }
}
$(function(){
$('body').fadeIn(650);
 $("#chevron-mobile-icon").click(function () {
   $('html, body').animate({
     scrollTop: $("#mobile-1").offset().top
   }, 1000);
 })
 $("#chevron-desktop-icon").click(function () {
   $('html, body').animate({
     scrollTop: $("#desktop-section-one").offset().top
   }, 1000);
 })
});
