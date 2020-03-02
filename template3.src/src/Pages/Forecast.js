import React, { useState, useEffect,Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


import {
  TextField ,
  AppBar,
  Button,
  Toolbar,
  Typography,
  Select
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles'

import WeatherTypeDesc from '../Components/WeatherTypeDesc'

import {DISTRICTS_URL,LOCATIONS_URL,WEATHER_CLASSES,WIND_CLASSES,PRECIP_CLASSES,FORECAST_DISTRICTS_TODAY,LOCATION_REQUEST_URL} from '../weatherapi/WeatherApi';

import {ALL_LOCATIONS} from '../weatherapi/Data';


import { withStyles } from '@material-ui/core/styles';

import RequestDebug from './RequestDebug';

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




const LocationsWeather = () => {
  const classes = styes();

  const [id, setId] = useState();
  const [output,setOutput] = useState();
  const [forecast,setForecast] = useState();

  const handleChange = event => {
    if (event.target.value === '') return
    setId(event.target.value)
    setOutput(event.target.value)
    let url =  LOCATION_REQUEST_URL + event.target.value + '.json'
        fetch(url)
        .then(response =>  response.json())
        .then(json => callback(undefined,json))
        .catch(error => callback(error,undefined))

}


const callback = (error, json) =>   {
  console.log((error) ? ('error ' + error ) : JSON.stringify(json, null, 2))
  setForecast(json.filter( x => (x.idPeriodo && x.idPeriodo === 24)))

}

//  useEffect(() => {  console.log(ALL_LOCATIONS)  }         )

  const Options  = () => (ALL_LOCATIONS.sort((a, b) => a.local.localeCompare(b.local) ).map( ({globalIdLocal,local}) => <option value={globalIdLocal}>{local}</option>))


    return (
      <div className={classes.root}>
        <Typography variant="caption" display="block" gutterBottom>
        <Select fullWidth
          native
          value={id}
          onChange={handleChange}>
        <option>Choose Location</option>
        <Options/>
       </Select>

       <pre>{output} </pre>
       <SimpleTable rows={forecast}/>
      </Typography>
      </div>)

}



export default function Forecast() {
  const classes = styes();

  return (
    <div className={classes.root}>
      <Typography variant="h6" >Forecast</Typography>
      <LocationsWeather/>
    </div>)
}





const StyledHeaderCell = withStyles(theme => ({

  root: {
    padding: '0px'
  },
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 10,
  },
}))(TableCell);


const StyledCell = withStyles(theme => ({

  root: {
    padding: '0px'
  },

  body: {
    fontSize: 12,
  },
}))(TableCell);



function SimpleTableBody(props) {
  const classes = styes();

const rows = props.rows

return  (  <TableBody>
    { (rows) ?  rows.map(row => (



<Fragment>
      <SimpleTableRow row ={row} />


   <TableRow>

   <TableCell colSpan={6}>

    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>

            <StyledHeaderCell>Day</StyledHeaderCell>
            <StyledHeaderCell>Type</StyledHeaderCell>
            <StyledHeaderCell>Tmin</StyledHeaderCell>
            <StyledHeaderCell>Tmax</StyledHeaderCell>
            <StyledHeaderCell>% Rain</StyledHeaderCell>
            <StyledHeaderCell>Wind</StyledHeaderCell>
          </TableRow>
        </TableHead>

          <SimpleTableRow row ={row} />
          <SimpleTableRow row ={row} />
          <SimpleTableRow row ={row} />


      </Table>
    </TableContainer>
   </TableCell>
    </TableRow>

</Fragment>

    )) : ''}
  </TableBody>)

}



function SimpleTableRow(props) {
  const classes = styes();

const row = props.row

return  (
      <TableRow key={row.dataPrev}>
        <StyledCell>{new Date(row.dataPrev).toLocaleDateString("pt-PT")} ({new Date(row.dataPrev).toLocaleDateString("pt-PT",{ weekday: 'short'})})        </StyledCell>
        <StyledCell><WeatherTypeDesc>{row.idTipoTempo}</WeatherTypeDesc>({row.idTipoTempo})</StyledCell>
        <StyledCell>{row.tMin}</StyledCell>
        <StyledCell>{row.tMax}</StyledCell>
        <StyledCell>{row.probabilidadePrecipita}</StyledCell>
        <StyledCell>{row.ddVento}</StyledCell>
      </TableRow>
)

}





function SimpleTable(props) {
  const classes = styes();

  const rows = props.rows

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>

            <StyledHeaderCell>Day</StyledHeaderCell>
            <StyledHeaderCell>Type</StyledHeaderCell>
            <StyledHeaderCell>Tmin</StyledHeaderCell>
            <StyledHeaderCell>Tmax</StyledHeaderCell>
            <StyledHeaderCell>% Rain</StyledHeaderCell>
            <StyledHeaderCell>Wind</StyledHeaderCell>
          </TableRow>
        </TableHead>

        <SimpleTableBody rows={rows} />

      </Table>
    </TableContainer>
  );
}
