import React from 'react';
import './NavBar.css';

class NavBar extends React.Component {

	constructor(props) {
		super(props);
		this.menuToggle = this.menuToggle.bind(this);
		this.state = {
			mobileMenuToggle: false
		};
	}

	menuToggle = () => {

		console.log(this.state.mobileMenuToggle);
		this.setState({ mobileMenuToggle: !this.state.mobileMenuToggle });		

		var x = document.getElementById("nav_id");
	    if (x.className === "navbar") {
	        x.className += " responsive";
	    } else {
	        x.className = "topnav";
	    }
	};

	isActive = (route) => {

		if(this.props.route === route) {
			return 'active';
		}
	};

	slideDownNavbar	 = () => {
		if( this.props.scrollPixelsY > 700) {
			return '0';
		}
	}

	render() {
		return(
			<header className={this.state.mobileMenuToggle? "navbar responsive":"navbar"} id="nav_id" style={{top: this.slideDownNavbar()}} >			

				<div className="left">Logo</div>
				
				<div className={`left ${this.isActive('home')} `} 		onClick={() => this.props.routeChange('home')} >
					homeScreen
				</div>				
				<div className={ `left ${this.isActive('mySkills')}`} 	onClick={() => this.props.routeChange('mySkills')} >
					whatILoveToDo
				</div>
				<div className={ `left ${this.isActive('myApps')}`} 	onClick={() => this.props.routeChange('myApps')} >
					myApps
				</div>
				<div className={ `left ${this.isActive('contact')}`} 	onClick={() => this.props.routeChange('contact')} >
					contactMe
				</div>

				<div className="left"> {this.props.route} </div>
				<div className="left"> {this.props.scrollPixelsY} </div>

				<div className="right"></div>				
				<div className={`right ${this.isActive('register')} `} 	onClick={() => this.props.routeChange('register')} >
					Register
				</div>	
				<div className={`right ${this.isActive('login')} `} 	onClick={() => this.props.routeChange('login')} >
					Login
				</div>

				<div className="mobileMenu" onClick={this.menuToggle}>
    				<i className="fa fa-bars"></i>
  				</div>

			</header>
		);
	};
}

export default NavBar;
