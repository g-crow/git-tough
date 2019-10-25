import React from 'react'
import './AddClimb.css'

function Chart() {
  return (
    <div className="addClimbContainer">
      <p className="addClimbTitle">Add climb</p>
      <div className="inputOptions">
        Date <input className="routeDate option" id="routeDate"></input>
        Route name <input className="routeName option" id="routeName"></input>
        Grade <input className="routeGrade option" id="routeGrade"></input>
        Notes <input className="routeNotes option" id="routeNotes"></input>
      </div>
      <button className="addClimb">Add climb</button>
    </div>
  );
}

export default Chart