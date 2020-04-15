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
import Grid4x1 from '../../Layouts/Grid4x1'
import Decorator from '../../../Weather/Decorator'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    textAlign: 'left'

  },
  paper: {
    color: theme.palette.text.secondary,
    margin: '10px 10px 10px 10px ',
    padding: '5px 15px 15px 5px '

  },

  table: {
  },

  text: {
    color: theme.palette.text.secondary

  },

}));


const ForecastDay = (props) => {
  const classes = useStyles()
  const {forecast,label} = props
  const decorator = Decorator(forecast)

  return (
    <Fragment>
    <Paper  variant="outlined" className={classes.paper} >

        <Typography variant="caption" style={{color: 'black', fontWeight: 'bold'}}>
        {label ?  label  + ' ('+ decorator.getDateWeek() + ')': decorator.getDate()}        
        </Typography>
        
      

        <Typography variant="body2" >
        {decorator.getWeatherPT()}
        </Typography>

        <Typography variant="body2" >
        t.min {decorator.getTempMin()}&deg; / t.max {decorator.getTempMax()}&deg;
        </Typography>

        <Typography variant="body2">
        Vento: {decorator.getWindPT()} ({forecast.ddVento})
        </Typography>

    </Paper>
    </Fragment>
  )
}




const Forecasts = (props) => {
  const classes = useStyles()
  const {forecasts} = props

  return (

  <Fragment>

    <Grid4x1
      a={<ForecastDay forecast={forecasts[0]} label={"Hoje"}/>}
      b={<ForecastDay forecast={forecasts[1]} label={"Amanhã"}/>}
      c={<ForecastDay forecast={forecasts[2]}/>}
      d={<ForecastDay forecast={forecasts[3]}/>}
    />

  </Fragment>

  )
}




export default Forecasts
