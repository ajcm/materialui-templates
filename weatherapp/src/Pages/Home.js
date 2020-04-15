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


import District from '../Components/Home/Districts'

import {weatherDataService} from '../Weather/WeatherData'
//import {fieldsFormatter} from '../Weather/Descriptions'



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




const Home = (props) => {
  const classes = useStyles();
  const districts = weatherDataService.getDistrictsZone1()

  window.weatherDataService = weatherDataService

  return (
    <Grid style={{padding: '5px', marginBottom: '20px' }} >
    {
      districts.map(p => <District key={p.districtId.toString()} district={p}></District>)
    }
    </Grid>)
}


export default Home
