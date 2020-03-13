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





const Location = (props) => {
  const classes = useStyles()
  const id = props.match.params.id

  return (
    <Box container maxWidth="95%" className={classes.grid} style={{ backgroundColor: '#cfe8fc',  padding:'10px', marginBottom: '20px'  }} >
      <Typography variant="h5" >Location {id}</Typography>

    </Box>
)}

export default Location
