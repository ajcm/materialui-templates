const httprequest = require('./httprequest')


const districts = 'https://api.ipma.pt/open-data/distrits-islands.json';
const locations = 'http://api.ipma.pt/public-data/forecast/locations.json'

const weatherClasses = 'https://api.ipma.pt/open-data/weather-type-classe.json';
const windClasses = 'https://api.ipma.pt/open-data/wind-speed-daily-classe.json';
const precipitationClasses= 'https://api.ipma.pt/open-data/precipitation-classe.json';

const forecastToday =  'https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/hp-daily-forecast-day0.json';
const locationsForecast = 'http://api.ipma.pt/public-data/forecast/aggregate/1141800.json'








//forecast 
const getForecast = callback => {

    httprequest.getResource(forecastToday, (error,response) => {
        const forecast = response.body.data;

        callback(error,forecast);
   
})}

const getClasses = async () => {

    const weather = await httprequest.getResourceWithPromise (weatherClasses)
    const wind = await httprequest.getResourceWithPromise (windClasses)
    const precipitation = await httprequest.getResourceWithPromise (precipitationClasses)
    const placesData = await httprequest.getResourceWithPromise (districts)

    const places = placesData.data
    
    return {weather,wind,precipitation,places};    
}


const getLocationForecast = (id) => {

   
}

const getLocations = () => {

    return httprequest.getResourceWithPromise(locations);
}


module.exports = {
  //  getPlaces: getPlaces,
    getClasses,
    getLocations,
    getForecast,
    getLocationForecast
}