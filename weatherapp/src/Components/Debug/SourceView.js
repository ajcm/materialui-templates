import React, { useState, useEffect, Fragment } from 'react';
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

import { makeStyles } from '@material-ui/core/styles';


const styles  = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  //  paddingTop: '20px',
  //  minHeight: '85vh',
    textAlign: 'left'
  },
}));


const Source = json => json ? JSON.stringify(json, null, 2) : ''


const SourceView = (props) => {
  const classes = styles();
  const {json} = props
  const [toogle,setToogle] = useState(false);

  const onClick = event =>  setToogle(!toogle)

  return (
    <div className={classes.root}>
    <Link href='#' onClick = {onClick}> {toogle ? 'hide code' : 'show code'}</Link>
    {toogle ?   <pre>{Source(json)}</pre>  : '' }
    </div>
)}

export default SourceView
