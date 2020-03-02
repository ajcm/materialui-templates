import React,{Fragment} from 'react';
import {
  FormControl,
  InputLabel ,
  Input, FormHelperText,TextField,Box
} from '@material-ui/core';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
      backgroundColor: "silver",
  //    fontSize: "20px",
      color: "white",
      borderTop: "1px solid #E7E7E7",
      textAlign: "center",
      padding: "5px",
      position: "fixed",
      left: "0",
      bottom: "0",
  ///    height: "60px",
      width: "100%"
    }
  }));


export default function Footer() {
    const classes = useStyles();

    return (
      <div className={classes.root}>
      <Container>
        <Typography variant="body2" color="textSecondary" align="left">
          {'Copyright © '} Your Website {' '}{new Date().getFullYear()}{'.'}
        </Typography>
      </Container>
      </div>
    );
  }

//
// import React from "react";
// import { render } from "react-dom";



// function Footer({ children }) {
//   return (
//     <div>
//       <div style={phantomStyle} />
//       <div style={footerStyle}>{children}</div>
//     </div>
//   );
// }
//
// export default Footer
