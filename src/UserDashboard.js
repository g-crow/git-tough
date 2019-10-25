import React from 'react'
import './UserDashboard.css'
import Posts from './Posts'
import Chart from './Chart'
import AddClimb from './AddClimb'

function UserDashboard() {
  return (
    <div className="userDashboard">
      <Posts />
      <Chart />
      <AddClimb />
    </div>
  );
}

export default UserDashboard