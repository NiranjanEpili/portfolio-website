import React from 'react';

export function PersonJsonLd() {
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.niranjanepili.me/#person",
    "name": "Niranjan Epili",
    "url": "https://www.niranjanepili.me",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.niranjanepili.me/profile-image.jpg",
      "width": "512",
      "height": "512"
    },
    "jobTitle": "AI/ML Engineer and Cybersecurity Expert",
    "description": "AI/ML Engineer, Cybersecurity Expert and Startup Founder with expertise in ethical hacking and software development",
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
      "Python",
      "Cloud Computing",
      "Entrepreneurship",
      "Startup Management"
    ],
    "alumniOf": [{
      "@type": "EducationalOrganization",
      "name": "Chhatrapati Shivaji Maharaj University",
      "url": "https://csmu.ac.in"
    }],
    "worksFor": [{
      "@type": "Organization",
      "name": "NCompany Inc",
      "url": "https://www.ncompanyinc.tech/",
      "@id": "https://www.ncompanyinc.tech/#organization"
    }, {
      "@type": "Organization",
      "name": "Elevate.X",
      "url": "https://www.elevatex.com/"
    }],
    "hasCredential": [{
      "@type": "EducationalOccupationalCredential",
      "name": "Google Cybersecurity Professional Certificate",
      "credentialCategory": "Professional Certificate",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Google"
      }
    }],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "India"
    },
    "nationality": {
      "@type": "Country",
      "name": "India"
    }
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
    "copyrightHolder": {
      "@type": "Person",
      "@id": "https://www.niranjanepili.me/#person"
    },
    "copyrightYear": "2025",
    "datePublished": "2023-01-01T12:00:00+00:00",
    "dateModified": new Date().toISOString(),
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.niranjanepili.me/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "keywords": [
      "AI/ML Engineer", 
      "Cybersecurity Expert", 
      "Ethical Hacking", 
      "Portfolio", 
      "Startup Founder", 
      "Google Cybersecurity",
      "Machine Learning",
      "Artificial Intelligence",
      "Niranjan Epili"
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
        "url": "https://dikshacollection.vercel.app/",
        "author": {
          "@type": "Person",
          "@id": "https://www.niranjanepili.me/#person"
        },
        "dateCreated": "2023-04-15",
        "keywords": ["e-commerce", "jewelry", "typescript", "frontend", "backend", "ui/ux"]
      },
      {
        "@type": "SoftwareSourceCode",
        "position": 2,
        "name": "NCompany Inc - Startup Website",
        "description": "Designed and developed the official website for my own technology startup, featuring modern UI, responsive design, and interactive elements.",
        "programmingLanguage": "JavaScript",
        "url": "https://www.ncompanyinc.tech/",
        "author": {
          "@type": "Person",
          "@id": "https://www.niranjanepili.me/#person"
        },
        "dateCreated": "2022-10-02",
        "keywords": ["startup", "company website", "tech company", "modern UI", "responsive design"]
      },
      {
        "@type": "SoftwareSourceCode",
        "position": 3,
        "name": "FootprintX - Reconnaissance Tool",
        "description": "Developed a Telegram bot that performs comprehensive website enumeration and information gathering, generating detailed PDF reports for cybersecurity analysis.",
        "programmingLanguage": "Python",
        "codeRepository": "https://github.com/NiranjanEpili/FootprintX",
        "url": "https://t.me/Footprintxbot",
        "author": {
          "@type": "Person",
          "@id": "https://www.niranjanepili.me/#person"
        },
        "dateCreated": "2023-01-20",
        "keywords": ["cybersecurity", "reconnaissance", "information gathering", "telegram bot", "python"]
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
    }, {
      "@type": "Question",
      "name": "What projects has Niranjan worked on?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Niranjan has worked on various projects including FootprintX (a cybersecurity reconnaissance tool), Diksha Collection (an e-commerce platform), and NCompany Inc's website (a tech startup). His portfolio showcases his expertise in both technical development and design."
      }
    }, {
      "@type": "Question",
      "name": "Does Niranjan offer remote work services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Niranjan offers remote services in AI/ML development, cybersecurity consulting, and web development. He works with clients globally, providing professional solutions regardless of geographical location."
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

export function BreadcrumbJsonLd({ items }) {
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

export function WebPageJsonLd({ type = "WebPage", name, description }) {
  const webpageData = {
    "@context": "https://schema.org",
    "@type": type,
    "name": name,
    "description": description,
    "url": "https://www.niranjanepili.me",
    "author": {
      "@type": "Person",
      "@id": "https://www.niranjanepili.me/#person"
    },
    "publisher": {
      "@type": "Person",
      "@id": "https://www.niranjanepili.me/#person"
    },
    "inLanguage": "en-US",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://www.niranjanepili.me/#website"
    },
    "datePublished": "2023-01-01T12:00:00+00:00",
    "dateModified": new Date().toISOString()
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageData) }}
    />
  );
}
