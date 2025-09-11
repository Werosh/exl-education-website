import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BookOpen, Video, Users } from "lucide-react";

import SmartBoard from "../images/others/smartBoard.jpeg";
import HandsUpImg from "../images/others/HandsUp.jpeg";

const ComArea = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Interactive Learning Materials",
      subtitle: "Comprehensive Resources",
      description:
        "Access topic-by-topic lesson booklets crafted based on advanced curriculum standards with engaging visual content.",
      icon: <BookOpen className="w-8 h-8" />,
      image: SmartBoard,
      caption: "A smart board used in interactive lessons",
      color: "from-blue-500 to-purple-600",
    },
    {
      id: 2,
      title: "Video Solutions & Tutorials",
      subtitle: "Self-Paced Learning",
      description:
        "Watch detailed video explanations paired with homework booklets for comprehensive understanding at your own pace.",
      icon: <Video className="w-8 h-8" />,
      image: HandsUpImg,
      caption: "Students learning via video tutorials",
      color: "from-purple-500 to-pink-600",
    },
    {
      id: 3,
      title: "Collaborative Community",
      subtitle: "Learn Together",
      description:
        "Join a vibrant community of learners, share knowledge, and grow together in a supportive environment.",
      icon: <Users className="w-8 h-8" />,
      image: "https://divisionsbc.ca/sites/default/files/51189/collab.jpg",
      caption: "Students collaborating in a group",
      color: "from-pink-500 to-orange-500",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 9000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const currentSlide = slides[currentIndex];

  return (
    <div className="relative w-full mx-auto p-8 overflow-hidden">
      <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden min-h-[500px]">
        {/* Animated Background Gradient */}
        <motion.div
          key={currentSlide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className={`absolute inset-0 bg-gradient-to-br ${currentSlide.color}`}
        />

        {/* Content Grid */}
        <div className="relative z-10 grid md:grid-cols-2 gap-8 p-8 md:p-12 items-start min-h-[500px]">
          {/* Left Content */}
          <motion.div
            key={`content-${currentSlide.id}`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${currentSlide.color} flex items-center justify-center text-white shadow-lg`}
            >
              {currentSlide.icon}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm font-semibold text-gray-500 uppercase tracking-wider"
            >
              {currentSlide.subtitle}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight"
            >
              {currentSlide.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-gray-600 text-lg leading-relaxed"
            >
              {currentSlide.description}
            </motion.p>
          </motion.div>

          {/* Right Content */}
          <motion.div
            key={`image-${currentSlide.id}`}
            initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex flex-col items-center"
          >
            {/* Main Image moved to bottom */}
            <div className="relative bg-gray-100 rounded-2xl p-6 shadow-xl mt-8 w-full">
              <img
                src={currentSlide.image}
                alt={currentSlide.title}
                className="rounded-xl w-full h-68 object-cover"
              />
              <p className="mt-2 text-center text-gray-500 italic">
                {currentSlide.caption}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Progress Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-gray-800 w-8" : "bg-gray-400"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComArea;
