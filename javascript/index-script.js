/*
All event listener start here and all defined function are defined below this
Added a addEventListener to to the DOM when all elements in the DOM are loaded in and are visable
*/
window.addEventListener('load', function(){
  /*
  Code for API Request to https://timezoneapi.io using JavaScript wrap the code
  in as a evenlistener for when the page lods. Using this API has a 1,000 request
  limit per day so please dont spam. http error code 429 will occur is request surpass
  1,000 in a day. This solution is not ideal for the website to be viewed across the
  world at multiple time in a day but its the free solution so cant complain.
  */
  let request = new XMLHttpRequest();
  request.open('GET', 'https://timezoneapi.io/api/ip');
  request.onload = function() {
    let data = request.responseText;
    let dataobj = JSON.parse(data);
    let usersDate = dataobj.data.datetime.date;
    let userLocation = dataobj.data.city;
    document.getElementById('jsoncontainer').innerHTML = usersDate + "<br>" + userLocation;
  }
  request.send();
  /*
  Individual event listener start here after DOM elements have loaded.
  */
  document.getElementById("me").addEventListener('click' , openNav, true);
  let buttonarray = document.getElementsByClassName("closebtn");
  /*Returns class as array need to loop through array and add event listener to
  the each element in this case only the single button element*/
  for (let i = 0; i < buttonarray.length; i++) {
    buttonarray[i].addEventListener('click', closeNav, true);
  }
}
);
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}
