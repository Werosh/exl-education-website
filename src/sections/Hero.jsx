import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

import LearningImg from "../images/others/learning.jpeg";
import { useNavigate } from "react-router-dom";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const pageLoad = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.1, duration: 1 } },
};

const HeroSection = () => {
  const navigate = useNavigate();

  const NavigateAbout = () => {
    navigate("/about");
  };

  const NavigateNext = () => {
    const element = document.getElementById("feature");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToNextSection = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <motion.section
      variants={pageLoad}
      initial="hidden"
      animate="visible"
      className="bg-white min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 overflow-hidden relative py-8 mt-10 md:mt-0 md:py-0"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg
          className="absolute top-0 left-0 w-1/2 md:w-1/3 -z-10"
          viewBox="0 0 400 300"
          fill="none"
        >
          <path d="M0,100 C100,0 300,0 400,100 L400,0 L0,0 Z" fill="#DBEAFE" />
        </svg>
        <div className="absolute bottom-0 right-0 w-32 h-32 md:w-50 md:h-50 bg-[#704471]/80 rounded-full opacity-90 z-[-1]" />
        <div className="absolute top-1/4 right-0 w-24 h-24 md:w-48 md:h-48 rounded-full bg-blue-300 opacity-60 z-[-1] [mask-image:repeating-linear-gradient(45deg,_#000_0px,_#000_2px,_transparent_2px,_transparent_4px)]" />
        <div className="absolute bottom-0 left-0 w-20 h-20 md:w-40 md:h-40 rounded-full bg-[#d89fbf] opacity-60 z-[-1] [mask-image:repeating-linear-gradient(135deg,_#000_0px,_#000_2px,_transparent_2px,_transparent_4px)]" />
      </div>

      <div className="flex-1 flex items-center justify-center w-full z-10">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-16 items-center">
            {/* Left */}
            <div className="flex flex-col justify-center Montserrat-font text-center lg:text-left">
              <motion.span
                className="text-xs sm:text-sm text-gray-600 font-medium mb-4 md:mb-6 lg:mb-10"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={1}
              >
                Find your success in{" "}
                <span className="text-blue-600 font-bold ">STEM</span>
              </motion.span>
              <motion.h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#002F67] leading-tight md:leading-tight lg:leading-12 Montserrat-font mb-3 md:mb-4 lg:mb-5"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={2}
              >
                Science and Maths Tutoring{" "}
                <span style={{ fontWeight: 900 }}>in Castle Hill</span>
                <br />
                <span className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 font-medium">
                  Years 7-12
                </span>
              </motion.h1>
              <motion.p
                className="text-sm sm:text-base md:text-lg text-gray-600 italic max-w-lg mx-auto lg:mx-0 leading-relaxed md:leading-9 mt-3 md:mt-4 lg:mt-5 mb-4 md:mb-5 lg:mb-6"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={3}
              >
                Here at EXL Education, we make Chemistry, Physics and
                Mathematics easier to grasp while providing an enjoyable
                experience that builds their passion for these subjects!
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row sm:justify-center lg:justify-start sm:space-x-3 md:sm:space-x-4 space-y-3 sm:space-y-0 pt-2 md:pt-4"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={5}
              >
                <button
                  onClick={NavigateAbout}
                  className="bg-[#002F67] text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-lg text-sm sm:text-base font-medium hover:scale-105 active:scale-95 transition-all duration-300 w-full sm:w-auto shadow-md hover:shadow-lg"
                >
                  Learn more about us
                </button>
                <button
                  onClick={NavigateNext}
                  className="text-[#002F67] flex items-center justify-center space-x-2 hover:translate-x-1 transition-all duration-300 text-sm sm:text-base font-medium w-full sm:w-auto py-2.5 sm:py-3 border border-transparent hover:border-[#002F67] rounded-lg"
                >
                  <span>Our difference</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </motion.div>
            </div>

            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] rounded-2xl overflow-hidden shadow-xl order-first lg:order-last">
              <motion.img
                src={LearningImg}
                alt="learning image"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="w-full h-full object-cover"
              />

              {/* Top-right card */}
              {/* <motion.div
                initial={{ opacity: 0, x: 30, y: -30 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute top-2 right-2 z-10 bg-white/90 backdrop-blur-sm rounded-md p-3 text-xs w-44 shadow-md"
              >
                <div className="font-semibold text-blue-600">Title</div>
                <p className="text-gray-700">This is some description text.</p>
              </motion.div> */}

              {/* Bottom-left card */}
              {/* <motion.div
                initial={{ opacity: 0, x: -30, y: 30 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute bottom-2 left-2 z-10 bg-blue-600 text-white rounded-md p-3 text-xs w-44 shadow-md"
              >
                <div className="font-semibold">Small Classes</div>
                <p>Learn in a focused, personalised environment.</p>
              </motion.div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Arrow */}
      <motion.div
        className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <button
          onClick={scrollToNextSection}
          className="flex flex-col items-center space-y-1 md:space-y-2 text-gray-600 hover:text-blue-600 group"
        >
          <span className="text-xs md:text-sm font-medium opacity-75 group-hover:opacity-100">
            Scroll Down
          </span>
          <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
