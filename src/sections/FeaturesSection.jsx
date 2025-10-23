import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Users, Award, Zap } from "lucide-react";

import { useNavigate } from "react-router-dom";

const Features = () => {
  const steps = [
    {
      number: "1",
      icon: BookOpen,
      title: "Tailored Booklets",
      description:
        "Get started quickly with an easy signup and personalized setup experience.",
    },
    {
      number: "2",
      icon: Users,
      title: "Small Class Sizes",
      description:
        "Engage with peers, mentors, and experts who are ready to help at every step.",
    },
    {
      number: "3",
      icon: Award,
      title: "Recognition & Rewards",
      description:
        "Celebrate milestones and achievements with badges, certificates, and more.",
    },
    {
      number: "4",
      icon: Zap,
      title: "Seamless Progress",
      description:
        "Track growth effortlessly with real-time updates and transparent reporting.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const stepVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const ctaVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.6,
        ease: "easeOut",
      },
    },
  };

  const navigate = useNavigate();

  const handleCourseNavigation = (link) => {
    navigate(link);
  };

  return (
    <section id="feature" className="relative overflow-hidden py-10">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg
          className="absolute top-0 left-0 w-1/3 -z-10"
          viewBox="0 0 400 300"
          fill="none"
        >
          <path d="M0,100 C100,0 300,0 400,100 L400,0 L0,0 Z" fill="#DBEAFE" />
        </svg>
        <div className="absolute bottom-0 right-0 w-50 h-50 bg-[#704471]/60 rounded-full opacity-90 z-[-1]" />
        <div className="absolute top-1/4 right-0 w-28 h-28 rounded-full bg-blue-300 opacity-60 z-[-1] [mask-image:repeating-linear-gradient(45deg,_#000_0px,_#000_2px,_transparent_2px,_transparent_4px)]" />
        <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-[#d89fbf] opacity-60 z-[-1] [mask-image:repeating-linear-gradient(135deg,_#000_0px,_#000_2px,_transparent_2px,_transparent_4px)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 ">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Steps */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-6 group"
                variants={stepVariants}
              >
                {/* Step Number */}
                <motion.div
                  className="flex-shrink-0 w-12 h-12 bg-white rounded-full border-2 border-blue-100 flex items-center justify-center shadow-sm"
                  whileHover={{ scale: 1.1, borderColor: "rgb(59, 130, 246)" }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-blue-600 font-bold text-lg">
                    {step.number}
                  </span>
                </motion.div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <div className="flex items-center gap-4 mb-3">
                    <motion.div
                      className="w-10 h-10 bg-[#002F67] rounded-lg flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <step.icon className="w-5 h-5 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-600">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right side - CTA */}
          <motion.div
            className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 relative overflow-hidden"
            variants={ctaVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-10 transform translate-x-16 -translate-y-16"></div>

            <div className="relative z-10">
              <motion.h2
                className="text-4xl lg:text-5xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-[#002F67]" style={{ fontWeight: 900 }}>
                  Experience our difference.
                </span>
                <br />
                <span className="text-gray-600">Try us for free!</span>
              </motion.h2>

              <motion.p
                className="text-gray-600 text-lg mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Start your learning journey with no commitment. Experience our
                premium courses and decide if we're the right fit for you.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <motion.button
                  onClick={() => handleCourseNavigation("/contact")}
                  className="border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-blue-300 hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{
                    scale: 1.05,
                    borderColor: "rgb(147, 197, 253)",
                    color: "rgb(37, 99, 235)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>

              {/* Trust indicator */}
              <motion.div
                className="mt-8 pt-6 border-t border-gray-100"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-sm text-gray-500 text-center">
                  ✨ No credit card required • Cancel anytime • Trusted by local
                  families
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
