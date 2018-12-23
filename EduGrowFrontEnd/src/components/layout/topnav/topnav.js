import React, { Component } from 'react';
import Search from '@material-ui/icons/Search';
import NotificationImportant from '@material-ui/icons/NotificationImportant';

class TopNav extends Component {
  render() {
    return (
      <div class="topnav">
        
          <div class="topnav__item">
            <Search />
          </div>

          <div class="topnav__item">
            <NotificationImportant />
          </div>


      </div>
    )
  }
}

export default TopNav;
