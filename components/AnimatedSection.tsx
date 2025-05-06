'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  id?: string;
}

export default function AnimatedSection({ 
  children, 
  delay = 0.3, 
  className = '',
  id
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });  // Lower threshold for mobile
  const controls = useAnimation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      id={id}
      className={className}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: isMobile ? 15 : 30 },  // Smaller animation distance on mobile
        visible: { 
          opacity: 1, 
          y: 0, 
          transition: { 
            duration: isMobile ? 0.4 : 0.6,  // Faster animation on mobile
            delay: isMobile ? delay * 0.5 : delay,  // Shorter delay on mobile
            ease: [0.25, 0.1, 0.25, 1.0] 
          } 
        }
      }}
    >
      {children}
    </motion.div>
  );
}
