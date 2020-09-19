import React from 'react';
import './App.css';
import MyNavbar from "./components/mynavbar/mynavbar.component";
import MyCarousal from './components/my-carousal/my-carousal.component';
import MyTitleMessage from "./components/title-message/title-message.component";

function App() {
  return (
    <div>
      <MyNavbar/>
      <MyCarousal/>
      <MyTitleMessage />
    </div>
  );
}

export default App;
