"use client";
import { motion } from "framer-motion";
import React from 'react';
import { GridBeam } from "../ui/GridBeam";
import { Project3DCard } from "../components/Project3DCard"; // Import the 3D card

const Projects = () => {
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

  const projects = [
    {
      id: 1,
      title: "Expenso - Your Personal Finance Advisor",
      description: "Expenso is a smart and simple finance management web app that helps users take full control of their income and expenses. With its clean interface, interactive visualizations, and smart assistant, Expenso makes financial management easier, smarter, and more efficient.",
      image: '/images/Expenso.png', // Replace with your actual image paths
      technologies: ["React", "Node.js", "MongoDB", "Gemeni API" , "Chart.js"],
      githubUrl: "https://github.com/mahak820/expenspo_moneyTracker.git",
      liveUrl: "https://github.com/mahak820/expenspo_moneyTracker.git",
      category: "Full Stack"
    },
    {
      id: 2,
      title: "Quick-Court - Book Your Court Anytime",
      description: "Developed a web platform for searching, booking, and managing sports courts, featuring secure authentication, real-time court availability tracking, and instant booking confirmation. The system also includes role-based access, enabling admins, venue owners, and players to efficiently manage their respective functionalities",
      image: "/images/QuickCourt.png",
      technologies: ["Node.js", "React", "MongoDB", "Express" , "Chart.js" , "Accertinity UI"],
      githubUrl: "https://github.com/mahak820/OdooHackathonSubmissionFinalMain.git",
      liveUrl: "https://github.com/mahak820/OdooHackathonSubmissionFinalMain.git",
      category: "Full Stack"
    },
    {
      id: 3,
      title: "ThinkBuild - Student Project Management System",
      description: "A smart project management system where students submit proposals and reports, faculty provide grades and feedback, and admins track progress. Built using React, Node.js, and MongoDB, it ensures secure, paperless, and transparent handling of academic projects",
      image: "/images/ThinkBuild.png",
      technologies: ["Node.js", "React", "Redux", "MongoDB" , "Express" , "TailwindCSS"],
      githubUrl: "https://github.com/mahak820/student-project-management.git",
      liveUrl: "https://think-build.onrender.com/login",
      category: "Full Stack"
    },
    {
      id: 4,
      title: "QuickCar - A Car Rental Application",
      description: "Modern chat application with real-time messaging, file sharing, emoji reactions, and dark/light theme support. Built with Socket.io.",
      image: "/api/placeholder/400/250",
      technologies: ["Socket.io", "React", "Express", "Redis"],
      githubUrl: "https://github.com/yourusername/chat-app",
      liveUrl: "https://chat-app-demo.vercel.app",
      category: "Full Stack"
    },
    {
      id: 5,
      title: "ShopFlow",
      description: "Developed a cryptocurrency tracker that provides real-time prices, trends, and market data. Integrated search, filter, and watchlist features to deliver a personalized user experience. Implemented live data fetching using CoinGecko/CoinMarketCap APIs for accurate and up-to-date insights",
      image: "/images/ShopFLow.png",
      technologies: ["React.js", "Redux", "Crypto-API", "TailwindCSS" , "JavaScript"],
      githubUrl: "https://github.com/mahak820/crypto-app",
      liveUrl: "https://shopflow-crypto.netlify.app/",
      category: "Frontend"
    },
    {
      id: 6,
      title: "News App",
      description: "Secure voting system built on blockchain technology ensuring transparency, security, and immutability. Features smart contracts and modern web interface.",
      image: "/api/placeholder/400/250",
      technologies: ["Solidity", "Web3.js", "React", "Ethereum"],
      githubUrl: "https://github.com/mahak820/news-app.git",
      liveUrl: "https://github.com/mahak820/news-app.git",
      category: "Frontend"
    }
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#141618] overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 h-full w-full grid-background bg-grid-white/[0.05]" />
      
      {/* Home button - Made fully responsive */}
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

      {/* Content wrapper - Enhanced responsive padding */}
      <div className="relative z-10 py-12 sm:py-16 lg:py-20">
        <GridBeam>
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Page title and intro - Fully responsive typography */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center mb-12 sm:mb-16 lg:mb-20"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                My
                <span className="block bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Projects
                </span>
              </h1>
              {/* <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
                Showcasing my passion for creating digital experiences through code. 
                Each project represents a unique challenge and creative solution.
              </p> */}
            </motion.div>

            {/* 3D Projects grid - Enhanced responsive grid */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
              {projects.map((project, index) => (
                <div key={project.id} className="flex justify-center">
                  <Project3DCard 
                    project={project} 
                    index={index}
                  />
                </div>
              ))}
            </div>

            {/* Bottom CTA - Responsive spacing and sizing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-center mt-16 sm:mt-20 lg:mt-24"
            >
              <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 px-2 sm:px-0">
                Interested in collaborating on a project?
              </p>
              <motion.button
                onClick={() => handleNavigation('/contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
              >
                Let's Work Together
              </motion.button>
            </motion.div>
          </div>
        </GridBeam>
      </div>
    </div>
  );
};

export default Projects;