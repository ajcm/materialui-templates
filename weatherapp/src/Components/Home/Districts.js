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


import DistrictExpand from './DistrictExpand'

import {weatherDataService} from '../../Weather/WeatherData'
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






const Districts = (props) => {
  const classes = useStyles()
  const {district} = props
  const [expand, setExpand] = useState(false);

  const locations = weatherDataService.getLocationsPerDistrict(district.districtId)

  const toogleExpand = (e) =>{
    setExpand(!expand)

  }


  return (
    <Paper variant="outlined" style={{padding: '10px'}} className={classes.paper} onClick={toogleExpand}>

    { !expand ?
      <Typography variant="button" component="h5" variant="h6" style={{color: 'black'}}>{district.local}</Typography>
      :
      <DistrictExpand  locations={locations} /> 
    }
    </Paper>
  )

}



export default Districts
