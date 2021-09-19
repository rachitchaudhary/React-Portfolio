import React from 'react';
import './App.css';
import MyNavbar from "./components/navbar/navbar.component";
import MyCarousal from './components/carousal/carousal.component';
import MyTitleMessage from "./components/title-message/title-message.component";
import Skills from "./components/skills/skills.component";
// import { Slide,  } from 'react-reveal';
import Education from './components/education/education.component';
function App() {
  return (
    <div className="App">
        
        <div className = "main">
          <MyTitleMessage />
          <MyCarousal />
          {/* <Slide bottom duration={700}> */}
            <Education />
            <Skills />
          {/* </Slide> */}
        </div>
        <div className="side">
          <nav className="navbar side navbar-expand-lg navbar-light p-0" >
            {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" style={{zIndex:'1'}}>
              <span className="navbar-toggler-icon"></span>
            </button> */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <MyNavbar />
            </div>
          </nav>  
        </div>
    </div>
  );
}

export default App;
