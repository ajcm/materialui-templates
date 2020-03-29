import React, { useState, useEffect,Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import {
  TextField ,
  AppBar,
  Button,
  Toolbar,
  Typography,
  Select,
  Paper
} from '@material-ui/core'


import {weatherService} from '../Weather/WeatherApi'



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



const Local = (props) => {
  const classes = useStyles()
  const {local} = props
  
  
  return (  
    <Paper variant="outlined" style={{padding: '10px' }}>
    <Typography variant="body" >{local.local}</Typography>
    </Paper>
  )
}


const District = (props) => {
  const classes = useStyles()
  const {district} = props
  const locations = weatherService.getLocationsPerDistrict(district.districtId)
  const locationsForecast = weatherService.getDistrictForecastDay(district.districtId)

  return (
    
    <Paper variant="outlined" style={{padding: '10px' }} className={classes.paper} >
    <Typography variant="h6" >{district.local}</Typography>
    {
      locations.map(l => <Local local={l} forecast={locationsForecast}></Local>)
    }
    </Paper>
  )

}


const Home = (props) => {
  const classes = useStyles();
  const districts = weatherService.getDistrictsZone1()

  window.weatherService = weatherService

  return (
    <Fragment>
    {
      districts.map(p => <District district={p}></District>)
    }
    </Fragment>)
}


export default Home
