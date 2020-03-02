import React from 'react';
import {Link} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

// export default ({children}) => {
//
//   const style = {
//     display: 'inline-block',
//     margin: 10,
//     marginBottom: 30
//   };
//
//   return (
//   <div>
//     <div>
//     <h5 style={style}><Link to='/'>Home</Link></h5>
//     <h5 style={style}><Link to='/jokes'>Jokes</Link></h5>
//     </div>
//     {children}
//   </div>
//   )
// }


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop: '20px',
    paddingBottom: '10px',
    minHeight: '90vh',
    padding: theme.spacing(2),
    textAlign: 'center',

  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary

  },
}));

export default function ({children})  {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
    {children}

    </Container>
   );
}



//export default Header;
