import React from 'react';
import './NavBar.css'

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

	render() {
		return(
			<header className={this.state.mobileMenuToggle? "navbar responsive":"navbar"} id="nav_id">			

				<div className="left">Logo Here</div>
				<div className="active left">Home</div>
				<div className="left">About</div>
				<div className="left">Apps</div>
				<div className="left">Contact</div>

				<div className="right"></div>
				<div className="right">Register</div>	
				<div className="right">Login</div>

				<div className="mobileMenu" onClick={this.menuToggle}>
    				<i className="fa fa-bars"></i>
  				</div>

			</header>
		);
	};
}

export default NavBar;
