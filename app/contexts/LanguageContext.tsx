'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'it' | 'es' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation dictionary
const translations: Record<Language, Record<string, string>> = {
  en: {
    // English translations
    'welcome': 'WELCOME TO NIRANJAN EPILI\'S PORTFOLIO',
    'contact': 'CONTACT',
    'about': 'ABOUT',
    'work': 'WORK',
    'services': 'SERVICES',
    'process': 'PROCESS',
    'home': 'HOME',
    // Add more translations as needed
  },
  it: {
    // Italian translations
    'welcome': 'BENVENUTO NEL PORTFOLIO DI NIRANJAN EPILI',
    'contact': 'CONTATTO',
    'about': 'CHI SONO',
    'work': 'LAVORI',
    'services': 'SERVIZI',
    'process': 'PROCESSO',
    'home': 'HOME',
    // Add more translations
  },
  es: {
    // Spanish translations
    'welcome': 'BIENVENIDO AL PORTAFOLIO DE NIRANJAN EPILI',
    'contact': 'CONTACTO',
    'about': 'SOBRE MÍ',
    'work': 'TRABAJO',
    'services': 'SERVICIOS',
    'process': 'PROCESO',
    'home': 'INICIO',
    // Add more translations
  },
  fr: {
    // French translations
    'welcome': 'BIENVENUE SUR LE PORTFOLIO DE NIRANJAN EPILI',
    'contact': 'CONTACT',
    'about': 'À PROPOS',
    'work': 'TRAVAUX',
    'services': 'SERVICES',
    'process': 'PROCESSUS',
    'home': 'ACCUEIL',
    // Add more translations
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
