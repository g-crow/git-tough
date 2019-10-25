import React from 'react'
import NavBar from './NavBar'
import UserDashboard from './UserDashboard'
import ProfileSideBar from './ProfileSideBar'
import './App.css'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {climbs: true};
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="main-container">
          <ProfileSideBar />
          <UserDashboard />
        </div>
      </div>
    );
  }
}

export default App