window.addEventListener('load', function() {
  "use strict";
  document.getElementById("backbutton-black-up").addEventListener('click' , backbutton, true);
  document.getElementById("mobile-top-button").addEventListener('click', tothetopfucntion, true);
  document.getElementById("mobile-top-button").style.display = "none";

  document.getElementById('chevron-mobile-icon').addEventListener('click', function () {
    let scrollLocation = document.getElementById('mobile-1');
    scrollTo(document.documentElement, scrollLocation.offsetTop, 800);
  });
  document.getElementById('chevron-desktop-icon').addEventListener('click', function () {
    let scrollLocation = document.getElementById('desktop-section-one');
    scrollTo(document.documentElement, scrollLocation.offsetTop, 800);
  });


  window.addEventListener('scroll', scrollFunction, true);
});
/*
Could have used the data object to inject code
into HTML directly but syntactically its incorrect
docuumnet.getElementById.innerHTMl = data.ComputerLanguages[0..7];
*/
function backbutton(){
  window.history.back();
}
/* Custom to the top function no point in using the scroll to function */
function tothetopfucntion(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
/* Custom function to diplay scroll to the top button after the user has "scrolled" 20 down*/
function scrollFunction(){
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("mobile-top-button").style.display = "initial";
  } else {
    document.getElementById("mobile-top-button").style.display = "none";
  }
}
/*Custom scroll to function similar to jquerys version but a pure vanila solution*/
function scrollTo(element, to, duration) {
  if (duration <= 0) return;
  let difference = to - element.scrollTop;
  let perTick = difference / duration * 10;
  /*Delay to the for the entire function to run*/
  setTimeout(function() {
    element.scrollTop = element.scrollTop + perTick;
    if (element.scrollTop === to) return;
    scrollTo(element, to, duration - 10);
  }, 10);
}
