import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import astronautHelmet from '../assets/astronaut-helmet.png';
import deadEye from '../assets/dead-eye.png';
import stack from '../assets/stack.png';
import envelope from '../assets/envelope.png';
import resume from '../assets/resume.png';
import '../styles/nav.css';

const Nav = () => {
    const location = useLocation();
    // function to be aware of my currently clicked navbar item
    const getNavPositionClass = ()=>{
        switch(location.pathname){
            case "/":
                return "nav-about";
            case "/skills":
                return "nav-skills";
            case "/projects":
                return "nav-projects";
            case "/contact":
                return "nav-contact";
            case "/resume":
                return "nav-resume";
            default:
                return "";
        }
    }
    // function to add a title that will be show under the clicked navbar item
    const getPageTitle = ()=>{
        switch(location.pathname){
            case "/":
                return "ABOUT";
            case "/skills":
                return "SKILLS";
            case "/projects":
                return "PROJECTS";
            case "/contact":
                return "CONTACT";
            case "/resume":
                return "RESUME";
            default:
                return "";
        }
    }
    const navPositionClass = getNavPositionClass();
    const pageTitle = getPageTitle();
    // function to check what page are we currently on
    const isCurrentPage = (navClass)=>{
        return navClass === navPositionClass;
    }

    const renderNavLink = (to, imgSrc, altText, navClass)=>{
        const isCurrent = isCurrentPage(navClass);
        const linkClass = isCurrent ? "nav-link current" : "nav-link";
        return(
            <Link to={to} className={linkClass}>
                <img src={imgSrc} alt={altText}/>
                {isCurrent && <h1 className='page-title'>{pageTitle}</h1>}
            </Link>
        )
    }
  return (
   <nav className={`nav ${navPositionClass}`}>
        {renderNavLink("/", astronautHelmet, "astronaut helmet icon", "nav-about")}
        {renderNavLink("/skills", deadEye, "deadEye icon", "nav-skills")}
        {renderNavLink("/projects", stack, "stack icon", "nav-projects")}
        {renderNavLink("/contact", envelope, "envelope icon", "nav-contact")}
        {renderNavLink("/resume", resume, "envelope icon", "nav-resume")}
   </nav>
  )
}

export default Nav;
