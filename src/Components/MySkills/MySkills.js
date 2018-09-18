import React from 'react';
import './MySkills.css';

class MySkills extends React.Component {

	render() {
		return(
			<div className="mySkills">
				<div className="content" style={{backgroundColor: '#333',lineHeight: '50px'}}>
						My Skills
				</div>
			
				<div 
					class="LI-profile-badge linkedIn"  
					data-version="v1" 
					data-size="medium" 
					data-locale="en_US" 
					data-type="vertical" 
					data-theme="dark" 
					data-vanity="tathagat-jha">
						<a 
							class="LI-simple-link" 
							href='https://in.linkedin.com/in/tathagat-jha?trk=profile-badge'>
							Tathagat Jha
						</a>
				</div>

			</div>
		);
	};
}

export default MySkills;