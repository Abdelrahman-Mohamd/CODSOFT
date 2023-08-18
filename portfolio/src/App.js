import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
const App = () => {
  return (
    <div>
        <NavBar/>
        <Hero/>
        <About/>
        <Projects/>
        <Resume/>
        <Contact/>
    </div>
  )
}

export default App;