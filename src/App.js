import React from 'react'
import Navbar from './components/Navbar/Navbar.js';
import Footer from './components/Footer/Footer.js';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import DevProjects from './components/DevProjects/DevProjects.js';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Equinix from './pages/Equinix';
import Zeno from './pages/Zeno';
import Adulting from './pages/Adulting';
import TripPic from './pages/TripPic';
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
            <Route path = '/Equinix' element={<Equinix/>}/>
            <Route path = '/Zeno' element={<Zeno/>}/>
            <Route path = '/Adulting' element={<Adulting/>}/>
          </Routes>
          <Footer />
        </div>
			</Router>  
    </div>
    </>
  );
}


export default App;