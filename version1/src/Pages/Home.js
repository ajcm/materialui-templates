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
import WeatherApi from '../WeatherApi/WeatherApi';
import DestakWeatherExpand from '../Components/DestakWeatherExpand'



const useStyles = makeStyles(theme => ({
  root: {
      flexGrow: 1,
      marginLeft: 'auto',
      marginRight: 'auto',
    },

    grid: {
        marginLeft: 'auto',
        marginRight: 'auto',
      },

    paper: {
      //textAlign: 'center',
      //minHeight: '25vh',
      paddingLeft: '5px',
      marginBottom: '10px'
    },
}));



const DestakWeather = (props) =>  {

  const {localforecast,district} = props
  const {idWeatherType, tMin,tMax} = localforecast


   return (
      <Fragment>
      <Typography  variant="button" >{district.local}</Typography>
      <WeatherTypeImage idWeatherType={idWeatherType} />
        <Typography  variant="body2" >{tMin}&#186; / {tMax}&#186; </Typography>
      </Fragment>
  )

}






const DestakPanel = (props) =>  {
  const classes = useStyles()
  const {district,service,forecast} = props
  const [expand, setExpand] = useState(false);

  const localforecast = (forecast && district ) ? forecast.get(district.globalIdLocal) : null

  const toogleExpand = () => setExpand(!expand)


   return (
    <Grid  item xs={12}  className={classes.grid}>
    <Paper className={classes.paper} onClick={toogleExpand}>

    {localforecast ?  ( expand ? <DestakWeatherExpand  district={district} localforecast={localforecast} /> :   <DestakWeather district={district}   localforecast={localforecast} />  ): ''}
    </Paper>
    </Grid>
  )
}


function request(callback){

  fetch('https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/hp-daily-forecast-day0.json')
  .then(response => response.json())
   .then(json => {
     //console.log (json.data)
     callback(new Map(json.data.map(i => [i.globalIdLocal, i])));
    })
   .catch(e => {console.log(e)})
}


const DISTRICTS_FILTERED = DISTRICTS.filter(d =>  ! [3410100,3440100,3450200,3460200,3490100].includes(d.globalIdLocal));
export default function Home() {
  const classes = useStyles();
  const service = WeatherApi()
  const [forecast, setForecast] = useState();

  useEffect(
    () => request( (ff) => {console.log(ff); setForecast(ff)})
  , [])

  return (
  <Box container maxWidth="95%" className={classes.grid} style={{ backgroundColor: '#cfe8fc',  padding:'10px', marginBottom: '20px'  }} >
    {DISTRICTS_FILTERED.map( district => <DestakPanel district={district} forecast={forecast}  service={service}/>) }
  </Box>
)
}
