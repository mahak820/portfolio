"use client";
import { motion } from "framer-motion";
import React from 'react';
// Remove this import - we'll use a more flexible approach
import Spline from '@splinetool/react-spline';
import { GridBeam } from "../ui/GridBeam";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  // Test function to verify navigation is working
  // React.useEffect(() => {
  //   console.log('Hero component loaded. Navigation should work now.');
  //   console.log('Available routes:', ['/about', '/projects', '/skills', '/contact', '/resume', '/blog']);
  // }, []);

  // Resume download function
  const downloadResume = () => {
    try {
   
      
      // Option 1: Direct download link (replace with your actual resume file path)
      const resumeUrl = '/Mahak_Resume.pdf'; // Update this path to your resume file
      
      // Create a temporary link element for download
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.download = 'Mahak_Resume.pdf'; // The name the file will have when downloaded
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      
      // Optional: Show a success message or notification
      // You can add a toast notification here if you have one
      
    } catch (error) {
      console.error('Resume download error:', error);
      
      // Fallback: Open resume in new tab if download fails
      try {
        window.open('/resume/Mahak_Resume.pdf', '_blank');
        
      } catch (fallbackError) {
        console.error('Fallback also failed:', fallbackError);
        alert('Resume download failed. Please contact me directly for my resume.');
      }
    }
  };

  // Enhanced navigation handler with better error handling
