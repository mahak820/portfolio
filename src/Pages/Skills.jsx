"use client";
import { motion } from "framer-motion";
import React, { useState } from 'react';
import { GridBeam } from "../ui/GridBeam";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

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

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      icon: "🎨",
      color: "from-violet-600 to-purple-600",
      skills: [
        { name: "React", level: 95, icon: "⚛️", description: "Advanced component development & hooks" },
        { name: "JavaScript", level: 90, icon: "📜", description: "ES6+, Async/Await, DOM manipulation" },
        { name: "HTML5", level: 95, icon: "🏗️", description: "Semantic markup & accessibility" },
        { name: "CSS3", level: 92, icon: "🎭", description: "Flexbox, Grid, Animations, Responsive" },
        { name: "Tailwind CSS", level: 88, icon: "🌊", description: "Utility-first styling approach" },
        { name: "Next.js", level: 50, icon: "▲", description: "SSR, SSG, API routes" },
        { name: "TypeScript", level: 50, icon: "📘", description: "Type-safe JavaScript development" },
        { name: "Redux", level: 82, icon: "🔄", description: "State management & middleware" }
      ]
    },
    backend: {
      title: "Backend Development", 
      icon: "⚙️",
      color: "from-emerald-600 to-teal-600",
      skills: [
        { name: "Node.js", level: 90, icon: "🟢", description: "Server-side JavaScript runtime" },
        { name: "Express.js", level: 88, icon: "🚀", description: "RESTful APIs & middleware" },
        { name: "MongoDB", level: 85, icon: "🍃", description: "NoSQL database & aggregation" },
        { name: "MySQL", level: 60, icon: "🐘", description: "Relational database management" },
        { name: "JWT", level: 85, icon: "🔐", description: "Authentication & authorization" },
        { name: "Google Firebase", level: 60, icon: "🔥", description: "Backend-as-a-Service for authentication" },
        { name: "AWS", level: 75, icon: "☁️", description: "Cloud services & deployment" },
        { name: "Docker", level: 30, icon: "🐳", description: "Still Learning" }
      ]
    },
    tools: {
      title: "Tools & Technologies",
      icon: "🛠️", 
      color: "from-orange-600 to-red-600",
      skills: [
        { name: "Git", level: 80, icon: "📚", description: "Version control & collaboration" },
        { name: "VS Code", level: 90, icon: "💻", description: "Code editor & extensions" },
        { name: "Figma", level: 40, icon: "🎨", description: "UI/UX design & prototyping (Still Learning)" },
        { name: "Postman", level: 88, icon: "📮", description: "API testing & documentation" },
        { name: "Firebase", level: 82, icon: "🔥", description: "Backend-as-a-Service platform" },
        { name: "Render", level: 85, icon: "🚀", description: "Deployment & hosting" }
      ]
    },
    soft: {
      title: "Soft Skills",
      icon: "🧠",
      color: "from-indigo-600 to-blue-600", 
      skills: [
        { name: "Problem Solving", level: 95, icon: "🧩", description: "Breaking down complex challenges" },
        { name: "Team Collaboration", level: 90, icon: "👥", description: "Agile methodologies & teamwork" },
        { name: "Communication", level: 88, icon: "💬", description: "Technical documentation & presentation" },
        { name: "Leadership", level: 85, icon: "👑", description: "Project management & mentoring" },
        { name: "Adaptability", level: 92, icon: "🔄", description: "Learning new technologies quickly" },
        { name: "Critical Thinking", level: 90, icon: "🎯", description: "Analytical approach to solutions" },
        { name: "Time Management", level: 87, icon: "⏰", description: "Efficient project delivery" },
        { name: "Creativity", level: 93, icon: "✨", description: "Innovative solutions & design thinking" }
      ]
    }
  };

  const categories = Object.keys(skillCategories);

  // 3D Skill Card Component
  const SkillCard = ({ skill, index, categoryColor }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <motion.div
        initial={{ opacity: 0, y: 50, rotateX: -15 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ 
          duration: 0.6, 
          delay: index * 0.1,
          type: "spring",
          stiffness: 100
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative"
        style={{ perspective: '1000px' }}
      >
        <motion.div
          animate={{
            rotateY: isHovered ? 8 : 0,
            rotateX: isHovered ? -5 : 0,
            z: isHovered ? 50 : 0,
            scale: isHovered ? 1.05 : 1
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative bg-gray-900/60 backdrop-blur-xl border border-gray-700/60 rounded-2xl p-6 hover:border-violet-400/60 transition-all duration-300 shadow-2xl hover:shadow-violet-500/20"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Floating icon */}
          <motion.div
            animate={{
              translateZ: isHovered ? 30 : 0,
              rotateY: isHovered ? 15 : 0,
              scale: isHovered ? 1.2 : 1
            }}
            transition={{ duration: 0.3 }}
            className="text-4xl mb-4 filter drop-shadow-lg"
          >
            {skill.icon}
          </motion.div>

          {/* Skill name */}
          <motion.h3 
            animate={{
              translateZ: isHovered ? 20 : 0,
              color: isHovered ? '#c4b5fd' : '#ffffff'
            }}
            transition={{ duration: 0.3 }}
            className="text-xl font-bold mb-2"
          >
            {skill.name}
          </motion.h3>

          {/* Description */}
          <motion.p
            animate={{
              translateZ: isHovered ? 15 : 0
            }}
            transition={{ duration: 0.3 }}
            className="text-gray-300 text-sm mb-4 line-clamp-2"
          >
            {skill.description}
          </motion.p>

          {/* Progress bar */}
          <div className="relative">
            <motion.div
              animate={{
                translateZ: isHovered ? 25 : 0
              }}
              transition={{ duration: 0.3 }}
              className="w-full bg-gray-800/50 rounded-full h-3 mb-2 overflow-hidden"
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                className={`h-full bg-gradient-to-r ${categoryColor} rounded-full relative overflow-hidden`}
              >
                {/* Shimmer effect */}
                <motion.div
                  animate={{ x: ['0%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
              </motion.div>
            </motion.div>
            
            {/* Percentage */}
            <motion.span
              animate={{
                translateZ: isHovered ? 20 : 0
              }}
              transition={{ duration: 0.3 }}
              className="text-sm font-semibold text-gray-400"
            >
              {skill.level}%
            </motion.span>
          </div>

          {/* Hover glow effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          
          {/* 3D floating particles */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                translateZ: isHovered ? 40 + i * 10 : 0,
                rotateY: isHovered ? i * 45 : 0,
                opacity: isHovered ? 0.6 : 0
              }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="absolute w-1 h-1 bg-violet-400 rounded-full"
              style={{
                top: `${20 + i * 25}%`,
                right: `${15 + i * 20}%`,
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    );
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
        className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 z-30"
      >
        <motion.button
          onClick={() => handleNavigation('/')}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 4px 12px rgba(129, 94, 246, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-1.5 sm:space-x-2 px-4 py-2 sm:px-6 sm:py-3 bg-gray-900/50 border border-gray-700 text-white rounded-lg backdrop-blur-sm hover:border-violet-400 transition-all duration-300 cursor-pointer text-sm sm:text-base"
        >
          <span className="text-base sm:text-lg">←</span>
          <span className="font-medium">Home</span>
        </motion.button>
      </motion.div>

      {/* Content wrapper */}
      <div className="relative z-10 py-12 sm:py-16 lg:py-20">
        <GridBeam>
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Page title */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center mb-12 sm:mb-16 lg:mb-20"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                My
                <span className="block bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Skills
                </span>
              </h1>
             
            </motion.div>

            {/* Floating category selector */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-4 mb-12 sm:mb-16"
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className={`group relative px-6 py-3 rounded-2xl backdrop-blur-xl border transition-all duration-300 ${
                    activeCategory === category
                      ? `bg-gradient-to-r ${skillCategories[category].color} border-violet-400/60 text-white shadow-xl`
                      : 'bg-gray-900/50 border-gray-700/50 text-gray-300 hover:border-violet-400/50 hover:text-white'
                  }`}
                  style={{ perspective: '1000px' }}
                >
                  <motion.div
                    animate={{
                      rotateY: activeCategory === category ? 5 : 0,
                      scale: activeCategory === category ? 1.02 : 1
                    }}
                    className="flex items-center space-x-3"
                  >
                    <span className="text-xl">{skillCategories[category].icon}</span>
                    <span className="font-semibold text-sm sm:text-base">{skillCategories[category].title}</span>
                  </motion.div>
                  
                  {/* Selection indicator */}
                  {activeCategory === category && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-600/20 to-purple-600/20 -z-10"
                      initial={false}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>

            {/* Skills grid with 3D cards */}
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
            >
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  index={index}
                  categoryColor={skillCategories[activeCategory].color}
                />
              ))}
            </motion.div>

            {/* Floating expertise summary */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-16 sm:mt-20 text-center"
            >
              <div className="bg-gray-900/40 backdrop-blur-xl border border-gray-700/40 rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  className="text-2xl sm:text-3xl font-bold text-white mb-6"
                >
                  MERN Stack Specialist
                </motion.h2>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                  className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8"
                >
                  {[
                    { name: "MongoDB", icon: "🍃", color: "from-green-600 to-emerald-600" },
                    { name: "Express.js", icon: "🚀", color: "from-gray-600 to-slate-600" },
                    { name: "React", icon: "⚛️", color: "from-blue-600 to-cyan-600" },
                    { name: "Node.js", icon: "🟢", color: "from-green-600 to-lime-600" }
                  ].map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
                      whileHover={{ scale: 1.1, rotateY: 15 }}
                      className="text-center group"
                      style={{ perspective: '1000px' }}
                    >
                      <motion.div
                        whileHover={{ rotateY: 15, translateZ: 20 }}
                        transition={{ duration: 0.3 }}
                        className={`w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-r ${tech.color} flex items-center justify-center text-2xl shadow-xl group-hover:shadow-2xl transition-shadow duration-300`}
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                        {tech.icon}
                      </motion.div>
                      <p className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors duration-300">
                        {tech.name}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2 }}
              className="text-center mt-16 sm:mt-20"
            >
              <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 px-2 sm:px-0">
                Ready to bring your ideas to life?
              </p>
              <motion.button
                onClick={() => handleNavigation('/contact')}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(139, 92, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
              >
                Let's Collaborate
              </motion.button>
            </motion.div>
          </div>
        </GridBeam>
      </div>
    </div>
  );
};

export default Skills;