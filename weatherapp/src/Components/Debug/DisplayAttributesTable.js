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

const getAttributes  = object => object ? Object.getOwnPropertyNames(object) : []



 const DisplayAttributesTable = (props) => {
   const json = props.json

    function getHeaders(json){
      if(!json){
        return
      } else if ( Array.isArray(json) && json.length > 0 ){
           return getAttributes(json[0])
      }else if (json.data &&  Array.isArray(json.data) &&  json.data.length > 0){
         return getAttributes(json.data[0])
       }
     }

     function getRows(json){
       if(!json){
         return
       } else if ( Array.isArray(json) && json.length > 0 ){
            return json
       }else if (json.data &&  Array.isArray(json.data) &&  json.data.length > 0){
          return json.data
        }
      }

     return (<TableView headers={getHeaders(json)} rows={getRows(json)}/>)

}



export default DisplayAttributesTable
