import React from 'react';
import cv from '../assets/cv.png'
import '../styles/resume.css'
const Resume = () => {
  return (
    <div>
        <img src={cv} alt='cv-logo' className='cv'/>
    </div>
  )
}

export default Resume;