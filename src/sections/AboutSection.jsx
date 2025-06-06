import React from "react";
import { motion } from "framer-motion";
import { Users, BookOpen, Target, Award } from "lucide-react";
import GirlTeach from "../images/others/GirlTeach.JPG";

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.8,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="py-25 bg-gradient-to-br from-blue-50 to-white pt-12 px-4 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image/Visual Area */}
          <motion.div className="relative" variants={itemVariants}>
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 overflow-hidden">
              {/* Background decorative elements */}
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -mr-16 -mt-16"
                variants={floatingVariants}
                animate="animate"
              />
              <motion.div
                className="absolute bottom-0 left-0 w-24 h-24 bg-blue-50 rounded-full -ml-12 -mb-12"
                variants={floatingVariants}
                animate="animate"
                style={{ animationDelay: "1s" }}
              />

              {/* Main content area */}
              <div className="relative z-10">
                <motion.div
                  className="flex items-center justify-center mb-8"
                  variants={iconVariants}
                >
                  <motion.img
                    src={GirlTeach}
                    alt="Learning Illustration"
                    className="w-98 h-68 object-cover rounded-2xl shadow-lg"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                      delay: 0.5,
                    }}
                  />
                </motion.div>

                <motion.div
                  className="grid grid-cols-2 gap-6"
                  variants={containerVariants}
                >
                  <motion.div
                    className="bg-blue-50 p-4 rounded-xl text-center"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <p className="text-sm text-blue-800 font-medium">
                      6 Students
                    </p>
                  </motion.div>

                  <motion.div
                    className="bg-blue-50 p-4 rounded-xl text-center"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Target className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <p className="text-sm text-blue-800 font-medium">Focused</p>
                  </motion.div>

                  <motion.div
                    className="bg-blue-50 p-4 rounded-xl text-center col-span-2"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <p className="text-sm text-blue-800 font-medium">
                      Quality Education
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.h2
                className="text-5xl lg:text-6xl font-bold text-blue-900 leading-tight"
                variants={itemVariants}
                style={{ fontWeight: 900 }}
              >
                Small class.
                <br />
                <span className="text-blue-600 " style={{ fontWeight: 900 }}>
                  Same excellence.
                </span>
              </motion.h2>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <motion.p
                className="text-lg text-gray-600 leading-relaxed"
                variants={itemVariants}
              >
                Students thrive in environments where they feel valued and
                heard. That's why we maintain our commitment to{" "}
                <span className="font-semibold text-blue-800">
                  intimate class sizes
                </span>{" "}
                that foster genuine connections and personalized learning
                experiences.
              </motion.p>

              <motion.p
                className="text-lg text-gray-600 leading-relaxed"
                variants={itemVariants}
              >
                Our average class of{" "}
                <span className="font-semibold text-blue-800">6 students</span>{" "}
                creates the perfect balance between collaborative learning and
                individual attention, ensuring every student receives the
                support they need to excel.
              </motion.p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.div
                className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-lg border border-blue-100"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(59, 130, 246, 0.15)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-medium text-blue-800">
                  Personalized Learning
                </span>
              </motion.div>

              <motion.div
                className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-lg border border-blue-100"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(59, 130, 246, 0.15)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-medium text-blue-800">
                  Individual Attention
                </span>
              </motion.div>

              <motion.div
                className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-lg border border-blue-100"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(59, 130, 246, 0.15)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-medium text-blue-800">
                  Collaborative Environment
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutSection;
