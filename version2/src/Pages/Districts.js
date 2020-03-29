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
import {ALL_LOCATIONS} from '../weatherapi/Data';

import DisplayTable from '../Components/DisplayTable';




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


const Options = () => (ALL_LOCATIONS.sort((a, b) => a.local.localeCompare(b.local) ).map( ({globalIdLocal,local}) => <option value={globalIdLocal}>{local} ({globalIdLocal})</option>))


const Locations = () => {
  const classes = styes();
  const [location,setLocation] = useState();
  const [period,setPeriod] = useState();


  return (
    <Fragment>

  <Paper style={{padding: '10px' }} >
  <Typography variant="h6" >Locations</Typography>

  <Typography variant="caption" display="block" gutterBottom>

    <Select fullWidth native
      value={location}
      onChange={(event) => setLocation(event.target.value)} >
            <option value=''>Choose location</option>
            <Options/>
    </Select>


      <Location location={location} period={24}/>
  </Typography>
  </Paper>
  </Fragment>)
}


//const LOCATION_REQUEST_URL = 'https://golias.tugalife.net/api/weather/forecast/'
const LOCATION_REQUEST_URL = 'http://localhost:8080/api/weather/forecast24/'

const headers = [{"key": "data", "value" :"dataPrev"},
{"key": "Type", "value" :"idTipoTempo"},
{"key": "min", "value" :"tMin"},
{"key": "max", "value" :"tMax"},
{"key": "% Rain", "value" :"probabilidadePrecipita"},
{"key": "Wind Str", "value" :"idFfxVento"},
{"key": "dir", "value" :"ddVento"}]

const Location = (props) => {
  const classes = styes();
  const {location,period} = props
  const [json, setJson] = useState();
  const [error,setError] = useState();

  useEffect(() => request(),[location,period])


  function filterForecasts(data,period){

    if (! Array.isArray(data)){
      console.log("data " +data);
      return
    }

  //  let filtered = data.filter (e => e.idPeriodo == period)
  //  console.log(filtered);

    return data
  }



  function request(){
    if (location){
      fetch(LOCATION_REQUEST_URL + location)
      .then(response =>  response.json())
      .then(json => {setJson(filterForecasts(json,24)) })

      .catch(e => { setError(e)})
    }
   }


  return (
    <Fragment>
    <DisplayTable headers={headers} data={json}/>
    </Fragment>)
}


export default Locations
