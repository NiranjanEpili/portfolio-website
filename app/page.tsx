'use client';

import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import styles from "./styles.module.css"
import BackgroundAnimation from "@/components/BackgroundAnimation";
import AnimatedSection from "@/components/AnimatedSection";
import FloatingElement from "@/components/FloatingElement";
import { motion } from "framer-motion";
import MobileNavDrawer from "@/components/MobileNavDrawer";
import { PersonJsonLd, WebsiteJsonLd, ProjectsJsonLd, FAQsJsonLd } from './components/JsonLd';
import { PersonStructuredData, WebsiteStructuredData } from '@/components/StructuredData';

export default function Home() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState("");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <PersonStructuredData />
      <WebsiteStructuredData />
      
      <div className="min-h-screen bg-[#f2e9dc] font-mono text-black relative">
        {/* Add all JSON-LD components for complete schema markup */}
        <PersonJsonLd />
        <WebsiteJsonLd />
        <ProjectsJsonLd />
        <FAQsJsonLd />
        
        {/* Mobile Navigation Drawer */}
        <MobileNavDrawer isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
        
        {/* 3D Background Animation */}
        <BackgroundAnimation />
        
        {/* Vertical strip on right - hidden on small screens */}
        <div className="fixed right-0 top-0 bottom-0 w-4 sm:w-8 bg-black z-10 flex items-center justify-center overflow-hidden">
          <div className={`${styles.scrollingText} text-[#ff5722] font-mono text-[10px] sm:text-xs tracking-wide whitespace-nowrap`}>
            Niranjan Epili | AI/ML Engineer | Ethical Hacker | Cybersecurity Professional | UI/UX Designer | Startup Founder & CEO
          </div>
        </div>

        <div className="pr-4 sm:pr-8">
          {/* Top header - simplified for mobile */}
          <header className="bg-[#f2e9dc] px-4 sm:px-6 py-2 flex flex-col sm:flex-row justify-between items-center border-b border-black/100">
            <div className="text-xs text-center sm:text-left sm:text-sm mb-1 sm:mb-0">Welcome to My Portfolio</div>
            <div className="text-xs sm:text-sm">niranjanepili@outlook.in</div>
          </header>

          {/* Navigation - with mobile menu button */}
          <motion.nav 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-[#f2e9dc] px-4 sm:px-6 py-4 flex justify-between items-center"
          >
            <div className="flex items-center">
              <div className="font-bold text-xl mr-4 sm:mr-8">NE_</div>
            </div>
            
            {/* Desktop navigation */}
            <div className="hidden md:flex md:space-x-6">
              <Link 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-[#ff5722] px-2 py-1 text-base"
              >
                Home
              </Link>
              <Link 
                href="#about-section" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hover:underline px-1 text-base"
              >
                About
              </Link>
              <Link 
                href="#certifications-section" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('certifications-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hover:underline px-1 text-base"
              >
                Certifications
              </Link>
              <Link 
                href="#skills-section" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('skills-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hover:underline px-1 text-base"
              >
                Skills
              </Link>
              <Link 
                href="#projects-section" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hover:underline px-1 text-base"
              >
                Projects
              </Link>
              <Link 
                href="#education-section" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('education-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hover:underline px-1 text-base"
              >
                Education & Experience
              </Link>
              <Link 
                href="#contact-section" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hover:underline px-1 text-base"
              >
                Contact
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <button 
              onClick={() => setMobileNavOpen(true)}
              className="md:hidden p-2 bg-black text-white text-sm"
              aria-label="Open navigation menu"
            >
              MENU
            </button>
            
            <FloatingElement delay={1} distance={5} duration={3} className="hidden sm:flex items-center">
              <div className="bg-black text-[#ff5722] px-2 py-1 font-mono font-bold text-xl border-2 border-black relative">
                <span>NE</span>
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#ff5722]"></span>
                <span className="ml-1 text-white text-xs">/&gt;</span>
              </div>
            </FloatingElement>
          </motion.nav>

          {/* Main content */}
          <main>
            <h1 className="sr-only">Niranjan Epili - AI/ML Engineer & Cybersecurity</h1>
            
            {/* Hero section - improved for mobile */}
            <section id="hero" aria-label="Introduction of Niranjan Epili">
              <AnimatedSection delay={0.2} className="relative py-4 sm:py-8 px-4 sm:px-0 flex flex-col-reverse sm:flex-row sm:justify-end">
                {/* Mobile first layout - stack vertically on small screens */}
                <motion.div
                  initial={{ x: 0, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="w-full sm:absolute sm:top-1/4 sm:right-[32%] sm:w-[50%] mt-6 sm:mt-0 bg-transparent"
                >
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                    Hi, I'm <span className="text-primary">Niranjan Epili</span>
                  </h2>
                  <h2 className="text-xl sm:text-2xl mb-3 font-bold">AI/ML Engineer | Cybersecurity Expert | Startup Founder_</h2>
                  <p className="mb-4 text-sm sm:text-base leading-normal">
                    Engineering student and tech entrepreneur with expertise in artificial intelligence, machine learning, and{" "}
                    <span className="underline">advanced cybersecurity systems</span>. Building innovative solutions at the intersection of technology and business.
                  </p>
                  <p className="text-sm sm:text-base leading-normal">
                    Leveraging deep technical knowledge and entrepreneurial vision to identify vulnerabilities, create secure digital environments, and develop next-generation AI-powered applications for tomorrow's challenges.
                  </p>
                </motion.div>
                
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="relative w-full sm:w-[30%] h-[300px] sm:h-[500px] mx-auto sm:mr-0" 
                  style={{ maxWidth: '300px' }}
                >
                  <Image
                    src="https://i.ibb.co/CpmwwVnW/Whats-App-Image-2025-05-07-at-1-59-17-PM.jpg"
                    alt="Niranjan Epili"
                    fill
                    priority={true}
                    className="object-cover"
                  />
                </motion.div>
              </AnimatedSection>
            </section>
            
            {/* About Me section */}
            <section id="about" aria-label="About Niranjan Epili">
              <AnimatedSection delay={0.4} id="about-section" className="grid grid-cols-1 lg:grid-cols-2 px-4 sm:px-0">
                <div className="p-4 sm:p-8 lg:p-12">
                  <div className="inline-block bg-black text-white px-2 py-1 mb-4 sm:mb-6 text-sm">About Me_</div>
                  <h1 className="text-[#ff5722] text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none">
                    Securing_
                    <br />A Digital_
                    <br />
                    Future_
                  </h1>
                  <h2 className="text-3xl font-bold mb-4">About Niranjan Epili</h2>
                  <p className="mb-4">
                    Niranjan Epili is an accomplished AI/ML Engineer and Cybersecurity Expert with a passion for developing innovative solutions.
                    With extensive experience in machine learning, ethical hacking, and software development, Niranjan Epili has worked on
                    numerous high-impact projects that combine technical expertise with creative problem-solving.
                  </p>
                </div>

                {/* Scroll down */}
                <div className="flex justify-end items-end p-4 sm:p-8">
                  <motion.div 
                    animate={{ y: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="writing-vertical-rl text-xs transform rotate-180"
                  >
                    SCROLL DOWN
                  </motion.div>
                  <motion.div 
                    animate={{ y: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="ml-2"
                  >
                    ↓
                  </motion.div>
                </div>
              </AnimatedSection>
            </section>

            {/* We deliver section */}
            <AnimatedSection delay={0.6} className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <h2 className="text-xl mb-4">I Deliver Innovation Through Technology_</h2>
                <p className="text-sm mb-6">
                  As a student and entrepreneur, I create AI-powered security solutions for today's technology challenges. My technical
                  expertise in machine learning and ethical hacking helps develop custom security frameworks.
                </p>
              </div>
              {/* Stats */}
              <div className="p-8 lg:p-12 flex flex-col justify-between">
                <div className="flex items-center mb-8">
                  <div className="text-[#ff5722] text-6xl font-bold opacity-20">0234</div>
                  <div className="ml-4">
                    <h3 className="text-xl">
                      <a 
                        href="#projects-section" 
                        className="cursor-pointer hover:text-[#ff5722] transition-colors"
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById('projects-section')?.scrollIntoView({
                            behavior: 'smooth'
                          });
                        }}
                      >
                        Projects_
                      </a>
                    </h3>
                    <div className="w-full h-1 bg-[#ff5722] mt-2"></div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-[#ff5722] text-6xl font-bold opacity-20">0075</div>
                </div>
              </div>
            </AnimatedSection>
            
            {/* Certifications Section */}
            <AnimatedSection delay={0.3} id="certifications-section" className="py-16">
              <div className="px-8 lg:px-12 max-w-6xl mx-auto">
                <div className="inline-block bg-black text-white px-2 py-1 mb-6 text-sm">CERTIFICATIONS & CREDENTIALS_</div>
                <h2 className="text-2xl md:text-3xl font-bold mb-10">Professional Certifications_</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white p-6 shadow-md border-t-4 border-[#ff5722]">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-bold">Certified Ethical Hacking (v12)</h3>
                      <div className="bg-[#ff5722]/10 text-[#ff5722] px-2 py-1 text-xs">Oct 2024</div>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">LearnKartS via Coursera</p>
                    <p className="text-sm mt-3">Credential ID: 2HW0MSQHGVQN</p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-sm">Comprehensive training in ethical hacking fundamentals, system and network security, and advanced cybersecurity techniques with practical exam simulations.</p>
                    </div>
                  </div>
                  <div className="bg-white p-6 shadow-md border-t-4 border-[#ff5722]">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-bold">Google Cybersecurity</h3>
                      <div className="bg-[#ff5722]/10 text-[#ff5722] px-2 py-1 text-xs">May 2024</div>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Google via Coursera</p>
                    <p className="text-sm mt-3">Credential ID: SUVVD83JUB8N</p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-sm">Professional certification covering essential cybersecurity skills, tools, and best practices with 6 months of intensive training.</p>
                    </div>
                  </div>
                  <div className="bg-white p-6 shadow-md border-t-4 border-[#ff5722]">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-bold">JP Morgan Cybersecurity</h3>
                      <div className="bg-[#ff5722]/10 text-[#ff5722] px-2 py-1 text-xs">2024</div>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">JPMorgan Chase & Co.</p>
                    <p className="text-sm mt-3">Virtual Experience Program</p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-sm">Job simulation focused on practical cybersecurity challenges in financial environments, security operations, and threat detection.</p>
                    </div>
                  </div>
                  <div className="bg-white p-6 shadow-md border-t-4 border-[#ff5722]">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-bold">National Cyber Security Awareness</h3>
                      <div className="bg-[#ff5722]/10 text-[#ff5722] px-2 py-1 text-xs">Jul 2023</div>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">CDAC INDIA</p>
                    <p className="text-sm mt-3">Credential ID: ISEA/NCSAM/CYBOFN/16947</p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-sm">Recognition for expertise in cybersecurity awareness, defense strategies, and digital safety best practices.</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            {/* Skills Section */}
            <AnimatedSection delay={0.3} id="skills-section" className="bg-[#f9f4eb] py-16">
              <div className="px-8 lg:px-12 max-w-6xl mx-auto">
                <div className="inline-block bg-black text-white px-2 py-1 mb-6 text-sm">TECHNICAL PROFICIENCY_</div>
                <h2 className="text-2xl md:text-3xl font-bold mb-10">Skills & Expertise_</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <div className="border-l-2 border-[#ff5722] pl-4">
                    <h3 className="text-lg font-bold mb-3">AI & Machine Learning</h3>
                    <ul className="space-y-2 text-sm">
                      <li>Deep Learning Algorithms</li>
                      <li>Neural Networks Architecture</li>
                      <li>Natural Language Processing</li>
                      <li>Computer Vision Systems</li>
                      <li>TensorFlow & PyTorch</li>
                    </ul>
                  </div>
                  <div className="border-l-2 border-[#ff5722] pl-4">
                    <h3 className="text-lg font-bold mb-3">Cybersecurity</h3>
                    <ul className="space-y-2 text-sm">
                      <li>Ethical Hacking</li>
                      <li>Penetration Testing</li>
                      <li>Network Security</li>
                      <li>Vulnerability Assessment</li>
                      <li>Security Systems Design</li>
                    </ul>
                  </div>
                  <div className="border-l-2 border-[#ff5722] pl-4">
                    <h3 className="text-lg font-bold mb-3">Development</h3>
                    <ul className="space-y-2 text-sm">
                      <li>Full Stack Development</li>
                      <li>Python & JavaScript</li>
                      <li>UI/UX Design</li>
                      <li>Mobile App Development</li>
                      <li>Cloud Architecture</li>
                    </ul>
                  </div>
                </div>
                
                {/* Additional skills categories */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="border-l-2 border-[#ff5722] pl-4">
                    <h3 className="text-lg font-bold mb-3">UI/UX Design</h3>
                    <ul className="space-y-2 text-sm">
                      <li>User Interface Design</li>
                      <li>User Experience Research</li>
                      <li>Interaction Design</li>
                      <li>Wireframing & Prototyping</li>
                      <li>Figma & Adobe Creative Suite</li>
                    </ul>
                  </div>
                  <div className="border-l-2 border-[#ff5722] pl-4">
                    <h3 className="text-lg font-bold mb-3">Entrepreneurship</h3>
                    <ul className="space-y-2 text-sm">
                      <li>Startup Leadership</li>
                      <li>Business Strategy</li>
                      <li>Product Development</li>
                      <li>Team Management</li>
                      <li>Financial Planning</li>
                    </ul>
                  </div>
                  <div className="border-l-2 border-[#ff5722] pl-4">
                    <h3 className="text-lg font-bold mb-3">Content Creation</h3>
                    <ul className="space-y-2 text-sm">
                      <li>YouTube Production</li>
                      <li>Educational Content</li>
                      <li>Technical Tutorials</li>
                      <li>Video Editing</li>
                      <li>Digital Marketing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Education & Experience */}
            <AnimatedSection delay={0.3} id="education-section" className="bg-[#f9f4eb] py-16">
              <div className="px-8 lg:px-12 max-w-6xl mx-auto">
                <div className="inline-block bg-black text-white px-2 py-1 mb-6 text-sm">BACKGROUND_</div>
                <h2 className="text-2xl md:text-3xl font-bold mb-10">Education & Experience_</h2>
                <div className="space-y-8">
                  <div className="border-l-2 border-[#ff5722] pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-[#ff5722]"></div>
                    <h3 className="text-lg font-bold">Engineering Student - AI/ML Specialization</h3>
                    <p className="text-sm text-gray-700 mb-2">Chhatrapati Shivaji Maharaj University (CSMU)| 2023 - Present</p>
                    <p className="text-sm">Focusing on artificial intelligence, machine learning, and cybersecurity systems with additional courses in entrepreneurship.</p>
                  </div>
                  <div className="border-l-2 border-[#ff5722] pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-[#ff5722]"></div>
                    <h3 className="text-lg font-bold">Founder & CEO - Startup</h3>
                    <p className="text-sm text-gray-700 mb-2">NCompany. & Elevate.X| 2024 - Present</p>
                    <p className="text-sm">Supporting growth across every stage with Elevate.X, offering complete solutions for startups, businesses, and influencers—from setup to success</p>
                  </div>
                  <div className="border-l-2 border-[#ff5722] pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-[#ff5722]"></div>
                    <h3 className="text-lg font-bold">Freelance Developer & Security Consultant</h3>
                    <p className="text-sm text-gray-700 mb-2">Various Clients | 2021 - Present | Freelancer </p>
                    <p className="text-sm">Providing specialized security consulting, penetration testing, and custom application development for clients across industries.</p>
                  </div>
                  <div className="border-l-2 border-[#ff5722] pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-[#ff5722]"></div>
                    <h3 className="text-lg font-bold">Content Creation Head</h3>
                    <p className="text-sm text-gray-700 mb-2">DragonFly Tech Club | 2023 - Present</p>
                    <p className="text-sm">As a Content Creation Head, I lead a team of talented content creators to produce engaging and impactful content across various platforms</p>
                  </div>
                  <div className="border-l-2 border-[#ff5722] pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-[#ff5722]"></div>
                    <h3 className="text-lg font-bold">Operation Manager</h3>
                    <p className="text-sm text-gray-700 mb-2">NaukrEase | 2024 - Present | Part-Time</p>
                    <p className="text-sm">As an Operation Manager, I excel in optimizing processes, enhancing efficiency, and driving organizational success.</p>
                  </div>
                  <div className="border-l-2 border-[#ff5722] pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-[#ff5722]"></div>
                    <h3 className="text-lg font-bold">Cybersecurity & Digital Forensic</h3>
                    <p className="text-sm text-gray-700 mb-2">VPN Digital Service | Aug 2024 - Sep 2024 |Internship</p>
                    <p className="text-sm">As an cybersecurity & digital forensic , I peform various attacks,enumeration, reverse engineering , api research and make reports on confidential sites and apps.</p>
                  </div>
                  <div className="border-l-2 border-[#ff5722] pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-[#ff5722]"></div>
                    <h3 className="text-lg font-bold">Cybersecurity & Digital Forensic</h3>
                    <p className="text-sm text-gray-700 mb-2">Cyber Secured India | Jun 2024 - Jul 2024 |Internship</p>
                    <p className="text-sm">As an cybersecurity & digital forensic , I peform various information gathering ,research and make reports on websites and apps.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            {/* Projects section with Show More/Less button */}
            <AnimatedSection delay={0.3} id="projects-section" className="py-8 sm:py-16">
              <div className="px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto">
                <div className="inline-block bg-black text-white px-2 py-1 mb-4 sm:mb-6 text-sm">PORTFOLIO HIGHLIGHTS_</div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-10">Featured Projects_</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  {/* Project cards */}
                  {/* First project */}
                  <div className="bg-white p-4 sm:p-6 shadow-md">
                    <div className="h-36 sm:h-48 bg-gray-200 mb-4 relative overflow-hidden">
                      <Image 
                        src="https://i.ibb.co/TMxJrbhc/Screenshot-2025-05-06-151512.png"
                        alt="Diksha Collection - Jewelry Store"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                    <h3 className="text-lg font-bold mb-2">Diksha Collection - Jewelry Store</h3>
                    <p className="text-sm mb-4">Full-stack jewelry e-commerce website with custom UI/UX design, responsive frontend, and complete backend integration. Built primarily with TypeScript.</p>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="bg-[#ff5722]/10 text-[#ff5722] px-2 py-1">TypeScript</span>
                      <span className="bg-[#ff5722]/10 text-[#ff5722] px-2 py-1">UI/UX</span>
                      <span className="bg-[#ff5722]/10 text-[#ff5722] px-2 py-1">Frontend</span>
                      <span className="bg-[#ff5722]/10 text-[#ff5722] px-2 py-1">Backend</span>
                    </div>
                    <div className="mt-4">
                      <a href="https://dikshacollection.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-[#ff5722] text-sm underline">Visit Website →</a>
                    </div>
                  </div>
                  
                  {/* Second project */}
                  <div className="bg-white p-4 sm:p-6 shadow-md">
                    <div className="h-36 sm:h-48 bg-gray-200 mb-4 relative overflow-hidden">
                      <Image 
                        src="https://i.ibb.co/spmLmbN1/Screenshot-2025-05-06-153344.png"
                        alt="NCompany Inc - Startup Website"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                    <h3 className="text-lg font-bold mb-2">NCompany Inc - Startup Website</h3>
                    <p className="text-sm mb-4">Designed and developed the official website for my own technology startup, featuring modern UI, responsive design, and interactive elements.</p>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="bg-[#ff5722]/10 text-[#ff5722] px-2 py-1">JavaScript</span>
                      <span className="bg-[#ff5722]/10 text-[#ff5722] px-2 py-1">HTML/CSS</span>
                      <span className="bg-[#ff5722]/10 text-[#ff5722] px-2 py-1">Web Design</span>
                    </div>
                    <div className="mt-4">
                      <a href="https://www.ncompanyinc.tech/" target="_blank" rel="noopener noreferrer" className="text-[#ff5722] text-sm underline">Visit Website →</a>
                    </div>
                  </div>
                  
                  {/* Conditional projects that appear when Show More is clicked */}
                  {showAllProjects && (
                    <>
                      <div className="bg-white p-4 sm:p-6 shadow-md">
                        <div className="h-36 sm:h-48 bg-gray-200 mb-4 relative overflow-hidden">
                          <Image 
                            src="https://i.ibb.co/nqQTqynj/Screenshot-2025-05-06-154056.png"
                            alt="Toynixz - Online Toy Store"
                            fill
                            className="object-contain"
                            priority
                          />
                        </div>
                        <h3 className="text-lg font-bold mb-2">Toynixz - Online Toy Store</h3>
                        <p className="text-sm mb-4">End-to-end e-commerce platform for toys with complete backend integration, database management, and secure payment processing.</p>
                        <div className="flex flex-wrap gap-2 text-xs">
                          <span className="bg-[#ff5722]/10 text-[#ff5722] px-2 py-1">TypeScript</span>
                          <span className="bg-[#ff5722]/10 text-[#ff5722] px-2 py-1">Database</span>
                          <span className="bg-[#ff5722]/10 text-[#ff5722] px-2 py-1">E-Commerce</span>
                        </div>
                        <div className="mt-4">
                          <a href="https://toynixz.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-[#ff5722] text-sm underline">Visit Website →</a>
                        </div>
                      </div>
                      <div className="bg-white p-4 sm:p-6 shadow-md">
                        <div className="h-36 sm:h-48 bg-gray-200 mb-4 relative overflow-hidden">
                          <Image 
                            src="https://i.ibb.co/XrQxStRv/Screenshot-20250506-154619.jpg"
                            alt="FootprintX - Reconnaissance Tool"
                            fill
                            className="object-contain"
                            priority
                          />
                        </div>
                        <h3 className="text-lg font-bold mb-2">FootprintX - Reconnaissance Tool</h3>
                        <p className="text-sm mb-4">Developed a Telegram bot that performs comprehensive website enumeration and information gathering, generating detailed PDF reports for cybersecurity analysis.</p>
                        <div className="flex flex-wrap gap-2 text-xs">
                          <span className="bg-[#ff5722]/10 text-[#ff5722] px-2 py-1">Python</span>
                          <span className="bg-[#ff5722]/10 text-[#ff5722] px-2 py-1">Cybersecurity</span>
                          <span className="bg-[#ff5722]/10 text-[#ff5722] px-2 py-1">Bot Development</span>
                        </div>
                        <div className="mt-4 flex space-x-4">
                          <a href="https://github.com/NiranjanEpili/FootprintX" target="_blank" rel="noopener noreferrer" className="text-[#ff5722] text-sm underline">GitHub →</a>
                          <a href="https://t.me/Footprintxbot" target="_blank" rel="noopener noreferrer" className="text-[#ff5722] text-sm underline">Try Bot →</a>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                
                {/* Show More/Less button */}
                <div className="mt-8 text-center">
                  <button 
                    onClick={() => setShowAllProjects(prev => !prev)} 
                    className="inline-block border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors"
                  >
                    {showAllProjects ? "Show Less" : "View All Projects"}
                  </button>
                </div>
              </div>
            </AnimatedSection>
            
            {/* Contact form section with fixed form submission logic */}
            <AnimatedSection delay={0.3} id="contact-section" className="py-8 sm:py-16">
              <div className="px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto">
                <div className="inline-block bg-black text-white px-2 py-1 mb-4 sm:mb-6 text-sm">GET IN TOUCH_</div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-10">Let's Work Together_</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-sm mb-6">Interested in collaborating or work? Fill out the form and I'll get back to you as soon as possible.</p>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-[#ff5722] flex items-center justify-center rounded-full text-white">✉</div>
                        <div>
                          <h4 className="font-bold">Email</h4>
                          <p className="text-sm">niranjanepili@outlook.in</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-[#ff5722] flex items-center justify-center rounded-full text-white">📱</div>
                        <div>
                          <h4 className="font-bold">Phone</h4>
                          <p className="text-sm">+918268310971</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-[#ff5722] flex items-center justify-center rounded-full text-white">🌐</div>
                        <div>
                          <h4 className="font-bold">Social Media</h4>
                          <div className="flex space-x-3 mt-2">
                            <a href="https://www.linkedin.com/in/niranjanepili" className="w-8 h-8 bg-black flex items-center justify-center rounded-full text-white text-xs">Li</a>
                            <a href="https://github.com/NiranjanEpili" className="w-8 h-8 bg-black flex items-center justify-center rounded-full text-white text-xs">Gh</a>
                            <a href="https://www.youtube.com/@njkevlogs" className="w-8 h-8 bg-black flex items-center justify-center rounded-full text-white text-xs">YT</a>
                            <a href="#" className="w-8 h-8 bg-black flex items-center justify-center rounded-full text-white text-xs">TW</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <form className="space-y-4" onSubmit={async (e) => {
                      e.preventDefault();
                      // Get form reference
                      const form = e.target as HTMLFormElement;
                      const formData = new FormData(form);
                      // Add Web3Forms access key
                      formData.append("access_key", "081628fe-4e01-4895-8642-f4cd6f02eafc");
                      formData.append("subject", "New inquiry from your portfolio website");
                      formData.append("from_name", "Niranjan Epili Portfolio");
                      
                      setSubmitting(true);
                      setSubmissionStatus("Sending your message...");
                      
                      try {
                        await fetch("https://api.web3forms.com/submit", {
                          method: "POST",
                          body: formData,
                          headers: {
                            "Accept": "application/json"
                          }
                        });
                        
                        form.reset();
                        setSubmissionStatus("Message sent successfully! I'll get back to you soon.");
                        setTimeout(() => setSubmissionStatus(""), 5000);
                      } catch (error) {
                        console.error("Form submission error:", error);
                        setSubmissionStatus("Something went wrong. Please try again later.");
                      } finally {
                        setSubmitting(false);
                      }
                    }}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm mb-1">Name</label>
                          <input 
                            type="text" 
                            name="name" 
                            required
                            className="w-full p-2 border border-gray-300 focus:border-[#ff5722] outline-none" 
                          />
                        </div>
                        <div>
                          <label className="block text-sm mb-1">Email</label>
                          <input 
                            type="email" 
                            name="email" 
                            required
                            className="w-full p-2 border border-gray-300 focus:border-[#ff5722] outline-none" 
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm mb-1">Phone Number</label>
                        <input 
                          type="tel" 
                          name="phone" 
                          className="w-full p-2 border border-gray-300 focus:border-[#ff5722] outline-none" 
                          placeholder="Your contact number (optional)"
                        />
                      </div>
                      <div>
                        <label className="block text-sm mb-1">Subject</label>
                        <input 
                          type="text" 
                          name="subject" 
                          className="w-full p-2 border border-gray-300 focus:border-[#ff5722] outline-none" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm mb-1">Message</label>
                        <textarea 
                          rows={4} 
                          name="message" 
                          required
                          className="w-full p-2 border border-gray-300 focus:border-[#ff5722] outline-none"
                        ></textarea>
                      </div>
                      {/* Honeypot field */}
                      <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                      <button 
                        type="submit" 
                        disabled={submitting}
                        className={`w-full bg-[#ff5722] text-white px-5 py-2 hover:bg-[#e64a19] transition-colors ${submitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                      >
                        {submitting ? 'Sending...' : 'Send Message'}
                      </button>
                      {submissionStatus && (
                        <div className={`mt-4 p-3 text-sm rounded ${submissionStatus.includes('successfully') ? 'bg-green-50 text-green-800' : 'bg-yellow-50 text-yellow-800'}`}>
                          {submissionStatus}
                        </div>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            {/* Footer */}
            <footer className="bg-black text-white py-12">
              <div className="px-8 lg:px-12 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Niranjan Epili_</h2>
                    <p className="text-sm text-gray-400 mb-6">Creating innovative solutions at the intersection of AI/ML and cybersecurity.</p>
                    <p className="text-xs text-gray-500">© 2025 Niranjan Epili. All rights reserved.</p>
                  </div>
                  <div className="flex flex-col items-start md:items-end">
                    <h3 className="text-lg font-bold mb-3">Connect</h3>
                    <div className="flex space-x-4">
                      <a href="https://www.linkedin.com/in/niranjanepili" className="text-gray-400 hover:text-white">LinkedIn</a>
                      <a href="https://github.com/NiranjanEpili" className="text-gray-400 hover:text-white">GitHub</a>
                      <a href="https://www.youtube.com/@njkevlogs" className="text-gray-400 hover:text-white">YouTube</a>
                      <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </main>
        </div>
      </div>
    </>
  );
}
