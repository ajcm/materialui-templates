const request = require('request')
const chalk = require('chalk')
const ipma = require('./ipma.js')

const log = console.log;


log(chalk.bold("Weather today"));




// ipma.getKeys(keys => {
//     ipma.getForecastToday( (error, forecast, places) => {
//         console.log(chalk.gray("Forecast Today"))
//         displayForecastPerLocal(forecast,places,keys);    
//     })
// });


function displayForecastPerLocal(forecast,places,keys){
    const forecastMap = new Map(forecast.map(i => [i.globalIdLocal, i]));
    const pp = places.sort((a,b) => (100 *(a.idRegiao - b.idRegiao)) + ( b.latitude - a.latitude));

    log(keys);

    pp.forEach( ({globalIdLocal,local}) => {
        if (forecastMap.has(globalIdLocal)){
            log(globalIdLocal  +
                ' ' + 
               chalk.blue.blue(local) +
                 ' ' 
                 + displayForecast(forecastMap.get(globalIdLocal),keys));

        }})

}





const displayForecast  = (forecast,keys) => {
   // console.log(keys);
    return  (forecast.precipitaProb ) + ' ' +getDescription('weather',forecast.idWeatherType,keys)
    
}



function getDescription(type,id,keys) {

        return  keys[type].get(id).descIdWeatherTypePT
}



//getKeys();

log(chalk.bold("Locations"));




ipma.getLocations((error,places) => {
    places.forEach(({globalIdLocal,local}) =>{
        log(globalIdLocal+' '+local)
     })
    console.log(places)
})


// const x = async () =>  {

    
// let vv = await  ipma.getLocationForecast('1011522');

// console.log(vv)

// }





const listLocations = async () => {


  try {
      places = await ipma.getLocations();

      places.forEach(({globalIdLocal,local}) =>{
          log(globalIdLocal+' '+local)
      })
    }catch(error){
      log("got error",error)
    }
  }
 

  const getLocationForecast = async (id) => {


    try {
        forecast = await ipma.getLocationForecast(id);
  
      // console.log(forecast);

      forecast.forEach(({dataPrev,idTipoTempo,idPeriodo}) =>{
        log(dataPrev+' '+idPeriodo + ' '+ idTipoTempo)
    })

       
      }catch(error){
        log("got error",error)
      }
    }
   
  



listLocations();

//getLocationForecast('1141100')

const getClasses = async () => {

 classes  = await ipma.getClasses()

  console.log(classes.weather)

}


console.log(getClasses());









