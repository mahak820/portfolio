"use client";
import { motion } from "framer-motion";
import React from "react";

const Loader = ({ 
  isVisible = true, 
  onComplete = () => {},
  duration = 2500
}) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    if (isVisible) {
      // Progress counter
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return prev + 2;
        });
      }, duration / 50);

      // Complete loader
      const timer = setTimeout(() => {
        onComplete();
      }, duration);
      
      return () => {
        clearInterval(progressInterval);
        clearTimeout(timer);
      };
    }
  }, [isVisible, onComplete, duration]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#141618]"
    >
      {/* Grid background */}
      <div className="absolute inset-0 h-full w-full grid-background bg-grid-white/[0.05]" />
      
      {/* Simple coding loader */}
      <div className="flex flex-col items-center space-y-8">
        
        {/* Code brackets animation */}
        <div className="relative">
          <motion.div
            className="text-6xl md:text-8xl font-mono text-violet-400 flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span
              animate={{ 
                rotateY: [0, 180, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {"<"}
            </motion.span>
            
            <motion.span
              className="mx-4 text-white"
              animate={{ 
                opacity: [0.3, 1, 0.3]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              /
            </motion.span>
            
            <motion.span
              animate={{ 
                rotateY: [360, 180, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {">"}
            </motion.span>
          </motion.div>
        </div>

        {/* Loading percentage */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <div className="text-2xl font-mono text-white mb-2">
            {progress}%
          </div>
          <div className="text-sm text-gray-400 font-mono">
            Loading...
          </div>
        </motion.div>

        {/* Simple progress bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 200 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1 bg-gray-800 rounded-full overflow-hidden"
        >
          <motion.div
            className="h-full bg-gradient-to-r from-violet-500 to-purple-500 rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </motion.div>

      </div>
    </motion.div>
  );
};

export default Loader;