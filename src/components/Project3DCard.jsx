import React, { createContext, useContext, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// Mouse state context
const MouseStateContext = createContext();

// Custom hook for mouse state
const useMouseState = () => {
  const [isMouseEntered, setIsMouseEntered] = useState(false);
  
  return {
    isMouseEntered,
    setMouseEntered: setIsMouseEntered
  };
};

// CardContainer Component
const CardContainer = ({ 
  children, 
  className = '', 
  containerClassName = '' 
}) => {
  const containerRef = useRef(null);
  const mouseState = useMouseState();

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseEnter = () => {
    mouseState.setMouseEntered(true);
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    
    mouseState.setMouseEntered(false);
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  return (
    <MouseStateContext.Provider value={mouseState}>
      <div 
        className={`flex items-center justify-center ${containerClassName}`}
        style={{ perspective: '1000px' }}
      >
        <div
          ref={containerRef}
          className={`relative transition-all duration-200 ease-linear ${className}`}
          style={{ transformStyle: 'preserve-3d' }}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {children}
        </div>
      </div>
    </MouseStateContext.Provider>
  );
};

// CardBody Component
const CardBody = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div 
      className={`relative w-full h-full ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
};

// CardItem Component
const CardItem = ({ 
  children, 
  as: Component = 'div', 
  className = '', 
  translateX = 0, 
  translateY = 0, 
  translateZ = 0, 
  rotateX = 0, 
  rotateY = 0, 
  rotateZ = 0, 
  ...props 
}) => {
  const mouseState = useContext(MouseStateContext);
  
  const transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
  
  return (
    <Component
      className={className}
      style={{
        transform: mouseState?.isMouseEntered ? transform : 'translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)',
        transition: 'all 200ms ease-linear'
      }}
      {...props}
    >
      {children}
    </Component>
  );
};

// Main Project3DCard Component
const Project3DCard = ({ project, index = 0 }) => {
  const handleExternalLink = (url) => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: 0.5 + index * 0.1,
        ease: "easeOut"
      }}
    >
      <CardContainer className="w-full">
        <CardBody className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-violet-400/50 transition-all duration-300 group w-full max-w-sm h-auto">
          
          {/* Project Image */}
          <CardItem translateZ="100" className="w-full">
            <div className="relative h-48 overflow-hidden">
              {project.image && project.image !== "/api/placeholder/400/250" ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-gray-400 text-center">
                    <div className="text-4xl mb-2">🚀</div>
                    <div className="text-sm">Project Preview</div>
                  </div>
                </div>
              )}
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Category badge */}
              <CardItem translateZ="120" className="absolute top-3 right-3">
                <span className="px-3 py-1 text-xs font-medium bg-violet-600/80 text-white rounded-full backdrop-blur-sm">
                  {project.category}
                </span>
              </CardItem>
            </div>
          </CardItem>

          {/* Project Content */}
          <div className="p-6">
            {/* Title */}
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors duration-300"
            >
              {project.title}
            </CardItem>
            
            {/* Description */}
            <CardItem
              translateZ="60"
              as="p"
              className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3"
            >
              {project.description}
            </CardItem>

            {/* Technologies */}
            <CardItem translateZ="70" className="flex flex-wrap gap-2 mb-6">
              {project.technologies?.map((tech, techIndex) => (
                <motion.span
                  key={techIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + techIndex * 0.1 }}
                  className="px-2 py-1 text-xs font-medium bg-gray-800/50 text-gray-300 rounded-md border border-gray-700/50 hover:border-violet-400/50 hover:text-violet-300 transition-all duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </CardItem>

            {/* Action Buttons */}
            <CardItem translateZ="80" className="flex gap-3">
              <motion.button
                onClick={() => handleExternalLink(project.githubUrl)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 px-4 py-2.5 bg-gray-800/60 hover:bg-gray-700/60 text-white text-sm font-medium rounded-lg border border-gray-600/50 hover:border-gray-500 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
              >
                <svg className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
                GitHub
              </motion.button>
              
              <motion.button
                onClick={() => handleExternalLink(project.liveUrl)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 px-4 py-2.5 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white text-sm font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-lg hover:shadow-violet-500/25"
              >
                <svg className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </motion.button>
            </CardItem>
          </div>

          {/* Hover glow effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          
          {/* Additional 3D floating elements */}
          <CardItem 
            translateZ="30" 
            className="absolute top-4 left-4 w-2 h-2 bg-violet-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
          <CardItem 
            translateZ="40" 
            className="absolute bottom-6 right-6 w-3 h-3 bg-purple-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          />
        </CardBody>
      </CardContainer>
    </motion.div>
  );
};

export { Project3DCard };