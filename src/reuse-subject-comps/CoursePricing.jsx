import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Users,
  Clock,
  BookOpen,
  Award,
  MessageCircle,
  HelpCircle,
  FileText,
} from "lucide-react";

const CoursePricing = ({
  year,
  showYear10Note = false,
  showYearSelector = false,
}) => {
  const [selectedYear, setSelectedYear] = useState(year || "Year 7");
  const pricingData = {
    "Year 7": {
      price: 61,
      subjects: ["Math"],
      terms: "4 EXL Terms in Year 7",
      weeklyHours: "1.5 hour",
      specialFeature: null,
      multiSubjectDiscount: false,
    },
    "Year 8": {
      price: 61,
      subjects: ["Math"],
      terms: "4 EXL Terms in Year 8",
      weeklyHours: "1.5 hour",
      specialFeature: null,
      multiSubjectDiscount: false,
    },
    "Year 9": {
      price: 61,
      subjects: ["Math"],
      terms: "4 EXL Terms in Year 9",
      weeklyHours: "1.5 hour",
      specialFeature: null,
      multiSubjectDiscount: false,
    },
    "Year 10": {
      price: 93,
      subjects: ["Mathematics"],
      terms: "4 EXL Terms in Year 10",
      weeklyHours: "2 hour",
      specialFeature: null,
      multiSubjectDiscount: false,
    },
    "Year 11": {
      price: 105,
      subjects: ["Chemistry", "Physics", "Math Adv", "Math Ext 1"],
      terms: "3 EXL Terms in Year 11",
      weeklyHours: "2 hour",
      specialFeature: "Join or set up classes tailored to your school schedule",
      multiSubjectDiscount: true,
    },
    "Year 12": {
      price: 130,
      subjects: ["Chemistry", "Physics", "Math Adv", "Math Ext 1"],
      terms: "3 EXL Terms in Year 12",
      weeklyHours: "2.5 hour",
      specialFeature: "Separate Exam Program for HSC/Trial Preparation",
      multiSubjectDiscount: true,
    },
  };

  const courseFeatures = [
    { icon: <Clock className="w-4 h-4" />, text: "weekly lesson" },
    { icon: <BookOpen className="w-4 h-4" />, text: "10 lessons per term" },
    {
      icon: <Users className="w-4 h-4" />,
      text: "Join classes tailored to your skill level",
    },
    {
      icon: <FileText className="w-4 h-4" />,
      text: "Quality Resource Booklets for each topic",
    },
    {
      icon: <Award className="w-4 h-4" />,
      text: "Revision Exams to break down pain point",
    },
  ];

  const additionalServices = [
    {
      icon: <HelpCircle className="w-4 h-4" />,
      text: "Access to additional questions and resources",
    },
    {
      icon: <MessageCircle className="w-4 h-4" />,
      text: "24/7 support through subject channels",
    },
    {
      icon: <Users className="w-4 h-4" />,
      text: "Teacher Support outside the classroom",
    },
    {
      icon: <Check className="w-4 h-4" />,
      text: "Access to marking for external questions",
    },
  ];

  // Use selectedYear if year selector is enabled, otherwise use the year prop
  const activeYear = showYearSelector ? selectedYear : year;

  // For years 7-10 maths, use $61 as the displayed price when showYear10Note is true or when selector is enabled
  const displayPrice =
    showYear10Note || showYearSelector
      ? 61
      : pricingData[activeYear]?.price || 61;
  const currentData = pricingData[activeYear] || pricingData["Year 7"];

  // Years available for selector (only 7-10)
  const availableYears = ["Year 7", "Year 8", "Year 9", "Year 10"];

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
      },
    },
    hover: {
      y: -5,
      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17,
      },
    },
  };

  return (
    <div className="py-8 md:py-16 px-4 md:px-6">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Year Selector - Only shown when showYearSelector is true */}
        {showYearSelector && (
          <motion.div
            className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-16"
            variants={itemVariants}
          >
            {availableYears.map((yr) => (
              <motion.button
                key={yr}
                onClick={() => setSelectedYear(yr)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                  selectedYear === yr
                    ? "bg-[#002F67] text-white shadow-lg"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-[#002F67] hover:text-[#002F67]"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {yr}
              </motion.button>
            ))}
          </motion.div>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedYear}
            className="grid lg:grid-cols-2 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {/* Pricing Card */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Card Header with gradient */}
              <div className="bg-[#002f67] p-4 md:p-8 text-gray-100">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 gap-2">
                  <h2 className="text-xl md:text-2xl font-extrabold underline">
                    {activeYear} EXL Lesson
                  </h2>
                  <motion.div
                    className="bg-blue-500/20 px-2 md:px-3 py-1 rounded-full text-sm md:text-xl text-blue-100 font-700"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    Early Bird Pricing
                  </motion.div>
                </div>
                <div className="mb-4 md:mb-6">
                  <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#ffffff]">
                    ${displayPrice}
                  </span>
                  <span className="text-gray-400 ml-2 text-sm md:text-base">
                    per lesson
                  </span>
                </div>
              </div>

              <div className="p-4 md:p-8">
                <div className="mb-6 md:mb-8">
                  <h3 className="font-semibold text-gray-900 mb-3 md:mb-4 text-base md:text-lg">
                    Course Details
                  </h3>
                  <div className="space-y-2 md:space-y-3">
                    <div className="flex items-center text-gray-700 text-sm md:text-base">
                      <BookOpen className="w-4 h-4 md:w-5 md:h-5 text-[#002F67] mr-2 md:mr-3 flex-shrink-0" />
                      <span>{currentData.subjects.join(", ")}</span>
                    </div>
                    <div className="flex items-center text-gray-700 text-sm md:text-base">
                      <Award className="w-4 h-4 md:w-5 md:h-5 text-[#002F67] mr-2 md:mr-3 flex-shrink-0" />
                      <span>{currentData.terms}</span>
                    </div>
                    <div className="flex items-start text-gray-700 text-sm md:text-base">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-[#002F67] mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                      <span>
                        Half-Termly Payment and Alternative Payments Available
                      </span>
                    </div>
                    <div className="flex items-start text-gray-700 text-sm md:text-base">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-[#002F67] mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                      <span>
                        Enrollments in the middle of the term are Pro-Rated
                      </span>
                    </div>
                    <div className="flex items-center text-gray-700 text-sm md:text-base">
                      <Users className="w-4 h-4 md:w-5 md:h-5 text-[#002F67] mr-2 md:mr-3 flex-shrink-0" />
                      <span>Small Class sizes</span>
                    </div>
                    {currentData.specialFeature && (
                      <div className="flex items-start text-gray-700 text-sm md:text-base">
                        <Check className="w-4 h-4 md:w-5 md:h-5 text-[#002F67] mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                        <span>{currentData.specialFeature}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Referral Cashback */}
                <motion.div
                  className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 md:p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center text-sm md:text-base">
                    <span className="text-xl md:text-2xl mr-2">💰</span>
                    $100 Referral Cashback
                  </h4>
                  <p className="text-gray-700 text-xs md:text-sm">
                    Get $100 off your next enrolment or $100 Cashback when you
                    refer a new student to EXL when they enrol.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Features and Services */}
            <div className="space-y-6 md:space-y-8">
              {/* Course Features */}
              <motion.div
                className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 md:p-8"
                variants={cardVariants}
                whileHover="hover"
              >
                <h3 className="text-lg md:text-xl course-time text-gray-700 mb-4 md:mb-6">
                  Course Features
                </h3>
                <div className="space-y-3 md:space-y-4">
                  <motion.div
                    className="flex items-center text-gray-700 text-sm md:text-base"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Clock className="w-4 h-4 md:w-5 md:h-5 text-[#002F67] mr-2 md:mr-3 flex-shrink-0" />
                    <span className="course-time">
                      {currentData.weeklyHours} weekly lesson
                    </span>
                  </motion.div>
                  {courseFeatures.slice(1).map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center text-[#002F67] text-sm md:text-base"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                    >
                      <div className="flex-shrink-0">{feature.icon}</div>
                      <span className="ml-2 md:ml-3 text-gray-700">
                        {feature.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Additional Services */}
              <motion.div
                className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 md:p-8"
                variants={cardVariants}
                whileHover="hover"
              >
                <h3 className="text-lg md:text-xl course-time text-gray-700 mb-4 md:mb-6">
                  Additional Services
                </h3>
                <div className="space-y-3 md:space-y-4">
                  {additionalServices.map((service, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center text-[#002F67] text-sm md:text-base"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.1 + index * 0.1 }}
                    >
                      <div className="flex-shrink-0">{service.icon}</div>
                      <span className="ml-2 md:ml-3 text-gray-700">
                        {service.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default CoursePricing;
