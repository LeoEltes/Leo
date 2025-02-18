import React, { useEffect } from 'react';

const ThreeD = () => {
  useEffect(() => {
    // Dynamically load the script when the component mounts
    const script = document.createElement('script');
    script.src = `${process.env.PUBLIC_URL}/imusic_091.js`; // Load from public folder
    script.dataset.musicStructure = `${process.env.PUBLIC_URL}/imusic.xml`; // Load the XML

    script.onload = () => {
      console.log('Library loaded successfully.');
      // Initialize iMusic or perform any other operations here if needed
    };

    script.onerror = () => {
      console.error('Error loading the library.');
    };

    document.body.appendChild(script);

    // Cleanup the script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty array ensures this runs only once on mount

  // Function to play the music
  const myFunction = () => {
    if (window.iMusic) {
      // Check for the AudioContext state and resume if necessary
      if (window.iMusic.context && window.iMusic.context.state === 'suspended') {
        window.iMusic.context.resume().then(() => {
          console.log('AudioContext resumed');
          window.iMusic.play("motif1");
        }).catch(err => {
          console.error('Failed to resume AudioContext:', err);
        });
      } else {
        window.iMusic.play("motif1");
      }
    } else {
      console.error('iMusic is not loaded');
    }
  };

  return (
    <div>
      <h1>ThreeD Component</h1>
      <button onClick={myFunction}>Play Music</button>
    </div>
  );
};

export default ThreeD;
