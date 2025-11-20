import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, FerrisWheel } from "lucide-react";

import Img1 from "../images/subjects/1.png";
import Img2 from "../images/subjects/2.png";
import Img3 from "../images/subjects/4.png";
import Img4 from "../images/subjects/5.png";
import Img5 from "../images/subjects/7.png";
import Img6 from "../images/subjects/5.png";
import Img7 from "../images/subjects/7.png";

const UnmatchedResources = () => {
  // Your 7 image paths
  const bookImages = [Img1, Img2, Img3, Img4, Img5, Img6, Img7];

  const positions = [
    { rotation: -15, position: { x: "15%", y: "20%" }, size: "large" },
    { rotation: 12, position: { x: "70%", y: "15%" }, size: "medium" },
    { rotation: -8, position: { x: "60%", y: "60%" }, size: "large" },
    { rotation: 20, position: { x: "25%", y: "70%" }, size: "small" },
    { rotation: -25, position: { x: "80%", y: "40%" }, size: "medium" },
  ];

  const [shuffledImages, setShuffledImages] = useState([]);

  useEffect(() => {
    // Shuffle images randomly
    const shuffled = [...bookImages].sort(() => Math.random() - 0.5);
    setShuffledImages(shuffled);
  }, []);

  const floatingBooks = positions.map((pos, index) => ({
    id: index + 1,
    imageSrc: shuffledImages[index],
    ...pos,
  }));

  return (
    <section className="pb-24 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="grid"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Animated Shapes */}
      <motion.div
        className="absolute top-20 left-10 w-12 h-12 border-2 border-blue-200 rounded-full"
        animate={{ y: [-10, 10, -10], rotate: [0, 180, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-32 right-16 w-8 h-8 bg-blue-300 rotate-45"
        animate={{ rotate: [45, 135, 225, 315, 45], scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-start mt-6 md:mt-10">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-10"
          >
            {/* Headline & Text */}
            <div className="space-y-4 md:space-y-6">
              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-500 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ fontWeight: 900 }}
              >
                Unmatched <span className="text-[#002F67]">Resources</span>
              </motion.h2>
              <motion.p
                className="text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                In every lesson, you'll get a printed booklet made by our expert
                tutors, designed to cover every dot point in the NESA syllabus.
                Each booklet supports what you're learning at school, with
                easy-to-follow notes, HSC-style questions, and homework that's
                checked to give you helpful, personalised feedback.
              </motion.p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row sm:space-x-4 md:sm:space-x-6 space-y-3 sm:space-y-0">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="w-full sm:w-auto"
              >
                <a href="/sample.pdf" target="_blank" rel="noopener noreferrer">
                  <motion.button
                    className="group flex items-center justify-center sm:justify-between space-x-3 bg-[#002F67] hover:bg-white hover:border-2 hover:border-black hover:text-gray-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-sm md:text-[15px]">View Sample Notes</span>
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="w-full sm:w-auto"
              >
                <a href="/contact" rel="noopener noreferrer">
                  <motion.button
                    className="group flex items-center justify-center sm:justify-between space-x-3 border-2 text-gray-800 hover:bg-[#002F67] hover:text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-sm md:text-[15px]">Start Your Journey</span>
                    <FerrisWheel className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column (Floating Book Images) */}
          <motion.div
            className="relative h-[400px] md:h-[500px] lg:h-[500px] hidden lg:block"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative w-full h-full">
              {/* Floating Book Images */}
              {shuffledImages.length > 0 &&
                floatingBooks.map((book, index) => (
                  <motion.div
                    key={book.id}
                    className="absolute"
                    style={{ left: book.position.x, top: book.position.y }}
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                      rotate: book.rotation - 20,
                      y: 50,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      rotate: book.rotation,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.15,
                      ease: "easeOut",
                    }}
                    animate={{
                      y: [-5, 5, -5],
                      rotate: [
                        book.rotation - 2,
                        book.rotation + 2,
                        book.rotation - 2,
                      ],
                    }}
                    transition={{
                      duration: 4 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotate: book.rotation + 5,
                      z: 50,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <div
                      className={`
                      ${
                        book.size === "large"
                          ? "w-32 h-40"
                          : book.size === "medium"
                          ? "w-24 h-32"
                          : "w-20 h-28"
                      }
                      rounded-lg shadow-xl border-2 border-white/30
                      backdrop-blur-sm cursor-pointer transform-gpu
                      hover:shadow-2xl transition-all duration-300
                      overflow-hidden bg-white
                    `}
                    >
                      <img
                        src={book.imageSrc}
                        alt={`Book ${book.id}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </motion.div>
                ))}

              {/* Central Download Icon */}
              <a href="/sample.pdf" target="_blank" rel="noopener noreferrer">
                <button>
                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-2xl"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 1 }}
                    animate={{
                      scale: [1, 1.1, 1],
                      boxShadow: [
                        "0 25px 50px rgba(59, 130, 246, 0.3)",
                        "0 25px 50px rgba(59, 130, 246, 0.5)",
                        "0 25px 50px rgba(59, 130, 246, 0.3)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Download className="w-8 h-8 text-white" />
                  </motion.div>
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UnmatchedResources;
