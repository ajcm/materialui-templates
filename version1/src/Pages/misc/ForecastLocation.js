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

import WeatherTypeDesc from '../../Components/WeatherTypeDesc'
import SourceView from '../../Components/Debug/SourceView';
import DisplayAttributesTable from '../../Components/Debug/DisplayAttributesTable';

import {LOCATION_REQUEST_URL} from '../../WeatherApi/WeatherApi';
import {ALL_LOCATIONS} from '../../WeatherApi/Data';



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


const ForecastLocation = () => {
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

     <Select fullWidth native
       onChange={(event) => setPeriod(event.target.value)} >
             <option value=''>Any Period</option>
             <option value='1'>Period 1</option>
             <option value='3'>Period 3</option>
             <option value='24'>Period 24</option>
      </Select>
       <pre>{location}-{period}</pre>
      <Location location={location} period={period}/>
      </Typography>
  </Paper>
  </Fragment>)
}



const Location = (props) => {
  const classes = styes();
  const {location,period} = props
  const [json, setJson] = useState();
  const [error,setError] = useState();

  useEffect(() => request(),[location,period])


  function request(){
    if (location){
      fetch(LOCATION_REQUEST_URL + location+ '.json')
      .then(response =>  response.json())
      .then(json => {setJson(json); })
      .catch(e => { setError(e)})
    }
   }


  return (<Fragment>  { (location && json) ?   (<Fragment><SourceView json={json}/> <DisplayAttributesTable  json={json}/> </Fragment>)  : ''}  </Fragment>)
}


export default ForecastLocation
