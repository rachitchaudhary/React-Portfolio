import React from 'react';
import './App.css';
import MyNavbar from "./components/navbar/navbar.component";
import MyCarousal from './components/carousal/carousal.component';
import MyTitleMessage from "./components/title-message/title-message.component";
import Work from "./components/work/work.component";
import Skills from "./components/skills/skills.component";
import Projects from "./components/projects/projects.component"
import { Slide, Fade } from 'react-reveal';
import Education from './components/education/education.component';
function App() {
  return (
    <div>
      <MyTitleMessage />
      <MyCarousal />
      <Fade duration={500}>
        <Work />
      </Fade>
      <MyNavbar />
      <Slide bottom duration={700}>
        <Education />
        <Projects />
        <Skills />
      </Slide>
    </div>
  );
}

export default App;
