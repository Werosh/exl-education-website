import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Wrench, Sparkles } from "lucide-react";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const NotFound = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleGoHome = () => {
    window.location.href = "/";
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-blue-100/20"></div>
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)`,
          }}
          animate={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)`,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Construction Icon */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="mb-8"
          >
            <motion.div
              className="inline-flex p-8 bg-blue-50 rounded-full border-4 border-blue-100"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Wrench className="w-20 h-20 text-blue-600" />
            </motion.div>
          </motion.div>

          {/* Main Message */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="mb-6"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
              Under Construction
            </h1>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-200">
              <Sparkles className="w-4 h-4" />
              <span>Something amazing is coming</span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="mb-12"
          >
            <p className="text-xl text-blue-700 leading-relaxed">
              We're working hard to bring you something incredible. This page
              will be ready soon!
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              onClick={handleGoHome}
              className="group inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Home className="mr-3 w-5 h-5" />
              Go to Home
            </motion.button>

            <motion.button
              onClick={handleGoBack}
              className="group inline-flex items-center px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="mr-3 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Go Back
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
