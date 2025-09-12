import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Users, Calendar, CheckCircle } from "lucide-react";

const LittleDescription = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="bg-gradient-to-br from-blue-50 to-white py-16 px-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <div className="space-y-6">
              <motion.div
                className="flex items-center space-x-3"
                variants={itemVariants}
              >
                <motion.div
                  className="p-2 bg-blue-600 rounded-lg text-white"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <BookOpen size={24} />
                </motion.div>
                <h2 className="text-4xl font-bold text-gray-900">
                  Personalized Learning
                  <span className="block text-blue-600">Experience</span>
                </h2>
              </motion.div>

              <motion.p
                className="text-lg text-gray-600 leading-relaxed"
                variants={itemVariants}
              >
                Every student learns differently — and we understand that. Our
                adaptive curriculum adjusts to each student's pace and learning
                style, ensuring optimal comprehension and engagement throughout
                their educational journey.
              </motion.p>

              <motion.div
                className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border border-blue-100"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <CheckCircle
                  className="text-blue-600 mt-1 flex-shrink-0"
                  size={20}
                />
                <p className="text-gray-700">
                  If you miss a session or need extra support, our intelligent
                  system automatically provides personalised catch-up materials
                  and one-on-one tutoring sessions.
                </p>
              </motion.div>
            </div>

            {/* Feature Badges */}
            <motion.div
              className="flex flex-wrap gap-3"
              variants={itemVariants}
            >
              {[
                {
                  icon: Calendar,
                  text: "2024 Cohort Available",
                  gradient: "from-blue-500 to-blue-600",
                },
                {
                  icon: Users,
                  text: "2025 Cohort Opening",
                  gradient: "from-indigo-500 to-indigo-600",
                },
                {
                  icon: BookOpen,
                  text: "2026 Early Access",
                  gradient: "from-cyan-500 to-cyan-600",
                },
              ].map((badge, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center space-x-2 px-4 py-2 bg-gradient-to-r ${badge.gradient} text-white rounded-full text-sm font-medium shadow-lg`}
                  variants={badgeVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <badge.icon size={16} />
                  <span>{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div className="relative" variants={imageVariants}>
            <div className="relative">
              {/* Main Image */}

              {/* Floating Cards */}
              <motion.div
                className="absolute -top-35 -left-4 z-20"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img
                  src="https://pmstudycircle.com/wp-content/uploads/2022/09/Project-Progress-Report.jpg"
                  alt="Progress Report"
                  className="rounded-lg shadow-lg border-2 border-white"
                />
              </motion.div>

              {/* Background Decoration */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl -z-10"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-200 rounded-full opacity-10 -z-20"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </motion.div>
        </div>

        {/* Stats Section */}
        {/* <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={itemVariants}
        >
          {[
            { number: "10K+", label: "Active Students" },
            { number: "95%", label: "Success Rate" },
            { number: "24/7", label: "Support" },
            { number: "50+", label: "Subjects" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-sm border border-blue-50"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </motion.div>
  );
};

export default LittleDescription;
