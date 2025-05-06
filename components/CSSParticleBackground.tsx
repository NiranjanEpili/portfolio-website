'use client';

import { useEffect, useRef } from 'react';
import styles from './particles.module.css';

export default function CSSParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const particleCount = 50;
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = styles.particle;
      
      // Random position
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      // Random size (0.5px - 3px)
      const size = (Math.random() * 2.5) + 0.5;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random opacity (0.2 - 0.7)
      particle.style.opacity = `${(Math.random() * 0.5) + 0.2}`;
      
      // Random animation delay
      particle.style.animationDelay = `${Math.random() * 5}s`;
      
      // Random animation duration (10-25s)
      particle.style.animationDuration = `${(Math.random() * 15) + 10}s`;
      
      container.appendChild(particle);
    }
    
    // Cleanup
    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);
  
  return <div ref={containerRef} className={styles.particleContainer} />;
}
