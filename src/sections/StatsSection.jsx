import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Users, BookOpen, Award, TrendingUp } from "lucide-react";

const StatsSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [animatedNumbers, setAnimatedNumbers] = useState({});
  const { scrollY } = useScroll();

  // Subtle parallax effects
  const yContent = useTransform(scrollY, [0, 500], [0, -20]);
  const opacity = useTransform(scrollY, [100, 300], [0, 1]);

  const stats = [
    {
      icon: Users,
      number: "50K+",
      label: "Active Students",
    },
    {
      icon: BookOpen,
      number: "1,200+",
      label: "Course Modules",
    },
    {
      icon: Award,
      number: "98%",
      label: "Success Rate",
    },
    {
      icon: TrendingUp,
      number: "4.9★",
      label: "User Rating",
    },
  ];

  // Loading simulation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Start number animations after loading
      setTimeout(() => {
        stats.forEach((stat, index) => {
          animateNumber(stat.number, index);
        });
      }, 300);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Number animation function
  const animateNumber = (targetNumber, index) => {
    const numericValue = parseInt(targetNumber.replace(/[^\d]/g, ""));
    const suffix = targetNumber.replace(/[\d]/g, "");
    let current = 0;
    const increment = Math.ceil(numericValue / 40);

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        current = numericValue;
        clearInterval(timer);
      }

      setAnimatedNumbers((prev) => ({
        ...prev,
        [index]: current + suffix,
      }));
    }, 25);
  };

  // Minimal Loading Component
  const LoadingOverlay = () => (
    <motion.div
      className="absolute inset-0 bg-white flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center">
        <motion.div
          className="flex space-x-6 mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {[Users, BookOpen, Award, TrendingUp].map((Icon, index) => (
            <motion.div
              key={index}
              className="w-12 h-12 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 1.5,
                delay: index * 0.1,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              <Icon className="w-6 h-6 text-blue-600" />
            </motion.div>
          ))}
        </motion.div>

        <motion.h3
          className="text-lg font-medium text-gray-900 mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Loading Statistics
        </motion.h3>

        <motion.div
          className="w-48 h-0.5 bg-gray-200 rounded-full overflow-hidden mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div
            className="h-full bg-blue-600 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <section className="relative py-20 bg-white">
      <AnimatePresence>{isLoading && <LoadingOverlay />}</AnimatePresence>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.03) 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.02) 0%, transparent 50%)`,
          }}
        />
      </div>

      <motion.div
        className="max-w-6xl mx-auto px-6 relative z-10"
        style={{ y: yContent, opacity }}
      >
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: !isLoading ? 0.1 : 1.2 }}
        >
          <motion.h2
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: !isLoading ? 0.2 : 1.3 }}
          >
            Trusted by Thousands
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: !isLoading ? 0.3 : 1.4 }}
          >
            Join our community of learners achieving extraordinary results
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: (!isLoading ? 0.4 : 1.5) + index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ y: -5 }}
            >
              {/* Minimalist icon container */}
              <div className="relative mb-6">
                <motion.div
                  className="w-16 h-16 rounded-xl bg-blue-50 border border-blue-100 mx-auto flex items-center justify-center group-hover:bg-blue-100 group-hover:border-blue-200 transition-all duration-300"
                  whileHover={{
                    scale: 1.05,
                  }}
                >
                  <motion.div
                    whileHover={{
                      rotate: [0, -5, 5, 0],
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <stat.icon className="w-8 h-8 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Clean number display */}
              <motion.div
                className="text-4xl font-bold text-gray-900 mb-2"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: (!isLoading ? 0.6 : 1.7) + index * 0.1,
                  type: "spring",
                  stiffness: 150,
                }}
                whileHover={{ scale: 1.05 }}
              >
                {animatedNumbers[index] || stat.number}
              </motion.div>

              {/* Simple label */}
              <motion.div
                className="text-gray-600 font-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: (!isLoading ? 0.7 : 1.8) + index * 0.1,
                }}
              >
                {stat.label}
              </motion.div>

              {/* Subtle underline animation */}
              <motion.div
                className="w-8 h-0.5 bg-blue-600 mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: (!isLoading ? 0.8 : 1.9) + index * 0.1,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Clean bottom element */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: !isLoading ? 1.2 : 2.4 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 text-gray-500 text-sm"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
            <span className="font-medium">Rated #1 Learning Platform 2024</span>
            <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default StatsSection;
