import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import Constants from '../data/Constants.js';


const Project = (props) => {
    const {title,image,description,link} = props.project;

    return (
    <div style={{display: 'inline-block'}}>
      <h3>{title}</h3>
      <img src={image} style={{width: 200, height: 120 }}/>
      <p>{description}</p>
      <a href={link}>{link}</a>
    </div>);


}// class


const Forecast = (props) => {

    const {tMin,tMax,idWeatherType,precipitaProb}= props.forecast;

   const weatherTypeDesc = Constants.getWeatherType(props.forecast.idWeatherType).descIdWeatherTypePT;

     return    <div>
      <p><i>{weatherTypeDesc} - Chuva {precipitaProb} -  T {tMin}/{tMax}  </i></p>
     </div>
   }




export default Forecast
