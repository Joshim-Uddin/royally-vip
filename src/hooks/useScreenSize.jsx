import React, { useEffect, useState } from 'react';

const useScreenSize = () => {
    const [screenWidth, setScreenWidth] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      const [screenSize, setScreenSize] = useState(screenWidth.width)
    
      useEffect(() => {
        const handleResize = () => {
          setScreenWidth({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        };
    
        // event listener for window resize
        window.addEventListener('resize', handleResize);
    
        // Clean up the event listener on component unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, [])
    return screenSize;
    
};

export default useScreenSize;