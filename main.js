let lat = -44.616667;
let long = 167.866667;
let zoom = 13;

let map = L.map('map', {
    center: [lat, long],
    zoom: zoom
});
L.control.scale({imperial:false}).addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
let marker = L.marker([lat, long]).addTo(map);
marker.bindPopup(`
        <h2>Milford Sound</h2>
        <ul>
            <li>Breite: ${lat.toFixed(5)}</li>
            <li>Länge: ${long.toFixed(5)}</li>
        `).openPopup();

