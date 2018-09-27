import React from 'react';
import './Home.css';
import namePlate from "../../assets/images/namePlateEdited.png";
import livingRoom from '../../assets/videos/livingRoom.mp4';
import livingRoomAudio from '../../assets/audios/livingRoomAudio.mp3';

class Home extends React.Component {

	slideOutToLeft = () => {

		if(this.props.scrollPixelsY < this.props.position.mySkills) {

			let slideOut = this.props.scrollPixelsY;
			return "translateX(-" + slideOut + "px)";
		}		
	};

	slideOutToRight = () => {
		
		if(this.props.scrollPixelsY < this.props.position.mySkills) {

			let slideOut = this.props.scrollPixelsY;
			return "translateX(" + slideOut + "px)";
		}		
	};

	zoomIn = () => {
		
		if(this.props.scrollPixelsY < this.props.position.mySkills) {

			let zoom = 100 + (this.props.scrollPixelsY / 100);
			return zoom + "% "  + zoom + "%";
		}		
	};

	stay = () => {
		
		if(this.props.scrollPixelsY < this.props.position.mySkills) {

			let down = this.props.scrollPixelsY;
			return "translateY(" + down + "px)";
		}		
	};

	exitHomeScreenElements = () => {
		if(this.props.scrollPixelsY > 2000) {
			return 'none';
		}
	}

	componentDidMount() {
   		window.addEventListener('scroll', this.pauseAudio);
  	}; 

	pauseAudio = () => {
		if( (this.props.scrollPixelsY < 100) || (this.props.scrollPixelsY > 2000) ) {
			let audio = document.getElementById('livingRoomAudio');
			audio.pause();
		}
		else {
			let audio = document.getElementById('livingRoomAudio');
			audio.play();
		}
	}

	render() {
		return(
			<div className="home">

				
				<div className="doorLeft" style={{transform: this.slideOutToLeft(), display: this.exitHomeScreenElements()}}>
					
				</div>

				<div className="doorRight" style={{transform: this.slideOutToRight(), display: this.exitHomeScreenElements()}}>
					<div className="namePlate" style={{transform: this.stay()}}>
						<img className="img" id="img" src={namePlate} alt='nameplate' /> 
					</div>
				</div>

				<div className="visibleVideo">
					
				</div>

				<div className="bg video" style={{display: this.exitHomeScreenElements()}}>

					<div className="videoText1">
						Make yourself at 
					</div>
					<div className="videoText2">
						Home Screen 
					</div>
					<video height="100%" width="100%" autoPlay muted loop >
				  		<source src={livingRoom} type="video/mp4" />
						Your browser does not support the video tag. 
					</video>
					<audio autoPlay loop id='livingRoomAudio'>
  						<source src={livingRoomAudio} type="audio/ogg" />
  					</audio>
				</div>

				<div className="bg bgImage1">
					<div className="content" style={{backgroundColor: '#333',lineHeight: '50px'}}>
						Please Use Updated Chrome Browser on a Desktop
					</div>
				</div>				
				<div className="content" style={{backgroundColor: '#333',lineHeight: '50px'}}>
						Website currently Under Development
				</div>
				<div className="bg bgImage2">
					
				</div>
			</div>
		);
	};
}

export default Home;