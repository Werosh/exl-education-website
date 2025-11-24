import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";

// Import all available images

import Teaching from "../images/others/Teaching.JPG";
import Book1 from "../images/others/book1.png";
import Book2 from "../images/others/book2.png";

// All available images
const allImages = [Book2, Book1, Teaching];

// Function to get random 3 images
const getRandomImages = () => {
  const shuffled = [...allImages].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 3);
};

const ResourcesSection = ({
  subjectName = "Subject",
  heading = "Syllabus-Relevant Resources",
  description,
}) => {
  // Default description with course name
  const defaultDescription = `Our ${subjectName} resources are designed to keep learning clear and structured. They cover the full NSW syllabus with 250+ pages of lesson content, a 100+ page exam-style workbook, regular quizzes, and a topic test for each module so students can stay ahead with confidence.`;

  const finalDescription = description || defaultDescription;
  const [selectedImages, setSelectedImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Initialize with random images
  useEffect(() => {
    setSelectedImages(getRandomImages());
  }, []);

  // Auto-rotate slideshow (pause on hover)
  useEffect(() => {
    if (selectedImages.length === 0 || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        setDirection(1);
        return (prev + 1) % selectedImages.length;
      });
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [selectedImages.length, isPaused]);

  const nextImage = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % selectedImages.length);
  };

  const prevImage = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + selectedImages.length) % selectedImages.length
    );
  };

  const goToImage = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  if (selectedImages.length === 0) {
    return null;
  }

  // Animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 px-4 md:px-8 lg:px-16 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-5 lg:space-y-6 order-2 lg:order-1"
          >
            {/* Icon and Heading in same line */}
            <div className="flex items-center gap-4 mb-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center shadow-md"
                style={{ backgroundColor: "#002f67" }}
              >
                <BookOpen className="w-6 h-6 text-white" fill="white" />
              </div>
              <h2 className="text-3xl md:text-4xl  our-class-bold  text-[#002f67] leading-tight">
                {heading}
              </h2>
            </div>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              {finalDescription}
            </p>
          </motion.div>

          {/* Right Side - Image Slideshow */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2"
          >
            {/* Slideshow Container */}
            <div
              className="relative w-full h-[400px] md:h-[500px] lg:h-[400px] rounded-2xl overflow-hidden shadow-2xl bg-white"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/95 hover:bg-white shadow-xl p-3 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-400"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/95 hover:bg-white shadow-xl p-3 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-400"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>

              {/* Image Container */}
              <div className="relative w-full h-full">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                    }}
                    className="absolute inset-0"
                  >
                    <img
                      src={selectedImages[currentIndex]}
                      alt={`${subjectName} resource ${currentIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {/* Optional: Add watermark overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {selectedImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-white w-8"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ResourcesSection;
