API_KEY = "AAPK47fdd2b8eeec4ab09ce58c3e3371a8beMK6ann3fuGSxGQwH2NW5fQLkgJTPm_JiGOq1W9L_AC6VJmdktk2e9UnAEacci7M8"
function getLocation(){
  if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    document.getElementById('location').textContent = "Latitude: " + position.coords.latitude
  }, function(error) {
    document.getElementById('location').textContent = ":("
  });
} else {
  document.getElementById('location').textContent = "unsupported"
}

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

}
//
// function getLocation(){
//   navigator.geolocation.getCurrentPosition(function)
// }
//
//
// var x = document.getElementById("demo");
// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//     x.innerHTML = "Geolocation is not supported by this browser.";
//   }
// }
//
// function showPosition(position) {
//   x.innerHTML = "Latitude: " + position.coords.latitude +
//   "<br>Longitude: " + position.coords.longitude;
// }
