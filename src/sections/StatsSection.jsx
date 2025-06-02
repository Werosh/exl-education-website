import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Users,
  BookOpen,
  Award,
  TrendingUp,
  Star,
  GraduationCap,
  Target,
  Zap,
} from "lucide-react";

const StatsSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [animatedNumbers, setAnimatedNumbers] = useState({});
  const { scrollY } = useScroll();

  // Parallax effects
  const yBackground = useTransform(scrollY, [0, 1000], [0, -100]);
  const yContent = useTransform(scrollY, [0, 1000], [0, 50]);
  const opacity = useTransform(scrollY, [200, 600], [0, 1]);
  const scale = useTransform(scrollY, [200, 600], [0.8, 1]);

  const stats = [
    {
      icon: Users,
      number: "50K+",
      label: "Active Students",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: BookOpen,
      number: "1,200+",
      label: "Course Modules",
      color: "from-emerald-400 to-emerald-600",
    },
    {
      icon: Award,
      number: "98%",
      label: "Success Rate",
      color: "from-amber-400 to-amber-600",
    },
    {
      icon: TrendingUp,
      number: "4.9★",
      label: "User Rating",
      color: "from-purple-400 to-purple-600",
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
      }, 500);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Number animation function
  const animateNumber = (targetNumber, index) => {
    const numericValue = parseInt(targetNumber.replace(/[^\d]/g, ""));
    const suffix = targetNumber.replace(/[\d]/g, "");
    let current = 0;
    const increment = Math.ceil(numericValue / 50);

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
    }, 30);
  };

  // Loading Component
  const LoadingOverlay = () => (
    <motion.div
      className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center">
        <motion.div
          className="flex space-x-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {[Users, BookOpen, Award, TrendingUp].map((Icon, index) => (
            <motion.div
              key={index}
              className="w-16 h-16 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center"
              animate={{
                scale: [1, 1.1, 1],
                rotateY: [0, 180, 360],
              }}
              transition={{
                duration: 2,
                delay: index * 0.2,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            >
              <Icon className="w-8 h-8 text-white/80" />
            </motion.div>
          ))}
        </motion.div>

        <motion.h3
          className="text-2xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Loading Statistics
        </motion.h3>

        <motion.div
          className="w-64 h-1 bg-white/20 rounded-full overflow-hidden mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );

  // Curved SVG Background Component
  const CurvedBackground = () => (
    <motion.div
      className="absolute inset-0 overflow-hidden"
      style={{ y: yBackground }}
    >
      {/* Main curved background */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="50%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#000000" />
          </linearGradient>
          <linearGradient
            id="accentGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
            <stop offset="50%" stopColor="rgba(139, 92, 246, 0.05)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>

        {/* Base curved shape */}
        <path
          d="M0,0 L1440,0 L1440,600 C1200,680 800,720 600,650 C400,580 200,620 0,700 Z"
          fill="url(#bgGradient)"
        />

        {/* Accent curved overlay */}
        <motion.path
          d="M0,100 C360,150 720,80 1080,120 C1200,140 1320,160 1440,140 L1440,500 C1200,580 800,620 600,550 C400,480 200,520 0,600 Z"
          fill="url(#accentGradient)"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Animated wave pattern */}
        <motion.path
          d="M0,200 C360,250 720,180 1080,220 C1200,240 1320,260 1440,240 L1440,400 C1200,480 800,520 600,450 C400,380 200,420 0,500 Z"
          fill="rgba(59, 130, 246, 0.03)"
          animate={{
            d: [
              "M0,200 C360,250 720,180 1080,220 C1200,240 1320,260 1440,240 L1440,400 C1200,480 800,520 600,450 C400,380 200,420 0,500 Z",
              "M0,220 C360,180 720,250 1080,200 C1200,220 1320,240 1440,260 L1440,420 C1200,500 800,540 600,470 C400,400 200,440 0,520 Z",
              "M0,200 C360,250 720,180 1080,220 C1200,240 1320,260 1440,240 L1440,400 C1200,480 800,520 600,450 C400,380 200,420 0,500 Z",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>

      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05)_0%,transparent_50%)]" />
    </motion.div>
  );

  return (
    <section className="relative py-24 overflow-hidden">
      <AnimatePresence>{isLoading && <LoadingOverlay />}</AnimatePresence>

      <CurvedBackground />

      <motion.div
        className="max-w-7xl mx-auto px-6 relative z-10"
        style={{ y: yContent, opacity, scale }}
      >
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: !isLoading ? 0.2 : 2 }}
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: !isLoading ? 0.4 : 2.2 }}
          >
            <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
              Trusted by Thousands
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: !isLoading ? 0.6 : 2.4 }}
          >
            Join our community of learners achieving extraordinary results
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group relative"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: (!isLoading ? 0.8 : 2.8) + index * 0.15,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ y: -12, scale: 1.05 }}
            >
              {/* Icon container with enhanced effects */}
              <div className="relative mb-8">
                <motion.div
                  className="w-24 h-24 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 mx-auto flex items-center justify-center group-hover:border-blue-400/60 transition-all duration-500 shadow-2xl relative overflow-hidden"
                  whileHover={{
                    boxShadow: "0 25px 50px rgba(59, 130, 246, 0.3)",
                    borderColor: "rgba(59, 130, 246, 0.6)",
                  }}
                >
                  {/* Animated background gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                    initial={{ scale: 0, rotate: 45 }}
                    whileHover={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Rotating border effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: `conic-gradient(from 0deg, transparent, rgba(59, 130, 246, 0.3), transparent)`,
                    }}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />

                  <motion.div
                    whileHover={{
                      rotate: [0, -10, 10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <stat.icon className="w-12 h-12 text-white/90 relative z-10 group-hover:text-blue-300 transition-colors duration-300" />
                  </motion.div>
                </motion.div>

                {/* Enhanced glow effect */}
                <motion.div
                  className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>

              {/* Animated number display */}
              <motion.div
                className="text-5xl font-bold text-white mb-3 tracking-tight relative"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: (!isLoading ? 1.2 : 3.2) + index * 0.15,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{ scale: 1.1 }}
              >
                <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent relative z-10">
                  {animatedNumbers[index] || stat.number}
                </span>

                {/* Number glow effect */}
                <motion.div
                  className="absolute inset-0 text-5xl font-bold text-blue-400/30 blur-sm"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {animatedNumbers[index] || stat.number}
                </motion.div>
              </motion.div>

              {/* Label with enhanced styling */}
              <motion.div
                className="text-gray-400 font-medium text-lg tracking-wide uppercase relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: (!isLoading ? 1.4 : 3.4) + index * 0.15,
                }}
              >
                {stat.label}
              </motion.div>

              {/* Animated divider line */}
              <motion.div
                className="w-12 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 relative"
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: 48, opacity: 0 }}
                whileHover={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: (!isLoading ? 1.6 : 3.6) + index * 0.15,
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                  animate={{
                    scaleX: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5,
                  }}
                />
              </motion.div>

              {/* Floating particles around card */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                    }}
                    animate={{
                      y: [0, -10, 0],
                      x: [0, Math.random() * 10 - 5, 0],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2 + Math.random(),
                      repeat: Infinity,
                      delay: Math.random() * 2,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: !isLoading ? 2 : 4 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 text-gray-400"
            whileHover={{ scale: 1.05 }}
          >
            <Star className="w-5 h-5 text-amber-400" />
            <span className="text-sm font-medium">
              Rated #1 Learning Platform 2024
            </span>
            <Star className="w-5 h-5 text-amber-400" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default StatsSection;
