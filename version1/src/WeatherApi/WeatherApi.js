
export const DISTRICTS_URL = 'https://api.ipma.pt/open-data/distrits-islands.json';
export const LOCATIONS_URL = 'http://api.ipma.pt/public-data/forecast/locations.json'

export const WEATHER_CLASSES = 'https://api.ipma.pt/open-data/weather-type-classe.json';
export const WIND_CLASSES = 'https://api.ipma.pt/open-data/wind-speed-daily-classe.json';
export const PRECIP_CLASSES= 'https://api.ipma.pt/open-data/precipitation-classe.json';

export const FORECAST_DISTRICTS_TODAY =  'https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/hp-daily-forecast-day0.json';
export const LOCATION_REQUEST_URL = 'http://api.ipma.pt/public-data/forecast/aggregate/'




//Map
const fecthTodayDistrictsForecast = (callback) => {

  fetch(FORECAST_DISTRICTS_TODAY)
  .then(response =>  response.json())
  .then(json => callback(undefined,json))
  .catch(e =>callback(e,undefined))


}


const WeatherApi =  () => ({

   districtsForecast :  new Map(),

  getDistrictForecast(districId){
    return null;
  },

   init(){
      fecthTodayDistrictsForecast(function (error, response){

        if(error){
          return console.log("Error getting districts " + error)
        }

          if (response && response.data) {
             console.log( response.data)
             console.log( this.districtsForecast)
            // this.districtsForecast =   new Map( response.data.map(i => [i.globalIdLocal, i]))
          }else{
            return console.log("Cannot parse  districts ")

          }


       } )


}// init

})

export default WeatherApi
