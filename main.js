let lat = -44.616667;
let long = 167.866667;
let zoom = 13;

var map = L.map('map').setView([lat, long], zoom);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([lat, long]).addTo(map);
marker.bindPopup(`
        <h2>Milford Sound</h2>
        <ul>
            <li>Breite: ${lat.toFixed(5)}</li>
            <li>Länge: ${long.toFixed(5)}</li>
        `).openPopup();

