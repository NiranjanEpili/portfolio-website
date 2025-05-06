'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface MobileNavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNavDrawer({ isOpen, onClose }: MobileNavDrawerProps) {
  // Close drawer when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isOpen && target.id === 'drawer-backdrop') {
        onClose();
      }
    };

    document.addEventListener('click', handleClickOutside);
    
    // Lock body scroll when drawer is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="drawer-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-40"
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
            className="fixed right-0 top-0 h-full w-[75%] max-w-[300px] bg-[#f2e9dc] p-4 z-50 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <span className="font-bold text-xl">Menu</span>
              <button 
                onClick={onClose} 
                className="w-8 h-8 flex items-center justify-center bg-black text-white"
              >
                ✕
              </button>
            </div>
            
            <nav className="flex flex-col space-y-4">
              <Link 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  onClose();
                }}
                className="bg-[#ff5722] px-3 py-2 text-base"
              >
                Home
              </Link>
              
              <Link 
                href="#about-section" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' });
                  onClose();
                }}
                className="hover:underline px-3 py-1 text-base border-b border-gray-200"
              >
                About
              </Link>
              
              <Link 
                href="#certifications-section" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('certifications-section')?.scrollIntoView({ behavior: 'smooth' });
                  onClose();
                }}
                className="hover:underline px-3 py-1 text-base border-b border-gray-200"
              >
                Certifications
              </Link>
              
              <Link 
                href="#skills-section" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('skills-section')?.scrollIntoView({ behavior: 'smooth' });
                  onClose();
                }}
                className="hover:underline px-3 py-1 text-base border-b border-gray-200"
              >
                Skills
              </Link>
              
              <Link 
                href="#projects-section" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' });
                  onClose();
                }}
                className="hover:underline px-3 py-1 text-base border-b border-gray-200"
              >
                Projects
              </Link>
              
              <Link 
                href="#education-section" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('education-section')?.scrollIntoView({ behavior: 'smooth' });
                  onClose();
                }}
                className="hover:underline px-3 py-1 text-base border-b border-gray-200"
              >
                Education & Experience
              </Link>
              
              <Link 
                href="#contact-section" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
                  onClose();
                }}
                className="hover:underline px-3 py-1 text-base border-b border-gray-200"
              >
                Contact
              </Link>
            </nav>
            
            <div className="absolute bottom-4 left-0 w-full px-4">
              <div className="bg-black text-[#ff5722] py-2 text-center font-bold">
                NE<span className="text-white text-xs">/&gt;</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
