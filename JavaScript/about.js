window.addEventListener('load', function() {
  "use strict";
  document.getElementById("backbutton-black-up").addEventListener('click' , backbutton, true);


  document.getElementById("mobile-top-button").addEventListener('click', tothetopfucntion, true);

  let urlRedirects = ["http://www.dmu.ac.uk/","https://twitter.com/FurqanKadri","https://www.linkedin.com/in/furqan-agwan/", "https://www.instagram.com/fugster/?hl=en"];


  document.getElementById('dmu').addEventListener('dblclick', function () {
    window.location.href = urlRedirects[0];
  } );


  document.getElementById('twitter').addEventListener('dblclick', function () {
    window.location.href = urlRedirects[1];
  } );


  document.getElementById('linkin').addEventListener('dblclick', function () {
    window.location.href = urlRedirects[2];
  } );


  document.getElementById('insta').addEventListener('dblclick', function () {
    window.location.href = urlRedirects[3];
  } );


  document.getElementById('chevron-mobile-icon').addEventListener('click', function () {
    let scrollLocation = document.getElementById('mobile-1');
    scrollTo(document.documentElement, scrollLocation.offsetTop, 800);
  });


  document.getElementById('chevron-desktop-icon').addEventListener('click', function () {
    let scrollLocation = document.getElementById('desktop-section-one');
    scrollTo(document.documentElement, scrollLocation.offsetTop, 800);
  });

  document.getElementById("mobile-top-button").style.display = "none";

  window.addEventListener('scroll', scrollFunction, true);

  document.getElementsByClassName('title')[0].innerHTML = dataFill() + '&nbsp;' + "Student";
  colorLanguages();
});
function colorLanguages() {
  document.getElementById('dmu').style.color = "#A30005";
  document.getElementById('dmu').style.cursor = "pointer";
  document.getElementById('java').style.color = "#FFA518";
  document.getElementById('swift').style.color = "#FF4029";
  document.getElementById('html').style.color = "#E34C26";
  document.getElementById('css').style.color = "#1572B6";
  document.getElementById('javascript').style.color = "#F8DC3D";
  document.getElementById('sql').style.color = "#F80000";
  document.getElementById('twitter').style.color = "#00aced";
  document.getElementById('twitter').style.cursor = "pointer";
  document.getElementById('linkin').style.color = "#0077B5";
  document.getElementById('linkin').style.cursor = "pointer";
  document.getElementById('insta').style.color = "#8a3ab9";
  document.getElementById('insta').style.cursor = "pointer";
}
/*
Custom Made local JSON data for my website incroperated in the about me section
try to use xml and fetch api request but becaues of chrome secutiy is not possible,
however it is possible using jquery AJAX call. Could have used the data object to inject code
into HTML directly but syntactically its incorrect
docuumnet.getElementById.innerHTMl = data.ComputerLanguages[0..7];
I have used onle one property to inject some code but you get the idea of how it can be manipulated.
*/
function dataFill() {
  let data = {
    "firstname": "Furqan",
    "lastname": "Agwan",
    "age": 21,
    "University": "De Montfort University",
    "Course": "Computer Science",
    "ComputerLanguages": [
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
  let course = String(data.Course);
  return course;
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

/*Custom scroll to function similar to jquerys version but a pure vanila solution*/
function scrollTo(element, to, duration) {
  if (duration <= 0) return;
  let difference = to - element.scrollTop;
  let perTick = difference / duration * 10;
  setTimeout(function() {
    element.scrollTop = element.scrollTop + perTick;
    if (element.scrollTop === to) return;
    scrollTo(element, to, duration - 10);
  }, 10);
}

/*
Using google maps via Javascript need to umport script tag provided by google in order for init fucntion to be recognised but this function will not be used
*/
function initMap() {
  let LatLng = {lat:-25.365, lng: 131.044};
  let map = new google.maps.Map(document.getElementById('googleMaps'), {
    zoom:4,
    center: LatLng
  });
  let marker = new google.maps.Marker({
    position: LatLng,
    map:map
  });
}
