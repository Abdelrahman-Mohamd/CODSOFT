import React from 'react'
import {FaFilePdf} from 'react-icons/fa';
import '../styles/Resume.css';
const Resume = () => {
    const [showComponentResume, setShowComponentResume] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const component = document.getElementById('about-component-resume');
      const rect = component.getBoundingClientRect();
      const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;

      setShowComponentResume(isInView);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div
      id="about-component-resume"
      className={`scroll-component-resume ${showComponentResume ? 'show' : ''}`}
    >
        
      <h1 className="component-heading-resume">
        <span className="bracet">{"${"}</span>Resume<span className="bracet">{"}"}</span>
      </h1>
      <a id ="resume" className='resume-icon' href="#"> <FaFilePdf/></a>
    </div>
  )
}

export default Resume;