window.addEventListener('load', function(){
  "use strict";
  time();
  apitimeanddateRequest();
  fetchRequest();


  document.getElementById('enterButton').addEventListener('click', function (e) {
    e.preventDefault();
    let welcome = document.getElementById('welcomsection');
    welcome.classList.remove("welcome-section");
    document.getElementById('loader').style.display = "none";
  } , true);

  document.getElementById('furqan-icon').addEventListener('click', openNavigation, true);

  document.getElementsByClassName('closebtn')[0].addEventListener('click' , closeNavigation, true);
});

function apitimeanddateRequest(){
  let request = new XMLHttpRequest();
  request.open('GET','https://timezoneapi.io/api/ip');
  request.onload = function(){
    let JSONdata = request.responseText;
    let dataObj = JSON.parse(JSONdata);
    let userDay = dataObj.data.datetime.day_full;
    let userMonth = dataObj.data.datetime.month_full;
    let userMonthDay = dataObj.data.datetime.month_days;
    let userYear = dataObj.data.datetime.year;
    let amORpm = dataObj.data.datetime.hour_am_pm;
    document.getElementById('day').innerHTML = userDay;
    document.getElementById('date').innerHTML = userMonth+'&nbsp'+userMonthDay+","+'&nbsp'+ userYear;
  }
  request.send();
}

/*Using Javascripts new fetch request WEB API*/
function fetchRequest(){
  /*Have to use Proxy to AVOID Cors security features that needs to be enabled on server end
  random fetch request on quotes famous people have said.
  */
  let proxyurl = "https://cors-anywhere.herokuapp.com/";
  let url = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";

/*
Dont allow browser to use user cache, therfore we need to pass some option to the header of the request.
Since this is fetch there is a specific way to implment this.
*/
  let reqheaders = new Headers();
  reqheaders.append('pragma','no-cache');
  reqheaders.append('cache-control','no-cache');

  let headerOptions = {
    method: 'GET',
    headers: reqheaders,
  };

  fetch(proxyurl + url, headerOptions).then(function (response) {
  response.json().then(function (responseJSON) {
    let data = responseJSON;
    let person = data[0].title;
    let content = data[0].content;
    document.getElementsByClassName('mobile-quote-section')[0].innerHTML =   content + "<br>" + person;
  });
});
}

/*Fucntion to perodically update the time shown on the mobile version the website*/
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
