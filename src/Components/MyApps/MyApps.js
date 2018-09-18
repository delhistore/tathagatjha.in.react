import React from 'react';
import './MyApps.css';

class MyApps extends React.Component {

	slideInFromLeft = () => {
		
		if(this.props.scrollPixelsY > 3081) {
			let slideIn = this.props.scrollPixelsY - 4000;
			return "translateX(" + slideIn + "px)";
		}		
	};

	slideInFromRight = () => {
		
		if(this.props.scrollPixelsY > 3081) {

			let slideIn = 4000 - this.props.scrollPixelsY;
			return "translateX(" + slideIn + "px)";
		}		
	};

	//{transform: this.slideInFromLeft}
	//(this.props.position.myApps - 3081)
	render() {
		return(
			<div className="myApps">
				<hr />
				My Apps - {this.props.position.myApps} {this.props.scrollPixelsY} 
				<div style={{position: 'realtive',top: '300px'}}>
					
				</div>
				<div className='myAppsleft' style={{transform: this.slideInFromLeft()}} >
					App1
				</div>
				<div >
					
				</div>
				<div className='myAppsright' style={{transform: this.slideInFromRight()}}>
					App2
				</div>
				<div >
					
				</div>
				<div className='myAppsleft' style={{transform: this.slideInFromLeft()}}>
					App3
				</div>
				<div >
					
				</div>
				<div className='myAppsright' style={{transform: this.slideInFromRight()}}>
					App4
				</div>
			</div>
		);
	};
}

export default MyApps;