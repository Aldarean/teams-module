import React, { Component } from 'react';
import Search from '@material-ui/icons/Search';
import NotificationImportant from '@material-ui/icons/NotificationImportant';

class TopNav extends Component {
  render() {
    return (
      <div className="topnav">
        
          <div className="topnav__item">
            <Search />
          </div>

          <div className="topnav__item">
            <NotificationImportant />
          </div>


      </div>
    )
  }
}

export default TopNav;
