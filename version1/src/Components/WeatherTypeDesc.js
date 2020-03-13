import React, {useState, useEffect} from 'react';


import {WEATHER_TYPES} from '../WeatherApi/Data';





const WEATHER_TYPES_MAP =  new Map(WEATHER_TYPES.map(obj => [obj.idWeatherType, obj]));



const getDescription = (id) =>  WEATHER_TYPES_MAP.get(id).descIdWeatherTypePT





 const WeatherTypeDesc = (props) =>{




  return (<b> {getDescription(props.children)}  </b>)




}


export default WeatherTypeDesc
