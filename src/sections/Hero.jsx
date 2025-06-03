import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Users, Award } from "lucide-react";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const floatIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 1,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const HeroSection = () => {
  return (
    <section className="bg-white py-20 px-6 overflow-hidden ">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div className="space-y-8" variants={fadeInUp} custom={0}>
            {/* Badge */}
            <motion.div
              className="inline-block"
              variants={fadeInUp}
              custom={0.2}
            >
              <span className="text-sm text-blue-600 font-medium">
                Small classes, big results
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div className="space-y-4" variants={fadeInUp} custom={0.4}>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Year 11 & 12 HSC{" "}
                <span className="text-blue-500">tutoring specialists</span> in
                Sydney
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-lg text-gray-600 leading-relaxed max-w-lg"
              variants={fadeInUp}
              custom={0.6}
            >
              Learn why our students love attending Cognito Tuition for
              Chemistry, Physics & Maths, and discover the secret to our
              exceptional HSC results.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="flex items-center space-x-12"
              variants={fadeInUp}
              custom={0.8}
            >
              <div>
                <div className="text-3xl font-bold text-gray-900">2,500+</div>
                <div className="text-sm text-gray-600">students helped</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">99.05</div>
                <div className="text-sm text-gray-600">median student ATAR</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex items-center space-x-4 pt-4"
              variants={fadeInUp}
              custom={1}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Trial now
              </motion.button>

              <motion.button
                whileHover={{ x: 5 }}
                className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-2 transition-colors duration-200"
              >
                <span>Our difference</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div className="relative" variants={fadeInUp} custom={1.2}>
            {/* Main Image Container */}
            <motion.div
              className="relative rounded-2xl overflow-hidden bg-gray-50 aspect-[4/3]"
              initial="hidden"
              animate="visible"
              variants={floatIn}
            >
              {/* Replace this with your actual image source */}
              <img
                src="https://www.gettingsmart.com/wp-content/uploads/2017/01/College-Students-Using-Laptops-Feature-Image.jpg"
                alt="Students learning together"
                className="w-full h-full object-cover"
              />

              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent"></div>
            </motion.div>

            {/* Small Stats Cards */}
            <motion.div
              className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg border border-gray-100"
              initial={{ opacity: 0, x: -30, y: 30 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1.5, duration: 0.7 }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">25K+</div>
                  <div className="text-xs text-gray-600">Students</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg border border-gray-100"
              initial={{ opacity: 0, x: 30, y: -30 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1.7, duration: 0.7 }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">98%</div>
                  <div className="text-xs text-gray-600">Success Rate</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
