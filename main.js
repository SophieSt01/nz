
var map = L.map('map').setView([45.9369, 7.86675], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([45.9369, 7.86675]).addTo(map);
marker.bindPopup("<b>Dufourspitze</b><br>4634 m").openPopup();

