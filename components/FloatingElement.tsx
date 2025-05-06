'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
}

export default function FloatingElement({ 
  children, 
  className = '',
  delay = 0, 
  duration = 4,
  distance = 15
}: FloatingElementProps) {
  return (
    <motion.div
      className={className}
      animate={{ 
        y: [0, -distance, 0],
        rotate: [0, 2, 0, -2, 0]
      }}
      transition={{ 
        repeat: Infinity, 
        repeatType: "mirror",
        duration: duration, 
        delay: delay,
        ease: "easeInOut" 
      }}
    >
      {children}
    </motion.div>
  );
}
