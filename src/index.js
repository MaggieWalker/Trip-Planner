const mapboxgl = require("mapbox-gl");
const markerMaker = require('./marker')

mapboxgl.accessToken = 'pk.eyJ1IjoibWFnczIxd2Fsa2VyIiwiYSI6ImNqbWk2Y3J3YTAxcDczcnBrdDAydXU1MGEifQ.5hRC9-1LxFbWtqG_rx5n-Q';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const markerDomEl = document.createElement("div"); // Create a new, detached DIV
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(markerDomEl).setLngLat([-74.009151, 40.705086]).addTo(map);
new mapboxgl.Marker(document.getElementById('GoddessPalace')).setLngLat([-73.944926, 40.692]).addTo(map)


// const hotelMarker = document.createElement("div");
// hotelMarker.style.width = "32px";
// hotelMarker.style.height = "39px";
// hotelMarker.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";

// new mapboxgl.Marker(hotelMarker).setLngLat([-73.944926,40.687790]).addTo(map)

markerMaker('Hotel', [-73.944926, 40.687790]).addTo(map);
markerMaker('Restaurant', [-73.961165, 40.714939]).addTo(map);

console.log(markerMaker);