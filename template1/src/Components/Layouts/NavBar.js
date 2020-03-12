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
        <Typography  variant="h6" >
        <Toolbar   className={classes.toolbar}>
        <NavLink exact   className={classes.links} activeClassName={classes.active} to="/">Home</NavLink>
        <NavLink className={classes.links}  activeClassName={classes.active}  to="/page1">One</NavLink>
        <NavLink className={classes.links} activeClassName={classes.active} to="/page2">Two</NavLink>
        <NavLink className={classes.links} activeClassName={classes.active} to="/page3">Three</NavLink>
        <NavLink className={classes.links} activeClassName={classes.active} to="/page4">Four</NavLink>
        </Toolbar>
    </Typography>
    </AppBar>

    )
}

export default NavBar;
