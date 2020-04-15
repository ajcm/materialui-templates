import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
}));

export default function Grid4x1({a,b,c,d}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Grid container spacing={3}>

        <Grid item xs={3}>{a}</Grid>
        <Grid item xs={3}>{b}</Grid>
        <Grid item xs={3}>{c}</Grid>
        <Grid item xs={3}>{d}</Grid>

      </Grid>
    </div>
  );
}
