import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Atom,
  Rocket,
  ChevronRight,
  Play,
  Star,
  GraduationCap,
  BarChart3,
  Brain,
  Users,
  Trophy,
  BookOpen,
  Target,
  ArrowRight,
  CheckCircle,
  Zap,
  Clock,
  Award,
  Calculator,
  Microscope,
  Cpu,
  FlaskConical,
} from "lucide-react";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const { scrollY } = useScroll();

  // Parallax transforms
  const yBackground = useTransform(scrollY, [0, 800], [0, -200]);
  const yContent = useTransform(scrollY, [0, 800], [0, -100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.3]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.95]);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Fast loading simulation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <motion.section
        className="relative min-h-screen flex items-center justify-center px-6 py-16 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"
        style={{ opacity, scale }}
      >
        {/* Enhanced Background Elements */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white/80 via-blue-50/60 to-indigo-100/40"
          style={{ y: yBackground }}
        />

        {/* Animated Circuit Pattern for STEM Theme */}
        <motion.div
          className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(90deg,#059669_1px,transparent_1px),linear-gradient(#3b82f6_1px,transparent_1px)] bg-[size:80px_80px]"
          animate={{
            backgroundPosition: ["0px 0px", "80px 80px", "0px 0px"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Dynamic Light Effects */}
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Floating STEM Elements */}
        {[
          { icon: "⚛️", pos: { left: "15%", top: "20%" } },
          { icon: "🧬", pos: { left: "85%", top: "25%" } },
          { icon: "🔬", pos: { left: "10%", top: "70%" } },
          { icon: "🧮", pos: { left: "80%", top: "65%" } },
          { icon: "⚡", pos: { left: "20%", top: "40%" } },
          { icon: "🚀", pos: { left: "75%", top: "45%" } },
          { icon: "💻", pos: { left: "12%", top: "55%" } },
          { icon: "🔭", pos: { left: "88%", top: "80%" } },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl opacity-20"
            style={item.pos}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          >
            {item.icon}
          </motion.div>
        ))}

        <motion.div
          className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10"
          style={{ y: yContent }}
        >
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={!isLoading ? "visible" : "hidden"}
          >
            {/* Enhanced Badge */}
            <motion.div
              className="inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-xl border-2 border-emerald-200/50 rounded-full text-emerald-700 shadow-xl shadow-emerald-100/50"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 12px 40px rgba(16, 185, 129, 0.15)",
                borderColor: "rgba(16, 185, 129, 0.4)",
              }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Atom className="w-5 h-5 mr-3 text-emerald-500" />
              </motion.div>
              <span className="font-semibold text-sm tracking-wide">
                🏆 Leading STEM Education Platform 2024
              </span>
              <motion.div
                className="ml-2 w-2 h-2 bg-green-400 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.div>

            {/* Enhanced Headline */}
            <motion.h1
              className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-slate-900"
              variants={itemVariants}
            >
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="block"
              >
                Master STEM with
              </motion.span>
              <span className="relative block">
                <motion.span
                  className="bg-gradient-to-r from-emerald-600 via-blue-600 to-emerald-800 bg-clip-text text-transparent bg-[length:200%_100%]"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  EXL Education
                </motion.span>
                <motion.div
                  className="absolute bottom-2 left-0 w-full h-3 bg-gradient-to-r from-emerald-200 to-blue-200 -z-10 rounded-lg"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                  style={{ transformOrigin: "left" }}
                />
              </span>
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="block text-slate-700"
              >
                AI-Powered Learning
              </motion.span>
            </motion.h1>

            {/* STEM Feature Highlights */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={itemVariants}
            >
              {[
                { icon: FlaskConical, text: "Virtual Lab Experiments" },
                { icon: Calculator, text: "Math Problem Solver" },
                { icon: Cpu, text: "Coding Bootcamps" },
                { icon: Microscope, text: "3D Science Models" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 text-slate-700"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
                >
                  <motion.div
                    className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <feature.icon className="w-4 h-4 text-emerald-600" />
                  </motion.div>
                  <span className="font-medium text-sm">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 pt-4"
              variants={itemVariants}
            >
              <motion.button
                className="group bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center shadow-2xl shadow-emerald-200/50 relative overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  y: -3,
                  boxShadow: "0 25px 50px rgba(16, 185, 129, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                />
                <Rocket className="mr-3 w-6 h-6" />
                <span>Start Learning STEM</span>
                <motion.div
                  className="ml-3"
                  animate={{ x: [0, 6, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.button>

              <motion.button
                className="group border-3 border-emerald-300 hover:border-emerald-500 text-emerald-700 hover:text-emerald-800 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center hover:bg-emerald-50 backdrop-blur-sm shadow-lg"
                whileHover={{
                  scale: 1.05,
                  y: -3,
                  backgroundColor: "rgba(236, 253, 245, 0.8)",
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.3 }}
              >
                <Play className="mr-3 w-6 h-6" />
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Enhanced Trust Indicators */}
            <motion.div
              className="flex flex-col sm:flex-row sm:items-center gap-8 pt-6"
              variants={itemVariants}
            >
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.div
                      key={i}
                      className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-blue-600 rounded-full border-3 border-white shadow-lg flex items-center justify-center text-white font-bold text-sm"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.7 + i * 0.05,
                        duration: 0.4,
                        type: "spring",
                        stiffness: 300,
                      }}
                      whileHover={{ scale: 1.15, y: -3, zIndex: 10 }}
                    >
                      {i === 1
                        ? "👨‍🔬"
                        : i === 2
                        ? "👩‍💻"
                        : i === 3
                        ? "🧑‍🎓"
                        : i === 4
                        ? "👨‍🏫"
                        : "👩‍🔬"}
                    </motion.div>
                  ))}
                </div>
                <div className="text-slate-600">
                  <div className="font-bold text-lg text-slate-800">25K+</div>
                  <div className="text-sm">STEM Students</div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.9 + i * 0.05,
                        type: "spring",
                        stiffness: 300,
                        duration: 0.3,
                      }}
                    >
                      <Star className="w-6 h-6 text-amber-400 fill-current" />
                    </motion.div>
                  ))}
                </div>
                <div className="text-slate-600 ml-3">
                  <div className="font-bold text-lg text-slate-800">4.8/5</div>
                  <div className="text-sm">Learning Success</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Enhanced STEM Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={!isLoading ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            {/* Main Image Container */}
            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-2xl shadow-emerald-200/30"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* STEM Learning Dashboard Mockup */}
              <motion.div
                className="w-full h-[500px] bg-gradient-to-br from-emerald-50 via-white to-blue-50 flex items-center justify-center border-2 border-emerald-100"
                animate={{
                  background: [
                    "linear-gradient(135deg, #ecfdf5 0%, #ffffff 50%, #eff6ff 100%)",
                    "linear-gradient(135deg, #eff6ff 0%, #f0fdfa 50%, #ecfdf5 100%)",
                    "linear-gradient(135deg, #ecfdf5 0%, #ffffff 50%, #eff6ff 100%)",
                  ],
                }}
                transition={{ duration: 8, repeat: Infinity }}
              >
                <div className="text-center space-y-6">
                  <motion.div
                    className="w-32 h-32 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-3xl mx-auto flex items-center justify-center shadow-xl"
                    animate={{
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Atom className="w-16 h-16 text-white" />
                  </motion.div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-slate-800">
                      EXL STEM Lab
                    </h3>
                    <p className="text-slate-600 max-w-xs mx-auto">
                      Interactive virtual laboratory with AI-powered experiments
                      and real-time concept visualization
                    </p>
                  </div>

                  {/* Mini STEM Icons */}
                  <div className="flex justify-center space-x-4 pt-4">
                    {[FlaskConical, Calculator, Microscope, Cpu].map(
                      (Icon, i) => (
                        <motion.div
                          key={i}
                          className="w-10 h-10 bg-white/80 rounded-xl flex items-center justify-center border border-emerald-200"
                          animate={{
                            y: [0, -5, 0],
                            rotate: [0, 10, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        >
                          <Icon className="w-5 h-5 text-emerald-600" />
                        </motion.div>
                      )
                    )}
                  </div>
                </div>
              </motion.div>

              {/* Overlay Elements */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 via-transparent to-blue-500/5"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 6, repeat: Infinity }}
              />
            </motion.div>

            {/* Floating STEM Stats */}
            <motion.div
              className="absolute -top-6 -left-6 bg-white/95 backdrop-blur-xl rounded-2xl p-4 border border-emerald-200/50 shadow-xl"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.4 }}
              whileHover={{ scale: 1.05, y: -3 }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-800">94%</div>
                  <div className="text-xs text-slate-600">
                    STEM Success Rate
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-xl rounded-2xl p-4 border border-emerald-200/50 shadow-xl"
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, duration: 0.4 }}
              whileHover={{ scale: 1.05, y: -3 }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-800">25K+</div>
                  <div className="text-xs text-slate-600">STEM Learners</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute top-1/2 -right-8 bg-white/95 backdrop-blur-xl rounded-2xl p-4 border border-emerald-200/50 shadow-xl"
              initial={{ opacity: 0, scale: 0.8, x: -20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.4, duration: 0.4 }}
              whileHover={{ scale: 1.05, x: 3 }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                  <Award className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-800">500+</div>
                  <div className="text-xs text-slate-600">STEM Projects</div>
                </div>
              </div>
            </motion.div>

            {/* Background Decoration */}
            <motion.div
              className="absolute -z-10 top-8 -right-8 w-64 h-64 bg-emerald-200/20 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 6, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default HeroSection;
