import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Users,
  TrendingUp,
  BookOpen,
  Calculator,
  FlaskConical,
  Globe,
  Palette,
  Music,
  Cpu,
  BarChart,
} from "lucide-react";

const Subjects = () => {
  const subjects = [
    {
      icon: "🧮",
      name: "Mathematics",
      description:
        "Build strong analytical and problem-solving skills with advanced mathematical concepts and real-world applications.",
      students: "3,120+",
      growth: "+25%",
    },

    {
      icon: "💻",
      name: "Technology",
      description:
        "Master digital literacy, programming, and emerging technologies to prepare for the future workforce.",
      students: "2,340+",
      growth: "+35%",
    },

    {
      icon: "📊",
      name: "Business Studies",
      description:
        "Learn entrepreneurship, economics, and business strategy to understand the modern economic landscape.",
      students: "1,780+",
      growth: "+28%",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <section
      id="subjects"
      className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden px-6"
    >
      {/* Curved SVG Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top curved element */}
        <svg
          className="absolute -top-40 -left-40 w-96 h-96 text-blue-500/10"
          viewBox="0 0 400 400"
          fill="none"
        >
          <path
            d="M100 350C150 300, 250 200, 350 150C400 125, 450 100, 500 100"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M80 370C130 320, 230 220, 330 170C380 145, 430 120, 480 120"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            opacity="0.5"
          />
        </svg>

        {/* Bottom curved element */}
        <svg
          className="absolute -bottom-40 -right-40 w-96 h-96 text-purple-500/10 rotate-180"
          viewBox="0 0 400 400"
          fill="none"
        >
          <path
            d="M100 350C150 300, 250 200, 350 150C400 125, 450 100, 500 100"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M80 370C130 320, 230 220, 330 170C380 145, 430 120, 480 120"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            opacity="0.5"
          />
        </svg>

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 right-20 w-8 h-8 border border-blue-400/20 rotate-45"
          animate={{
            rotate: [45, 135, 45],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-32 left-20 w-6 h-6 bg-purple-400/20 rounded-full"
          animate={{
            y: [-10, 10, -10],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.08),transparent)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.08),transparent)] pointer-events-none"></div>
      </div>

      {/* Decorative mesh pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern
              id="mesh"
              x="0"
              y="0"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path d="M0 0L60 60M60 0L0 60" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mesh)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Academic{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Excellence
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Comprehensive curriculum designed for academic success across all
            major disciplines
          </motion.p>

          {/* Decorative line */}
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </motion.div>

        {/* Subjects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {subjects.map((subject, index) => (
            <motion.div
              key={index}
              className="group relative cursor-pointer"
              variants={cardVariants}
              whileHover={{
                y: -15,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              {/* Main card container with glassmorphism effect */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-8 group-hover:border-blue-400/50 transition-all duration-500 shadow-2xl group-hover:shadow-blue-500/10 relative overflow-hidden">
                {/* Animated background glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-600/10 to-pink-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ scale: 0.8, rotate: -10 }}
                  whileHover={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Floating particles effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-blue-400 rounded-full"
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${10 + i * 20}%`,
                      }}
                      animate={{
                        y: [-5, 5, -5],
                        opacity: [0.3, 1, 0.3],
                        scale: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>

                <div className="relative z-10">
                  {/* Header with icon and stats */}
                  <div className="flex items-start justify-between mb-8">
                    <motion.div
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/15 to-white/5 border border-white/20 flex items-center justify-center text-3xl group-hover:border-blue-400/50 transition-all duration-500 group-hover:scale-110"
                      whileHover={{ rotate: 10 }}
                    >
                      {subject.icon}
                    </motion.div>

                    <div className="text-right space-y-2">
                      <motion.div
                        className="flex items-center text-sm text-gray-300"
                        initial={{ opacity: 0.7 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <Users className="w-4 h-4 mr-2" />
                        {subject.students}
                      </motion.div>
                      <motion.div
                        className="flex items-center text-sm text-emerald-400 font-semibold"
                        whileHover={{ scale: 1.1 }}
                      >
                        <TrendingUp className="w-4 h-4 mr-2" />
                        {subject.growth}
                      </motion.div>
                    </div>
                  </div>

                  {/* Subject title */}
                  <motion.h3
                    className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-blue-200 transition-colors duration-300"
                    initial={{ opacity: 0.9 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {subject.name}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    className="text-gray-300 mb-8 leading-relaxed group-hover:text-gray-200 transition-colors duration-300"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {subject.description}
                  </motion.p>

                  {/* Call to action */}
                  <motion.div
                    className="flex items-center text-blue-400 font-medium group-hover:text-blue-300 transition-colors duration-300"
                    whileHover={{ x: 8 }}
                  >
                    <span className="tracking-wide text-sm font-semibold">
                      VIEW CURRICULUM
                    </span>
                    <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-2" />
                  </motion.div>

                  {/* Animated divider line */}
                  <motion.div
                    className="h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.6 }}
                  />
                </div>
              </div>

              {/* Hover ring effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl border-2 border-blue-400/0 group-hover:border-blue-400/30 transition-all duration-500 pointer-events-none"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 25px 50px rgba(59, 130, 246, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Explore All Subjects</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.5 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Subjects;
