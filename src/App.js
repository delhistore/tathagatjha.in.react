import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar.js';

import Home from './Components/Home/Home.js';
import MySkills from './Components/MySkills/MySkills.js';
import MyApps from './Components/MyApps/MyApps.js';
import Contact from './Components/Contact/Contact.js';

import Footer from './Components/Footer/Footer.js';

const pixelPosition = {
    home: 0,
    mySkills: 3264,
    myApps: 8049,
    contact: 4865
}

class App extends Component {

  constructor() {
    super();
    this.routeChange = this.routeChange.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.state = {
      scrollPixelsY: 0,
      route: 'home',
      winWidth: window.innerWidth,
      mobile: false
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateWindowDimensions);
    window.addEventListener('scroll', this.handleScroll);
    this.updateWindowDimensions();
    console.log(this.state.winWidth);
  }; 

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  updateWindowDimensions() {
    this.setState({ winWidth: window.innerWidth});
    if(this.state.winWidth < 1000) {
      this.setState({ mobile: true });
    }
    else this.setState({ mobile: false });
  }

  handleScroll = () => {
    this.setState({
      scrollPixelsY: window.scrollY
    });

    if( (window.scrollY >= pixelPosition.home) && (window.scrollY < pixelPosition.mySkills) ) {
      this.setState({
        route: 'home'
      })
    }
    else if( (window.scrollY >= pixelPosition.mySkills) && (window.scrollY < pixelPosition.myApps) ) {
      this.setState({
        route: 'mySkills'
      })
    }
    else if( (window.scrollY >= pixelPosition.myApps) && (window.scrollY < pixelPosition.contact) ) {
      this.setState({
        route: 'myApps'
      })
    }
    else {
      this.setState({
        route: 'contact'
      })
    }
  };

  routeChange = (route) => {

    this.setState({
      route: route
    });

    switch(route) {
      case 'home': {
        this.smoothScroll(pixelPosition.home);
        break;
      }
      case 'myApps': {
        this.smoothScroll(pixelPosition.myApps);
        break;
      }
      case 'mySkills':{
        this.smoothScroll(pixelPosition.mySkills);
        break;
      }
      case 'contact': {
       this.smoothScroll(pixelPosition.contact);
        break;
      }
      default: break;
    };
  };  

  smoothScroll = (target) => {
      window.scrollTo({top: target, behavior: 'smooth'});
  }

  render() {
    return (
      <div className="App" >
        {this.state.mobile === true
          ?
            <div style={{width: '100%', height: '100vh', backgroundColor: '#333', color:'white', fontSize:'30px',textAlign: 'center', lineHeight: '40px'}}>
              <div style={{position: 'relative', top: '35%'}}>
                Please use a Desktop with updated Chrome browser for best Experience. <br />
                Make sure the browser window is maximised!!
              </div>
              
            </div>
          :
            <div>

              <NavBar 
                scrollPixelsY={this.state.scrollPixelsY}
                route={this.state.route} 
                routeChange={this.routeChange} 
                smoothScroll={this.smoothScroll}
              />    

              <Home position={pixelPosition} scrollPixelsY={this.state.scrollPixelsY}/>
              
              <MySkills />
              <MyApps position={pixelPosition} scrollPixelsY={this.state.scrollPixelsY} />
              <Contact />

              <Footer />

            </div>
        }
      </div>
    );

  }
}

export default App;
