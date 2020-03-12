import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';


import Constants from '../data/Constants.js';
import Place from '../Components/Place.js';

const useStyles = makeStyles(theme => ({

}));


 class Home extends Component  {
  // const classes = useStyles();
   state = {};


   getWeather(id) {

     console.log(id)

     if (this.state.forecast && this.state.forecast.has(id)){
       return this.state.forecast.get(id)
     }

   }

   componentDidMount(){

     fetch('https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/hp-daily-forecast-day0.json')
     .then(response => response.json())
     .then(json => {


       if (json && json.data){
            const forecast = new Map(json.data.map(i => [i.globalIdLocal, i]));
            this.setState({forecast})
       }

     })
     .catch( error => {alert(error.message)})
   }


   componentWillUnmount(){
   }


    render(){

    return (
      <div>
        {
          Constants.getPlaces().map(PLACE =>
            this.getWeather(PLACE.globalIdLocal) ?
            <Place key={PLACE.globalIdLocal} place={PLACE} forecast={this.getWeather(PLACE.globalIdLocal)}></Place>
            : "")
        }
      </div>
  )}
}

export default Home
