/* Version 0.2 */
import districts from '../data/districts.json'
import districtsPerZone from '../data/districtsPerZone.json'
import locations from '../data/locations.json'
import locationsMap from '../data/locationsMap.json'
import locationsPerDistrict from '../data/locationsPerDistrict.json'
import locationsIdPerDistrict from '../data/locationsIdPerDistrict.json'

import httpRequest from './HttpRequest'


//export const FORECAST_DISTRICTS_TODAY =  'https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/hp-daily-forecast-day0.json';
export const SERVER_WEATHER_API  =  'https://golias.tugalife.net'
export const FORECAST_DISTRICTS_TODAY =  '/api/weather/districtsForecast'
export const LOCATION_REQUEST_URL = '/api/weather/forecast/'


//Map
const fecthTodayDistrictsForecast = (callback) => {

  fetch(FORECAST_DISTRICTS_TODAY)
  .then(response =>  response.json())
  .then(json => callback(undefined,json))
  .catch(e =>callback(e,undefined))

}

async function requestForecast(locationId){

  return httpRequest
    .getResourceWithPromise(SERVER_WEATHER_API + '/api/weather/forecast24/' + locationId) 
 }



const WeatherApi =  () => ({

  getLocations (){
    return locations
  },

  getLocation(id){
    return locationsMap[id]
  },

  //all districts
  getDistricts () {
    return districts;
  },

  getDistrictsZone1 () {
    return districtsPerZone['zone1']
  },
  
 
  getLocationsPerDistrict(id){
    return locationsPerDistrict[id]
  },

  // currentForecast for district locations
  async getDistrictForecast(districId){
    let districtLocations = null
  
     if (districtLocations =  locationsIdPerDistrict[districId]){

        let ff = {}
        districtLocations.forEach( async (i) =>   {

          ff[i] = await  this.getForecast(i)
        })

        return ff
     }

     
  },

  async getForecast (locationId){

    if (locationId){
      let forecast = await requestForecast (locationId)
    //  console.log("forecast " + locationId + " " + forecast);    
      return forecast
    }    
  },
  
})


export const weatherService = WeatherApi()


