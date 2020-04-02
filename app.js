const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const location = process.argv[2];

if (!location) {
    return console.log('Please add an address!');
}

geocode(location, (error, { latitude, longitude, location }) => {
    if (error) {
        return console.log(error);
    }

    forecast(latitude, longitude, (error, weatherData) => {
        if (error) {
            return console.log (error);
        }

        console.log(location);
        console.log(weatherData);
    });
});