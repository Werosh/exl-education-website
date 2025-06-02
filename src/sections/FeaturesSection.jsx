import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Users,
  Award,
  Zap,
  Globe,
  Target,
  Lightbulb,
  TrendingUp,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Interactive Learning",
      description:
        "Engage with dynamic content, quizzes, and hands-on exercises that make learning memorable and fun.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description:
        "Learn from industry professionals and certified educators with years of real-world experience.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Award,
      title: "Certified Programs",
      description:
        "Earn recognized certifications that boost your career prospects and validate your skills.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Zap,
      title: "Fast-Track Learning",
      description:
        "Accelerated courses designed to get you job-ready in the shortest time possible.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Globe,
      title: "Global Community",
      description:
        "Connect with learners worldwide and build a network that supports your growth.",
      color: "from-teal-500 to-cyan-500",
    },
    {
      icon: Target,
      title: "Personalized Path",
      description:
        "AI-powered recommendations create a learning journey tailored to your goals and pace.",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Lightbulb,
      title: "Innovation Hub",
      description:
        "Access cutting-edge tools and technologies that prepare you for tomorrow's challenges.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description:
        "Track your progress and unlock opportunities with our comprehensive career development tools.",
      color: "from-emerald-500 to-teal-500",
    },
  ];

  // Container animation variants
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

  // Individual card animation variants
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  // Header animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Floating animation for icons
  const floatingVariants = {
    animate: {
      y: [-2, 2, -2],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="features"
      className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-5xl lg:text-6xl font-black mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Why Choose{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              EXL Education?
            </span>
          </motion.h2>

          <motion.p
            className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Experience the future of education with our cutting-edge platform
            designed for modern learners
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 relative overflow-hidden cursor-pointer"
              variants={cardVariants}
              whileHover={{
                y: -15,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Background Gradient Overlay */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />

              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 rounded-3xl"
                initial={{ background: "transparent" }}
                whileHover={{
                  background: `linear-gradient(45deg, transparent 40%, rgba(59, 130, 246, 0.1) 50%, transparent 60%)`,
                  backgroundSize: "200% 200%",
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{ duration: 0.6 }}
              />

              {/* Icon Container */}
              <motion.div
                className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 relative z-10`}
                variants={floatingVariants}
                animate="animate"
                whileHover={{
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.4 },
                }}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </motion.div>

              {/* Content */}
              <motion.h3
                className="text-2xl font-bold text-gray-900 mb-6 relative z-10"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                {feature.title}
              </motion.h3>

              <motion.p
                className="text-gray-600 leading-relaxed text-lg relative z-10"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1 }}
              >
                {feature.description}
              </motion.p>

              {/* Hover Arrow */}
              <motion.div
                className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: -10 }}
                whileHover={{
                  x: 0,
                  scale: 1.2,
                  transition: { duration: 0.2 },
                }}
              >
                <ArrowRight className="w-6 h-6 text-blue-600" />
              </motion.div>

              {/* Particle Effect on Hover */}
              <motion.div
                className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100"
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
