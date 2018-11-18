import React from 'react';
import './MySkills.css';
import gitLogo from '../../assets/images/github.png';
import googleDriveLogo from '../../assets/images/GoogleDrive.png';

class MySkills extends React.Component {

	render() {
		return(
			<div className="mySkills">
				<div className="content" style={{backgroundColor: '#333',lineHeight: '50px'}}>
						My Skills
				</div>

				<div className='flex'>

					<div className="github flexItem" >						
	
						<div style={{backgroundColor: '#28a745', height: '90px'}}>
							<img className="gitLogo" src={gitLogo} alt='nameplate' /> 
						</div>
						<div style={{backgroundColor: '#333', height: '275px'}}>

							<div style={{color:'white', position: 'relative', top: '40px', padding: '40px'}}>
								Visit my Github for technical projects.
							</div>

							<button type="button" class="btn btn-success" style={{ left:'40px', top: '70px', position: 'relative'}}>
								<a 
									style={{color: 'white'}}
									href='https://github.com/tjshanu'>
									Github Repository
								</a>
							</button>
						</div>
					</div>
			
					<div 
						className="LI-profile-badge linkedIn flexItem"  
						data-version="v1" 
						data-size="medium" 
						data-locale="en_US" 
						data-type="vertical" 
						data-theme="dark" 
						data-vanity="tathagat-jha">
							<a 
								className="LI-simple-link" 
								href='https://in.linkedin.com/in/tathagat-jha?trk=profile-badge'>
								Tathagat Jha
							</a>
					</div>
					

					<div className="github flexItem" >						
	
						<div style={{backgroundColor: '#f44141', height: '90px'}}>
							<img className="gdLogo" src={googleDriveLogo} alt='nameplate' /> 
						</div>
						<div style={{backgroundColor: '#333', height: '275px'}}>
							
							<div style={{color:'white', position: 'relative', top: '40px', padding: '30px'}}>
								Link to my resume.
							</div>							

							<button type="button" class="btn btn-success" style={{border: 'none', backgroundColor:'#f44141', left:'70px', top: '70px', position: 'relative'}}>
								<a 
									style={{color: 'white'}}
									href='https://drive.google.com/file/d/1aV37RksQIPvTbUC6AciYXQHJHAtSzm12/view?usp=sharing'>
									Resume
								</a>
							</button>
						</div>
					</div>

				</div>
			</div>
		);
	};
}

export default MySkills;