const ipma = require('./ipma.js');



async function init(){

    return await ipma.getClasses();

}



const getForecast = async () => {

    const keys = await init();


  //  console.log(keys.places)

    const sortedPlaces = keys.places.sort((a,b) => (100 *(a.idRegiao - b.idRegiao)) + ( b.latitude - a.latitude));

    console.log(sortedPlaces)






    const forecast = ipma.getForecast((error,forecast) => {

        if (error){
            console.log('error',error)
            return error
        }

        const forecastMap = new Map(forecast.map(i => [i.globalIdLocal, i]));

        sortedPlaces.forEach( ({globalIdLocal,local}) => {
            if (forecastMap.has(globalIdLocal)){
                console.log(local + ' '         + displayForecast(forecastMap.get(globalIdLocal),keys));

            }})
    }

   )
}




const displayForecast  = (forecast,keys) => {
    // console.log(keys);
    return  (forecast.precipitaProb  + ' ' +forecast.idWeatherType)
}


//    const forecast = ipma.getForecast(
//const forecastMap = new Map(forecast.map(i => [i.globalIdLocal, i]));


  //  )






getForecast();
