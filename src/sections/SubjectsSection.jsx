import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Download,
  Star,
  Award,
  Users,
} from "lucide-react";

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

  const stats = [
    { icon: BookOpen, value: "500+", label: "Study Materials" },
    { icon: Users, value: "3,000+", label: "Students Helped" },
    { icon: Award, value: "95%", label: "Success Rate" },
    { icon: Star, value: "4.9/5", label: "Student Rating" },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
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

      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute top-20 left-10 w-12 h-12 border-2 border-blue-200 rounded-full"
        animate={{
          y: [-10, 10, -10],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-32 right-16 w-8 h-8 bg-blue-300 rotate-45"
        animate={{
          rotate: [45, 135, 225, 315, 45],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h2
                className="text-5xl lg:text-6xl font-bold text-slate-800 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Unmatched <span className="text-blue-600">Resources</span>
              </motion.h2>

              <motion.p
                className="text-xl text-slate-600 leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Each lesson, receive a printed booklet with colour-coded notes
                written by our subject specialists that comprehensively cover
                every dot point in the NESA syllabus. Our booklets are filled
                with unique HSC-style practice questions, homework and detailed
                solutions. We are proud to offer our students the{" "}
                <span className="font-semibold text-blue-700">
                  best HSC notes in the industry
                </span>
                .
              </motion.p>
            </div>

            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-2 gap-6 py-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-slate-800">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.button
                className="group flex items-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View Sample Notes</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Visual Area with Floating Books */}
          <motion.div
            className="relative h-[600px] lg:h-[700px]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Main Container */}
            <div className="relative w-full h-full">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-3xl blur-3xl"></div>

              {/* Floating Books */}
              {floatingBooks.map((book, index) => (
                <motion.div
                  key={book.id}
                  className="absolute"
                  style={{
                    left: book.position.x,
                    top: book.position.y,
                  }}
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
                    {/* Book Cover Design */}
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
                            book.size === "large" ? "text-[10px]" : "text-[8px]"
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

                    {/* Book Spine Effect */}
                    <div
                      className={`
                      absolute right-0 top-1 bottom-1 w-2 
                      bg-gradient-to-b from-black/20 to-black/40 rounded-r-lg
                    `}
                    ></div>
                  </div>
                </motion.div>
              ))}

              {/* Central Highlight Circle */}
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

              {/* Connecting Lines */}
              {/* <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                  <linearGradient
                    id="lineGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "#3B82F6", stopOpacity: 0.6 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "#1D4ED8", stopOpacity: 0.2 }}
                    />
                  </linearGradient>
                </defs>
                {floatingBooks.slice(0, 3).map((book, index) => (
                  <motion.line
                    key={index}
                    x1="50%"
                    y1="50%"
                    x2={book.position.x}
                    y2={book.position.y}
                    stroke="url(#lineGradient)"
                    strokeWidth="1"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.2 + 1.2 }}
                  />
                ))}
              </svg> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UnmatchedResources;
