import React from 'react'
import Navbar from './components/Navbar/Navbar.js';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Projects from './components/pages/Projects';
import Home from './components/pages/Home';
import Resume from './components/pages/Resume';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <>
      <Router>
      <div className="background">
        <div className="page-wrapper">
          <Navbar />
          <Switch>
            <Route path = '/' exact component={Home}/>
            <Route path = '/Projects' component={Projects}/>
            <Route path = '/Resume' component={Resume}/>
          </Switch>
          <Footer />
        </div>
      </div>
			</Router>  
    </>
  );
}


export default App;