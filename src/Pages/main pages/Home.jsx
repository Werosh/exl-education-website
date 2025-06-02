import React, { useState, useEffect } from "react";
import {
  BookOpen,
  Zap,
  Users,
  TrendingUp,
  Clock,
  Target,
  Award,
  Globe,
  Sparkles,
  ChevronRight,
  Play,
  Star,
  CheckCircle,
  ArrowRight,
  Brain,
  Shield,
  Rocket,
  GraduationCap,
  MessageSquare,
  Video,
  BarChart3,
} from "lucide-react";

import HeroSection from "../../sections/Hero";
import StatsSection from "../../sections/StatsSection";
import Features from "../../sections/FeaturesSection";
import Subjects from "../../sections/SubjectsSection";
import Testimonials from "../../sections/TestimonialsSection";

// Mock Framer Motion components for animation
const motion = {
  div: ({
    children,
    initial,
    animate,
    transition,
    whileHover,
    whileInView,
    ...props
  }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => setIsVisible(true), 100);
      return () => clearTimeout(timer);
    }, []);

    const getTransform = () => {
      if (!isVisible && initial) {
        if (initial.y) return `translateY(${initial.y}px)`;
        if (initial.x) return `translateX(${initial.x}px)`;
        if (initial.scale) return `scale(${initial.scale})`;
      }
      if (isHovered && whileHover) {
        if (whileHover.scale) return `scale(${whileHover.scale})`;
        if (whileHover.y) return `translateY(${whileHover.y}px)`;
      }
      return "none";
    };

    return (
      <div
        {...props}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          ...props.style,
          transform: getTransform(),
          opacity:
            !isVisible && initial?.opacity !== undefined ? initial.opacity : 1,
          transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {children}
      </div>
    );
  },
  h1: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
  p: ({ children, ...props }) => <p {...props}>{children}</p>,
  span: ({ children, ...props }) => <span {...props}>{children}</span>,
  button: ({ children, whileHover, whileTap, ...props }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isPressed, setIsPressed] = useState(false);

    return (
      <button
        {...props}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        style={{
          ...props.style,
          transform:
            isPressed && whileTap
              ? `scale(${whileTap.scale})`
              : isHovered && whileHover
              ? `scale(${whileHover.scale})`
              : "scale(1)",
          transition: "all 0.2s ease",
        }}
      >
        {children}
      </button>
    );
  },
};

const AnimatedLandingPage = () => {
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 2000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden relative">
      {/* Animated Background Elements */}

      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Features Section */}

      <Features />

      {/* Subjects Section */}
      <Subjects />

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/10 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white/80 border border-white/20 mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <Globe className="w-5 h-5 mr-2" />
              <span className="font-semibold">
                Join students from 150+ countries
              </span>
            </motion.div>

            <h2 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Ready to{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Excel?
              </span>
            </h2>

            <p className="text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Start your journey to academic excellence today. Join thousands of
              successful students who chose EXL Education.
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.button
                className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-12 py-6 rounded-2xl font-black text-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <Rocket className="mr-3 w-6 h-6" />
                Get Started Free
                <ChevronRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </motion.button>

              <motion.button
                className="group border-2 border-white/30 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageSquare className="mr-3 w-6 h-6" />
                Talk to Expert
              </motion.button>
            </motion.div>

            <motion.div
              className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {[
                { icon: Shield, text: "Money-back guarantee" },
                { icon: Clock, text: "24/7 support" },
                { icon: Award, text: "Certified tutors" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-3 border border-white/20">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-blue-100 font-medium">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-xl opacity-20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-20 right-10 w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl shadow-lg opacity-30"
          animate={{
            y: [0, 15, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </section>
    </div>
  );
};

export default AnimatedLandingPage;
