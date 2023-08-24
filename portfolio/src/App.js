import React from 'react';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Nav from './components/Nav.js';
import About from './components/About.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import Background from './components/Background.js';
import MyStats from './components/MyStats.js';
import './styles/app.css';
const App = () => {
  return (
    <Router>
      <Nav/>
      <Background/>
      <Routes>
        <Route path="/" element={<About/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <MyStats/>
    </Router>
  )
}

export default App;