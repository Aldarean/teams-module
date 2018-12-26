import React, { Component, Fragment } from 'react';

import Search from '@material-ui/icons/Search';
import NotificationImportant from '@material-ui/icons/NotificationImportant';
import Close from '@material-ui/icons/Close';
import Fade from 'react-reveal/Fade';


class TopNav extends Component {
  

  state = {
    showSearchBar: false
  };

  toggleSearchbar = () => {
    this.setState({showSearchBar: !this.state.showSearchBar});
    console.log(this.state.showSearchBar);
  }

  
  render() {


    const searchbar = (
      <Fade top duration={300}>
        <div className="searchbar">
          

          <div className="searchbar-container">
            <div className="searchbar-container__search-input">
              <form>
                <input type="text" placeholder="Search..." autoFocus="autofocus" />  
              </form>
              
            </div>

            <div className="searchbar-container__search-close" onClick={this.toggleSearchbar} >
                <Close />
            </div>
          </div>

        </div>
      </Fade>
    );

    return (

      <Fragment>
        {this.state.showSearchBar && searchbar }

        <div className="topnav">
              
              <div className="topnav__item" onClick={this.toggleSearchbar}>
                <Search />
              </div>
              
              <div className="topnav__item align-right">
                <NotificationImportant />
              </div>

              <div className="topnav__item">
                <img src={require("../../../assets/images/avatar_small.jpg")} alt="profile photo" />
              </div>

          </div>
      </Fragment>
    );
  }
}

export default TopNav;
