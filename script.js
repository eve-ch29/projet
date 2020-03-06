// votre code JS
var mymap = L.map('mapid').setView([48.853, 2.35], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoianVsaWVua29tcCIsImEiOiJjanR1NGFuYjkxMmNvNDBucGI1aXZ4Y285In0.hiSplFD5CODUd9yxRO_qkg'
    
}).addTo(mymap);

var marker = L.marker([48.858370, 2.294481]).addTo(mymap);
var marker = L.marker([48.864824,  2.334595]).addTo(mymap);
var marker = L.marker([48.8925,  2.3444]).addTo(mymap);
var marker = L.marker([47.0378700,  2.3444]).addTo(mymap);
var circle = L.circle([48.853, -122.9007000], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);


marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

var popup = L.popup()
    .setLatLng([48.858370, 2.294481])
    .setContent("I am a standalone popup.")
    .openOn(mymap);