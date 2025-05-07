import React from 'react';

export function PersonJsonLd() {
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Niranjan Epili",
    "url": "https://www.niranjanepili.me",
    "jobTitle": "AI/ML Engineer and Cybersecurity Expert",
    "description": "AI/ML Engineer, Cybersecurity Expert and Startup Founder with expertise in ethical hacking and software development",
    "email": "niranjanepili@outlook.in",
    "telephone": "+918268310971",
    "sameAs": [
      "https://www.linkedin.com/in/niranjanepili",
      "https://github.com/NiranjanEpili",
      "https://www.youtube.com/@njkevlogs"
    ],
    "knowsAbout": [
      "Artificial Intelligence", 
      "Machine Learning", 
      "Cybersecurity", 
      "Ethical Hacking", 
      "Web Development",
      "Entrepreneurship"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Chhatrapati Shivaji Maharaj University",
      "sameAs": "https://csmu.ac.in"
    },
    "worksFor": [{
      "@type": "Organization",
      "name": "NCompany Inc",
      "url": "https://www.ncompanyinc.tech/"
    }, {
      "@type": "Organization",
      "name": "Elevate.X",
      "url": "https://www.elevatex.com/"
    }]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personData) }}
    />
  );
}

export function WebsiteJsonLd() {
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Niranjan Epili Portfolio",
    "url": "https://www.niranjanepili.me",
    "description": "Professional portfolio of Niranjan Epili - AI/ML Engineer, Cybersecurity Expert and Startup Founder",
    "author": {
      "@type": "Person",
      "name": "Niranjan Epili"
    },
    "keywords": [
      "AI/ML Engineer", 
      "Cybersecurity Expert", 
      "Ethical Hacking", 
      "Portfolio", 
      "Startup Founder", 
      "Google Cybersecurity"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
    />
  );
}

export function ProjectsJsonLd() {
  const projectsData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "SoftwareSourceCode",
        "position": 1,
        "name": "Diksha Collection - Jewelry Store",
        "description": "Full-stack jewelry e-commerce website with custom UI/UX design, responsive frontend, and complete backend integration. Built primarily with TypeScript.",
        "programmingLanguage": "TypeScript",
        "codeRepository": "https://github.com/NiranjanEpili/diksha-collection",
        "url": "https://dikshacollection.vercel.app/"
      },
      {
        "@type": "SoftwareSourceCode",
        "position": 2,
        "name": "NCompany Inc - Startup Website",
        "description": "Designed and developed the official website for my own technology startup, featuring modern UI, responsive design, and interactive elements.",
        "programmingLanguage": "JavaScript",
        "url": "https://www.ncompanyinc.tech/"
      },
      {
        "@type": "SoftwareSourceCode",
        "position": 3,
        "name": "FootprintX - Reconnaissance Tool",
        "description": "Developed a Telegram bot that performs comprehensive website enumeration and information gathering, generating detailed PDF reports for cybersecurity analysis.",
        "programmingLanguage": "Python",
        "codeRepository": "https://github.com/NiranjanEpili/FootprintX",
        "url": "https://t.me/Footprintxbot"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsData) }}
    />
  );
}

export function FAQsJsonLd() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What services does Niranjan Epili offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Niranjan offers AI/ML development, cybersecurity consulting, ethical hacking services, web development, and startup mentorship."
      }
    }, {
      "@type": "Question",
      "name": "What are Niranjan's key skills?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Niranjan specializes in AI/ML engineering, cybersecurity, ethical hacking, full-stack development, UI/UX design, and entrepreneurship."
      }
    }, {
      "@type": "Question",
      "name": "How can I contact Niranjan Epili?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can contact Niranjan through email at niranjanepili@outlook.in, by phone at +918268310971, or through the contact form on his website."
      }
    }]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
    />
  );
}
