import React, { Component } from 'react';
import CreateMenuService from './../../../services/sidebar/createMenuService';

import Dashboard from '@material-ui/icons/Dashboard';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import People from '@material-ui/icons/People';
import MeetingRoom from '@material-ui/icons/MeetingRoom';
import DataUsage from '@material-ui/icons/DataUsage';
import  Menu from '@material-ui/icons/Menu';

class Sidebar extends Component {



  state = {
    showMobileMenu: false,
    mobileNav: '',
    showDesktopNav: true,
    desktopNav: ''
  };



  componentDidMount() {

    let menuGeneral = [
      {
        type: 'menuItem',
        icon: <Dashboard />,
        text: 'Summary'
      }
    ];

    let menuManage = [
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


    let desktopNav = (
      <nav className="sidebar-container__nav">  
        <CreateMenuService  menuData={menuGeneral} />

        <h2>Manage</h2>
        <CreateMenuService  menuData={menuManage} />
        
        <h2>Grades</h2>
        <CreateMenuService  menuData={menuScores} />
      </nav>
    )

    this.setState({ desktopNav: desktopNav});
    this.setState({ mobileNav: ''});
  }



  render() {

    let activateMobileMenu = () => {


      if (this.state.showMobileMenu === false) {

        const mobileNav = (
          <nav className="sidebar-container__mobile-nav">
            test
          </nav>
		);
		
        this.setState({ mobileNav: mobileNav});
		this.setState({showDesktopNav: false})
		
      } else {
      
        this.setState({ mobileNav: ''});
        this.setState({ showDesktopNav: true});
        
	  }
	  
	  this.setState({showMobileMenu: !this.state.showMobileMenu});
	  console.log(this.state.showMobileMenu);
	}
	


	window.addEventListener('resize', (event) => {
		if (event.currentTarget.innerWidth > 575) {

			if (this.state.showDesktopNav === false) {
				console.log('i execute');
				activateMobileMenu();
				this.setState({ showDesktopNav: true});
			}
		
		}
	});



    return (
      <aside className="sidebar-container">

        <header className="sidebar-container__header">
          <h1>Edu <span>Grow</span></h1>

          <div className="sidebar-container__mobile-menu" onClick={activateMobileMenu}>
            <Menu />
          </div>
 
        </header>

      
        {this.state.mobileNav}
        {this.state.showDesktopNav ? this.state.desktopNav : null}
      
        
      </aside>
    )
  }
}

export default Sidebar;