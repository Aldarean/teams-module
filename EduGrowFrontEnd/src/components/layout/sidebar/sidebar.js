import React, { Component } from 'react';
import Dashboard from '@material-ui/icons/Dashboard';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar-container">

        <header className="sidebar-container__header">
          <h1>Sufee <span>Admin</span></h1>
        </header>
          
        <nav className="sidebar-container__nav">  
          <ul className="nav__link-list">
              <li>
                <Dashboard />
                aklfdlkdflkfd</li>
          </ul>
          
        </nav>


      </div>
    )
  }
}


export default Sidebar; 
