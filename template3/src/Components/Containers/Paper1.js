import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingBottom: '10px'


  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flexGrow: 1,
    minHeight: '85vh',
  //  backgroundColor: 'silver'
  },
}));



export default function ({children})  {
  const classes = useStyles();


  return (
       <Grid container spacing={3} >
         <Grid item xs={12}>
           <Paper variant="outlined"   className={classes.paper}>
          {children}
          </Paper>
         </Grid>
       </Grid>

   );
}
