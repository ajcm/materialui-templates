import React from 'react'

class Clock extends React.Component {
  render() {
    return (
      <div>

        <h2> { this.props.message + ' '  + this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}


export default Clock
