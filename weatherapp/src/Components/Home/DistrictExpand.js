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
import Location from './Forecast/Location'



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




const DistrictExpand = (props) => {
  const classes = useStyles()
  const {locations} = props

    //init
    useEffect(() => {

    },[])


  return (
    <Fragment>
    {
      locations.map(l => <Location key={l.globalIdLocal} location={l}> </Location>)

    }
    </Fragment>
  )

}




export default DistrictExpand
