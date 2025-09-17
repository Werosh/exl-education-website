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
      className="bg-white min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden relative"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg
          className="absolute top-0 left-0 w-1/3 -z-10"
          viewBox="0 0 400 300"
          fill="none"
        >
          <path d="M0,100 C100,0 300,0 400,100 L400,0 L0,0 Z" fill="#DBEAFE" />
        </svg>
        <div className="absolute bottom-[-60px] right-[-60px] w-80 h-80 bg-blue-700 rounded-full opacity-90 z-[-1]" />
        <div className="absolute top-1/4 right-0 w-48 h-48 rounded-full bg-blue-300 opacity-60 z-[-1] [mask-image:repeating-linear-gradient(45deg,_#000_0px,_#000_2px,_transparent_2px,_transparent_4px)]" />
        <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-blue-900 opacity-60 z-[-1] [mask-image:repeating-linear-gradient(135deg,_#000_0px,_#000_2px,_transparent_2px,_transparent_4px)]" />
      </div>

      <div className="flex-1 flex items-center justify-center w-full z-10">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div className="flex flex-col justify-center space-y-8 Montserrat-font ">
              <motion.span
                className="text-sm text-gray-600 font-medium"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={1}
              >
                Find your success in{" "}
                <span className="text-blue-600 font-bold">STEM</span>
              </motion.span>
              <motion.h1
                className="text-5xl lg:text-6xl  text-gray-600 leading-tight Montserrat-font "
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={2}
              >
                Years 7-12 <br />
                <span className="text-[#002F67] Montserrat-font">
                  Science and Maths Specialists
                  <br />
                </span>{" "}
                in Castle Hill
              </motion.h1>
              <motion.p
                className="text-lg text-gray-600 italic max-w-lg"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={3}
              >
                Here at EXL Education, we make Chemistry, Physics and
                Mathematics easier to grasp while providing an enjoyable
                experience that builds their passion for these subjects!
              </motion.p>

              {/* <motion.div
                className="flex space-x-12"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={4}
              >
                <div>
                  <div className="text-3xl font-bold text-gray-900">2,500+</div>
                  <div className="text-sm text-gray-600">students helped</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">99.05</div>
                  <div className="text-sm text-gray-600">median ATAR</div>
                </div>
              </motion.div> */}

              <motion.div
                className="flex space-x-4 pt-4"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={5}
              >
                <button
                  onClick={NavigateAbout}
                  className="bg-[#002F67] text-white px-8 py-3 rounded-lg hover:scale-105 active:scale-95 transition"
                >
                  Learn more about us
                </button>
                <button
                  onClick={NavigateNext}
                  className="text-blue-600 flex items-center space-x-2 hover:translate-x-1 transition"
                >
                  <span>Our difference</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            </div>

            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <button
          onClick={scrollToNextSection}
          className="flex flex-col items-center space-y-2 text-gray-600 hover:text-blue-600 group"
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
