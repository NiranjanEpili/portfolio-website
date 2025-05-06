'use client';

import Image from "next/image"
import Link from "next/link"
import styles from "./styles.module.css"
import { useLanguage } from "./contexts/LanguageContext"
import LanguageSelector from "./components/LanguageSelector"

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#f2e9dc] font-mono text-black relative">
      {/* Vertical strip on right - changed to black with orange text */}
      <div className="fixed right-0 top-0 bottom-0 w-8 bg-black z-10 flex items-center justify-center overflow-hidden">
        <div className={`${styles.scrollingText} text-[#ff5722] font-mono text-xs tracking-wide whitespace-nowrap`}>
          Niranjan Epili | AI/ML Engineer | Ethical Hacker | Cybersecurity Professional | UI/UX Designer | Startup Founder & CEO | YouTuber |
          Freelancer | Writer
        </div>
      </div>

      <div className="pr-8">
        {/* Top header - updated with personal information and border */}
        <header className="bg-[#f2e9dc] px-6 py-2 flex justify-between items-center border-b border-black/100">
          <div className="text-xs sm:text-sm">{t('welcome')}</div>
          <div className="text-xs sm:text-sm">niranjanepili@outlook.in | +918268310971 </div>
        </header>

        {/* Navigation */}
        <nav className="bg-[#f2e9dc] px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="font-bold text-xl mr-8">NE_</div>
            {/* Navigation links - expanded for all screen sizes */}
            <div className="flex flex-wrap space-x-2 md:space-x-6">
              <Link href="#" className="bg-[#ff5722] px-2 py-1 text-sm md:text-base mb-1">
                {t('home')}
              </Link>
              <Link href="#" className="hover:underline px-1 text-sm md:text-base mb-1">
                {t('about')}
              </Link>
              <Link href="#" className="hover:underline px-1 text-sm md:text-base mb-1">
                {t('work')}
              </Link>
              <Link href="#" className="hover:underline px-1 text-sm md:text-base mb-1">
                {t('services')}
              </Link>
              <Link href="#" className="hover:underline px-1 text-sm md:text-base mb-1">
                {t('process')}
              </Link>
              <Link href="#" className="hover:underline px-1 text-sm md:text-base mb-1">
                {t('contact')}
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <span className="text-xl">cod</span>
          </div>
        </nav>

        {/* Main content */}
        <main>
          {/* Changed to positioned layout with text next to image */}
          <div className="relative py-8 flex justify-end">
            {/* Right content - custom image without play button */}
            <div className="relative w-[30%] mr-0 max-h-[500px]" style={{ aspectRatio: '9/16' }}>
              <Image
                src="https://i.ibb.co/7xnRj2cD/Untitled-design-20250506-134959-0000.png"
                alt="Niranjan Epili"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Text content positioned at better height next to image - updated with professional content */}
            <div className="absolute top-1/4 right-[32%] w-[50%] bg-transparent">
              <h2 className="text-2xl mb-3 font-bold">AI/ML Engineer | Cybersecurity Expert | Startup Founder_</h2>
              <p className="mb-4 text-base leading-normal">
                Engineering student and tech entrepreneur with expertise in artificial intelligence, machine learning, and{" "}
                <span className="underline">advanced cybersecurity systems</span>. Building innovative solutions at the intersection of technology and business.
              </p>
              <p className="text-base leading-normal">
                Leveraging deep technical knowledge and entrepreneurial vision to identify vulnerabilities, create secure digital environments, and develop next-generation AI-powered applications for tomorrow's challenges.
              </p>
            </div>
          </div>

          {/* Coding a better world section - updated with entrepreneurship focus */}
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <div className="inline-block bg-black text-white px-2 py-1 mb-6 text-sm">About Me_</div>
              <h1 className="text-[#ff5722] text-6xl md:text-7xl lg:text-8xl font-bold leading-none">
                Securing_
                <br />A Digital_
                <br />
                Future_
              </h1>
            </div>

            {/* Scroll down */}
            <div className="flex justify-end items-end p-8">
              <div className="writing-vertical-rl text-xs transform rotate-180">SCROLL DOWN</div>
              <div className="ml-2">↓</div>
            </div>
          </div>

          {/* We deliver section - updated */}
          <div className="grid grid-cols-1 lg:grid-cols-2">
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
                  <h3 className="text-xl">Projects_</h3>
                  <div className="w-full h-1 bg-[#ff5722] mt-2"></div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-[#ff5722] text-6xl font-bold opacity-20">0075</div>
              </div>
            </div>
          </div>
          
          {/* Skills Section - Expanded with more expertise areas */}
          <div className="bg-[#f9f4eb] py-16">
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
          </div>
          
          {/* Projects Section */}
          <div className="py-16">
            <div className="px-8 lg:px-12 max-w-6xl mx-auto">
              <div className="inline-block bg-black text-white px-2 py-1 mb-6 text-sm">PORTFOLIO HIGHLIGHTS_</div>
              <h2 className="text-2xl md:text-3xl font-bold mb-10">Featured Projects_</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 shadow-md">
                  <div className="h-48 bg-gray-200 mb-4 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">Project Image</div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">AI-Driven Security System</h3>
                  <p className="text-sm mb-4">Developed a machine learning model that detects potential security breaches and anomalies in network traffic with 99.7% accuracy.</p>
                  <div className="flex space-x-2 text-xs">
                    <span className="bg-[#ff5722]/10 text-[#ff5722] px-2 py-1">Machine Learning</span>
                    <span className="bg-[#ff5722]/10 text-[#ff5722] px-2 py-1">Security</span>
                    <span className="bg-[#ff5722]/10 text-[#ff5722] px-2 py-1">Python</span>
                  </div>
                </div>
                
                <div className="bg-white p-6 shadow-md">
                  <div className="h-48 bg-gray-200 mb-4 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">Project Image</div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Startup Tech Platform</h3>
                  <p className="text-sm mb-4">Created a comprehensive SaaS platform helping small businesses implement advanced security protocols and AI-driven analytics.</p>
                  <div className="flex space-x-2 text-xs">
                    <span className="bg-[#ff5722]/10 text-[#ff5722] px-2 py-1">Entrepreneurship</span>
                    <span className="bg-[#ff5722]/10 text-[#ff5722] px-2 py-1">Full Stack</span>
                    <span className="bg-[#ff5722]/10 text-[#ff5722] px-2 py-1">UI/UX</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Link href="#" className="inline-block border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors">
                  View All Projects
                </Link>
              </div>
            </div>
          </div>
          
          {/* Education & Experience */}
          <div className="bg-[#f9f4eb] py-16">
            <div className="px-8 lg:px-12 max-w-6xl mx-auto">
              <div className="inline-block bg-black text-white px-2 py-1 mb-6 text-sm">BACKGROUND_</div>
              <h2 className="text-2xl md:text-3xl font-bold mb-10">Education & Experience_</h2>
              
              <div className="space-y-8">
                <div className="border-l-2 border-[#ff5722] pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-[#ff5722]"></div>
                  <h3 className="text-lg font-bold">Engineering Student - AI/ML Specialization</h3>
                  <p className="text-sm text-gray-700 mb-2">University Name | 2020 - Present</p>
                  <p className="text-sm">Focusing on artificial intelligence, machine learning, and cybersecurity systems with additional courses in entrepreneurship.</p>
                </div>
                
                <div className="border-l-2 border-[#ff5722] pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-[#ff5722]"></div>
                  <h3 className="text-lg font-bold">Founder & CEO - Tech Startup</h3>
                  <p className="text-sm text-gray-700 mb-2">Your Startup Name | 2022 - Present</p>
                  <p className="text-sm">Leading a tech startup focused on AI-driven security solutions and innovative digital products for businesses.</p>
                </div>
                
                <div className="border-l-2 border-[#ff5722] pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-[#ff5722]"></div>
                  <h3 className="text-lg font-bold">Freelance Developer & Security Consultant</h3>
                  <p className="text-sm text-gray-700 mb-2">Various Clients | 2021 - Present</p>
                  <p className="text-sm">Providing specialized security consulting, penetration testing, and custom application development for clients across industries.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Section */}
          <div className="py-16">
            <div className="px-8 lg:px-12 max-w-6xl mx-auto">
              <div className="inline-block bg-black text-white px-2 py-1 mb-6 text-sm">GET IN TOUCH_</div>
              <h2 className="text-2xl md:text-3xl font-bold mb-10">Let's Work Together_</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <p className="text-sm mb-6">Interested in collaborating or learning more about my services? Fill out the form and I'll get back to you as soon as possible.</p>
                  
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
                          <a href="#" className="w-8 h-8 bg-black flex items-center justify-center rounded-full text-white text-xs">Li</a>
                          <a href="#" className="w-8 h-8 bg-black flex items-center justify-center rounded-full text-white text-xs">Gh</a>
                          <a href="#" className="w-8 h-8 bg-black flex items-center justify-center rounded-full text-white text-xs">YT</a>
                          <a href="#" className="w-8 h-8 bg-black flex items-center justify-center rounded-full text-white text-xs">TW</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm mb-1">Name</label>
                        <input type="text" className="w-full p-2 border border-gray-300 focus:border-[#ff5722] outline-none" />
                      </div>
                      <div>
                        <label className="block text-sm mb-1">Email</label>
                        <input type="email" className="w-full p-2 border border-gray-300 focus:border-[#ff5722] outline-none" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm mb-1">Subject</label>
                      <input type="text" className="w-full p-2 border border-gray-300 focus:border-[#ff5722] outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm mb-1">Message</label>
                      <textarea rows={4} className="w-full p-2 border border-gray-300 focus:border-[#ff5722] outline-none"></textarea>
                    </div>
                    <button type="submit" className="bg-[#ff5722] text-white px-5 py-2 hover:bg-[#e64a19] transition-colors">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer */}
          <footer className="bg-black text-white py-12">
            <div className="px-8 lg:px-12 max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Niranjan Epili_</h2>
                  <p className="text-sm text-gray-400 mb-6">Creating innovative solutions at the intersection of AI/ML and cybersecurity.</p>
                  <p className="text-xs text-gray-500">© 2023 Niranjan Epili. All rights reserved.</p>
                </div>
                <div className="flex flex-col items-start md:items-end">
                  <h3 className="text-lg font-bold mb-3">Connect</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
                    <a href="#" className="text-gray-400 hover:text-white">GitHub</a>
                    <a href="#" className="text-gray-400 hover:text-white">YouTube</a>
                    <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  )
}
