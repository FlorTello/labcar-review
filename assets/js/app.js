function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
  var map, infoWindow;
  var textPartida = document.getElementById('text-partida');
  var textLlegada = document.getElementById('text-llegada');
  var autocomplete_partida = new google.maps.places.Autocomplete(textPartida);
  var autocomplete_llegada = new google.maps.places.Autocomplete(textLlegada);
  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;
  var tarifa = document.getElementById('tarifa');


  var buscar = function(){
    if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            var infoWindow = new google.maps.Marker({
              position: pos,
              map:map
            });
            map.setCenter(pos);
            map.setZoom(18);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          handleLocationError(false, infoWindow, map.getCenter());
        }
  };
  var calcRoute = function(e) {
    var request = {
      origin: textPartida.value,
      destination: textLlegada.value,
      travelMode: 'DRIVING'
    };
    directionsService.route(request, function(response, status) {
      console.log(response);
      if(status === 'OK'){
        var distancia = parseInt(((response.routes[0].legs[0].distance.text.replace("km","")).replace(",","")));
        console.log(response.routes[0].legs[0].distance);
        tarifa.classList.remove('none');
        if(distancia * 1.75 < 4){
          tarifa.innerHTML = "S/. 4";
        }
        tarifa.innerHTML = "S/. " + parseInt(distancia * 1.75);
        directionsDisplay.setDirections(response);
      }else{
        window.alert('Ruta no found');
      }
    });
    directionsDisplay.setMap(map);
  }

window.addEventListener('load',buscar);
document.getElementById('calcular').addEventListener('click',calcRoute);

}
