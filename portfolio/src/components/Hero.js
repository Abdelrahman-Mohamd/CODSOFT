import React, { useEffect, useState } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const [fadeHero, setFadeHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setFadeHero(window.pageYOffset > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="stars"></div>
      <div className="intro">
        <h1 className={`hero-title ${fadeHero ? 'fade-out' : ''}`}>
          Hi, I'm<span className='name'>Abdelrahman</span>
        </h1>
        <h2 className={`hero-subtitle ${fadeHero ? 'fade-out' : ''}`}>
          <span className='bracet'>{"<"}</span>Full-Stack Web Developer
          <span className='bracet'> {"/>"}</span>
        </h2>
      </div>
    </div>
  );
};

export default Hero;