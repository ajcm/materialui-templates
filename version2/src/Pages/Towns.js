import React, { Fragment, useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Select, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper'
import {weatherService} from '../Weather/WeatherApi'


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';





const styles  = makeStyles(theme => ({
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


function formatDate(date){

  const d = new Date(date)
  const dtf = new Intl.DateTimeFormat('pt', { year: 'numeric',
   month: 'long',
    day: '2-digit',
    weekday: 'long' }) 

  
  const [{value: weekday},,{ value: mo },,{ value: da }] = dtf.formatToParts(d) 

  console.log( dtf.formatToParts(d) )

  return `${weekday}, ${da} ${mo}`
}

function DataTableRow(props) {
  const classes = styles();
  const {forecast} = props

  return  (
    <TableRow>
      <TableCell>{formatDate(forecast.dataPrev)}</TableCell>
      <TableCell>{forecast.idTipoTempo}</TableCell>
      <TableCell>{forecast.tMin}/{forecast.tMax}</TableCell>
      <TableCell>{forecast.probabilidadePrecipita}</TableCell>
      <TableCell>{forecast.idFfxVento} ({forecast.ddVento})</TableCell>
    </TableRow>
  )
}


const WeatherLocation = (props) => {
  const {location,forecasts} = props

  return (
    <Fragment>
    <p> {location} </p>  

    <TableContainer>
    <Table>

      <TableHead>
      <TableRow>
        <TableCell>Dia</TableCell>
        <TableCell>Estado</TableCell>
        <TableCell>Temp. min/max</TableCell>
        <TableCell>Precipitacao</TableCell>
        <TableCell>Vento</TableCell>
    
      </TableRow>
      </TableHead>
      {forecasts ?  forecasts.map(forecast => <DataTableRow forecast={forecast}/>) : ''}
    </Table>
    </TableContainer>



    

     </Fragment>
  )
}





const Towns = () => {
  const classes = styles();
  const [location,setLocation] = useState();
  const [forecast,setForecast] = useState();

  const locations = weatherService.getLocations()

  async function getForecast(locationId, callback){
    if (!locationId)
      return
  
    const forecast = await weatherService.getForecast(locationId)
    callback(forecast)
  }

  
  function onChange(locationId){
    setLocation(locationId)
    //http request
    getForecast(locationId, (ff) => setForecast(ff))
    
  }


  return (
  <Fragment>

  <Paper  variant="outlined"  style={{margin: '10px', padding: '10px' }} >
  <Typography variant="h6">Towns</Typography>

  <Typography variant="caption" display="block" gutterBottom>

    <Select fullWidth native
      value={location}
      onChange={(event) => onChange(event.target.value) } >
      
     <option value=''>Choose location</option>
     {locations.map(l => <option value={l.globalIdLocal}>{l.local} ({l.globalIdLocal}) </option>)}           
    </Select>     
  </Typography>
    {
      (location && forecast) ? <WeatherLocation location={location} forecasts={forecast} />  : ''
    }
  </Paper>
  </Fragment>)
}



export default Towns
