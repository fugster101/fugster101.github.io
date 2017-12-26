window.addEventListener('load', function(){
  APItimeAndDateRequest();
  time();
  document.getElementById('furqan-icon').addEventListener('click', openNavigation, true);
  document.getElementsByClassName('closebtn')[0].addEventListener('click' , closeNavigation, true);
});
function APItimeAndDateRequest(){
  let request = new XMLHttpRequest();
  request.open('GET','https://timezoneapi.io/api/ip');
  request.onload = function(){
    let JSONdata = request.responseText;
    let dataObj = JSON.parse(JSONdata);
    let userDay = dataObj.data.datetime.day_full;
    let userMonth = dataObj.data.datetime.month_full;
    let userMonthDay = dataObj.data.datetime.month_days;
    let userYear = dataObj.data.datetime.year;
    document.getElementById('day').innerHTML = userDay;
    document.getElementById('date').innerHTML = userMonth+'&nbsp'+userMonthDay+","+'&nbsp'+ userYear;
  }
  request.send();
}
function time(){
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  let minCheck = checkTime(minutes);
  let secCheck = checkTime(seconds);
  document.getElementById('time').innerHTML = hours + ":" + minCheck + ":" + secCheck;
  let timeOut = setTimeout(time, 500);
}
function checkTime(value){
  if(value < 10){
    value = "0" + value;
  }
  return value;
}
function openNavigation() {
  document.getElementById('mobile-nav').style.width = "75%";
}
function closeNavigation() {
  document.getElementById('mobile-nav').style.width = "0";
}
$(function(){
  $('body').fadeIn(250);
  let welcomSection = $('.welcome-section');
  let enterButton = welcomSection.find('.enter-button');
  let mobilesection = $('.mobile-wrapper');
  enterButton.on('click', function(e){
    e.preventDefault();
    welcomSection.removeClass('content-hidden').fadeOut(200);
  });
});
