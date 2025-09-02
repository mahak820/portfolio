"use client";
import { motion } from "framer-motion";
import React from 'react';
import { GridBeam } from "../ui/GridBeam";
import ProfileCard from "../components/ProfileCard";

const About = () => {
  const handleNavigation = (route) => {
    try {
      console.log('Navigating to:', route);
      setTimeout(() => {
        if (route.startsWith('/')) {
          const fullUrl = window.location.origin + route;
          window.location.href = fullUrl;
        } else {
          window.location.href = route;
        }
      }, 50);
    } catch (error) {
      console.error('Navigation error:', error);
      window.open(route, '_self');
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#141618] overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 h-full w-full grid-background bg-grid-white/[0.05]" />
      
      {/* Home button */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute top-8 left-8 z-30"
      >
        <motion.button
          onClick={() => handleNavigation('/')}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 4px 12px rgba(129, 94, 246, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2 px-6 py-3 bg-gray-900/50 border border-gray-700 text-white rounded-lg backdrop-blur-sm hover:border-violet-400 transition-all duration-300 cursor-pointer"
        >
          <span className="text-lg">←</span>
          <span className="font-medium">Home</span>
        </motion.button>
      </motion.div>

      {/* Content wrapper */}
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <GridBeam>
          <div className="w-full max-w-7xl mx-auto px-4 py-20">
            
            {/* Page title */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                About
                <span className="block bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Me
                </span>
              </h1>
            </motion.div>

            {/* Main content */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              {/* Left side - Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex justify-center lg:justify-center "
              >
                <div className="relative ">
  
                        <ProfileCard
                        name="Mahak Tuwani"
                        title="Full Stack Developer"
                        handle="mahaktuwani8@gmail.com"
                        status="Online"
                        contactText="Contact Me"
                        avatarUrl="/images/mahak_final2new.png"
                        showUserInfo={false}
                        enableTilt={true}
                        enableMobileTilt={false}
                        onContactClick={() => console.log('Contact clicked')}
                        />
                  
                </div>
              </motion.div>

              {/* Right side - Text content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="space-y-6"
              >
                <div className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    Hi, I'm a Creative Developer
                  </h2>
                  
                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>
                      I'm passionate about creating digital experiences that bridge the gap between 
                      design and technology. With a strong foundation in modern web development, 
                      I specialize in building interactive applications that captivate users.
                    </p>
                    
                    <p>
                      My journey began with curiosity about how websites work, which led me to 
                      explore frontend frameworks, 3D web technologies, and user interface design. 
                      I believe that great code should not only function flawlessly but also 
                      create memorable experiences.
                    </p>
                    
                    <p>
                      When I'm not coding, you can find me exploring new technologies, contributing 
                      to open-source projects, or experimenting with creative coding projects that 
                      push the boundaries of what's possible on the web.
                    </p>
                  </div>
                </div>

                {/* Skills overview */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">What I Do</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                      <span className="text-gray-300">Frontend Development</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-gray-300">3D Web Experiences</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                      <span className="text-gray-300">UI/UX Design</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                      <span className="text-gray-300">Creative Coding</span>
                    </div>
                  </div>
                </div>

                {/* CTA buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="flex flex-wrap gap-4 pt-4"
                >
                  <motion.button
                    onClick={() => handleNavigation('/projects')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                  >
                    View My Work
                  </motion.button>
                  
                  <motion.button
                    onClick={() => handleNavigation('/contact')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg font-medium hover:border-gray-400 hover:text-white transition-all duration-300"
                  >
                    Get In Touch
                  </motion.button>
                </motion.div>
              </motion.div>

            </div>
          </div>
        </GridBeam>
      </div>
    </div>
  );
};

export default About;