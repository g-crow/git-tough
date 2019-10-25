import React from 'react'
import './Chart.css'

function Chart() {
  return (
    <div className="chartContainer">
      <h2 className="chartTitle">
        19 climbs in the last year
      </h2>
      <div className="chart">
        <div className="yearContainer">
          <div className="entry" />
        </div>
        <p className="chartHelp">Learn how we count climbs</p>
      </div>
    </div>
  );
}

export default Chart