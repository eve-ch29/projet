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


async function getData() {
	let url = "https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&q=date_start+%3E%3D+%23now()+AND+date_start+%3C+%23now(months%3D1)&rows=50&facet=category&facet=tags&facet=address_zipcode&facet=address_city&facet=pmr&facet=blind&facet=deaf&facet=access_type&facet=price_type"
    
    let response = await fetch(url)
    
  let data = await response.json()


  data.records.forEach(function(event) {

    console.log(event);
		// le titre de l'événement
    let title = event.fields.title

		// si jamais le champs latitude/longitude manque
		// on ignore cet événement
		if (!event.fields.lat_lon) {
			return;
    }

		// la latitude
		let latitude = event.fields.lat_lon[0]

		// la longitude
	    let longitude = event.fields.lat_lon[1]
		// on pourrait récupérer d'autres infos..

		// pour tester, on les affiche dans la console
        console.log(title + " " + latitude + " " + longitude)
        
        var marker = L.marker([latitude, longitude]);
        marker.bindPopup(event.fields.title).openPopup();

       
        var popup = L.popup()
        .setLatLng([latitude,longitude])
        .setContent("I am a standalone popup.")
        .openOn(mymap);


        marker.addTo(mymap);

        
    })
}
//Réponse à la question de l'étape 4 : Je pense que cela filtre les événements datant d'il y a un mois à aujourd'hui

getData()
//Tour Eiffel
//var marker = L.marker([48.858370, 2.294481]).addTo(mymap);
//Cathédrale de Paris
var marker = L.marker([ 48.852968,  2.349902]).addTo(mymap);
//Palais Royale
var marker = L.marker([48.864824,  2.334595]).addTo(mymap);
//Observatoire de Paris
var marker = L.marker([ 48.8331,   2.3264]).addTo(mymap);
//Jardin du Luxembourg
var marker = L.marker([ 48.846870,  2.337170]).addTo(mymap);
var circle = L.circle([48.8534, 2.3488], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);


