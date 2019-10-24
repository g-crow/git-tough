import React from 'react'
import NavBar from './NavBar'
import ProfileSideBar from './ProfileSideBar'
import './App.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="main">
        <ProfileSideBar />
      </div>
    </div>
  );
}

export default App
