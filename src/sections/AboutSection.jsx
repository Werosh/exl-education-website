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
    <div className="py-25  pt-12 px-4 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Just the Image */}
          <motion.div className="relative" variants={itemVariants}>
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
          <motion.div className="space-y-8" variants={itemVariants}>
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.h2
                className="text-5xl lg:text-6xl font-bold text-blue-900 leading-tight"
                variants={itemVariants}
                style={{ fontWeight: 900 }}
              >
                Small class.
                <br />
                <span className="text-[#002F67] " style={{ fontWeight: 900 }}>
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
                <span className="font-bold text-[#002F67]">
                  intimate class sizes
                </span>{" "}
                that foster genuine connections and personalised learning
                experiences.
              </motion.p>

              <motion.p
                className="text-lg text-gray-600 leading-relaxed"
                variants={itemVariants}
              >
                Our classes facilitate a maximum of 6 students per class in
                order to create the perfect balance between collaborative
                learning and individual attention, ensuring that every student
                has a voice and receives the support they need to excel.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutSection;
