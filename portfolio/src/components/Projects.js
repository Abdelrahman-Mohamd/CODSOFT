import React from 'react';
import '../styles/Projects.css';
import Tawsila from '../assets/Tawsila.png'
import Google from '../assets/Google.png'
import {FaFileCode} from 'react-icons/fa';
const Projects = () => {
  const [showComponentProjects, setShowComponentProjects] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      const component = document.getElementById('about-component-projects');
      const rect = component.getBoundingClientRect();
      const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;

      setShowComponentProjects(isInView);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      id="about-component-projects"
      className={`scroll-component-projects ${showComponentProjects ? 'show' : ''}`}
    >
        <div className='main-icon'><FaFileCode/></div>
      <h1 className="component-heading-projects">
        <span className="bracet">{"${"}</span>Projects<span className="bracet">{"}"}</span>
      </h1>
      <p className="component-content-projects">
            <a className='project' href='https://github.com/HaidyGamal/GP-WebApp'>Public Transportation Guidance<img src={Tawsila} alt='Tawsila-img' className='Tawsila-img'/></a>
            <a className='project' href='https://github.com/Abdelrahman-Mohamd/Almost-Google'>Google Home Page Clone<img src={Google} alt='Google-img' className='Google-img'/></a>
      </p>
    </div>
  );
};

export default Projects;