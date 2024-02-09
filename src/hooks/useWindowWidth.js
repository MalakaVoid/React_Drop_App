
import { useState, useEffect } from 'react';

export default function useWindowWidth(){
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    
      useEffect(() => {
        const handleWindowResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, []);

      return windowWidth;
}