import React from 'react'
import avatar from './img/gcrowavatar.jpeg'
import network from './img/network.png'
import './ProfileSideBar.css'

function ProfileSideBar() {
  return (
    <div className="profile">
      <img src={avatar} alt="user" className="profileImg" />
      <h2 className="fullName">
        Genevieve Crow
      </h2>
      <h3 className="username">
        g-climbs
      </h3>
      <button className="editProfile">Edit profile</button>
      <div className="info">
        <p className="description">
          Likes making climbing things complicated and, simply, a cute climber named Austin.
        </p>
        {/* TODO Add icons */}
        <div className="gym">
          <img src={network} alt="network" className="icon" /> 
          <p>@freestone</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileSideBar