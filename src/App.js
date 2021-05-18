import React from 'react';
import './App.css';
import MyNavbar from "./components/mynavbar/mynavbar.component";
import MyCarousal from './components/my-carousal/my-carousal.component';
import MyTitleMessage from "./components/title-message/title-message.component";
import About from "./components/about/about.component";
import Skills from "./components/skills/skills.component";
import Projects from "./components/projects/projects.component"

function App() {
  return (
    <div>
      <MyNavbar/>
      <MyCarousal/>
      <MyTitleMessage />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
