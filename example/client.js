(function(){

	var position = {
		lat: 35.1,
		lon: -106.6
	};
	var markerLocation = new L.LatLng(position.lat,position.lon); 

	var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
	osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	osm = L.tileLayer(osmUrl, {maxZoom: 18, attribution: osmAttrib}),
	map = new L.Map('map', {layers: [osm], center: markerLocation, zoom: 14 });

	var marker = new L.SmoothMarkerTransition(markerLocation);
	marker.addTo(map);

	moveMarker();

	function moveMarker(){
		position = calcNewLocation();
		markerLocation = new L.LatLng(position.lat,position.lon); 
		marker.transition(markerLocation);
		setTimeout(moveMarker, 1000);
	}

	function calcNewLocation(){
		lat = Math.random()/100 + 35.1;
		lon = Math.random()/100 - 106.6;
		return {lat: lat, lon: lon};
	}

}());