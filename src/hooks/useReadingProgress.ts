import { useState, useEffect, useCallback } from 'react';

export const useReadingProgress = () => {
  const [progress, setProgress] = useState(0);

  const calculateProgress = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    
    if (docHeight <= 0) {
      setProgress(0);
      return;
    }
    
    const scrollProgress = Math.min((scrollTop / docHeight) * 100, 100);
    setProgress(scrollProgress);
  }, []);

  useEffect(() => {
    calculateProgress();
    
    window.addEventListener('scroll', calculateProgress, { passive: true });
    window.addEventListener('resize', calculateProgress, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', calculateProgress);
      window.removeEventListener('resize', calculateProgress);
    };
  }, [calculateProgress]);

  return progress;
};
