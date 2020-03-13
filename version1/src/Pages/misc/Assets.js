import React, { useState, useEffect,Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import {TextField,AppBar,Button,Toolbar,Typography,Select} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import RestRequest from '../../Components/Debug/RestRequest';

import {DISTRICTS_URL,LOCATIONS_URL,WEATHER_CLASSES,WIND_CLASSES,PRECIP_CLASSES,FORECAST_DISTRICTS_TODAY,LOCATION_REQUEST_URL} from '../../WeatherApi/WeatherApi';
import {WEATHER_TYPES} from '../../WeatherApi/Data';


const styes  = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingBottom: '10px',
    textAlign: 'left'
  },
}));

const WeatherTypeImages = [
{'id': 1, 'image':'http://www.ipma.pt/bin/icons/svg/weather/w_ic_d_01.svg'},
{'id': 2, 'image':'http://www.ipma.pt/bin/icons/svg/weather/w_ic_d_02.svg'},
{'id': 3, 'image':'http://www.ipma.pt/bin/icons/svg/weather/w_ic_d_03.svg'},
{'id': 4, 'image':'http://www.ipma.pt/bin/icons/svg/weather/w_ic_d_04.svg'},
{'id': 5, 'image':'http://www.ipma.pt/bin/icons/svg/weather/w_ic_d_05.svg'},
{'id': 6, 'image':'http://www.ipma.pt/bin/icons/svg/weather/w_ic_d_06.svg'},
{'id': 7, 'image':'http://www.ipma.pt/bin/icons/svg/weather/w_ic_d_07.svg'},
{'id': 8, 'image':'http://www.ipma.pt/bin/icons/svg/weather/w_ic_d_08.svg'},
{'id': 9, 'image':'http://www.ipma.pt/bin/icons/svg/weather/w_ic_d_09.svg'},
{'id': 10, 'image':'http://www.ipma.pt/bin/icons/svg/weather/w_ic_d_10.svg'},

{'id': 11, 'image':'http://www.ipma.pt/bin/icons/svg/weather/w_ic_d_11.svg'},
{'id': 12, 'image':'http://www.ipma.pt/bin/icons/svg/weather/w_ic_d_12.svg'},
{'id': 13, 'image':'http://www.ipma.pt/bin/icons/svg/weather/w_ic_d_13.svg'},
{'id': 14, 'image':'http://www.ipma.pt/bin/icons/svg/weather/w_ic_d_14.svg'},
{'id': 15, 'image':'http://www.ipma.pt/bin/icons/svg/weather/w_ic_d_15.svg'},
{'id': 16, 'image':'http://www.ipma.pt/bin/icons/svg/weather/w_ic_d_16.svg'},
{'id': 17, 'image':'http://www.ipma.pt/bin/icons/svg/weather/w_ic_d_17.svg'},
{'id': 18, 'image':'http://www.ipma.pt/bin/icons/svg/weather/w_ic_d_18.svg'},
{'id': 19, 'image':'http://www.ipma.pt/bin/icons/svg/weather/w_ic_d_19.svg'},
{'id': 20, 'image':'http://www.ipma.pt/bin/icons/svg/weather/w_ic_d_20.svg'},

{'id': 21, 'image':'http://www.ipma.pt/bin/icons/svg/weather/w_ic_d_21.svg'},
{'id': 22, 'image':'http://www.ipma.pt/bin/icons/svg/weather/w_ic_d_22.svg'},
{'id': 23, 'image':'http://www.ipma.pt/bin/icons/svg/weather/w_ic_d_23.svg'},
{'id': 24, 'image':'http://www.ipma.pt/bin/icons/svg/weather/w_ic_d_24.svg'},
{'id': 25, 'image':'http://www.ipma.pt/bin/icons/svg/weather/w_ic_d_25.svg'},
{'id': 26, 'image':'http://www.ipma.pt/bin/icons/svg/weather/w_ic_d_26.svg'},
{'id': 27, 'image':'http://www.ipma.pt/bin/icons/svg/weather/w_ic_d_27.svg'},
]

const WeatherTypeImagesMap =  new Map(WeatherTypeImages.map(i => [i.id, i]));

const WeatherTypeImage = (props) => {
  const {idWeatherType,descIdWeatherTypePT} = props.type
  const image = WeatherTypeImagesMap.get(idWeatherType)

  return (
  <Fragment>
  {(image) ?  <img width="50px" src={image.image} alt={descIdWeatherTypePT}  title={descIdWeatherTypePT} /> : '' }
  </Fragment>
  )

}



const WeatherTypeDescription = (props) => {

  const type =  props.type
  const {idWeatherType,descIdWeatherTypePT,descIdWeatherTypeEN} = props.type

  return (
  <Fragment>
  <p>{idWeatherType} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {descIdWeatherTypePT},  <i> {descIdWeatherTypeEN} </i> <WeatherTypeImage  type={type}/></p>
  </Fragment>
  )

}



const WeatherTypes = () => {


  return (
    WEATHER_TYPES.map(type =>   <div><WeatherTypeDescription type={type} /></div>)

  )

}


export default function Assets() {
  const classes = styes();

  return (
    <div className={classes.root}>
      <Typography variant="h6" >Weather Types</Typography>
      <Paper style={{ padding: '10px', marginBottom: '20px' }} >
      <WeatherTypes/>

      </Paper>
    </div>)
}
