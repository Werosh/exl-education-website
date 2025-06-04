import React from "react";
import { ArrowRight, Users, Award, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

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

const pageLoad = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const HeroSection = () => {
  const scrollToNextSection = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <motion.section
      variants={pageLoad}
      initial="hidden"
      animate="visible"
      className="bg-white min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden relative"
    >
      <div className="flex-1 flex items-center justify-center w-full">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="flex flex-col justify-center space-y-8">
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={1}
              >
                <span className="text-sm text-blue-600 font-medium">
                  Small classes, big results
                </span>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={2}
              >
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Year 11 & 12 HSC{" "}
                  <span className="text-blue-500">Tutoring Specialist</span> in
                  Sydney
                </h1>
              </motion.div>

              <motion.p
                className="text-lg text-gray-600 leading-relaxed max-w-lg"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={3}
              >
                Learn why our students love attending EXL education for
                Chemistry, Physics & Maths, and discover the secret to our
                exceptional HSC results.
              </motion.p>

              <motion.div
                className="flex items-center justify-start space-x-12"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={4}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">2,500+</div>
                  <div className="text-sm text-gray-600">students helped</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">99.05</div>
                  <div className="text-sm text-gray-600">
                    median student ATAR
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center justify-start space-x-4 pt-4"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={5}
              >
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 active:scale-95">
                  Trial now
                </button>
                <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-2 transition-all duration-200 hover:translate-x-1">
                  <span>Our difference</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            </div>

            {/* Right Content */}
            <motion.div
              className="flex items-center justify-center"
              variants={floatIn}
              initial="hidden"
              animate="visible"
            >
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden bg-gray-50 aspect-[4/3] w-full max-w-xl">
                  <img
                    src="https://www.gettingsmart.com/wp-content/uploads/2017/01/College-Students-Using-Laptops-Feature-Image.jpg"
                    alt="Students learning together"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent"></div>
                </div>

                {/* Floating Cards */}
                <motion.div
                  className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg border border-gray-100"
                  variants={floatIn}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">
                        25K+
                      </div>
                      <div className="text-xs text-gray-600">Students</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg border border-gray-100"
                  variants={floatIn}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 1.2 }}
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
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <button
          onClick={scrollToNextSection}
          className="flex flex-col items-center space-y-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 group"
        >
          <span className="text-sm font-medium opacity-75 group-hover:opacity-100">
            Scroll Down
          </span>
          <ChevronDown className="w-6 h-6" />
        </button>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
