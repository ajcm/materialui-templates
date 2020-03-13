import React, {Component,Fragment,useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import {DISTRICTS} from '../WeatherApi/Data';
import Box from '@material-ui/core/Box';

import { Typography} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import WeatherTypeImage from '../Components/Weather/WeatherTypeImage'

import WeatherApi,{LOCATION_REQUEST_URL} from '../WeatherApi/WeatherApi';

import {ALL_LOCATIONS} from '../WeatherApi/Data';

const useStyles = makeStyles(theme => ({
  root: {
      flexGrow: 1,
      marginLeft: 'auto',
      marginRight: 'auto',
    },

    grid: {

          marginBottom: '10px'
      },

    paper: {
      //textAlign: 'center',
      minHeight: '10vh',
      paddingLeft: '5px',
      marginBottom: '10px'
    },
}));



function request(location,callback){

  fetch(LOCATION_REQUEST_URL + location+ '.json')
  .then(response =>  response.json())
  .then(json => {callback(json) })
  .catch(e => { console.log(e)})

}


const LocationForecast = (props) =>  {
  const classes = useStyles()
  const {location,forecast}= props
  const {idTipoTempo, tMin,tMax} = forecast




   return (
      <Fragment>
          <Typography  variant="button" >{location.local}</Typography>
      <WeatherTypeImage idWeatherType={idTipoTempo} />
      <Typography  variant="body2" >{tMin}&#186; / {tMax}&#186; </Typography>
      </Fragment>
  )

}



const Location = (props) =>  {
  const classes = useStyles()
  const {location}= props
  const [forecast, setForecast] = useState()


  useEffect(
    () => request(location.globalIdLocal,(ff) => {

      console.log(ff);

      if ( Array.isArray(ff) && ff.length > 1)
        setForecast(ff[0])
      })
  , [])



return (
 <Paper className={classes.paper}>


   { (!forecast) ?   <Typography  variant="body2" >{location.local}</Typography> : <LocationForecast location={location} forecast={forecast}  />}


  </Paper>
)

}

const getLocationsForDistrict  = (districtId) => ALL_LOCATIONS.filter(city => city.idDistrito == districtId)


const DestakWeatherExpand = (props) =>  {
  const classes = useStyles()
  const {idDistrito}= props.district



   return (
      <Fragment>

       <Grid container spacing={1}  className={classes.grid} style={{ backgroundColor: '#D8D8D8',  padding:'10px', marginBottom: '20px'  }} >
        {getLocationsForDistrict(idDistrito).map ( city  =>  <Grid item xs={6}><Location location={city} /></Grid>)  }
        </Grid>


      </Fragment>
  )

}


export default DestakWeatherExpand
