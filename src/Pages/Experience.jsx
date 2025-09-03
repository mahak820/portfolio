"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from 'react';
import { GridBeam } from "../ui/GridBeam";
import { useNavigate } from "react-router-dom";

const Experience = () => {
  const [currentInternship, setCurrentInternship] = useState(0);
  const [currentAchievement, setCurrentAchievement] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState({ src: '', alt: '', title: '' });

  const navigate = useNavigate()

  const handleNavigation = (route) => {
    navigate(route)
  };
  const internships = [
    {
      id: 1,
      title: "Full Stack Developer Intern",
      company: "Sky TechnoSoft Pvt.Ltd",
      duration: "May 2025 - Jul 2025",
      description: "During my internship, I worked closely with the development team on live client projects involving modern web technologies. My role focused on building scalable, responsive, and user-friendly applications using React.js for the frontend and Node.js with Express.js for the backend. I implemented RESTful APIs, managed data with MongoDB, and ensured smooth frontend–backend integration.",
      skills: ["React", "Node.js", "MongoDB", "REST APIs", "Git"],
      certificateImage: "/images/SkyMahak.png",
      color: "violet"
    },
    {
      id: 2,
      title: "Web Developer Intern",
      company: "E-Skills Web LLP",
      duration: "Aug 2024 - Feb 2025",
      description: "As a MERN Stack Development Intern at E-Skills, Indore, I obtained practical experience in developing full-stack web applications withMongoDB, Express.js, React.js, and Node.js. Creating and integrating REST APIs, managing databases, putting authentication featuresin place, and designing responsive user interfaces were all part of my job. Additionally, I worked in an agile environment with my team,which enhanced my comprehension of full-stack development overall and helped me with problem-solving, debugging, and deployment.",
      skills: ["React", "Tailwind CSS", "JavaScript", "Node.js", "Render", "Express" , "MongoDB"],
      certificateImage: "/images/EskillsMahak.png",
      color: "blue"
    },
    // {
    //   id: 3,
    //   title: "Software Development Intern",
    //   company: "StartupLab",
    //   duration: "Sep 2023 - Dec 2023",
    //   description: "Worked on multiple client projects, developed custom web solutions, and gained experience in agile development methodologies. Built RESTful APIs and integrated third-party services.",
    //   skills: ["Vue.js", "Express.js", "PostgreSQL", "Git", "AWS", "Agile"],
    //   certificateImage: "/api/placeholder/500/350",
    //   color: "indigo"
    // }
  ];

  const achievements = [
    {
      id: 1,
      title: "Hackathon Runner-Up Quasar2.0",
      organization: "47 Billion",
      date: "Feburary 2025",
      description: "Secured 2nd position in the Quasar National Level Hackathon, competing against 350+ teams from 12 states, with only 9 teams reaching the finals. Collaborated with my team to design and implement a scalable, user-focused solution using modern web technologies. The project was recognized for its technical execution, problem-solving approach, and impactful design, giving me valuable exposure to rapid prototyping, teamwork, and presenting ideas effectively",
      category: "Hackathon",
      certificateImage: "/images/QuasarMahak.jpg",
      color: "purple"
    },
    {
      id: 2,
      title: "Finalist in Odoo Hackathon 2025",
      organization: "Odoo",
      date: "August 2025",
      description: "Achieved Finalist position in the Odoo Hackathon, competing among 19,000+ participants across India. Worked on developing an innovative solution leveraging modern technologies, with emphasis on scalability, efficiency, and real-world impact. The recognition highlighted my ability to ideate, prototype, and deliver solutions under competitive and time-bound conditions, while collaborating effectively in a team environment.",
      category: "Hackathon",
      certificateImage: "/images/OdooMahak.jpg",
      color: "pink"
    },
    {
      id: 3,
      title: "Hackathon Winner",
      organization: "CodeCrush 2023",
      date: "October 2023",
      description: "Led a team of 4 developers to create an innovative solution for sustainable transportation, securing 1st position among 200+ participants. Developed a full-stack application in 48 hours.",
      category: "Competition",
      certificateImage: "/api/placeholder/500/350",
      color: "cyan"
    },
    {
      id: 4,
      title: "AWS Cloud Practitioner",
      organization: "Amazon Web Services",
      date: "August 2023",
      description: "Achieved AWS Cloud Practitioner certification demonstrating foundational cloud computing knowledge and skills. Gained expertise in AWS core services, security, and architecture principles.",
      category: "Certification",
      certificateImage: "/api/placeholder/500/350",
      color: "emerald"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentInternship((prev) => (prev + 1) % internships.length);
      setCurrentAchievement((prev) => (prev + 1) % achievements.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, internships.length, achievements.length]);

  // Modal functions - simplified for debugging
  const openModal = (src, alt, title) => {
    console.log('Opening modal with:', { src, alt, title }); // Debug log
    setModalImage({ src, alt, title });
    setIsModalOpen(true);
    // Prevent background scrolling
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    console.log('Closing modal'); // Debug log
    setIsModalOpen(false);
    setModalImage({ src: '', alt: '', title: '' });
    // Restore scrolling
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'unset';
    }
  };

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscKey);
      return () => document.removeEventListener('keydown', handleEscKey);
    }
  }, [isModalOpen]);

  const nextInternship = () => {
    setCurrentInternship((prev) => (prev + 1) % internships.length);
  };

  const prevInternship = () => {
    setCurrentInternship((prev) => (prev - 1 + internships.length) % internships.length);
  };

  const nextAchievement = () => {
    setCurrentAchievement((prev) => (prev + 1) % achievements.length);
  };

  const prevAchievement = () => {
    setCurrentAchievement((prev) => (prev - 1 + achievements.length) % achievements.length);
  };

