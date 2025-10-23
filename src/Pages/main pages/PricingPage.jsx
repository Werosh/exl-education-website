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

import MoneyBack from "../../images/others/money-back.png";

const PricingSection = () => {
  const [selectedYear, setSelectedYear] = useState("Year 7");

  const years = ["Year 12", "Year 11", "Year 10", "Year 9", "Year 8", "Year 7"];

  const pricingData = {
    "Year 7": {
      price: 61,
      subjects: [ "Math"],
      terms: "4 EXL Terms in Year 7",
      weeklyHours: "1.5 hour",
      specialFeature: null,
      multiSubjectDiscount: false,
    },
    "Year 8": {
      price: 61,
      subjects: [ "Math"],
      terms: "4 EXL Terms in Year 8",
      weeklyHours: "1.5 hour",
      specialFeature: null,
      multiSubjectDiscount: false,
    },
    "Year 9": {
      price: 61,
      subjects: [ "Math"],
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

  const currentData = pricingData[selectedYear];

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
    <div className="min-h-screen  py-16 px-4 mt-10">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header with gradient background */}
        <motion.div className="relative mb-16" variants={itemVariants}>
          {/* Gradient wrapper */}
          <div className="rounded-2xl py-12 px-4">
            <h1 className="text-3xl font-bold mb-5 text-center text-[#002F67]">
              EXL Tutoring Pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed items-center text-center">
              At EXL, we keep pricing simple. Our course fees are calculated
              based on your course and the discounts you qualify for your
              academic journey with expert tutoring and comprehensive support
            </p>
          </div>
        </motion.div>

        {/* Money Back Guarantee Section - New Design */}
        <motion.div
          className="mb-16 bg-white rounded-2xl p-8 shadow-lg"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Content Section */}
              <div className="text-left">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span className="text-gray-900">Love us</span>{" "}
                  <span className="text-gray-700">or</span>{" "}
                  <span className="text-gray-900">walk away</span>
                </h2>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  All EXL courses come with our{" "}
                  <span className="font-semibold text-gray-900">
                    First Lesson Money Back Guarantee
                  </span>
                  . Not sure if EXL is right for you? You can try EXL for{" "}
                  <span className="font-bold text-gray-900">FREE</span> with our
                  free trial!
                </p>

                <motion.a
                  href="/free-trail"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button className="bg-[#002f67] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg">
                    Try EXL free
                  </button>
                </motion.a>
              </div>

              {/* Badge Section */}
              <motion.div
                className="flex justify-center"
                whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-80 h-80 rounded-full bg-gray-200 flex items-center justify-center relative">
                  <div className="w-72 h-72 rounded-full bg-gray-100 flex flex-col items-center justify-center relative">
                    {/* First lesson text */}
                    <div className="text-gray-700 text-lg font-medium mb-2">
                      First lesson
                    </div>
                    {/* Money back text */}
                    <div className="text-gray-700 text-lg font-medium mb-4">
                      money back
                    </div>
                    {/* Guarantee bar */}
                    <div className="w-48 h-8 bg-gray-300 rounded-full flex items-center justify-center mb-4">
                      <span className="text-gray-900 font-bold text-sm">
                        GUARANTEE
                      </span>
                    </div>
                    {/* Stars */}
                    <div className="flex space-x-2">
                      <div className="w-5 h-5 bg-white  rounded-full flex items-center justify-center">
                        <span className="text-[#002f67] text-xl">★</span>
                      </div>
                      <div className="w-7 h-7 bg-white  rounded-full flex items-center justify-center">
                        <span className="text-[#002f67] text-3xl">★</span>
                      </div>
                      <div className="w-5 h-5 bg-white  rounded-full flex items-center justify-center">
                        <span className="text-[#002f67] text-xl">★</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Year Selector */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16 mt-8"
          variants={itemVariants}
        >
          {years.map((year) => (
            <motion.button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedYear === year
                  ? "bg-[#002F67] text-white shadow-lg"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-[#002F67] hover:text-[#002F67]"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {year}
            </motion.button>
          ))}
        </motion.div>

        {/* Main Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedYear}
            className="grid lg:grid-cols-2 gap-8 "
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
              <div className="bg-[#002f67] p-8 text-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-extrabold underline">
                    {selectedYear} EXL Lesson
                  </h2>
                  <motion.div
                    className="bg-blue-500/20 px-3 py-1 rounded-full text-xl  text-blue-100 font-700"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    Early Bird Pricing
                  </motion.div>
                </div>
                <div className="mb-6">
                  <span className="text-4xl md:text-5xl font-bold text-[#ffffff]">
                    ${currentData.price}
                  </span>
                  <span className="text-gray-400 ml-2">per lesson</span>
                </div>
              </div>

              <div className="p-8">
                <div className="mb-8">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    Course Details
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-700">
                      <BookOpen className="w-5 h-5 text-[#002F67] mr-3" />
                      <span>{currentData.subjects.join(", ")}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Award className="w-5 h-5 text-[#002F67] mr-3" />
                      <span>{currentData.terms}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Check className="w-5 h-5 text-[#002F67] mr-3" />
                      <span>
                        Half-Termly Payment and Alternative Payments Available
                      </span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Check className="w-5 h-5 text-[#002F67] mr-3" />
                      <span>
                        Enrollments in the middle of the term are Pro-Rated
                      </span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Users className="w-5 h-5 text-[#002F67] mr-3" />
                      <span>Small Class sizes</span>
                    </div>
                    {currentData.specialFeature && (
                      <div className="flex items-start text-gray-700">
                        <Check className="w-5 h-5 text-[#002F67] mr-3 mt-0.5" />
                        <span>{currentData.specialFeature}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Multiple Subject Discount */}
                {currentData.multiSubjectDiscount && (
                  <motion.div
                    className="bg-blue-50 rounded-xl p-6 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h4 className="font-semibold text-blue-900 mb-2">
                      Multiple Subject Discount
                    </h4>
                    <p className="text-blue-900 text-sm">
                      EXL's Multiple Subject Discount applies when sitting
                      multiple subjects at the same time. A discount of{" "}
                      <span className="font-bold">5%</span> is applied to all
                      subject's course fees.
                    </p>
                  </motion.div>
                )}

                {/* Referral Cashback */}
                <motion.div
                  className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="text-2xl mr-2">💰</span>
                    $100 Referral Cashback
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Get $100 off your next enrolment or $100 Cashback when you
                    refer a new student to EXL when they enrol.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Features and Services */}
            <div className="space-y-8">
              {/* Course Features */}
              <motion.div
                className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8"
                variants={cardVariants}
                whileHover="hover"
              >
                <h3 className="text-xl course-time text-gray-700 mb-6">
                  Course Features
                </h3>
                <div className="space-y-4">
                  <motion.div
                    className="flex items-center text-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Clock className="w-5 h-5 text-[#002F67] mr-3 " />
                    <span className="course-time">
                      {currentData.weeklyHours} weekly lesson
                    </span>
                  </motion.div>
                  {courseFeatures.slice(1).map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center text-[#002F67]"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                    >
                      {feature.icon}
                      <span className="ml-3 text-gray-700">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Additional Services */}
              <motion.div
                className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8"
                variants={cardVariants}
                whileHover="hover"
              >
                <h3 className="text-xl  course-time text-gray-700 mb-6">
                  Additional Services
                </h3>
                <div className="space-y-4">
                  {additionalServices.map((service, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center text-[#002F67]"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.1 + index * 0.1 }}
                    >
                      {service.icon}
                      <span className="ml-3 text-gray-700">{service.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.5 }}
        >
          <a href="tel:+0431498913">
            <motion.button
              className="bg-[#002F67] text-white px-12 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Enrol Now for {selectedYear}
            </motion.button>
          </a>
          <p className="text-gray-600 mt-4 text-sm">
            Start your academic excellence journey today with EXL Tutoring
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PricingSection;
