'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './backgroundAnimation.module.css';

export default function BackgroundAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Check if device is mobile for performance optimization
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    // Reduce particle count on mobile for better performance
    const particleCount = isMobile ? 25 : 50;
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = styles.particle;
      
      // Random position
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      // Random size - smaller on mobile
      const sizeBase = isMobile ? 1.5 : 2.5;
      const size = (Math.random() * sizeBase) + 0.5;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random opacity
      particle.style.opacity = `${(Math.random() * 0.5) + 0.2}`;
      
      // Animation parameters
      particle.style.animationDelay = `${Math.random() * 5}s`;
      // Shorter animation duration on mobile for performance
      const durationBase = isMobile ? 10 : 15;
      particle.style.animationDuration = `${(Math.random() * durationBase) + 10}s`;
      
      container.appendChild(particle);
    }
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkMobile);
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, [isMobile]);
  
  return <div ref={containerRef} className={styles.particleContainer} />;
}
