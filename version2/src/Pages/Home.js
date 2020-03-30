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
    <Paper variant="outlined" style={{padding: '10px', marginTop: '10px', backgroundColor: '#cae2ed' }}>
    <Typography component="body1" variant="body1" >{local.local}</Typography>
    <p>
    <NavLink  to={"/Towns/" + local.globalIdLocal}>
     next days
    </NavLink>
    </p>
    </Paper>
  )
}




const DistrictExpand = (props) => {
  const classes = useStyles()
  const {locations,locationsForecast} = props
  

  return (
    
    <Fragment>
      
    {
      locations.map(l => <Local local={l} forecast={locationsForecast}></Local>)
    }
  
    </Fragment>
  )

}



const District = (props) => {
  const classes = useStyles()
  const {district} = props
  const [expand, setExpand] = useState(false);

  const locations = weatherService.getLocationsPerDistrict(district.districtId)
  const locationsForecast = weatherService.getDistrictForecastDay(district.districtId)

  const toogleExpand = (e) =>{ 
    setExpand(!expand)

  } 


  return (
    
    <Paper variant="outlined" style={{padding: '10px', backgroundColor: '#f0f6f7'}} className={classes.paper} onClick={toogleExpand}>
    <Typography variant="h6" component="h5" style={{color: 'black'}}>{district.local}</Typography>
    {
      (expand) ? <DistrictExpand locations={locations} locationsForecast={locationsForecast} /> : ''
    }
    </Paper>
  )

}


const Home = (props) => {
  const classes = useStyles();
  const districts = weatherService.getDistrictsZone1()

  window.weatherService = weatherService

  return (
    <Grid style={{padding: '5px', marginBottom: '20px' }} >
    {
      districts.map(p => <District district={p}></District>)
    }
    </Grid>)
}


export default Home
