import React from 'react'
import Navbar from './components/Navbar/Navbar.js';
import Footer from './components/Footer/Footer.js';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import DevProjects from './components/DevProjects/DevProjects.js';
import Home from './pages/Home';
import Resume from './pages/Resume';
import ThirtyDay from './pages/ThirtyDay';
import TripPic from './pages/TripPic';
import ReducingSingleUse from './pages/ReducingSingleUse';
import SustainCMU from './pages/SustainCMU';


function App() {
  return (
    <>
    <div id="page-container">
      <Router baseline="/">
        <div id="content-wrap">
          <Navbar />
          <Routes>
            <Route path = '/' element={<Home/>}/>
            <Route path = '/Developer' element={<DevProjects/>}/>
            <Route path = '/Resume' element={<Resume/>}/>
            <Route path = '/ThirtyDayAdulting' element={<ThirtyDay/>}/>
            <Route path = '/TripPic' element={<TripPic/>}/>
            <Route path = '/ReducingSingleUse' element={<ReducingSingleUse/>}/>
            <Route path = '/SustainCMU' element={<SustainCMU/>}/>
          </Routes>
          <Footer />
        </div>
			</Router>  
    </div>
    </>
  );
}


export default App;