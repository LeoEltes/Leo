// File: src/components/P5Components/P5Component.js
import React, { useEffect, useRef } from 'react';

const P5Component = ({ script }) => {
  const myRef = useRef();
  const p5LoadedRef = useRef(false); // Ref to track if p5.js is already loaded
  let myP5;

  useEffect(() => {
    if (myRef.current && !p5LoadedRef.current) {
      p5LoadedRef.current = true; // Set to true to prevent duplicate imports
      import('p5').then((p5) => {
        myP5 = new p5.default(script, myRef.current);


        return () => {
          // Clean up on component unmount
          if (myP5) {
            myP5.remove();
          }
        };
      });
    }
  }, [script]);

  return <div ref={myRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }}></div>;
};

export default P5Component;
