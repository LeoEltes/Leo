import React, { useState, useRef, useEffect } from 'react';
import styles from './FrontPage.module.css'; // Import your CSS module

//Import section components
import AudioWork from "../Sections/AudioWork";
import VisualWork from "../Sections/VisualWork";
import Navet from "../Sections/Navet";
import Album from "../Sections/Album";


const FrontPage = () => {

  const videoRef = useRef(null);
  const [videoEnded, setVideoEnded] = useState(false);
  const handleVideoEnd = () => {
    const video = videoRef.current;
    if (video) {
      video.pause(); // Stop the video
      setVideoEnded(true);
    }
  };

  const contentRef = useRef(null);

  return (
    <div className={styles.frontPage}>
      <video
        className={`${styles.videoBackground} ${videoEnded ? styles.freezeFrame : ''}`}
        autoPlay
        muted
        ref={videoRef}
        onEnded={handleVideoEnd}
      >
        <source src="/videos/intro.mp4" type="video/mp4" />
      </video>

      <div className={styles.contentWrapper} ref={contentRef}>
        <AudioWork />
        <VisualWork />
        <Navet />
        <Album />
      </div>
    </div>
  );
};

export default FrontPage;
