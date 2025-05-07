import React from 'react';

export function PersonStructuredData() {
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

export function BreadcrumbStructuredData({ items }) {
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
