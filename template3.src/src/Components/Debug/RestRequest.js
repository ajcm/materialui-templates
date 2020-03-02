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

import SourceView from './SourceView'
import TableView from './TableView'
import DisplayAttributesTable from './DisplayAttributesTable'


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




 const RestRequest = (props) => {
  const classes = styles();
  const {url} = props
  const [json, setJson] = useState();
  const [error,setError] = useState();

  useEffect(() => request(),[url])

 function request(){
   if (url){
     fetch(url)
     .then(response =>  response.json())
     .then(json => {setJson(json); })
     .catch(e => { setError(e)})
   }
  }

return (
  <div className={classes.root}>
  {error ? <pre className={classes.pre} >Got Error{JSON.stringify(error)}</pre> :  (<Fragment><SourceView json={json}/> <DisplayAttributesTable  json={json}/> </Fragment>) }
  </div>
)

}

export default RestRequest
