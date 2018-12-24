import React, { Component } from 'react';
import CreateMenuService from './../../../services/sidebar/createMenuService';

import Dashboard from '@material-ui/icons/Dashboard';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import People from '@material-ui/icons/People';
import MeetingRoom from '@material-ui/icons/MeetingRoom';
import DataUsage from '@material-ui/icons/DataUsage';

class Sidebar extends Component {

  render() {

    let menuGeneral = [
        {
          type: 'menuItem',
          icon: <Dashboard />,
          text: 'Summary'
        }
    ];

    let menuMenage = [
      {
        type: 'menuItem',
        icon: <LibraryBooks />,
        text: 'View classes'
      },
      {
        type: 'menuItem',
        icon: <People />,
        text: 'Students'
      },
      {
        type: 'menuItem',
        icon: <MeetingRoom />,
        text: 'Classrooms'
      },

    ];

    let menuScores = [
      {
        type: 'menuItem',
        icon: <DataUsage />,
        text: 'Scores'
      }
    ];

    return (
      <aside className="sidebar-container">

        <header className="sidebar-container__header">
          <h1>Edu <span>Grow</span></h1>
        </header>

        <nav className="sidebar-container__nav">  
          <CreateMenuService  menuData={menuGeneral} />

          <h2>Manage</h2>
          <CreateMenuService  menuData={menuMenage} />
          
          <h2>Grades</h2>
          <CreateMenuService  menuData={menuScores} />
        </nav>

      </aside>
    )
  }
}

export default Sidebar;