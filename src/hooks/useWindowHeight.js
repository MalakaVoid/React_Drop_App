
import { useState, useEffect } from 'react';

export default function useWindowHeight(){
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    
      useEffect(() => {
        const handleWindowResize = () => {
          setWindowHeight(window.innerHeight);
        };
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, []);

      return windowHeight;
}