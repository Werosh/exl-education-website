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

  return (
    <div className="py-12 md:py-25 pt-8 md:pt-12 px-4 md:px-6 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left Side - Just the Image */}
          <motion.div className="relative order-2 lg:order-1" variants={itemVariants}>
            <motion.img
              src={GirlTeach}
              alt="Learning Illustration"
              className="w-full h-auto rounded-2xl shadow-lg object-cover"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.5,
              }}
            />
          </motion.div>

          {/* Right Side - Content */}
          <motion.div className="space-y-6 md:space-y-8 order-1 lg:order-2" variants={itemVariants}>
            <motion.div variants={itemVariants} className="space-y-3 md:space-y-4">
              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 leading-tight"
                variants={itemVariants}
                style={{ fontWeight: 900 }}
              >
                Small classes.
                <br />
                <span
                  className="text-[#002F67]"
                  style={{ fontWeight: 900 }}
                >
                  School based support.
                </span>
              </motion.h2>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4 md:space-y-6">
              <motion.p
                className="text-base md:text-lg text-gray-600 leading-relaxed"
                variants={itemVariants}
              >
                We design classes tailored to each school, aligning with marking expectations and syllabuses. Grouping students from the same school fosters collaboration, healthy competition, and friendships, while ensuring targeted support that complements school learning and boosts assessment confidence
              </motion.p>

              <motion.p
                className="text-base md:text-lg text-gray-600 leading-relaxed"
                variants={itemVariants}
              >
                Our small classes let tutors give each student focused attention. With personalised feedback and consistent guidance, every learner receives the support needed to build understanding, confidence, and measurable progress
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutSection;
