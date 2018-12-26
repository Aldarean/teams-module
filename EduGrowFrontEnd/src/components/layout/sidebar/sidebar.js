import React, { Component } from 'react';
import CreateMenuService from './../../../services/sidebar/createMenuService';
import Slide from 'react-reveal/Slide';

import Dashboard from '@material-ui/icons/Dashboard';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import People from '@material-ui/icons/People';
import MeetingRoom from '@material-ui/icons/MeetingRoom';
import DataUsage from '@material-ui/icons/DataUsage';
import Menu from '@material-ui/icons/Menu';

class Sidebar extends Component {

	state = {
		showMobileMenu: false,
		mobileNav: '',
		showDesktopNav: true,
		desktopNav: '',
		menuGeneral: [
			{
				type: 'menuItem',
				icon: <Dashboard />,
				text: 'Summary'
			}
		],
		menuManage: [
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
		],
		menuScores: [
			{
				type: 'menuItem',
				icon: <DataUsage />,
				text: 'Scores'
			}
		]
	};


	// is responsible for building the left menu initial state.
  	componentDidMount() {

		let desktopNav = (
		<nav className="sidebar-container__nav">  
			<CreateMenuService  menuData={this.state.menuGeneral} />

			<h2>Manage</h2>
			<CreateMenuService  menuData={this.state.menuManage} />
			
			<h2>Grades</h2>
			<CreateMenuService  menuData={this.state.menuScores} />
		</nav>
		)

		this.setState({ desktopNav: desktopNav});
		this.setState({ mobileNav: ''});
  	}



  	render() {

		// toggles the mobile menu and updates the state to decide what to render;
		let activateMobileMenu = () => {
			if (this.state.showMobileMenu === false) 
			{
				const mobileNav = (
					<div className="mobile-menu__wrapper">
						<Slide left duration={600}>
							<nav className="mobile-nav">
								<CreateMenuService  menuData={this.state.menuGeneral} />

								<h2>Manage</h2>
								<CreateMenuService  menuData={this.state.menuManage} />

								<h2>Grades</h2>
								<CreateMenuService  menuData={this.state.menuScores} />
							</nav>
						</Slide>
					</div>
				);
			
				this.setState({ mobileNav: mobileNav});
				this.setState({showDesktopNav: false})
			} 
			else 
			{
				this.setState({ mobileNav: ''});
				this.setState({ showDesktopNav: true});
			}
			
			this.setState({showMobileMenu: !this.state.showMobileMenu});
		}
		

		// We use an event listener to close the mobile window if the window gets bigger than 575px and the menu is still open.
		window.addEventListener('resize', (event) => {
			if (event.currentTarget.innerWidth > 575) 
			{
				if (this.state.showDesktopNav === false)
				{
					console.log('i execute');
					activateMobileMenu();
					this.setState({ showDesktopNav: true});
				}
			}
		});



		return (
			<div>
				<aside className="sidebar-container">
					
					<header className="sidebar-container__header">
						<h1>Edu <span>Grow</span></h1>

						<div className="sidebar-container__mobile-menu" onClick={activateMobileMenu}>
							<Menu />
						</div>

					</header>

					{this.state.showDesktopNav ? this.state.desktopNav : null}

				</aside>

				{/* mobile nav */}
				{this.state.mobileNav}
			</div>
			
		)
	}
}

export default Sidebar;