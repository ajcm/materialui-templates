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
  const {headers,rows} = props

  return (

    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
          {headers ? headers.map( h => <TableCell>{h}</TableCell>)  : '' }
          </TableRow>
        </TableHead>

          {rows ?  rows.map(row =>   <DataTableRow headers={headers} row={row}/>) : ''}

      </Table>
    </TableContainer>
  )
}



function DataTableRow(props) {
  const classes = styles();
  const {headers,row} = props

  return  (
        <TableRow>
        {headers ? headers.map( h =>  <TableCell>{row[h]}</TableCell>)   : '' }
        </TableRow>
  )
}

const TableView = (props) => {
  const classes = styles();
  const {headers,rows} = props
  



  return (
    <div className={classes.root}>
    <DataTable headers={headers} rows={rows} />
    </div>
)}

export default TableView
