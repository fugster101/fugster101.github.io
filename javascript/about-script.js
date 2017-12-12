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
