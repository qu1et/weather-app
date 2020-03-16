const request = require('request');

const url = 'https://api.darksky.net/forecast/2369ef21563e668258d8b985661fdd15/55.751244,37.618423?units=si';

request({ url: url, json: true }, (error, response) => {
    console.log(response.body.daily.data[0].summary + ' It is currently '
                + response.body.currently.temperature 
                + ' degrees out. There is a '
                + Math.floor(response.body.currently.precipProbability * 100) 
                + '% chance of precipitation.');
});

// Geocoding
const geo_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Moscow.json?access_token=pk.eyJ1IjoiZ2wxdGNoIiwiYSI6ImNrN3M1ZnFydDBjcjEzZXBndndsYm03a2gifQ.vVMDei2pNSgg8HLa-d-0gg';
request({ url: geo_url, json: true }, (error, response) => {
    console.log('Latitude: ' + response.body.features[0].center[1]
                + '\nLongitude: ' + response.body.features[0].center[0]);
});