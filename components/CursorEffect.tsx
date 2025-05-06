'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorEffect() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device is mobile (touch device)
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches || 
                 ('ontouchstart' in window) || 
                 (navigator.maxTouchPoints > 0));
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Only add mouse events on non-mobile devices
    if (!isMobile) {
      window.addEventListener('mousemove', moveCursor);
      document.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      if (!isMobile) {
        window.removeEventListener('mousemove', moveCursor);
        document.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [cursorX, cursorY, isMobile]);

  // Don't render cursor on mobile devices
  if (isMobile) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-50 pointer-events-none"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        opacity: isVisible ? 1 : 0
      }}
    >
      <motion.div 
        className="w-8 h-8 border-2 border-[#ff5722] rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 w-2 h-2 bg-[#ff5722] rounded-full -translate-x-1/2 -translate-y-1/2"
      />
    </motion.div>
  );
}
