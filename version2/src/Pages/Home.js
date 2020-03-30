import React, { useState, useEffect,Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import {
  TextField ,
  AppBar,
  Button,
  Toolbar,
  Typography,
  Select,
  Paper,
  Grid
} from '@material-ui/core'

import Link from '@material-ui/core/Link';

import { BrowserRouter,Route,NavLink } from 'react-router-dom';

import {weatherService} from '../Weather/WeatherApi'
import {fieldsFormatter} from '../Weather/Descriptions'



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  //  paddingBottom: '10px',
    textAlign: 'left'

  },
  paper: {
  //  padding: theme.spacing(2),
    //textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: '20px 10px 10px 10px '
    
  },

  table: {
  },

  text: {
    color: theme.palette.text.secondary

  },

}));




const Forecast = (props) => {
  const classes = useStyles()
  const {forecast} = props

  
  
  return (  
    <Paper variant="outlined">
     {fieldsFormatter.short(forecast)}
  </Paper>
  )
}


function getDayForecast(local,forecasts){

  //console.log("local " +local.globalIdLocal)  
  //console.log(forecasts)  

  if (forecasts && forecasts[local.globalIdLocal] ){

    const localForecast = forecasts[local.globalIdLocal]
    if (localForecast){

     // console.log( "f " +localForecast)  
      return localForecast[0]

    }
  }

}

const Local = (props) => {
  const classes = useStyles()
  const {local,forecasts} = props

  const dayForecast = getDayForecast(local,forecasts)
  
  
  return (  
    <Paper variant="outlined" style={{padding: '5px', marginTop: '10px', backgroundColor: '#cae2ed' }}>
    <Typography component="body1" variant="body1" >{local.local}</Typography>

    {
    dayForecast ? <Forecast forecast= {dayForecast} /> : ''

    }

    <p>
    <NavLink  to={"/Towns/" + local.globalIdLocal}>
     next days
    </NavLink>
    </p>
    </Paper>
  )
}




const DistrictExpand = (props) => {
  const classes = useStyles()
  const [forecasts, setForecasts] = useState();

  const {locations} = props
  

    //init
    useEffect(() => {
      setForecasts(props.forecasts)
    },[])


  return (
    
    <Fragment>
      
    {
      locations.map(l => <Local local={l} forecasts={forecasts}></Local>)
    }
  
    </Fragment>
  )

}



const District = (props) => {
  const classes = useStyles()
  const {district} = props
  const [expand, setExpand] = useState(false);
  const [forecasts, setForecasts] = useState();
  const locations = weatherService.getLocationsPerDistrict(district.districtId)

  const toogleExpand = (e) =>{ 
    setExpand(!expand)

  } 

  async function getForecasts(districtId, callback){
    try {
      const ff = await weatherService.getDistrictForecast(districtId)
      callback(ff)    
    }catch(e){
      console.error(e)
    }
  }

  //init
  useEffect(() => {
    getForecasts(district.districtId, (ff) => setForecasts(ff))
  },[])

  return (
    
    <Paper variant="outlined" style={{padding: '10px', backgroundColor: '#f0f6f7'}} className={classes.paper} onClick={toogleExpand}>
    <Typography variant="button" component="h5" style={{color: 'black'}}>{district.local}</Typography>
    {
      (expand && forecasts) ? <DistrictExpand locations={locations} forecasts={forecasts} /> : ''
    }
    </Paper>
  )

}


const Home = (props) => {
  const classes = useStyles();
  const districts = weatherService.getDistrictsZone1()

  window.weatherService = weatherService

  return (
    <Grid style={{padding: '5px', marginBottom: '20px' }} >
    {
      districts.map(p => <District district={p}></District>)
    }
    </Grid>)
}


export default Home
