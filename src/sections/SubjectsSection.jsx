import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Download, FerrisWheel } from "lucide-react";
import SamplePDF from "../assets/pdf/FILE_7572.pdf";

const UnmatchedResources = () => {
  const floatingBooks = [
    {
      id: 1,
      title: "HSC Mathematics",
      subject: "Advanced Calculus & Statistics",
      color: "from-blue-500 to-blue-600",
      rotation: -15,
      position: { x: "15%", y: "20%" },
      size: "large",
    },
    {
      id: 2,
      title: "Chemistry Notes",
      subject: "Organic & Inorganic",
      color: "from-blue-400 to-blue-500",
      rotation: 12,
      position: { x: "70%", y: "15%" },
      size: "medium",
    },
    {
      id: 3,
      title: "Physics Guide",
      subject: "Mechanics & Waves",
      color: "from-blue-600 to-blue-700",
      rotation: -8,
      position: { x: "60%", y: "60%" },
      size: "large",
    },
    {
      id: 4,
      title: "Study Planner",
      subject: "Time Management",
      color: "from-blue-300 to-blue-400",
      rotation: 20,
      position: { x: "25%", y: "70%" },
      size: "small",
    },
    {
      id: 5,
      title: "Practice Tests",
      subject: "Mock Examinations",
      color: "from-blue-500 to-blue-600",
      rotation: -25,
      position: { x: "80%", y: "40%" },
      size: "medium",
    },
  ];

  return (
    <section className=" pb-24 bg-gradient-to-br from-slate-50 via-blue-50 to-white relative overflow-hidden">
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

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start mt-10">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            {/* Headline & Text */}
            <div className="space-y-6">
              <motion.h2
                className="text-5xl lg:text-6xl font-bold text-slate-500 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ fontWeight: 900 }}
              >
                Unmatched <span className="text-[#002F67]">Resources</span>
              </motion.h2>
              <motion.p
                className="text-xl text-slate-600 leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                In every lesson, you’ll receive a printed booklet created by our
                subject specialists, designed to comprehensively cover every dot
                point in the NESA syllabus. Each booklet is structured to
                complement your teacher’s guidance, combining clear explanations
                with HSC-style practice questions and homework that is checked
                to give you valuable feedback .
              </motion.p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <a href={SamplePDF} target="_blank" rel="noopener noreferrer">
                  <motion.button
                    className="group flex items-center justify-center sm:justify-between space-x-3 bg-[#002F67] hover:bg-white hover:border-2 hover:border-black hover:text-gray-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-[15px]">View Sample Notes</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <a href="/contact" rel="noopener noreferrer">
                  <motion.button
                    className="group flex items-center justify-center sm:justify-between space-x-3 border-2 text-gray-800 hover:bg-[#002F67] hover:text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-[15px]">Start Your Journey</span>
                    <FerrisWheel className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column (Floating Books) */}
          <motion.div
            className="relative h-[500px] lg:h-[500px]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative w-full h-full">
              {/* Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-3xl blur-3xl"></div>

              {/* Floating Books */}
              {floatingBooks.map((book, index) => (
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
                      bg-gradient-to-br ${
                        book.color
                      } rounded-lg shadow-xl border border-white/20
                      backdrop-blur-sm cursor-pointer transform-gpu
                      hover:shadow-2xl transition-all duration-300
                    `}
                  >
                    <div className="p-3 h-full flex flex-col justify-between">
                      <div className="space-y-1">
                        <div className="w-8 h-1 bg-white/60 rounded"></div>
                        <div className="w-12 h-1 bg-white/40 rounded"></div>
                      </div>
                      <div className="text-center space-y-1">
                        <div
                          className={`
                            text-white font-bold 
                            ${book.size === "large" ? "text-xs" : "text-[10px]"}
                          `}
                        >
                          {book.title}
                        </div>
                        <div
                          className={`
                            text-white/80 
                            ${
                              book.size === "large"
                                ? "text-[10px]"
                                : "text-[8px]"
                            }
                          `}
                        >
                          {book.subject}
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                          <BookOpen className="w-3 h-3 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute right-0 top-1 bottom-1 w-2 bg-gradient-to-b from-black/20 to-black/40 rounded-r-lg"></div>
                  </div>
                </motion.div>
              ))}

              {/* Central Download Icon */}
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UnmatchedResources;
