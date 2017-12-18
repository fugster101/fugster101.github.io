/*
All event listener start here and all defined function are defined below this
Added a addEventListener to to the DOM when all elements in the DOM are loaded in and are visble
*/
window.addEventListener('load', function(){
  // Testing method will need to have some history because a back button can not go back to a page the user has never visited in that session
  document.getElementById("backbutton").addEventListener('click' , backbutton, true);
  document.getElementById("topButton").addEventListener('click' , tothetopfucntion, true);
  document.getElementById("topButton").style.display = "none";
  window.addEventListener('scroll', scrollFunction, true);
});
/* All defined fucntions that will be pass into event listener all functions are defined in order*/
function backbutton(){
  window.history.back();
}
function tothetopfucntion(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function scrollFunction(){
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("topButton").style.display = "initial";
  } else {
    document.getElementById("topButton").style.display = "none";
  }
}
