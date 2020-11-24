window.initMap = function () {
  new google.maps.Map(document.getElementById('g-map'), {
    center: {lat: 44.934084, lng: -93.252358},
    zoom: 15,
    disableDefaultUI: false
  });
}