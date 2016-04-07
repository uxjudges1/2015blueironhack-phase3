function initialize() {
    var mapCanvas,
        mapOptions,
        map,
        marker,
        infowindow,
        xmlhttp,
        url;
    mapCanvas = document.getElementById('map');
    mapOptions = {
      center: new google.maps.LatLng(40.4240, -86.9290),
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    map = new google.maps.Map(mapCanvas, mapOptions);
    marker = new google.maps.Marker({
        position: {lat: 40.4240, lng: -86.9290},
        map: map,
        title: 'Purdue University'
    });
    infowindow = new google.maps.InfoWindow({
                            content: ""
                        });
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent("Purdue University");
        infowindow.open(map, marker);
                        });
    xmlhttp = new XMLHttpRequest();
    
}
google.maps.event.addDomListener(window, 'load', initialize);