const navigate = useNavigate()

  const handleNavigation = (route) => {
    navigate(route)
  };

  const navButtons = [
    { 
      name: "About Me", 
      icon: "👨‍💻", 
      route: "/about",
      position: { top: "15%", left: "8%" },
      color: "from-violet-600 to-purple-600",
      hoverColor: "violet",
      action: "navigate"
    },
    { 
      name: "Projects", 
      icon: "🚀", 
      route: "/projects",
      position: { top: "12%", right: "10%" },
      color: "from-blue-600 to-indigo-600",
      hoverColor: "blue",
      action: "navigate"
    },
    { 
      name: "Skills", 
      icon: "⚡", 
      route: "/skills",
      position: { top: "42%", left: "4%" },
      color: "from-yellow-600 to-orange-600",
      hoverColor: "yellow",
      action: "navigate"
    },
    { 
      name: "Contact", 
      icon: "💬", 
      route: "/contact",
      position: { top: "38%", right: "6%" },
      color: "from-green-600 to-emerald-600",
      hoverColor: "green",
      action: "navigate"
    },
    { 
      name: "Resume", 
      icon: "📄", 
      route: "/resume/Mahak_Resume.pdf", // This will be used for download
      position: { bottom: "28%", left: "12%" },
      color: "from-red-600 to-pink-600",
      hoverColor: "red",
      action: "download" // Special action for resume
    },
    { 
      name: "Experience", 
      icon: "✍️", 
      route: "/experience",
      position: { bottom: "25%", right: "14%" },
      color: "from-cyan-600 to-teal-600",
      hoverColor: "cyan",
      action: "navigate"
    }
  ];

  // Handle button clicks based on action type
  const handleButtonClick = (button) => {
    // console.log(`${button.name} clicked!`);
    
    if (button.action === "download") {
      downloadResume();
    } else {
      handleNavigation(button.route);
    }
  };

  return (
    // Main wrapper with dark background
    <div className="relative min-h-screen w-full bg-[#141618] overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 h-full w-full grid-background bg-grid-white/[0.05]" />
      
      {/* Content wrapper */}
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <GridBeam>
          <div className="flex  flex-col items-center justify-center w-full px-4 mx-auto relative" style={{ minHeight: '100vh' }}>
            
            {/* Top Heading */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-8 md:top-16 z-30 "
            >
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white text-center">
                Welcome to My
                <span className="block py-5 bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-5">
                  Digital Universe
                </span>
              </h1>
            </motion.div>

            {/* Desktop Navigation Buttons - Structured Organic Layout */}
            <div className="hidden lg:block absolute inset-0 z-30 pointer-events-none">
              {navButtons.map((button, index) => (
                <motion.div
                  key={button.name}
                  initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.8 + index * 0.15,
                    type: "spring",
                    stiffness: 150,
                    damping: 12
                  }}
                  className="absolute pointer-events-auto"
                  style={button.position}
                >
                  <motion.button
                    onClick={(e) => {
                      handleButtonClick(button);
                    }}
                    whileHover={{ 
                      scale: 1.15,
                      rotateY: 5,
                      boxShadow: `0 15px 35px rgba(129, 94, 246, 0.4)`,
                      y: -8
                    }}
                    whileTap={{ 
                      scale: 0.95,
                      transition: { duration: 0.1 }
                    }}
                    className="group relative px-8 py-4 bg-gradient-to-br from-slate-900/80 to-slate-800/80 border border-violet-500/50 text-white rounded-2xl backdrop-blur-xl overflow-hidden transition-all duration-300 cursor-pointer shadow-2xl min-w-[140px] hover:border-violet-400/80"
                    title={button.action === "download" ? "Download Resume" : `Go to ${button.name}`}
                  >
                    {/* Animated background gradient */}
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-br ${button.color} opacity-0 group-hover:opacity-30 transition-opacity duration-400 rounded-2xl`}
                      whileHover={{ 
                        scale: 1.1
                      }}
                    />
                    
                    {/* Glowing edge effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                    
                    {/* Content */}
                    <div className="relative z-10 flex items-center space-x-3">
                      <motion.span 
                        className="text-2xl filter drop-shadow-lg"
                        whileHover={{ 
                          scale: 1.3, 
                          rotate: [0, -10, 10, 0],
                          filter: "drop-shadow(0 0 8px rgba(255,255,255,0.5))"
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {button.icon}
                      </motion.span>
                      <span className="font-bold text-lg tracking-wide group-hover:text-white/95 transition-colors duration-300">
                        {button.name}
                        {button.action === "download" && (
                          <span className="block text-xs opacity-70">Download</span>
                        )}
                      </span>
                    </div>
                    
                    {/* Enhanced shine effect */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                    />
                    
                    {/* Floating particles effect */}
                    <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-white/30 rounded-full"
                          style={{
                            top: `${20 + i * 25}%`,
                            left: `${15 + i * 30}%`,
                          }}
                          animate={{
                            y: [-5, -15, -5],
                            opacity: [0.3, 0.7, 0.3],
                            scale: [0.8, 1.2, 0.8]
                          }}
                          transition={{
                            duration: 2 + i * 0.5,
                            repeat: Infinity,
                            delay: i * 0.3
                          }}
                        />
                      ))}
                    </div>
                  </motion.button>
                </motion.div>
              ))}
            </div>
            
            {/* Center 3D Scene */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
              className="relative w-full h-[60vh] md:h-[65vh] lg:h-[65vh] max-w-6xl mx-auto z-20"
            >
              <div className="absolute inset-0 z-10 pointer-events-none mt-20" />
              <Spline scene="https://prod.spline.design/BC5Aye5UjQzyvWBB/scene.splinecode" />
            </motion.div>

            {/* Mobile Navigation - Enhanced Buttons with Proper Layout */}
            <div className="lg:hidden absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30 w-full max-w-lg px-4">
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="grid grid-cols-3 gap-3"
              >
                {navButtons.map((button, index) => (
                  <motion.button
                    key={button.name}
                    initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 1.2 + index * 0.1,
                      type: "spring",
                      stiffness: 150,
                      damping: 12
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      // console.log(`Mobile: Clicking ${button.name}`);
                      handleButtonClick(button);
                    }}
                    onPointerDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    whileHover={{ 
                      scale: 1.08,
                      rotateY: 3,
                      boxShadow: "0 12px 30px rgba(129, 94, 246, 0.5)",
                      y: -6
                    }}
                    whileTap={{ 
                      scale: 0.92,
                      transition: { duration: 0.1 }
                    }}
                    className="group relative px-3 py-4 bg-gradient-to-br from-slate-900/80 to-slate-800/80 border border-violet-500/50 text-white rounded-xl backdrop-blur-xl overflow-hidden transition-all duration-300 cursor-pointer shadow-xl min-h-[90px] flex flex-col items-center justify-center space-y-2 hover:border-violet-400/80 select-none"
                    style={{ 
                      pointerEvents: 'auto',
                      userSelect: 'none',
                      touchAction: 'manipulation'
                    }}
                    title={button.action === "download" ? "Download Resume" : `Go to ${button.name}`}
                  >
                    {/* Enhanced background gradient */}
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-br ${button.color} opacity-0 group-hover:opacity-25 transition-opacity duration-400 rounded-xl`}
                      whileHover={{ scale: 1.05 }}
                    />
                    
                    {/* Glowing edge effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                    
                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center space-y-2">
                      <motion.span 
                        className="text-2xl filter drop-shadow-lg"
                        whileHover={{ 
                          scale: 1.25, 
                          rotate: [0, -8, 8, 0],
                          filter: "drop-shadow(0 0 6px rgba(255,255,255,0.4))"
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {button.icon}
                      </motion.span>
                      <span className="font-bold text-sm text-center leading-tight group-hover:text-white/95 transition-colors duration-300 tracking-wide">
                        {button.name}
                        {button.action === "download" && (
                          <span className="block text-xs opacity-70 mt-1">Download</span>
                        )}
                      </span>
                    </div>
                    
                    {/* Enhanced shine effect */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-xl"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                    />
                    
                    {/* Floating particles effect */}
                    <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
                      {[...Array(2)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-white/25 rounded-full"
                          style={{
                            top: `${25 + i * 35}%`,
                            left: `${20 + i * 40}%`,
                          }}
                          animate={{
                            y: [-3, -8, -3],
                            opacity: [0.2, 0.6, 0.2],
                            scale: [0.6, 1, 0.6]
                          }}
                          transition={{
                            duration: 1.5 + i * 0.3,
                            repeat: Infinity,
                            delay: i * 0.2
                          }}
                        />
                      ))}
                    </div>
                  </motion.button>
                ))}
              </motion.div>
              
              {/* Mobile decorative line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 2 }}
                className="mt-8 h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent rounded-full"
              />
            </div>
            
          </div>
        </GridBeam>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.2 }}
        className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center cursor-pointer"
        >
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;