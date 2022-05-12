import React from 'react'
import Navbar from './components/Navbar/Navbar.js';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Projects from './components/pages/Projects';
import Home from './components/pages/Home';
import Resume from './components/pages/Resume';
import About from './components/pages/About'
import ProjectOverview from'./components/pages/FeaturedProjects/ProjectOverview.js'
import ThirtyDay from'./components/pages/FeaturedProjects/ThirtyDay.js'
import TwentyFour from'./components/pages/FeaturedProjects/TwentyFour.js'
import CrossCountryConnections from'./components/pages/FeaturedProjects/CrossCountryConnections.js'


function App() {
  return (
    <>
      <Router baseline="/">
        <Navbar />
          <div className='mobile-body'>
          <Routes>
            <Route path = '/' element={<Home/>}>
              <Route path = '/' element={<ProjectOverview/>}/>
              <Route path = '/ThirtyDayAdulting' element={<ThirtyDay/>}/>
              <Route path = '/TwentyFour' element={<TwentyFour/>}/>
              <Route path = '/CrossCountryConnections' element={<CrossCountryConnections/>}/>
            </Route>
            <Route path = '/Projects' element={<Projects/>}/>
            {/* <Route path = '/Projects/thirty_day_adulting' element={<ThirtyDay/>}/>
            <Route path = '/Projects/twentyfour' element={<TwentyFour/>}/>
            <Route path = '/Projects/ccc' element={<CrossCountryConnections/>}/>
            <Route path = '/Projects/sentence_mosaics' element={<SentenceMosaics/>}/> */}

            <Route path = '/About' element={<About/>}/>
            <Route path = '/Resume' element={<Resume/>}/>
          </Routes>
          </div>
			</Router>  
    </>
  );
}


export default App;