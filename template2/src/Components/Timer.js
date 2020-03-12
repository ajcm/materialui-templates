import React, {Component} from 'react'



class Timer extends Component {

  constructor(props) {
    super(props);

    console.log( this.props.date);
    this.state = {date:  this.props.date ?  this.props.date : new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }



  render(){

  //  console.log(this.props)

    return (
    <i> time {this.state.date.toLocaleTimeString()} </i>
  )
}//render
}//class

export default Timer
