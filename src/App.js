import React from 'react'
import Navbar from './components/Navbar/Navbar.js';
import Footer from './components/Footer/Footer.js';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import DevProjects from './components/DevProjects/DevProjects.js';
import Home from './pages/Home';
import Resume from './pages/Resume';
import About from './pages/About'
import ThirtyDay from './pages/ThirtyDay';
import TripPic from './pages/TripPic';
import ReducingSingleUse from './pages/ReducingSingleUse';
import SustainCMU from './pages/SustainCMU';


function App() {
  return (
    <>
      <Router baseline="/">
        <Navbar />
        <Routes>
          <Route path = '/' element={<Home/>}/>
          <Route path = '/Developer' element={<DevProjects/>}/>
          <Route path = '/About' element={<About/>}/>
          <Route path = '/Resume' element={<Resume/>}/>
          <Route path = '/ThirtyDayAdulting' element={<ThirtyDay/>}/>
          <Route path = '/TripPic' element={<TripPic/>}/>
          <Route path = '/ReducingSingleUse' element={<ReducingSingleUse/>}/>
          <Route path = '/SustainCMU' element={<SustainCMU/>}/>
        </Routes>
        <Footer />
			</Router>  
    </>
  );
}


export default App;