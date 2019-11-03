import React, { Component } from 'react';
import './AddClimb.css'
import DatePicker from 'react-date-picker'

class Chart extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  render() {
    return (
      <div className="addClimbContainer">
        <p className="addClimbTitle">Add climb</p>
        <div className="inputOptions">
          Date <DatePicker 
            className="routeDate option" 
            id="routeDate" 
            onChange={this.onChange}
            value={this.state.date}
            />
          <span id="numClimbs">Climbs <input className="routeGrade option" id="routeGrade"></input></span>
          Notes <input className="routeNotes option" id="routeNotes"></input>
        </div>
        <button className="addClimb">Add session</button>
      </div>
    );
  }
}

export default Chart