/* Version 0.2 */
const  {Locations} = require('../tugalife/ipma')

const locationsService = Locations.getService()


const WeatherData =  () => ({

  getLocations (){
    return locationsService.getLocations()
  },

  getLocation(id){
    return locationsService.getLocation(id)
  },


  getDistricts () {
    return locationsService.getDistricts()
  },

  getDistrictsZone1 () {
    return locationsService.getDistrictsZone1()
  },

  getLocationsPerDistrict(id){
    return locationsService.getLocationsPerDistrict(id)
  },


})


console.log()


export const weatherDataService = WeatherData()
