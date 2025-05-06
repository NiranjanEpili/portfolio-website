'use client';

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  
  // Since we're removing language functionality, this is just a stub component
  return null;
}
