'use client';

import React from 'react';
import Head from 'next/head';
import { usePathname } from 'next/navigation';
import { PersonJsonLd, WebsiteJsonLd, ProjectsJsonLd, FAQsJsonLd, BreadcrumbJsonLd, WebPageJsonLd } from './JsonLd';

interface SeoProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  type?: 'WebPage' | 'AboutPage' | 'ProfilePage' | 'ContactPage' | 'CollectionPage';
  canonicalPath?: string;
}

const Seo: React.FC<SeoProps> = ({
  title = 'Niranjan Epili | AI/ML Engineer & Cybersecurity Expert',
  description = 'Expert in AI/ML, cybersecurity, and entrepreneurship with proven projects and certifications.',
  keywords = [],
  image = '/og-image.png',
  type = 'WebPage',
  canonicalPath,
}) => {
  const pathname = usePathname();
  const currentPath = canonicalPath || pathname || '';
  
  // Breadcrumb Items
  const breadcrumbItems = [];
  if (currentPath) {
    const pathSegments = currentPath.split('/').filter(Boolean);
    
    // Add home
    breadcrumbItems.push({
      name: 'Home',
      path: '/'
    });
    
    // Add each path segment
    let path = '';
    pathSegments.forEach(segment => {
      path += `/${segment}`;
      breadcrumbItems.push({
        name: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
        path: path
      });
    });
  }
  
  const canonicalUrl = `https://www.niranjanepili.me${currentPath}`;
  
  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} key="canonical" />
        <meta name="keywords" content={keywords.join(', ')} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`https://www.niranjanepili.me${image}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:image" content={`https://www.niranjanepili.me${image}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>
      
      {/* Structured Data */}
      <PersonJsonLd />
      <WebsiteJsonLd />
      <ProjectsJsonLd />
      <FAQsJsonLd />
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <WebPageJsonLd type={type} name={title} description={description} />
    </>
  );
};

export default Seo;
