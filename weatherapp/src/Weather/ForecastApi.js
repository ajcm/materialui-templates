/* Version 0.2 */
const httpRequest = require('../tugalife/ipma/HttpRequest')

//
//
// //export const FORECAST_DISTRICTS_TODAY =  'https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/hp-daily-forecast-day0.json';
// export const SERVER_WEATHER_API  =  'https://golias.tugalife.net'
// export const FORECAST_DISTRICTS_TODAY =  '/api/weather/districtsForecast'
// export const LOCATION_REQUEST_URL = '/api/weather/forecast/'
//


const ForecastApi =  () => ({

  async getForecastNextDays(locationId){

      let response =  await httpRequest.getForecast(locationId)

      if (response
          && response.data
          && Array.isArray(response.data)){


          //  console.log(response.data)

            let dailyForecasts = response.data
            .filter(ff => ff.idPeriodo == 24)
            .sort((a,b) => b.dataPrev - a.dataPrev)

            return dailyForecasts
      }

     return
  }

})


export const forecastService = ForecastApi()
