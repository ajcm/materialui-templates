import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import Types from '../Components/Types'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop: '10px',
    marginBottom: '30px'

  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flexGrow: 1
  },
}));



export default () => {
  const classes = useStyles();


  return (
    <Container className={classes.root}  style={{ backgroundColor: '#cfe8fc' }}>
       <Grid container spacing={3} >
         <Grid item xs={6}>
           <Paper className={classes.paper}  >
           <Types/>
          </Paper>
         </Grid>

         <Grid item xs={6}>
           <Paper className={classes.paper}  >
           <Types/>
          </Paper>
         </Grid>


         <Grid item xs={8}>
           <Paper className={classes.paper}  style={{ height: '100%' }} >
           <Types/>
          </Paper>
         </Grid>

         <Grid item xs={4}>
           <Paper className={classes.paper} >
           <Types/>
          </Paper>
         </Grid>

       </Grid>
     </Container>
   );
}
