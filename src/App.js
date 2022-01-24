import React from 'react'
import Navbar from './components/Navbar/Navbar.js';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Projects from './components/pages/Projects';
import Home from './components/pages/Home';
import Resume from './components/pages/Resume';
import Footer from './components/Footer/Footer.js';
import ProjectOverview from'./components/pages/FeaturedProjects/ProjectOverview.js'
import ThirtyDay from'./components/pages/FeaturedProjects/ThirtyDay.js'
import TwentyFour from'./components/pages/FeaturedProjects/TwentyFour.js'
import CrossCountryConnections from'./components/pages/FeaturedProjects/CrossCountryConnections.js'


function App() {
  return (
    <>
      <Router>
      <div className="background">
        <div className="page-wrapper">
          <Navbar />
          <Routes>
            <Route path = '/erica-w-fu' exact element={<Home/>}>
              <Route path = '/erica-w-fu' element={<ProjectOverview/>}/>
              <Route path = '/erica-w-fu/ThirtyDayAdulting' element={<ThirtyDay/>}/>
              <Route path = '/erica-w-fu/TwentyFour' element={<TwentyFour/>}/>
              <Route path = '/erica-w-fu/CrossCountryConnections' element={<CrossCountryConnections/>}/>
            </Route>
            <Route path = '/Projects' element={<Projects/>}/>
            <Route path = '/Resume' element={<Resume/>}/>
          </Routes>
          <Footer />
        </div>
      </div>
			</Router>  
    </>
  );
}


export default App;