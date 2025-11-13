/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import learningImage from "../images/others/learning.jpeg";

const SubjectDetails = ({
  subject = "Subject Name",
  year = "Year Level",
  description = "Subject description goes here...",
  gradientFrom = "from-purple-400",
  gradientTo = "to-purple-600",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className={`mt-20 relative w-full bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 ease-out transform ${
          isHovered ? "scale-[1.02] shadow-3xl" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full animate-pulse"></div>
          <div
            className="absolute top-1/3 -left-8 w-16 h-16 bg-white/5 rounded-full animate-bounce"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        {/* Floating shapes */}
        <div className="absolute top-8 right-8 transform rotate-45">
          <motion.div
            className={`w-4 h-4 bg-white/20 transition-all duration-1000 ${
              isHovered ? "rotate-90 scale-110" : ""
            }`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4 }}
          ></motion.div>
        </div>
        <div className="absolute bottom-12 left-8 transform rotate-12">
          <motion.div
            className={`w-3 h-3 bg-white/15 rounded-full transition-all duration-1000 ${
              isHovered ? "rotate-180 scale-125" : ""
            }`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6 }}
          ></motion.div>
        </div>

        {/* Main content */}
        <div className="relative px-14 py-12 md:px-12 md:py-16 ">
          <motion.div
            className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 transition-all duration-500 hover:bg-white/30"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-white/90 text-sm font-medium tracking-wide">
              {year}
            </span>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center ">
            <motion.div
              className="flex-1 space-y-6 gap-8 max-w-7xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="space-y-3">
                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <span
                    className={`inline-block transition-all duration-700 ${
                      isHovered ? "translate-x-2" : ""
                    }`}
                  >
                    {subject}
                  </span>
                </motion.h1>
                <motion.div
                  className={`h-1 bg-white/30 rounded-full transition-all duration-1000 ${
                    isHovered ? "w-24" : "w-12"
                  }`}
                  initial={{ width: "0" }}
                  animate={{ width: isHovered ? "6rem" : "3rem" }}
                  transition={{ delay: 0.8 }}
                ></motion.div>
              </div>
              <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-2xl">
                {description}
              </p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <a href="/free-trail">
                  <button className="mt-4 px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-md hover:bg-purple-100 transition-all duration-300">
                    Book Free Trial
                  </button>
                </a>
              </motion.div>
            </motion.div>

            {/* Image Section */}
            <motion.div
              className="flex-shrink-0 "
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div
                className={`relative p-6 transition-all duration-700 ${
                  isHovered ? "scale-110 rotate-2" : ""
                }`}
              >
                <div className="absolute inset-0 bg-white/10 rounded-2xl backdrop-blur-sm animate-pulse"></div>
                <div className="absolute inset-1 bg-white/5 rounded-xl"></div>
                <div className="relative">
                  <img
                    src={learningImage}
                    alt="Learning"
                    className={`w-48 h-48 md:w-[500px] md:h-[400px] object-cover rounded-xl transition-all duration-500 ${
                      isHovered ? "drop-shadow-2xl" : "drop-shadow-lg"
                    }`}
                  />
                  <div
                    className={`absolute -top-1 -right-1 transition-all duration-1000 ${
                      isHovered
                        ? "translate-y-1 opacity-100"
                        : "translate-y-0 opacity-70"
                    }`}
                  >
                    <div className="w-2 h-2 bg-white/40 rounded-full animate-ping"></div>
                  </div>
                  <div
                    className={`absolute -bottom-1 -left-1 transition-all duration-1000 ${
                      isHovered
                        ? "-translate-y-1 opacity-100"
                        : "translate-y-0 opacity-70"
                    }`}
                  >
                    <div
                      className="w-1.5 h-1.5 bg-white/50 rounded-full animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/10 to-transparent"></div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SubjectDetails;
