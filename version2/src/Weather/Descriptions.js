
import weatherTypes from '../data/weatherTypes.json'
import windSpeed from '../data/windSpeed.json'

  


  

  export const fieldsFormatter =  {

  
    date(forecast){

        if (!forecast)
            return

        const d = new Date(forecast.dataPrev)
        const dtf = new Intl.DateTimeFormat('pt',
         { year: 'numeric',
            month: 'long',
            day: '2-digit',
            weekday: 'long' }) 
          
        const [{value: weekday},,{ value: da },,{ value: mo }] = dtf.formatToParts(d) 
          
        return `${weekday},  ${da} ${mo}`
      },

    wind(forecast){
        if (forecast && windSpeed[forecast.idFfxVento] )
            return  windSpeed[forecast.idFfxVento].descClassWindSpeedDailyPT

        
    },

    windDir(forecast){
        if (forecast && forecast.ddVento )
            return  forecast.ddVento

        
    },

    weather(forecast){
        if (forecast && weatherTypes[forecast.idTipoTempo] )
            return weatherTypes[forecast.idTipoTempo].descIdWeatherTypePT        
    },

    short(ff){
        if (!ff)
            return

        return this.weather(ff) +  ' Temperatura: ' +Math.round(ff.tMin) + '/' +  Math.round(ff.tMax) + ' '   + 'Vento: ' +this.wind(ff) + '(' + this.windDir(ff)+ ')'
    }



     
      

  }