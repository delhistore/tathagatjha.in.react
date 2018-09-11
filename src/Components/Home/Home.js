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

	render() {
		return(
			<div className="home">

				
				<div className="doorLeft" style={{transform: this.slideOutToLeft()}}>
					
				</div>

				<div className="doorRight" style={{transform: this.slideOutToRight()}}>
					<div className="namePlate" style={{transform: this.stay()}}>
						<img className="img" id="img" src={namePlate} alt='nameplate' /> 
					</div>
				</div>

				<div className="visibleVideo">
					
				</div>

				<div className="bg video" >
					<video height="100%" width="100%" autoPlay muted loop >
				  		<source src={livingRoom} type="video/mp4" />
						Your browser does not support the video tag. 
					</video>
					<audio autoPlay loop>
  						<source src={livingRoomAudio} type="audio/ogg" />
  					</audio>
				</div>

				<div className="bg interior" style={{backgroundSize: this.zoomIn()}}>
					
				</div>

				<div className="content">
					Content
				</div>
				<div className="bg bgImage2">
					
				</div>				
				<div className="content">
					Content
				</div>
				<div className="bg bgImage3">
					
				</div>
			</div>
		);
	};
}

export default Home;