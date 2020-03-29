import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Constants from '../data/Constants.js';


import Forecast from '../Components/Forecast.js';


const City = (props) => {

    const {local} = props.city;

    return (<div>{local}</div>)
}// class



const Local = (props) => {

    const {local,idDistrito} = props.place;

    return (
  <div>
      {Constants.getLocations().filter(city => city.idDistrito == idDistrito).map(city => <City city={city} />)}
    </div>
)

}// class


const Cities = (props) => {

    const {local} = props.place;

    return (
    <div>
      <h3>{local}</h3>
    </div>
)

}// class







class Place extends Component{
 // const classes = useStyles();

 constructor(props) {
    super(props);
    this.state = {isToggleOn: false};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }


    state = { showCities: false  };
    place = this.props.place
    forecast = this.props.forecast


    handleClick() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
    }

    //
  //  const forecast = props.forecast;
  //        <Forecast id={globalIdLocal} forecast={forecast}> </Forecast>

    render(){


      if (!this.forecast)
        return


      return (
      <Paper onClick={this.handleClick}  >

      <Cities place={this.place} />
      <Forecast forecast={this.forecast}></Forecast>


        {this.state.isToggleOn ? <Local place={this.place}></Local> : ''}

      </Paper>)
  }
}// class

export default Place
