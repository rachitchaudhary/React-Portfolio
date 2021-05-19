import React from 'react';
import './App.css';
import MyNavbar from "./components/mynavbar/mynavbar.component";
import MyCarousal from './components/my-carousal/my-carousal.component';
import MyTitleMessage from "./components/title-message/title-message.component";
import Work from "./components/work/work.component";
import Skills from "./components/skills/skills.component";
import Projects from "./components/projects/projects.component"

function App() {
  return (
    <div>
      <MyNavbar />
      <MyTitleMessage />
      <MyCarousal />
      <Work />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
