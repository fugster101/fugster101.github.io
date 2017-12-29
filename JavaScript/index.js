window.addEventListener('load', function(){
  "use strict";
  time();
  apitimeanddateRequest();
  fetchRequest();

/*
Event handler to handle the enterButton 'click' request, the function simple hides  the overlay display
and prevents the default action that happens by a normal click event.
*/
  document.getElementById('enterButton').addEventListener('click', function (e) {
    e.preventDefault();
    let welcome = document.getElementById('welcomsection');
    welcome.classList.remove("welcome-section");
    document.getElementById('loader').style.display = "none";
  } , true);

/*
Event handlers for naigation section mobile to open 75% when user has clicked on the image of me
*/
  document.getElementById('furqan-icon').addEventListener('click', openNavigation, true);

  document.getElementsByClassName('closebtn')[0].addEventListener('click' , closeNavigation, true);

/*
Event handlers for tootip to be initilised on mouseover
*/
  document.getElementById('facebook').addEventListener('mouseover', function () {
    tippy(document.getElementById('facebook'), tooltipOptions)
  });

  document.getElementById('twitter').addEventListener('mouseover', function () {
    tippy(document.getElementById('twitter'), tooltipOptions)
  });

  document.getElementById('linkedin').addEventListener('mouseover', function () {
    tippy(document.getElementById('linkedin'), tooltipOptions)
  });

  document.getElementById('github').addEventListener('mouseover', function () {
    tippy(document.getElementById('github'), tooltipOptions)
  });

/*Options for tooltip in JSON format CSS,
customization of tooltip can also be done in the CSS file
*/
let tooltipOptions = {
  placement : 'top',
  animation : 'perspective',
  arrow : true,
  distance: '35'
}
});


/*
API time and date request using XMLHttpRequest format.
The JSON data that is hosting this information allows only 1,000 request so please dont spam
if request exceeds 1,000 request then a 429 eror will occur. I am using the free service.
*/
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
In order to appended to a header object we need to instatiate one first then append
some prameaters.
*/
  let reqheaders = new Headers();
  reqheaders.append('pragma','no-cache');
  reqheaders.append('cache-control','no-cache');
  /*
  Dont allow browser to use user cache, therfore we need to pass some option to the header of the request.
  Since this is fetch there is a specific way to implment this.
  */
  let headerOptions = {
    method: 'GET',
    headers: reqheaders,
  };
/*
fetch request includes the optiosn specified abouve to send in the header file
and also a proxy url attached to the orignal url. This is becasue of the CORS security
feature that fetch has implmented, The server has not enabled this feature therefore we have
to use a proxy to bypass this.
*/
  fetch(proxyurl + url, headerOptions).then(function (response) {
  response.json().then(function (responseJSON) {
    let data = responseJSON;
    let person = data[0].title;
    let content = data[0].content;
    document.getElementsByClassName('mobile-quote-section')[0].innerHTML =   content + "<br>" + person;
  });
});
}

/*
Fucntion to perodically update the time shown on the mobile version the website.
The fucntion is using the Date object to get the hours minitues and seconds.
Since JavaScript supports hoisting the checkTime fucntion can be writtern anywhere
and JavaScript can find it.
*/
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

/*
Defenition of fucntion to open nnavigation and setting it 75% width.
*/
function openNavigation() {
  document.getElementById('mobile-nav').style.width = "75%";
}

/*
Defenition of fucntion to close nnavigation and setting the witdh back to zero.
*/
function closeNavigation() {
  document.getElementById('mobile-nav').style.width = "0";
}
