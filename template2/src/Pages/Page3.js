import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import TypesLong from '../Components/TypesLong'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop: '20px',
    minHeight: '85vh',

  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary

  },
}));



export default () => {
  const classes = useStyles();


  return (
    <Container className={classes.root}>
      <TypesLong/>
     </Container>
   );
}
