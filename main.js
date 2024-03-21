
var map = L.map('map').setView([-44.616667, 167.866667], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([-44.616667, 167.866667]).addTo(map);
marker.bindPopup("<b>Milford Sound</b>").openPopup();

