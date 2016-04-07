
$(document).ready(function(){/* google maps -----------------------------------------------------*/

function initialize() {

  /* position Amsterdam */
  var latlng = new google.maps.LatLng(40.4258, -86.9080);

  var mapOptions = {
    center: latlng,
    zoom: 13
  };
  
  // var marker = new google.maps.Marker({
  //   position: latlng,
  //   url: '/',
  //   animation: google.maps.Animation.DROP
  // });
  
  var map = new google.maps.Map(document.getElementById("map-canvas"), 
              mapOptions);

};
/* end google maps -----------------------------------------------------*/

initialize()
});
