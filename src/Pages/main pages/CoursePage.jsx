import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import { Search, ChevronDown, ExternalLink, ArrowRight } from "lucide-react";

import CourseImg1 from "../../images/course/cimg1.jpg";
import CourseImg2 from "../../images/course/cimg2.jpg";

const MotionDiv = ({ children, delay = 0, className = "", ...props }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

// Container animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const courseRoutes = {
  "7-maths": "/courses/junior-maths",
  "8-maths": "/courses/junior-maths",
  "9-maths": "/courses/junior-maths",
  "10-maths": "/courses/junior-maths",
  "11-adv-maths": "/courses/year-11-adv-maths",
  "11-ext-maths": "/courses/year-11-ext-maths",
  "12-adv-maths": "/courses/year-12-adv-maths",
  "12-ext-maths": "/courses/year-12-ext1-maths",
  "11-chem": "/courses/year-11-chem",
  "12-chem": "/courses/year-12-chem",
  "11-physics": "/courses/year-11-physics",
  "12-physics": "/courses/year-12-physics",
};

const CoursePage = () => {
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const navigate = useNavigate();

  const handleFindCourse = () => {
    const key = `${selectedYear}-${selectedSubject}`;
    const path = courseRoutes[key];

    if (path) {
      navigate(path);
    } else {
      alert("Course not available");
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add your form submission logic here
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #004080 0%, #003366 50%, #002F67 100%)",
        }}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="relative mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center p-8 md:p-20">
            {/* Left Side - Content */}
            <motion.div className="space-y-6 md:space-y-8" variants={itemVariants}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl mt-4 md:mt-10 font-bold text-white leading-tight">
                Best Tutoring in Castle Hill
              </h1>

              <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-lg">
                Find subject experts you can trust. Get ahead of school and
                create a foundation you can build upon with confidence.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8">
                <button className="bg-[#064491] border hover:bg-white text-white hover:text-[#002F67] hover:border-black hover:border-2 px-6 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-300 w-full sm:w-auto">
                  Enrol now
                </button>
                <button className="border-2 border-white text-white px-6 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base font-semibold hover:border-black hover:border-2 hover:bg-white hover:text-[#002F67] transition-all duration-300 w-full sm:w-auto">
                  Book your free trial
                </button>
              </div>

              {/* Course Finder */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6">
                <div className="flex items-center gap-4 mb-3 md:mb-4">
                  <span className="text-white font-semibold text-sm md:text-base">
                    Find a course
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                  <div className="relative">
                    <span className="absolute -top-2 left-4 bg-[#002F67] text-white text-xs px-2 py-1 rounded">
                      1
                    </span>
                    <select
                      className="w-full bg-white rounded-lg px-4 py-3 pr-10 appearance-none cursor-pointer border border-gray-200"
                      value={selectedYear}
                      onChange={(e) => {
                        const year = e.target.value;
                        setSelectedYear(year);
                        // Auto-fill Mathematics for years 7-10
                        if (["7", "8", "9", "10"].includes(year)) {
                          setSelectedSubject("maths");
                        } else if (["11", "12"].includes(year)) {
                          // Clear subject when switching to Year 11/12
                          setSelectedSubject("");
                        }
                      }}
                    >
                      <option value="">Year</option>
                      <option value="7">Year 7</option>
                      <option value="8">Year 8</option>
                      <option value="9">Year 9</option>
                      <option value="10">Year 10</option>
                      <option value="11">Year 11</option>
                      <option value="12">Year 12</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4 pointer-events-none" />
                  </div>

                  <div className="relative">
                    <span className="absolute -top-2 left-4 bg-[#002F67] text-white text-xs px-2 py-1 rounded">
                      2
                    </span>
                    <select
                      className={`w-full bg-white rounded-lg px-4 py-3 pr-10 appearance-none border border-gray-200 whitespace-nowrap ${
                        ["7", "8", "9", "10"].includes(selectedYear)
                          ? "cursor-not-allowed bg-gray-50 text-gray-600"
                          : "cursor-pointer"
                      }`}
                      value={selectedSubject}
                      onChange={(e) => setSelectedSubject(e.target.value)}
                      disabled={["7", "8", "9", "10"].includes(selectedYear)}
                    >
                      <option value="">Subject</option>
                      {["7", "8", "9", "10"].includes(selectedYear) ? (
                        <option value="maths">Mathematics</option>
                      ) : ["11", "12"].includes(selectedYear) ? (
                        <>
                          <option value="adv-maths">
                            Mathematics Advanced
                          </option>
                          <option value="ext-maths">Mathematics Ext 1</option>
                          <option value="chem">Chemistry</option>
                          <option value="physics">Physics</option>
                        </>
                      ) : (
                        <>
                          <option value="maths">Mathematics</option>
                          <option value="adv-maths">
                            Mathematics Advanced
                          </option>
                          <option value="ext-maths">Mathematics Ext 1</option>
                          <option value="chem">Chemistry</option>
                          <option value="physics">Physics</option>
                        </>
                      )}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4 pointer-events-none" />
                  </div>

                  <button
                    onClick={handleFindCourse}
                    className="bg-white text-[#002F67] px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                  >
                    <Search className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Course Image */}
            <motion.div className="relative hidden lg:block" variants={itemVariants}>
              <div className="relative w-[500px] ml-[200px] mt-[80px] h-auto rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={CourseImg1}
                  alt="Course learning"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Coming Soon Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-10 mt-12 md:mt-20">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Content and Form */}
          <MotionDiv delay={300} className="space-y-6 md:space-y-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 leading-tight">
              Our Year 11 Biology Course is coming soon
            </h2>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Our subject expert Tishaan is bringing EXL biology to life.
              Lessons will be 2 hours with detailed booklets with theory,
              practice questions and homework. Leave us your name and email and
              we'll let you know when classes begin!
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-3 md:space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002F67] focus:border-transparent transition-all text-sm md:text-base"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-2 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002F67] focus:border-transparent transition-all text-sm md:text-base"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#002F67] text-white px-6 md:px-8 py-2 md:py-3 rounded-lg text-sm md:text-base font-semibold hover:bg-[#001840] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span>Submit</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </form>
          </MotionDiv>

          {/* Right Side - Image */}
          <MotionDiv delay={500} className="relative hidden lg:block">
            <div className="relative w-[320px] mb-10 ml-[100px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={CourseImg2}
                alt="Year 11 Biology Course"
                className="w-full h-full object-cover"
              />
            </div>
          </MotionDiv>
        </div>
      </div>

      {/* CTA Section */}
      <motion.section
        className="py-12 md:py-20 px-4 md:px-6 bg-[#002F67] text-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto text-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6">
              Ready to Excel in Your HSC?
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-blue-100 mb-6 md:mb-8 max-w-3xl mx-auto">
              Join our community of high-achieving students and experience the
              difference that expert guidance and comprehensive support can make
              in your academic journey.
            </p>
            <a href="/contact">
              <motion.button
                className="bg-white text-blue-900 px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-blue-50 transition-colors duration-300 inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Journey
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </motion.button>
            </a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default CoursePage;
