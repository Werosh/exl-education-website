import React, { useState, useEffect } from "react";
import { ArrowRight, ChevronDown, BookOpen, Heart, Brain } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import WillImg from "../images/teachers/will.jpeg";
import LearningImg from "../images/others/learning.jpeg";
import WillTeachImg from "../images/others/willTeach.JPG";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const pageLoad = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.1, duration: 1 } },
};

// Mock images for demonstration
const mockImages = [LearningImg, WillImg, WillTeachImg];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % mockImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const scrollToNextSection = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <motion.section
      variants={pageLoad}
      initial="hidden"
      animate="visible"
      className="bg-gray-50 min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden relative"
    >
      <div className="flex-1 flex items-center justify-center w-full z-10">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="flex flex-col justify-center space-y-8">
              <motion.span
                className="text-sm text-blue-600 font-medium tracking-wide uppercase mt-9"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={1}
              >
                Find your success in STEM
              </motion.span>

              <motion.h1
                className="text-4xl lg:text-5xl font-extrabold leading-tight"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={2}
              >
                <span className="text-blue-900" style={{ fontWeight: 900 }}>
                  Years 11-12
                </span>{" "}
                <span className="text-purple-500" style={{ fontWeight: 900 }}>
                  HSC Chemistry, Physics & Maths
                </span>{" "}
                <span className="text-blue-900" style={{ fontWeight: 900 }}>
                  Specialists
                </span>{" "}
                <span className="text-blue-900" style={{ fontWeight: 900 }}>
                  in Sydney
                </span>
              </motion.h1>

              {/* Feature Cards */}
              <motion.div
                className="bg-blue-200 rounded-2xl p-6 space-y-4"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={3}
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-pink-200 p-2 rounded-lg">
                    <BookOpen className="w-5 h-5 text-pink-600" />
                  </div>
                  <span className="text-blue-900 font-medium">
                    Expert Tutors
                  </span>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-pink-200 p-2 rounded-lg">
                    <Heart className="w-5 h-5 text-pink-600" />
                  </div>
                  <span className="text-blue-900 font-medium">
                    Small Classes
                  </span>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-pink-200 p-2 rounded-lg">
                    <Brain className="w-5 h-5 text-pink-600" />
                  </div>
                  <span className="text-blue-900 font-medium">
                    Deep Understanding
                  </span>
                </div>

                <div className="pt-4">
                  <button className="bg-blue-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors">
                    Enrol Now
                  </button>
                </div>
              </motion.div>

              <motion.p
                className="text-lg text-gray-700 max-w-lg"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={4}
              >
                We've made Chemistry, Physics and Mathematics easy to learn for
                all students, helping them build passion for their subjects!
              </motion.p>

              <motion.div
                className="flex space-x-12 pt-4"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={5}
              >
                <div>
                  <div className="text-3xl font-bold text-blue-900">2,500+</div>
                  <div className="text-sm text-gray-600">students helped</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-900">99.05</div>
                  <div className="text-sm text-gray-600">median ATAR</div>
                </div>
              </motion.div>
            </div>

            {/* Right Image */}
            <motion.div
              className="relative"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={3}
            >
              <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-orange-100 to-orange-200">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImage}
                    src={mockImages[currentImage]}
                    alt="Student learning"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 1 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Wave Background */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-32"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1200,160,1248,128,1296,112L1344,96L1344,200L1296,200C1248,200,1200,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200L0,200Z"
            fill="rgba(59, 130, 246, 0.1)"
          />
          <path
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,80C672,64,768,64,864,80C960,96,1056,128,1152,128C1200,128,1248,96,1296,80L1344,64L1344,200L1296,200C1248,200,1200,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200L0,200Z"
            fill="rgba(147, 51, 234, 0.1)"
          />
          <path
            d="M0,32L48,48C96,64,192,96,288,96C384,96,480,64,576,48C672,32,768,32,864,48C960,64,1056,96,1152,96C1200,96,1248,64,1296,48L1344,32L1344,200L1296,200C1248,200,1200,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200L0,200Z"
            fill="rgba(59, 130, 246, 0.05)"
          />
        </svg>
      </div>

      {/* Scroll Arrow */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <button
          onClick={scrollToNextSection}
          className="flex flex-col items-center space-y-2 text-gray-600 hover:text-blue-600 group"
        >
          <span className="text-sm font-medium opacity-75 group-hover:opacity-100">
            Scroll Down
          </span>
          <ChevronDown className="w-6 h-6" />
        </button>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
