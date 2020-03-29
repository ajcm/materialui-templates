import React, { useState, useEffect, Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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



const DataTable = (props) => {
  const classes = styles()
  const {headers,keys,data} = props

  return (

<TableContainer>
<Table>

  <TableHead>
  <TableRow>
  {headers ? headers.map( h => <TableCell>{h}</TableCell>)  : '' }
  </TableRow>
  </TableHead>

  {data ?  data.map(row => <DataTableRow keys={keys} row={row}/>) : ''}

</Table>
</TableContainer>
  )
}



function DataTableRow(props) {
  const classes = styles();
  const {keys,row} = props

  return  (
    <TableRow>
    {keys.map( h =>  <TableCell>{row[h]}</TableCell>)  }
    </TableRow>
  )
}


const TableData = (props) => {
  const classes = styles();
  const {headers,keys,data} = props


  return (
    <div className={classes.root}>
    <DataTable  headers={headers} keys={keys} data={data} />
    </div>
)}

export default TableData
