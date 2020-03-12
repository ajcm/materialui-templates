import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';

import Welcome from '../Components/Welcome'
import Clock from '../Components/Clock'
import Simple from '../Components/Simple'
import Timer from '../Components/Timer'
import Tasks from '../Components/Tasks'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop: '20px'

  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));



function Welcome2(props) {
  return <h1>Hello, {props.name}</h1>;
}

function Main(props) {

  return <div className="App">
    <Simple />
    <Welcome  name ="whatever"/>
    <Welcome2  name ="whatever 2"/>

    <Clock message="current time" date={new Date()}   />

    <Timer arg1="arg1" arg2="arg2" arg3="arg3" date={new Date("October 13, 2013 11:13:00")} />

    <Tasks/>
    </div>

}





export default () => {
  const classes = useStyles();


  return (
    <Container className={classes.root}>
       <Grid container spacing={3}>
         <Grid item xs={12}>
           <Paper className={classes.paper}>
            <Main/>
          </Paper>
         </Grid>
       </Grid>
     </Container>
   );
}
