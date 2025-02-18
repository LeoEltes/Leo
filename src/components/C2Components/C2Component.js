import React, { useEffect, useRef } from 'react';

const C2Component = ({ script }) => {
  const myRef = useRef();
  const c2LoadedRef = useRef(false); // Ref to track if c2.js is already loaded
  let myC2;

  useEffect(() => {
    if (myRef.current && !c2LoadedRef.current) {
      c2LoadedRef.current = true; // Set to true to prevent duplicate imports

      import('c2.js').then((c2) => {

        const Renderer = c2.Renderer;

        if (typeof Renderer === 'function') {

          // Create a canvas element manually
          const canvas = document.createElement('canvas');
          myRef.current.appendChild(canvas); // Append canvas to the ref div

          myC2 = new Renderer(canvas);

          myC2.size(window.innerWidth, window.innerHeight); // Set initial size
          myC2.background('#cccccc'); // Set background color

          if (typeof script === 'function') {
            script(c2, myC2);
          }

          const handleResize = () => {
            myC2.size(window.innerWidth, window.innerHeight); // Resize canvas
          };

          window.addEventListener('resize', handleResize);
          handleResize(); // Initial resize

          return () => {
            window.removeEventListener('resize', handleResize);
            if (myC2) {
              // Clean up
              canvas.remove(); // Remove canvas from DOM
            }
          };
        }
      }).catch(error => {
        console.error('Failed to load c2:', error);
      });
    }
  }, [script]);


  return <div ref={myRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }}></div>;
};

export default C2Component;
