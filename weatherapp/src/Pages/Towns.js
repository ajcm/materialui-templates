import React, { Fragment, useEffect, useState } from 'react';

import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import {weatherDataService} from '../Weather/WeatherData'
import {forecastService} from '../Weather/ForecastApi'



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

const StyledTableCell = withStyles((theme) => ({

  head: {
    fontSize: 16,
  },

}))(TableCell);


function formatDate(date){

  // const d = new Date(date)
  // const dtf = new Intl.DateTimeFormat('pt', { year: 'numeric',
  //  month: 'long',
  //   day: '2-digit',
  //   weekday: 'long' })
  //
  //
  // const [{value: weekday},,{ value: da },,{ value: mo }] = dtf.formatToParts(d)
  //
  // console.log( dtf.formatToParts(d) )
  //
  // return `${weekday},  ${da} ${mo}`

  return "date"
}

function getWind(forecast){

  // console.log(windSpeed[forecast.idFfxVento])
  //
  // return windSpeed[forecast.idFfxVento]

  return "wind"
}

//idFfxVentor
function DataTableRow(props) {
  const classes = styles();
  const {forecast} = props
  const date = new Date(forecast.dataPrev)
  const isWeekend = (date.getDay() === 6) || (date.getDay() === 0)
//  const weather = weatherTypes[forecast.idTipoTempo]
//  const wind = getWind(forecast)

  return  (

    <TableRow  style={{ backgroundColor: isWeekend ?  '##809bc2' : '#f0f4f7'  }} >
      <TableCell>date </TableCell>
      <TableCell>weather.descIdWeatherTypePT}</TableCell>
      <TableCell>{ Math.round(forecast.tMin)}	&#176; { '  -  '} { Math.round(forecast.tMax)}&#176;</TableCell>
      <TableCell  align="right">Precipita</TableCell>
      <TableCell>wind</TableCell>
    </TableRow>

  )
}


const WeatherLocation = (props) => {
  const {location,forecast} = props

  return (
    <Grid style={{padding: '10px', marginTop: '10px' }}>

    <TableContainer>
    <Table>

      <TableHead style={{ margin: '10px', backgroundColor: '#98baeb'}}>
      <TableRow>
        <StyledTableCell>Dia</StyledTableCell>
        <StyledTableCell>Estado</StyledTableCell>
        <StyledTableCell>Temp. min/max</StyledTableCell>
        <StyledTableCell>Precipitacao</StyledTableCell>
        <StyledTableCell>Vento</StyledTableCell>

      </TableRow>
      </TableHead>
      {forecast ?  forecast.map(ff => <DataTableRow forecast={ff}/>) : ''}
    </Table>
    </TableContainer>

     </Grid>
  )
}



const Towns = (props) => {
  const classes = styles();

  const locationId = props.match.params.locationId
  const [forecast,setForecast] = useState();
  const [location,setLocation] = useState();


  //init
  useEffect(
    () => {
      if (locationId) {
        let ll = weatherDataService.getLocation(locationId)
        setLocation(ll)
        getForecast(locationId, (ff) => setForecast(ff))
      }
    }
  , [])


  async function getForecast(locationId, callback){
    if (!locationId)
      return

  //  const forecast = await weatherService.getForecast(locationId)
//    callback(forecast)
  }




  return (
  <Fragment>

  <Paper variant="outlined"  style={{margin: '10px', padding: '10px' }} >
  <Paper variant="outlined"  style={{margin: '10px', padding: '10px' }} >
    <Typography variant="h6">{ location ? location.local : 'Undefined' }</Typography>
  </Paper>
    {
      ( forecast && location) ? <WeatherLocation location={location} forecast={forecast} />  : ''
    }
  </Paper>
  </Fragment>)
}



export default Towns
