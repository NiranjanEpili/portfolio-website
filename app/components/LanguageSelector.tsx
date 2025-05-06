'use client';

import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'ENG' },
    { code: 'it', name: 'ITA' },
    { code: 'es', name: 'ESP' },
    { code: 'fr', name: 'FRA' }
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (langCode: 'en' | 'it' | 'es' | 'fr') => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button 
        onClick={toggleDropdown}
        className="flex items-center text-sm focus:outline-none"
      >
        <span>{languages.find(lang => lang.code === language)?.name || 'ENG'} ▾</span>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-24 bg-white border border-gray-200 rounded shadow-lg z-20">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => selectLanguage(lang.code as any)}
              className={`block px-4 py-2 text-sm text-left w-full hover:bg-gray-100 ${
                language === lang.code ? 'font-bold text-[#ff5722]' : ''
              }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
