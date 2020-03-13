import React, { useState, useEffect, Fragment} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import {
  TextField ,
  AppBar,
  Button,
  Toolbar,
  Typography,
  Select
} from '@material-ui/core';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { makeStyles } from '@material-ui/core/styles';


import { BrowserRouter,Route,NavLink } from 'react-router-dom';


const styles  = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop: '20px',
    minHeight: '85vh',
    textAlign: 'left',
    '& > * + *': {
        marginLeft: theme.spacing(2),
      },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary

  },

  text: {
  //  color: theme.palette.text.secondary

  },

  links: {
      paddingRight: "10px",
    //  color: "white",
      textDecoration: 'none',

  },

}));


function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}


const Debug = (props) => {
  const classes = styles();
  const preventDefault = event => event.preventDefault();


  return (
  <Fragment>
    <Typography variant="h5" >Debug</Typography>
    <Typography className={classes.root}>
    <Paper  className={classes.paper}>

    <List component="nav" aria-label="secondary mailbox folders">

        <ListItemLink href="#simple-list">
        <NavLink className={classes.links}  to="/Debug/Assets">Assets</NavLink>
        </ListItemLink>

        <ListItemLink href="#simple-list">
        <NavLink className={classes.links}  to="/Debug/RestRequests">RestRequests</NavLink>
        </ListItemLink>

        <ListItemLink href="#simple-list">
        <NavLink className={classes.links}  to="/Debug/ForecastLocation">ForecastLocation</NavLink>
        </ListItemLink>
    </List>

      </Paper>
    </Typography>

  </Fragment>
)

}

export default Debug
