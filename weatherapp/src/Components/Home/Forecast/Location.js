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
import Forecasts from './Forecasts'

import {weatherDataService} from '../../../Weather/WeatherData'
import {forecastService} from '../../../Weather/ForecastApi'

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


const Location = (props) => {
  const classes = useStyles()
  const {location} = props
  const [forecasts, setForecasts] = useState();

  async function getForecastNextDays(locationId,callback){
      if (!locationId)
        return

        try {

          let forecastNextDays = await forecastService.getForecastNextDays(locationId)

          console.log(forecastNextDays)

          setForecasts(forecastNextDays)

        }catch(error){
          console.log(error)
        }
    }

  //init get forecast for location
  useEffect(
    () => {
      if (location) {
        getForecastNextDays(location.globalIdLocal,
          (ff) => console.log(ff))
      }
    }
  , [])

  return (
    <Paper variant="outlined" style={{padding: '5px', marginTop: '10px', backgroundColor: '#f0f6f7' }}>
    <Typography component="h6" variant="button" >{location.local}</Typography>
    {
      (location && forecasts) ?  <Forecasts forecasts={forecasts} /> : ''
    }
    </Paper>
  )
}






export default Location
