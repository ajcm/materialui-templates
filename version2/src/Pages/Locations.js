import React, { Fragment, useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Select, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper'
import {weatherService} from '../Weather/WeatherApi'

import DisplayTable from '../Components/DisplayTable';

const headers = [
{"key": "dataPrev", "value" :"dataPrev"},
{"key": "idTipoTempo", "value" :"idTipoTempo"},
{"key": "tMin", "value" :"tMin"},
{"key": "tMax", "value" :"tMax"},
{"key": "probabilidadePrecipita", "value" :"probabilidadePrecipita"},
{"key": "idFfxVentor", "value" :"idFfxVento"},
{"key": "ddVento", "value" :"ddVento"}]

const styes  = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  //  paddingBottom: '10px',
    textAlign: 'left'

  },
  paper: {
  //  padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary

  },

  table: {
  },

  text: {
    color: theme.palette.text.secondary

  },

}));


const WeatherLocation = (props) => {
  const {location,forecast} = props

  return (
    <Fragment>
    <p> {location} </p>  
    
    <DisplayTable headers={headers} data={forecast}/>

     </Fragment>
  )
}


async function getForecast(locationId, callback){

  if (!locationId)
    return

  const forecast = await weatherService.getForecast(locationId)
  callback(forecast)
}



const Locations = () => {
  const classes = styes();
  const [location,setLocation] = useState();
  const [forecast,setForecast] = useState();

  const locations = weatherService.getLocations()


  function onChange(locationId){

    setLocation(locationId)

    //http request
    getForecast(locationId, (ff) => setForecast(ff))
    
  }


  return (
  <Fragment>

  <Paper  variant="outlined"  style={{margin: '10px', padding: '10px' }} >
  <Typography variant="h6" >Locations</Typography>

  <Typography variant="caption" display="block" gutterBottom>

    <Select fullWidth native
      value={location}
      onChange={(event) => onChange(event.target.value) } >
      
     <option value=''>Choose location</option>
     {locations.map(l => <option value={l.globalIdLocal}>{l.local} ({l.globalIdLocal}) </option>)}           
    </Select>     
  </Typography>
    {
      (location && forecast) ? <WeatherLocation location={location} forecast={forecast} />  : ''
    }
  </Paper>
  </Fragment>)
}



export default Locations
