/*Initlise Animate on screen JavaScript libary using the rule to duisable the liabary
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
    document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0;
}
function backbutton(){
window.history.back();
}
