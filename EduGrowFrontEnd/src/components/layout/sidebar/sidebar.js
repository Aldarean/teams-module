import React, { Component } from 'react';
import Dashboard from '@material-ui/icons/Dashboard';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import People from '@material-ui/icons/People';
import MeetingRoom from '@material-ui/icons/MeetingRoom';
import DataUsage from '@material-ui/icons/DataUsage';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar-container">

        <header className="sidebar-container__header">
          <h1>Edu <span>Grow</span></h1>
        </header>
          
        <nav className="sidebar-container__nav">  
          <ul className="nav__link-list">
              <li>
                <span class="link-icon"><Dashboard /></span>
                <span class="link-text">Summary</span>
              </li>
          </ul>

          <h2>Manage</h2>
          <ul className="nav__link-list">
              <li>
                <span class="link-icon"><LibraryBooks /></span>
                <span class="link-text">View Classes</span>
              </li>

              <li>
                <span class="link-icon"><People /></span>
                <span class="link-text">Students</span>
              </li>

              <li>
                <span class="link-icon"><MeetingRoom /></span>
                <span class="link-text">Classrooms</span>
              </li>
          </ul>

          <h2>Grades</h2>
          <ul className="nav__link-list">
              <li>
                <span class="link-icon"><DataUsage /></span>
                <span class="link-text">Scores</span>
              </li>

            
          </ul>
        </nav>

      </div>
    )
  }
}


export default Sidebar; 