//   // Test function for debugging
//   const testModal = () => {
//     console.log('Test modal clicked!');
//     openModal('/images/SkyMahak.png', 'Test Image', 'Test Modal');
//   };

  return (
    <div className="relative min-h-screen w-full bg-[#141618] overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 h-full w-full grid-background bg-grid-white/[0.05]" />
      
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-violet-400/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 10 - 5, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
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

      {/* Auto-play toggle */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute top-8 right-8 z-30"
      >
        <motion.button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg backdrop-blur-sm transition-all duration-300 cursor-pointer ${
            isAutoPlaying 
              ? 'bg-violet-600/20 border border-violet-400 text-violet-300' 
              : 'bg-gray-900/50 border border-gray-700 text-gray-300'
          }`}
        >
          <span className="text-sm">{isAutoPlaying ? '⏸' : '▶'}</span>
          <span className="text-sm font-medium">Auto</span>
        </motion.button>
      </motion.div>

      {/* Debug button - Remove this after testing */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute top-8 left-1/2 transform -translate-x-1/2 z-30"
      >
        <button
          onClick={testModal}
          className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm"
        >
          Test Modal
        </button>
      </motion.div> */}

      {/* Content wrapper */}
      <div className="relative z-10 py-16">
        <GridBeam>
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
            
            {/* Page title */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center mb-20"
            >
              <motion.h1 
                className="text-4xl md:text-6xl font-bold text-white mb-6"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(129, 94, 246, 0.3)",
                    "0 0 30px rgba(129, 94, 246, 0.5)",
                    "0 0 20px rgba(129, 94, 246, 0.3)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                My
                <motion.span 
                  className="block bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  Experience
                </motion.span>
              </motion.h1>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                A journey through my professional experiences and achievements that have shaped my development career.
              </p>
            </motion.div>

            {/* Internships Carousel */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-20"
            >
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center">
                  <motion.h2 
                    className="text-3xl md:text-4xl font-bold text-white"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    Internships
                  </motion.h2>
                  <motion.div 
                    className="ml-6 w-32 h-px bg-gradient-to-r from-violet-500 to-transparent"
                    animate={{ scaleX: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>
                
                {/* Enhanced navigation controls */}
                <div className="flex items-center space-x-6">
                  <motion.div
                    className="text-gray-400 text-sm"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {currentInternship + 1} / {internships.length}
                  </motion.div>
                  <div className="flex space-x-2">
                    <motion.button
                      onClick={prevInternship}
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-full bg-gradient-to-r from-gray-800/80 to-gray-700/80 border border-gray-600 text-white flex items-center justify-center hover:border-violet-400 hover:shadow-lg hover:shadow-violet-400/20 transition-all duration-300"
                    >
                      <span className="text-lg">←</span>
                    </motion.button>
                    <motion.button
                      onClick={nextInternship}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-full bg-gradient-to-r from-gray-800/80 to-gray-700/80 border border-gray-600 text-white flex items-center justify-center hover:border-violet-400 hover:shadow-lg hover:shadow-violet-400/20 transition-all duration-300"
                    >
                      <span className="text-lg">→</span>
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mb-8 w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-violet-500 to-purple-500"
                  initial={{ width: "0%" }}
                  animate={{ width: `${((currentInternship + 1) / internships.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Enhanced Carousel Content */}
              <div className="relative overflow-hidden rounded-2xl border border-gray-700/30 bg-gray-900/30 backdrop-blur-sm p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentInternship}
                    initial={{ opacity: 0, x: 300, rotateY: 45 }}
                    animate={{ opacity: 1, x: 0, rotateY: 0 }}
                    exit={{ opacity: 0, x: -300, rotateY: -45 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="grid lg:grid-cols-2 gap-12 items-center"
                  >
                    {/* Enhanced Certificate Display */}
                    <div className="relative">
                      <motion.div 
                        className="relative h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 group cursor-pointer"
                        whileHover={{ 
                          scale: 1.03,
                          rotateY: 5,
                          rotateX: 5
                        }}
                        transition={{ duration: 0.4 }}
                        style={{ transformStyle: "preserve-3d" }}
                        onClick={() => {
                          console.log('Certificate clicked!'); // Debug log
                          openModal(
                            internships[currentInternship].certificateImage, 
                            `${internships[currentInternship].title} Certificate`,
                            `${internships[currentInternship].title} - ${internships[currentInternship].company}`
                          );
                        }}
                      >
                        <div className="w-full h-full flex items-center justify-center relative z-10 pointer-events-none">
                          <img
                            src={internships[currentInternship].certificateImage}
                            alt={`${internships[currentInternship].title} Certificate`}
                            className="w-full h-full object-cover rounded-xl transition-transform duration-300"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'block';
                            }}
                          />
                          {/* Fallback placeholder */}
                          <div 
                            className="text-gray-400 text-center" 
                            style={{ display: 'none' }}
                          >
                            <motion.div 
                              className="text-6xl mb-4"
                              animate={{ 
                                rotateY: [0, 10, -10, 0],
                                scale: [1, 1.1, 1]
                              }}
                              transition={{ duration: 4, repeat: Infinity }}
                            >
                              📜
                            </motion.div>
                            <div className="text-lg">Internship Certificate</div>
                            <div className="text-sm mt-2 opacity-60">Click to view</div>
                          </div>
                        </div>

                        {/* Click overlay indicator */}
                        <div className="absolute inset-0 bg-violet-500/0 group-hover:bg-violet-500/10 transition-colors duration-300 flex items-center justify-center">
                          <div className="bg-black/70 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                            <div className="flex items-center gap-2">
                              <span>🔍</span>
                              <span className="text-sm font-medium">Click to view certificate</span>
                            </div>
                          </div>
                        </div>

                        {/* Floating particles around certificate */}
                        <div className="absolute inset-0 pointer-events-none">
                          {[...Array(6)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-2 h-2 bg-violet-400/30 rounded-full"
                              style={{
                                top: `${20 + i * 12}%`,
                                left: `${15 + i * 12}%`,
                              }}
                              animate={{
                                y: [0, -20, 0],
                                x: [0, 10, 0],
                                scale: [0.8, 1.3, 0.8],
                                opacity: [0.3, 0.8, 0.3]
                              }}
                              transition={{
                                duration: 3 + i * 0.5,
                                repeat: Infinity,
                                delay: i * 0.3,
                                ease: "easeInOut"
                              }}
                            />
                          ))}
                        </div>
                      </motion.div>
                    </div>

                    {/* Enhanced Content */}
                    <div className="space-y-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <motion.span 
                          className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-violet-600/20 to-purple-600/20 text-violet-300 rounded-full border border-violet-500/30 backdrop-blur-sm"
                          whileHover={{ scale: 1.05 }}
                        >
                          {internships[currentInternship].duration}
                        </motion.span>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <motion.h3 
                          className="text-3xl font-bold text-white mb-2"
                          whileHover={{ scale: 1.02 }}
                        >
                          {internships[currentInternship].title}
                        </motion.h3>
                        <motion.p 
                          className="text-violet-400 text-xl font-medium"
                          animate={{ 
                            textShadow: ["0 0 10px rgba(139, 92, 246, 0.3)", "0 0 20px rgba(139, 92, 246, 0.5)", "0 0 10px rgba(139, 92, 246, 0.3)"]
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          {internships[currentInternship].company}
                        </motion.p>
                      </motion.div>
                      
                      <motion.p 
                        className="text-gray-300 leading-relaxed text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        {internships[currentInternship].description}
                      </motion.p>

                      {/* Enhanced Skills Display */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <h4 className="text-white font-semibold mb-4 text-lg">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-3">
                          {internships[currentInternship].skills.map((skill, index) => (
                            <motion.span
                              key={index}
                              className="px-4 py-2 text-sm font-medium bg-gray-800/60 text-gray-300 rounded-lg border border-gray-700/50 backdrop-blur-sm"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.6 + index * 0.1 }}
                              whileHover={{ 
                                scale: 1.1,
                                backgroundColor: "rgba(139, 92, 246, 0.1)",
                                borderColor: "rgba(139, 92, 246, 0.5)",
                                boxShadow: "0 4px 12px rgba(139, 92, 246, 0.3)"
                              }}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Enhanced Dots indicator */}
              <div className="flex justify-center mt-8 space-x-3">
                {internships.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentInternship(index)}
                    className={`relative overflow-hidden rounded-full transition-all duration-300 ${
                      index === currentInternship 
                        ? 'w-8 h-3 bg-violet-500' 
                        : 'w-3 h-3 bg-gray-600 hover:bg-gray-500'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {index === currentInternship && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-violet-400 to-purple-500"
                        initial={{ x: "-100%" }}
                        animate={{ x: "0%" }}
                        transition={{ duration: 5, ease: "linear", repeat: Infinity }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.section>

            {/* Achievements section - simplified for space but same clickable pattern */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center">
                  <motion.h2 
                    className="text-3xl md:text-4xl font-bold text-white"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    Achievements
                  </motion.h2>
                  <motion.div 
                    className="ml-6 w-32 h-px bg-gradient-to-r from-purple-500 to-transparent"
                    animate={{ scaleX: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>
                
                <div className="flex items-center space-x-6">
                  <motion.div
                    className="text-gray-400 text-sm"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {currentAchievement + 1} / {achievements.length}
                  </motion.div>
                  <div className="flex space-x-2">
                    <motion.button
                      onClick={prevAchievement}
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-full bg-gradient-to-r from-gray-800/80 to-gray-700/80 border border-gray-600 text-white flex items-center justify-center hover:border-purple-400 hover:shadow-lg hover:shadow-purple-400/20 transition-all duration-300"
                    >
                      <span className="text-lg">←</span>
                    </motion.button>
                    <motion.button
                      onClick={nextAchievement}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-full bg-gradient-to-r from-gray-800/80 to-gray-700/80 border border-gray-600 text-white flex items-center justify-center hover:border-purple-400 hover:shadow-lg hover:shadow-purple-400/20 transition-all duration-300"
                    >
                      <span className="text-lg">→</span>
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mb-8 w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                  initial={{ width: "0%" }}
                  animate={{ width: `${((currentAchievement + 1) / achievements.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Achievement Carousel Content */}
              <div className="relative overflow-hidden rounded-2xl border border-gray-700/30 bg-gray-900/30 backdrop-blur-sm p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentAchievement}
                    initial={{ opacity: 0, x: 300, rotateY: 45 }}
                    animate={{ opacity: 1, x: 0, rotateY: 0 }}
                    exit={{ opacity: 0, x: -300, rotateY: -45 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="grid lg:grid-cols-2 gap-12 items-center"
                  >
                    {/* Content (left for achievements) */}
                    <div className="space-y-6 lg:order-1">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <motion.span 
                          className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-300 rounded-full border border-purple-500/30 backdrop-blur-sm"
                          whileHover={{ scale: 1.05 }}
                        >
                          {achievements[currentAchievement].category}
                        </motion.span>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <motion.h3 
                          className="text-3xl font-bold text-white mb-2"
                          whileHover={{ scale: 1.02 }}
                        >
                          {achievements[currentAchievement].title}
                        </motion.h3>
                        <motion.p 
                          className="text-purple-400 text-xl font-medium mb-2"
                          animate={{ 
                            textShadow: ["0 0 10px rgba(168, 85, 247, 0.3)", "0 0 20px rgba(168, 85, 247, 0.5)", "0 0 10px rgba(168, 85, 247, 0.3)"]
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          {achievements[currentAchievement].organization}
                        </motion.p>
                        <p className="text-gray-400 text-lg">
                          {achievements[currentAchievement].date}
                        </p>
                      </motion.div>
                      
                      <motion.p 
                        className="text-gray-300 leading-relaxed text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        {achievements[currentAchievement].description}
                      </motion.p>
                    </div>

                    {/* Enhanced Certificate Display (right for achievements) */}
                    <div className="relative lg:order-2">
                      <motion.div 
                        className="relative h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 group cursor-pointer"
                        whileHover={{ 
                          scale: 1.03,
                          rotateY: -5,
                          rotateX: 5
                        }}
                        transition={{ duration: 0.4 }}
                        style={{ transformStyle: "preserve-3d" }}
                        onClick={() => {
                          console.log('Achievement certificate clicked!'); // Debug log
                          openModal(
                            achievements[currentAchievement].certificateImage, 
                            `${achievements[currentAchievement].title} Certificate`,
                            `${achievements[currentAchievement].title} - ${achievements[currentAchievement].organization}`
                          );
                        }}
                      >
                        <div className="w-full h-full flex items-center justify-center relative z-10 pointer-events-none">
                          <img
                            src={achievements[currentAchievement].certificateImage}
                            alt={`${achievements[currentAchievement].title} Certificate`}
                            className="w-full h-full object-cover rounded-xl transition-transform duration-300"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'block';
                            }}
                          />
                          {/* Fallback placeholder */}
                          <div 
                            className="text-gray-400 text-center" 
                            style={{ display: 'none' }}
                          >
                            <motion.div 
                              className="text-6xl mb-4"
                              animate={{ 
                                rotateY: [0, -10, 10, 0],
                                scale: [1, 1.1, 1]
                              }}
                              transition={{ duration: 4, repeat: Infinity }}
                            >
                              🏆
                            </motion.div>
                            <div className="text-lg">Achievement Certificate</div>
                            <div className="text-sm mt-2 opacity-60">Click to view</div>
                          </div>
                        </div>

                        {/* Click overlay indicator */}
                        <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/10 transition-colors duration-300 flex items-center justify-center">
                          <div className="bg-black/70 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                            <div className="flex items-center gap-2">
                              <span>🔍</span>
                              <span className="text-sm font-medium">Click to view certificate</span>
                            </div>
                          </div>
                        </div>

                        {/* Floating particles */}
                        <div className="absolute inset-0 pointer-events-none">
                          {[...Array(6)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-2 h-2 bg-purple-400/30 rounded-full"
                              style={{
                                top: `${20 + i * 12}%`,
                                right: `${15 + i * 12}%`,
                              }}
                              animate={{
                                y: [0, -20, 0],
                                x: [0, -10, 0],
                                scale: [0.8, 1.3, 0.8],
                                opacity: [0.3, 0.8, 0.3]
                              }}
                              transition={{
                                duration: 3 + i * 0.5,
                                repeat: Infinity,
                                delay: i * 0.3,
                                ease: "easeInOut"
                              }}
                            />
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Enhanced Dots indicator */}
              <div className="flex justify-center mt-8 space-x-3">
                {achievements.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentAchievement(index)}
                    className={`relative overflow-hidden rounded-full transition-all duration-300 ${
                      index === currentAchievement 
                        ? 'w-8 h-3 bg-purple-500' 
                        : 'w-3 h-3 bg-gray-600 hover:bg-gray-500'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {index === currentAchievement && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500"
                        initial={{ x: "-100%" }}
                        animate={{ x: "0%" }}
                        transition={{ duration: 5, ease: "linear", repeat: Infinity }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.section>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-center mt-20"
            >
              <motion.p 
                className="text-gray-300 mb-8 text-lg"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Want to see more of my work and projects?
              </motion.p>
              <div className="flex flex-wrap gap-6 justify-center">
                <motion.button
                  onClick={() => handleNavigation('/projects')}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(139, 92, 246, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                >
                  <span className="relative z-10">View Projects</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-violet-400 to-purple-400 opacity-0 hover:opacity-20 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  />
                </motion.button>
                <motion.button
                  onClick={() => handleNavigation('/contact')}
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: "rgba(139, 92, 246, 0.6)",
                    boxShadow: "0 10px 25px rgba(139, 92, 246, 0.2)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-gray-600 text-gray-300 rounded-lg font-medium hover:border-gray-400 hover:text-white transition-all duration-300"
                >
                  Contact Me
                </motion.button>
              </div>
            </motion.div>
          </div>
        </GridBeam>
      </div>

      {/* Modal - Fixed z-index and positioning */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              backdropFilter: 'blur(4px)'
            }}
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative max-w-6xl max-h-[90vh] bg-gray-900/95 rounded-2xl border border-gray-700/50 backdrop-blur-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
                <div>
                  <h3 className="text-xl font-bold text-white">{modalImage.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">ESC to close • Modal State: {isModalOpen ? 'Open' : 'Closed'}</p>
                </div>
                <motion.button
                  onClick={closeModal}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-gray-800/60 border border-gray-600 text-gray-300 flex items-center justify-center hover:border-red-400 hover:text-red-400 transition-all duration-300"
                >
                  <span className="text-lg">×</span>
                </motion.button>
              </div>

              {/* Modal Content */}
              <div className="relative overflow-auto max-h-[calc(90vh-120px)]">
                <div className="p-6">
                  <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="relative group"
                  >
                    <img
                      src={modalImage.src}
                      alt={modalImage.alt}
                      className="w-full h-auto rounded-xl shadow-2xl"
                      style={{ maxHeight: '70vh', objectFit: 'contain' }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback placeholder for modal */}
                    <div 
                      className="w-full h-64 flex items-center justify-center bg-gray-800 rounded-xl text-gray-400"
                      style={{ display: 'none' }}
                    >
                      <div className="text-center">
                        <div className="text-6xl mb-4">📄</div>
                        <div className="text-lg">Certificate Preview</div>
                        <div className="text-sm opacity-60 mt-2">{modalImage.title}</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-center p-4 border-t border-gray-700/50">
                <motion.button
                  onClick={closeModal}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Experience;