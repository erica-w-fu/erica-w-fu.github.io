import React, {useEffect} from 'react';

import CustomCursor from './components/CustomCursor/CustomCursor.js';
import Layout from './components/Layout/Layout.js';
import RedirectToPDF from './components/RedirectToPDF/RedirectToPDF.js';


import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PageWrapper from "./components/PageWrapper/PageWrapper.js";


import Home from './pages/Home';
import JPMC from './pages/JPMC';
import Equinix from './pages/Equinix';
import Zeno from './pages/Zeno';
import Play from './pages/Play';
import About from './pages/About';

import TagManager from 'react-gtm-module'


function App() {
  useEffect(() => {
      const tagManagerArgs = {
          gtmId: 'G-27WLR098JX'
      };
      TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        <Router baseline="/">
          <Routes>
            {/* Home is separate – no layout */}
            <Route path="/" element={<PageWrapper direction="left"><Home /></PageWrapper>} />
            {/* <Route path="/Resume" element={<RedirectToPDF />} /> */}

            {/* All others use Layout */}
            <Route element={<Layout />}>
              {/* <Route path="/Resume" element={<PageWrapper direction="right"><Resume /></PageWrapper>} /> */}
              <Route path="/JPMorganChase" element={<PageWrapper direction="right"><JPMC /></PageWrapper>} />
              <Route path="/Equinix" element={<PageWrapper direction="right"><Equinix /></PageWrapper>} />
              <Route path="/Zeno" element={<PageWrapper direction="right"><Zeno /></PageWrapper>} />
              <Route path="/Play" element={<PageWrapper direction="right"><Play /></PageWrapper>} />
              <Route path="/About" element={<PageWrapper direction="right"><About /></PageWrapper>} />
            </Route>
            </Routes>
          <CustomCursor />
        </Router>  
      </AnimatePresence>
    </>
  );
}


export default App;