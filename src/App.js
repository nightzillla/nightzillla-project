import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import AboutMe from './pages/AboutMe/AboutMe';
import Cohort from './pages/Cohort/Cohort';
import Gallery from './pages/Gallery/Gallery';
import Projects from './pages/Projects/Projects';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/aboutme' element={<Projects/>}/>
        <Route path='/cohort' element={<Cohort/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/*' element={<HomePage/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
