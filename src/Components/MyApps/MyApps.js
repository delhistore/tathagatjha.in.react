import React from 'react';
import './MyApps.css';

class MyApps extends React.Component {

	slideInFromLeft = () => {
		
		if(this.props.scrollPixelsY > 3081) {
			console.log('inside');
			let slideIn = this.props.scrollPixelsY - 4500;
			return "translateX(" + slideIn + "px)";
		}		
	};

	slideInFromRight = () => {
		
		if(this.props.scrollPixelsY > 3081) {

			let slideIn = 4500 - this.props.scrollPixelsY;
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
				<div className='myAppsleft' style={{transform: this.slideInFromLeft()}} >
					App1
				</div>
				<div >
					some space
				</div>
				<div className='myAppsright' style={{transform: this.slideInFromRight()}}>
					App2
				</div>
				<div >
					some space
				</div>
				<div className='myAppsleft' style={{transform: this.slideInFromLeft()}}>
					App3
				</div>
				<div >
					some space
				</div>
				<div className='myAppsright' style={{transform: this.slideInFromRight()}}>
					App4
				</div>
				<div >
					some space
				</div>
				<div className='myAppsleft' style={{transform: this.slideInFromLeft()}}>
					App5
				</div>
			</div>
		);
	};
}

export default MyApps;