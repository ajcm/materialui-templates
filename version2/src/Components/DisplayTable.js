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

import TableData from './TableData'

const styles  = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    textAlign: 'left',
        margins: '0px'

  },
  pre: {
    margins: '0px'
  },

  text: {
    color: theme.palette.text.secondary

  },
}));


const DisplayTable = (props) => {
   const {headers, data} = props
   const names = (headers) ? headers.map(e => e.key) : []
   const keys = (headers) ? headers.map(e => e.value) : []

   return (<TableData headers={names} keys={keys} data={data} />)

}


export default DisplayTable
