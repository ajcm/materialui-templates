import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },

    buttons:  {
        textAlign: 'left',
        paddingTop: '20px',
        border: '1px'
    }
  }

}));

export default () => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <div><Typography variant="h5" gutterBottom>Please login</Typography></div>
        <div><TextField id="standard-required" label="Username" /></div>

        <div><TextField id="standard-password-input"  label="Password"        type="password"        autoComplete="current-password"      /></div>

        <Grid  style={{paddingTop: '10px'}}>
          <Button variant="outlined">Login</Button>
          <Button color="secondary">Reset</Button>
        </Grid>

      </div>
    </form>
  );
}
