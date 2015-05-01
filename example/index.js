var bikeIcon = L.icon({
  iconUrl: 'marker-bike-green-shadowed.png',
  iconSize: [25, 39],
  iconAnchor: [12, 39],
  shadowUrl: null
});

var config = {
  tileUrl : 'http://otile1.mqcdn.com/tiles/1.0.0/sat/{z}/{y}/{x}.jpg',
  initLatLng : new L.LatLng(35.1,-106.6), // NYC
  initZoom : 13,
  minZoom : 13,
  maxZoom : 17
};

var map = L.map('map', {minZoom: config.minZoom, maxZoom: config.maxZoom})
map.addLayer(new L.TileLayer(config.tileUrl, {attribution: config.tileAttrib}));
map.setView(config.initLatLng, config.initZoom);

