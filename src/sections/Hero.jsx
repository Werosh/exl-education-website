import React, { useState, useEffect } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

const pageLoad = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 1,
      ease: "easeInOut",
    },
  },
};

// Image list (use local assets or external URLs)
const images = [
  "https://imgv3.fotor.com/images/blog-cover-image/a-shadow-of-a-boy-carrying-the-camera-with-red-sky-behind.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxBDJsAGcLFpaQQyX1fsKAvonmT-QkvVL7oA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSabrBZxuW139T0wCclOEZlj8-uf_pZX2gjw&s",
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  // Auto switch images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const scrollToNextSection = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <motion.section
      variants={pageLoad}
      initial="hidden"
      animate="visible"
      className="bg-white min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden relative"
    >
      {/* Decorative Background Shapes */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Top Left Light Blue Background Curve */}
        <svg
          className="absolute top-0 left-0 w-1/3 -z-10"
          viewBox="0 0 400 300"
          fill="none"
        >
          <path d="M0,100 C100,0 300,0 400,100 L400,0 L0,0 Z" fill="#DBEAFE" />
        </svg>

        {/* Bottom Right Solid Circle */}
        <div className="absolute bottom-[-60px] right-[-60px] w-80 h-80 bg-blue-700 rounded-full opacity-90 z-[-1]" />

        {/* Mid Right Striped Circle */}
        <div className="absolute top-1/4 right-0 w-48 h-48 rounded-full bg-blue-300 opacity-60 z-[-1] [mask-image:repeating-linear-gradient(45deg,_#000_0px,_#000_2px,_transparent_2px,_transparent_4px)]" />

        {/* Bottom Left Striped Circle */}
        <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-blue-900 opacity-60 z-[-1] [mask-image:repeating-linear-gradient(135deg,_#000_0px,_#000_2px,_transparent_2px,_transparent_4px)]" />
      </div>

      <div className="flex-1 flex items-center justify-center w-full z-10">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="flex flex-col justify-center space-y-8">
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={1}
              >
                <span className="text-sm text-blue-600 font-medium">
                  Small classes, big results
                </span>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={2}
              >
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-600 leading-tight">
                  Year 11 & 12 HSC{" "}
                  <span className="text-[#002F67]">Tutoring Specialist</span> in
                  Sydney
                </h1>
              </motion.div>

              <motion.p
                className="text-lg text-gray-600 leading-relaxed max-w-lg italic"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={3}
              >
                Learn why our students love attending EXL education for
                Chemistry, Physics & Maths, and discover the secret to our
                exceptional HSC results.
              </motion.p>

              <motion.div
                className="flex items-center justify-start space-x-12"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={4}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">2,500+</div>
                  <div className="text-sm text-gray-600">students helped</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">99.05</div>
                  <div className="text-sm text-gray-600">
                    median student ATAR
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center justify-start space-x-4 pt-4"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={5}
              >
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 active:scale-95">
                  Trial now
                </button>
                <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-2 transition-all duration-200 hover:translate-x-1">
                  <span>Our difference</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            </div>

            {/* Right Content: Image Slideshow */}
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current}
                  src={images[current]}
                  alt={`Slide ${current + 1}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 1 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      current === index
                        ? "bg-blue-600 scale-110 shadow-md"
                        : "bg-white/60 hover:bg-white"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <button
          onClick={scrollToNextSection}
          className="flex flex-col items-center space-y-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 group"
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
