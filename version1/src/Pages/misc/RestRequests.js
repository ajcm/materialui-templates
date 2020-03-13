import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import {TextField,AppBar,Button,Toolbar,Typography,Select} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import RestRequest from '../../Components/Debug/RestRequest';

import {DISTRICTS_URL,LOCATIONS_URL,WEATHER_CLASSES,WIND_CLASSES,PRECIP_CLASSES,FORECAST_DISTRICTS_TODAY,LOCATION_REQUEST_URL} from '../../WeatherApi/WeatherApi';


const styes  = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingBottom: '10px',
    textAlign: 'left'
  },
}));


const InnerRestRequests = () => {
  const classes = styes();
  const [url, setUrl] = useState();

  const handleChange = event =>  setUrl(event.target.value)

  return (
    <div className={classes.root}>

      <Select fullWidth native value={url} onChange={handleChange}>
          <option value=''>Choose one</option>
          <option value={DISTRICTS_URL}>{DISTRICTS_URL}</option>
          <option value={LOCATIONS_URL}>{LOCATIONS_URL}</option>
          <option value={FORECAST_DISTRICTS_TODAY}>{FORECAST_DISTRICTS_TODAY}</option>
          <option value={WEATHER_CLASSES}>{WEATHER_CLASSES}</option>
          <option value={WIND_CLASSES}>{WIND_CLASSES}</option>
          <option value={PRECIP_CLASSES}>{PRECIP_CLASSES}</option>
     </Select>
     <pre>{url}</pre>
     {url ? <RestRequest  url={url} />:''}

    </div>)
}

export default function RestRequests() {
  const classes = styes();

  return (
    <div className={classes.root}>
      <Paper style={{ backgroundColor: '#F7F7F7', padding: '10px', marginBottom: '20px' }} >
        <InnerRestRequests/>
      </Paper>
    </div>)
}
