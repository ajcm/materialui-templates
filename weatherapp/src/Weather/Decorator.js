
const  {Data} = require('../tugalife/ipma')


const Decorator =  (forecast) => ({

  forecast,

    getDate(){
        const d = new Date(forecast.dataPrev)
        const dtf = new Intl.DateTimeFormat('pt',
         { year: 'numeric',
            month: 'short',
            day: '2-digit',
            weekday: 'long' })

        const [{value: weekday},,{ value: da },,{ value: mo }] = dtf.formatToParts(d)

        return `${weekday},  ${da} ${mo}`
    },

    getDateWeek(){
      const d = new Date(forecast.dataPrev)
      const dtf = new Intl.DateTimeFormat('pt',
       { year: 'numeric',
          month: 'short',
          day: '2-digit',
          weekday: 'long' })

      const [{value: weekday}] = dtf.formatToParts(d)

      return `${weekday}`
  },

    getWeatherPT(){
      let type = Data.getWeatherTypes()[forecast.idTipoTempo]
      if (type)
          return type['descIdWeatherTypePT']

    },

    getWindPT(){
      let type = Data.getWindSpeed()[forecast.idFfxVento]
      if (type)
          return type['descClassWindSpeedDailyPT']

    },

    getTempMin(){
      return Math.round(forecast.tMin)
    },

    getTempMax(){
      return Math.round(forecast.tMax)
    },



})





export default Decorator

window.xpto =  Decorator('')
