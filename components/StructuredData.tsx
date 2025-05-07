'use client';

import React, { useEffect, useState } from 'react';

export function PersonStructuredData() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;
  
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.niranjanepili.me/#person",
    "name": "Niranjan Epili",
    "givenName": "Niranjan",
    "familyName": "Epili",
    "alternateName": "Niranjan Epili",
    "url": "https://www.niranjanepili.me",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.niranjanepili.me/niranjan-epili-profile.jpg",
      "width": "512",
      "height": "512"
    },
    "jobTitle": ["AI/ML Engineer", "Cybersecurity Expert"],
    "description": "Niranjan Epili is an AI/ML Engineer and Cybersecurity Expert with expertise in ethical hacking and software development",
    "email": "niranjanepili@outlook.in",
    "telephone": "+918268310971",
    "sameAs": [
      "https://www.linkedin.com/in/niranjanepili",
      "https://github.com/NiranjanEpili",
      "https://www.youtube.com/@njkevlogs",
      "https://twitter.com/niranjanepili"
    ],
    "knowsAbout": [
      "Artificial Intelligence", 
      "Machine Learning", 
      "Deep Learning",
      "Cybersecurity", 
      "Ethical Hacking", 
      "Penetration Testing",
      "Network Security",
      "Web Development",
      "React",
      "Next.js",
      "Python"
    ],
    "alumniOf": [{
      "@type": "EducationalOrganization",
      "name": "Chhatrapati Shivaji Maharaj University",
      "url": "https://csmu.ac.in"
    }],
    "worksFor": [{
      "@type": "Organization",
      "name": "NCompany Inc",
      "url": "https://www.ncompanyinc.tech/"
    }],
    "hasCredential": [{
      "@type": "EducationalOccupationalCredential",
      "name": "Google Cybersecurity Professional Certificate",
      "credentialCategory": "Professional Certificate",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Google"
      }
    }]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personData) }}
    />
  );
}

export function WebsiteStructuredData() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;
  
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.niranjanepili.me/#website",
    "name": "Niranjan Epili Portfolio",
    "url": "https://www.niranjanepili.me",
    "description": "Professional portfolio of Niranjan Epili - AI/ML Engineer, Cybersecurity Expert and Startup Founder",
    "inLanguage": "en-US",
    "publisher": {
      "@type": "Person",
      "@id": "https://www.niranjanepili.me/#person",
      "name": "Niranjan Epili"
    },
    "author": {
      "@type": "Person",
      "@id": "https://www.niranjanepili.me/#person"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.niranjanepili.me/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
    />
  );
}

export function ProjectStructuredData() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;
  
  const projectsData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "SoftwareSourceCode",
        "position": 1,
        "name": "Diksha Collection - Jewelry Store",
        "description": "Full-stack jewelry e-commerce website with custom UI/UX design, responsive frontend, and complete backend integration.",
        "programmingLanguage": "TypeScript",
        "codeRepository": "https://github.com/NiranjanEpili/diksha-collection",
        "url": "https://dikshacollection.vercel.app/",
        "author": {
          "@type": "Person",
          "@id": "https://www.niranjanepili.me/#person"
        }
      },
      {
        "@type": "SoftwareSourceCode",
        "position": 2,
        "name": "NCompany Inc - Startup Website",
        "description": "Official website for my tech startup, featuring modern UI design and responsive interfaces.",
        "programmingLanguage": "JavaScript",
        "url": "https://www.ncompanyinc.tech/",
        "author": {
          "@type": "Person",
          "@id": "https://www.niranjanepili.me/#person"
        }
      },
      {
        "@type": "SoftwareSourceCode",
        "position": 3,
        "name": "FootprintX - Reconnaissance Tool",
        "description": "Telegram bot for comprehensive website enumeration and information gathering with PDF report generation.",
        "programmingLanguage": "Python",
        "codeRepository": "https://github.com/NiranjanEpili/FootprintX",
        "url": "https://t.me/Footprintxbot",
        "author": {
          "@type": "Person",
          "@id": "https://www.niranjanepili.me/#person"
        }
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

export function FAQStructuredData() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;
  
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

export function BreadcrumbStructuredData({ items }) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;
  
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://www.niranjanepili.me${item.path}`
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
    />
  );
}
