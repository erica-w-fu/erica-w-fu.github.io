import React from 'react'
import Navbar from './components/Navbar/Navbar.js';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Projects from './components/pages/Projects';
import Home from './components/pages/Home';
import Resume from './components/pages/Resume';
import ProjectOverview from'./components/pages/FeaturedProjects/ProjectOverview.js'
import ThirtyDay from'./components/pages/FeaturedProjects/ThirtyDay.js'
import TwentyFour from'./components/pages/FeaturedProjects/TwentyFour.js'
import CrossCountryConnections from'./components/pages/FeaturedProjects/CrossCountryConnections.js'


function App() {
  return (
    <>
      <Router baseline="/">
        <div className="background">
          <div className="page-wrapper">
            <Navbar />
            <Routes>
              <Route path = '/' element={<Home/>}>
                <Route path = '/' element={<ProjectOverview/>}/>
                <Route path = '/ThirtyDayAdulting' element={<ThirtyDay/>}/>
                <Route path = '/TwentyFour' element={<TwentyFour/>}/>
                <Route path = '/CrossCountryConnections' element={<CrossCountryConnections/>}/>
              </Route>
              <Route path = '/Projects' element={<Projects/>}/>
              <Route path = '/Resume' element={<Resume/>}/>
            </Routes>
          </div>
        </div>
			</Router>  
    </>
  );
}


export default App;