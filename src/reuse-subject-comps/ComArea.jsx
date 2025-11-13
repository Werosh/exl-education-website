import React, { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Video, Users, CheckCircle } from "lucide-react";

const HSCMilestones = () => {
  const [activeStep, setActiveStep] = useState(0);

  const milestones = [
    {
      id: 1,
      step: "Step 01",
      title: "Access Learning Materials",
      description:
        "Download comprehensive study guides and lesson booklets aligned with HSC curriculum standards.",
      icon: BookOpen,
      features: [
        "Topic-wise breakdown",
        "Practice questions included",
        "Updated syllabus content",
      ],
    },
    {
      id: 2,
      step: "Step 02",
      title: "Watch Video Tutorials",
      description:
        "Learn through detailed video explanations with solved examples and concept clarity sessions.",
      icon: Video,
      features: [
        "Expert teacher guidance",
        "Step-by-step solutions",
        "24/7 access to content",
      ],
    },
    {
      id: 3,
      step: "Step 03",
      title: "Join Study Community",
      description:
        "Connect with peers, discuss doubts, and participate in group study sessions for better learning.",
      icon: Users,
      features: [
        "Peer discussion forums",
        "Doubt clearing sessions",
        "Collaborative learning",
      ],
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-6">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-block px-4 py-2 bg-black text-white text-xs font-bold tracking-widest mb-4">
          YOUR LEARNING JOURNEY
        </div>
        <h2 className="text-4xl font-bold text-black mb-3">
          Three Steps to HSC Success
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Follow our structured approach to master your HSC subjects effectively
        </p>
      </div>

      {/* Timeline Connector */}
      <div className="relative mb-8">
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2" />
        <div className="relative flex justify-between">
          {milestones.map((milestone, index) => (
            <button
              key={milestone.id}
              onClick={() => setActiveStep(index)}
              className="relative z-10 group"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`w-12 h-12 rounded-full border-4 flex items-center justify-center transition-all ${
                  activeStep === index
                    ? "bg-white border-black"
                    : activeStep > index
                    ? "border-black"
                    : "bg-white border-gray-300"
                }`}
                style={{
                  backgroundColor: activeStep > index ? "#002f67" : undefined,
                }}
              >
                {activeStep > index ? (
                  <CheckCircle className="w-6 h-6 text-white" />
                ) : (
                  <span
                    className={`text-sm font-bold ${
                      activeStep === index ? "text-black" : "text-gray-400"
                    }`}
                  >
                    {milestone.id}
                  </span>
                )}
              </motion.div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span
                  className={`text-xs font-semibold ${
                    activeStep === index ? "text-black" : "text-gray-400"
                  }`}
                >
                  {milestone.step}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Content Card */}
      <motion.div
        key={activeStep}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mt-16 bg-white border-2 border-black p-8"
      >
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3">
              <div
                className="w-12 h-12 flex items-center justify-center"
                style={{ backgroundColor: "#002f67" }}
              >
                {React.createElement(milestones[activeStep].icon, {
                  className: "w-6 h-6 text-white",
                  strokeWidth: 2,
                })}
              </div>
              <span className="text-sm font-bold tracking-wider text-gray-500">
                {milestones[activeStep].step}
              </span>
            </div>

            <h3 className="text-3xl font-bold text-black leading-tight">
              {milestones[activeStep].title}
            </h3>

            <p className="text-gray-600 leading-relaxed">
              {milestones[activeStep].description}
            </p>

            {/* <button
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-semibold hover:bg-gray-800 transition-colors"
              style={{ backgroundColor: "#002f67" }}
            >
              Get Started
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </button> */}
          </div>

          {/* Right Content - Features */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold tracking-wider text-gray-500 mb-4">
              KEY FEATURES
            </h4>
            {milestones[activeStep].features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 p-4 border-l-4 border-black bg-gray-50"
              >
                <CheckCircle className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 font-medium">{feature}</span>
              </motion.div>
            ))}

            {/* Progress Indicator */}
            <div className="pt-6 space-y-2">
              <div className="flex justify-between text-xs font-semibold text-gray-500">
                <span>PROGRESS</span>
                <span>
                  {Math.round(((activeStep + 1) / milestones.length) * 100)}%
                </span>
              </div>
              <div className="h-2 bg-gray-200 overflow-hidden">
                <motion.div
                  className="h-full bg-black"
                  initial={{ width: 0 }}
                  animate={{
                    width: `${((activeStep + 1) / milestones.length) * 100}%`,
                  }}
                  transition={{ duration: 0.5 }}
                  style={{ backgroundColor: "#002f67" }}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
          disabled={activeStep === 0}
          className={`px-6 py-2 border-2 border-black font-semibold transition-all ${
            activeStep === 0
              ? "opacity-30 cursor-not-allowed"
              : "hover:bg-black hover:text-white"
          }`}
        >
          ← Previous
        </button>
        <div className="text-sm text-gray-500 font-semibold">
          {activeStep + 1} of {milestones.length}
        </div>
        <button
          onClick={() =>
            setActiveStep(Math.min(milestones.length - 1, activeStep + 1))
          }
          disabled={activeStep === milestones.length - 1}
          className={`px-6 py-2 border-2 border-black font-semibold transition-all ${
            activeStep === milestones.length - 1
              ? "opacity-30 cursor-not-allowed"
              : "hover:bg-black hover:text-white"
          }`}
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default HSCMilestones;
