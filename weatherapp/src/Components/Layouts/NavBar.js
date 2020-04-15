import React from 'react'

import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  withStyles,
} from '@material-ui/core';

import Container from '@material-ui/core/Container';

import { BrowserRouter,Route,NavLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
    },

    links: {
        paddingRight: "10px",
        color: "white",
        textDecoration: 'none',

    },

    active: {
        fontWeight: "bold"
    },

    toolbar: {
        minHeight: 50,
      },

  }));



const NavBar = () => {

    const classes = useStyles();

    return(

    <AppBar position="static" className={classes.AppBar}>
        <Typography  variant="body1" >
        <Toolbar className={classes.toolbar}>

        <NavLink exact className={classes.links} activeClassName={classes.active} to="/">Home</NavLink>
        <NavLink className={classes.links}  activeClassName={classes.active}  to="/Locations">Locations</NavLink>

        </Toolbar>
        </Typography>
    </AppBar>

    )
}

export default NavBar;
