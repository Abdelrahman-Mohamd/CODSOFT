import React from 'react';
import '../styles/About.css';
import {
  FaUserGraduate,
  FaPaintBrush,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaLaptopCode,
  FaNodeJs,
  FaCheckCircle,
} from 'react-icons/fa';
import { SiMysql, SiMongodb, SiNeo4J } from 'react-icons/si';
import profile from '../assets/pp.jpeg';
const About = () => {
  const [showComponent, setShowComponent] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const component = document.getElementById('about-component');
      const rect = component.getBoundingClientRect();
      const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;

      setShowComponent(isInView);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      id="about-component"
      className={`scroll-component ${showComponent ? 'show' : ''}`}
    >
        <img className='profile-picture' src={profile} alt='profile-img'/>
      <h1 className="component-heading">
        <span className="bracet">{"${"}</span>About<span className="bracet">{"}"}</span>
      </h1>
      <p className="component-content">
        - I'm a Computer Science and Engineering Fresh Graduate Based In Egypt.
        <br />
        - Front-End Development :{' '}
        <span className="html">
          <FaHtml5 />
        </span>{' '}
        <span className="css">
          <FaCss3Alt />
        </span>{' '}
        <span className="js">
          <FaJsSquare />
        </span>{' '}
        <span className="bootstrap">
          <FaBootstrap />
        </span>
        <br />
        - Back-End Development :{' '}
        <span className="nodejs">
          <FaNodeJs />
        </span>{' '}
        <span className="sql">
          <SiMysql />
        </span>{' '}
        <span className="mongo">
          <SiMongodb />
        </span>{' '}
        <span className="neo4j">
          <SiNeo4J />
        </span>
        <br />
        - Available For Internships / Full-Time / Part-Time Employment.
      </p>
    </div>
  );
};

export default About;