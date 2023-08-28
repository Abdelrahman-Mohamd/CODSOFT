import React, { useRef, useEffect } from 'react';
import '../styles/background.css';
import video from '../assets/bg-universe.mp4';
import altBackground from '../assets/fallback-image.png';

const Background = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      // Set the playback rate to 0.5 (half the normal speed)
      videoRef.current.playbackRate = 1;
    }
  }, []);

  return (
    <>
      <div className='shadow-overlay'></div>
      <video
        ref={videoRef}
        playsInline
        autoPlay
        muted
        loop
        preload='auto'
        id='bg'
        poster={altBackground}
      >
        <source src={video} type='video/mp4' />
      </video>
    </>
  );
};

export default Background;