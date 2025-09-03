"use client";
import { motion } from "framer-motion";
import React, { useState } from 'react';
import { GridBeam } from "../ui/GridBeam";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

const navigate = useNavigate()

  const handleNavigation = (route) => {
    navigate(route)
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async () => {
    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setSubmitStatus('validation_error');
      setTimeout(() => setSubmitStatus(null), 5000);
      return;
    }

    if (!validateEmail(formData.email)) {
      setSubmitStatus('email_error');
      setTimeout(() => setSubmitStatus(null), 5000);
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Method 1: Try Formsubmit (Works without API key)
      const formsubmitResponse = await fetch('https://formsubmit.co/mahaktuwani8@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: `Contact Form: ${formData.subject}`,
          message: formData.message,
          _replyto: formData.email,
          _subject: `New message from ${formData.name}`,
          _template: 'table'
        })
      });

      if (formsubmitResponse.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(null), 5000);
        return;
      } else {
        throw new Error('Formsubmit failed');
      }
      
    } catch (error) {
      console.error('Form submission failed, using mailto fallback:', error);
      
      // Always use mailto as reliable fallback
      setSubmitStatus('mailto_opening');
      
      const subject = encodeURIComponent(`Contact Form: ${formData.subject}`);
      const body = encodeURIComponent(
        `Hi there!\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}\n\n---\nSent from your contact form`
      );
      const mailtoLink = `mailto:mahaktuwani8@gmail.com?subject=${subject}&body=${body}`;
      
      // Open email client immediately
      setTimeout(() => {
        window.open(mailtoLink);
        
        // Clear form and show success message
        setTimeout(() => {
          setFormData({ name: '', email: '', subject: '', message: '' });
          setSubmitStatus('mailto_success');
          setTimeout(() => setSubmitStatus(null), 5000);
        }, 1000);
      }, 500);
    }
    
    setIsSubmitting(false);
  };

  // Copy to clipboard function
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      // Could add a toast notification here
      console.log('Copied to clipboard:', text);
    });
  };

  const contactMethods = [
    {
      title: "Email",
      value: "mahaktuwani8@gmail.com",
      icon: "📧",
      color: "from-blue-600 to-cyan-600",
      link: "mailto:mahaktuwani8@gmail.com",
      copyable: true
    },
    {
      title: "WhatsApp",
      value: "Quick Message",
      icon: "💬",
      color: "from-green-600 to-emerald-600",
      link: "https://wa.me/7648950503", // Replace with your WhatsApp number
      copyable: false
    },
    {
      title: "Location",
      value: "Available Remotely",
      icon: "🌍",
      color: "from-purple-600 to-violet-600",
      link: "https://maps.google.com/",
      copyable: false
    },
    {
      title: "LinkedIn",
      value: "Professional Network",
      icon: "💼",
      color: "from-indigo-600 to-blue-600",
      link: "https://www.linkedin.com/in/mahak-tuwani-3562a8301/", // Replace with your LinkedIn
      copyable: false
    }
  ];

  const socialLinks = [
    { name: "GitHub", icon: "🔗", url: "https://github.com/mahak820", color: "hover:text-gray-300" },
    { name: "Instagram", icon: "📸", url: "https://www.instagram.com/mahak_7648/", color: "hover:text-pink-400" },
    { name: "Portfolio", icon: "🌐", url: "https://yourportfolio.com", color: "hover:text-violet-400" }
  ];

  // Enhanced 3D Contact Card Component
  const ContactCard = ({ method, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handleCardClick = () => {
      if (method.copyable) {
        copyToClipboard(method.value);
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 1000);
      } else {
        window.open(method.link, '_blank');
      }
    };

    return (
      <motion.div
        initial={{ opacity: 0, y: 50, rotateX: -15 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative cursor-pointer"
        style={{ perspective: '1000px' }}
        onClick={handleCardClick}
      >
        <motion.div
          animate={{
            rotateY: isHovered ? 8 : 0,
            rotateX: isHovered ? -5 : 0,
            z: isHovered ? 30 : 0,
            scale: isHovered ? 1.05 : 1
          }}
          transition={{ duration: 0.3 }}
          className="relative bg-gray-900/60 backdrop-blur-xl border border-gray-700/60 rounded-2xl p-6 hover:border-violet-400/60 transition-all duration-300 shadow-xl hover:shadow-2xl"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <motion.div
            animate={{
              translateZ: isHovered ? 25 : 0,
              rotateY: isHovered ? 10 : 0,
              scale: isHovered ? 1.2 : 1
            }}
            className="text-4xl mb-4 filter drop-shadow-lg"
          >
            {method.icon}
          </motion.div>

          <motion.div
            animate={{
              translateZ: isHovered ? 15 : 0
            }}
          >
            <h3 className="text-lg font-bold text-white mb-2">{method.title}</h3>
            <p className="text-gray-300 text-sm">{method.value}</p>
            {method.copyable && (
              <p className="text-xs text-gray-400 mt-1">Click to copy</p>
            )}
          </motion.div>

          {/* Success indicator for copy */}
          {isClicked && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-2 right-2 text-green-400 text-sm"
            >
              ✓
            </motion.div>
          )}

          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>
        </motion.div>
      </motion.div>
    );
  };

  const getStatusMessage = () => {
    switch (submitStatus) {
      case 'success':
        return {
          text: "Message sent successfully! I'll get back to you soon. 🎉",
          style: "bg-green-600/20 border border-green-500/50 text-green-300"
        };
      case 'mailto_opening':
        return {
          text: "Opening your email client with the pre-filled message... 📧",
          style: "bg-blue-600/20 border border-blue-500/50 text-blue-300"
        };
      case 'mailto_success':
        return {
          text: "Email client opened! Please send the message from your email app. ✅",
          style: "bg-green-600/20 border border-green-500/50 text-green-300"
        };
      case 'validation_error':
        return {
          text: "Please fill in all required fields. ⚠️",
          style: "bg-red-600/20 border border-red-500/50 text-red-300"
        };
      case 'email_error':
        return {
          text: "Please enter a valid email address. ✉️",
          style: "bg-red-600/20 border border-red-500/50 text-red-300"
        };
      default:
        return null;
    }
  };

  const statusMessage = getStatusMessage();

  return (
    <div className="relative min-h-screen w-full bg-[#141618] overflow-hidden">
      <div className="absolute inset-0 h-full w-full grid-background bg-grid-white/[0.05]" />
      
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

      <div className="relative z-10 py-12 sm:py-16 lg:py-20">
        <GridBeam>
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center mb-12 sm:mb-16"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Let's
                <span className="block bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Connect
                </span>
              </h1>
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
                Ready to bring your ideas to life? Let's discuss your next project 
                and create something amazing together.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative"
                style={{ perspective: '1000px' }}
              >
                <motion.div
                  whileHover={{ rotateY: 2, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-900/60 backdrop-blur-xl border border-gray-700/60 rounded-3xl p-8 shadow-2xl"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="text-2xl sm:text-3xl font-bold text-white mb-8"
                  >
                    Send Message
                  </motion.h2>

                  <div className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Name *
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.02, rotateX: 1 }}
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-violet-400 focus:outline-none transition-all duration-300 backdrop-blur-sm"
                        placeholder="Your full name"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 }}
                    >
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.02, rotateX: 1 }}
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-violet-400 focus:outline-none transition-all duration-300 backdrop-blur-sm"
                        placeholder="your.email@example.com"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.0 }}
                    >
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Subject *
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.02, rotateX: 1 }}
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-violet-400 focus:outline-none transition-all duration-300 backdrop-blur-sm"
                        placeholder="Project inquiry, collaboration, etc."
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.1 }}
                    >
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Message *
                      </label>
                      <motion.textarea
                        whileFocus={{ scale: 1.02, rotateX: 1 }}
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-violet-400 focus:outline-none transition-all duration-300 backdrop-blur-sm resize-none"
                        placeholder="Tell me about your project or idea..."
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 }}
                    >
                      <motion.button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.05, rotateX: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl transition-all duration-300"
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </motion.button>
                    </motion.div>
                  </div>

                  {statusMessage && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className={`mt-4 p-4 rounded-xl ${statusMessage.style}`}
                    >
                      {statusMessage.text}
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="text-2xl font-bold text-white mb-6"
                  >
                    Get in Touch
                  </motion.h3>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    {contactMethods.map((method, index) => (
                      <ContactCard key={method.title} method={method} index={index} />
                    ))}
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="bg-gray-900/40 backdrop-blur-xl border border-gray-700/40 rounded-2xl p-6"
                >
                  <h4 className="text-xl font-bold text-white mb-4">Follow Me</h4>
                  <div className="flex flex-wrap gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.3 + index * 0.1 }}
                        whileHover={{ 
                          scale: 1.15, 
                          rotateZ: 5,
                          y: -5
                        }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center space-x-2 px-4 py-2 bg-gray-800/50 border border-gray-600/50 rounded-xl text-gray-300 ${social.color} transition-all duration-300 hover:border-violet-400/50 backdrop-blur-sm`}
                      >
                        <span className="text-lg">{social.icon}</span>
                        <span className="text-sm font-medium">{social.name}</span>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 }}
                  className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-2xl p-6"
                >
                  <div className="flex items-center space-x-3">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-3 h-3 bg-green-400 rounded-full"
                    />
                    <div>
                      <h4 className="text-lg font-semibold text-white">Available for Work</h4>
                      <p className="text-green-300 text-sm">Open to new opportunities and collaborations</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </GridBeam>
      </div>
    </div>
  );
};

export default Contact;