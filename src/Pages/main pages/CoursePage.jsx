import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import {
  Calculator,
  Atom,
  Zap,
  Clock,
  Users,
  ExternalLink,
  ArrowRight,
  Star,
  TrendingUp,
  Sparkles,
} from "lucide-react";

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

const CoursePage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const subjects = [
    {
      id: "mathematics",
      title: "Mathematics",
      icon: Calculator,
      color: "from-gray-600 to-gray-500",
      accent: "text-gray-600",
      description:
        "Advanced mathematical concepts from foundational principles to cutting-edge applications in modern industries.",
      totalStudents: "2,847",
      averageRating: "4.9",
      completion: "94%",
      courses: [
        {
          name: "Advanced Mathematical Foundations",
          subtitle: "Years 7-10 Comprehensive Program",
          level: "Foundation",
          duration: "36 Months",
          description:
            "Establish robust mathematical foundations with emphasis on analytical thinking and problem-solving methodologies.",
          topics: [
            "Advanced Algebra",
            "Computational Geometry",
            "Statistical Modeling",
            "Mathematical Reasoning",
          ],
          link: "/courses/junior-maths",
          students: "1,247",
          rating: "4.8",
        },
        {
          name: "Year 11 Mathematical Analysis",
          subtitle: "Advanced Placement Track",
          level: "Advanced",
          duration: "12 Months",
          description:
            "Comprehensive exploration of functions, advanced trigonometry, and pre-calculus concepts.",
          topics: [
            "Complex Functions",
            "Advanced Trigonometry",
            "Logarithmic Systems",
            "Series Analysis",
          ],
          link: "/courses/year-11-adv-maths",
          students: "847",
          rating: "4.9",
        },
        {
          name: "Year 11 Mathematical Extension",
          subtitle: "Elite Performance Program",
          level: "Expert",
          duration: "12 Months",
          description:
            "Elite-level mathematical reasoning with focus on proof techniques and theoretical foundations.",
          topics: [
            "Mathematical Proofs",
            "Complex Number Theory",
            "Abstract Algebra",
            "Combinatorial Analysis",
          ],
          link: "/courses/year-11-ext-maths",
          students: "324",
          rating: "4.9",
        },
      ],
    },
    {
      id: "chemistry",
      title: "Chemistry",
      icon: Atom,
      color: "from-gray-600 to-gray-500",
      accent: "text-gray-600",
      description:
        "Molecular science through advanced laboratory techniques and theoretical understanding.",
      totalStudents: "1,923",
      averageRating: "4.8",
      completion: "92%",
      courses: [
        {
          name: "Molecular Chemistry Foundations",
          subtitle: "Year 11 Advanced Track",
          level: "Intermediate",
          duration: "12 Months",
          description:
            "Comprehensive study of atomic structure, molecular interactions, and reaction mechanisms.",
          topics: [
            "Quantum Chemistry",
            "Molecular Bonding",
            "Reaction Kinetics",
            "Thermodynamics",
          ],
          link: "/courses/year-11-chem",
          students: "1,123",
          rating: "4.8",
        },
        {
          name: "Advanced Chemical Systems",
          subtitle: "Year 12 Honors Program",
          level: "Advanced",
          duration: "12 Months",
          description:
            "Advanced organic chemistry, equilibrium systems, and industrial applications.",
          topics: [
            "Organic Synthesis",
            "Chemical Equilibrium",
            "Electrochemistry",
            "Industrial Chemistry",
          ],
          link: "/courses/year-12-chem",
          students: "800",
          rating: "4.9",
        },
      ],
    },
    {
      id: "physics",
      title: "Physics",
      icon: Zap,
      color: "from-gray-600 to-gray-500",
      accent: "text-gray-600",
      description:
        "Fundamental laws of nature from quantum mechanics to astrophysics applications.",
      totalStudents: "1,654",
      averageRating: "4.9",
      completion: "96%",
      courses: [
        {
          name: "Classical & Modern Physics",
          subtitle: "Year 11 Comprehensive",
          level: "Intermediate",
          duration: "12 Months",
          description:
            "Foundation in classical mechanics with introduction to modern physics concepts.",
          topics: [
            "Classical Mechanics",
            "Wave Physics",
            "Thermodynamics",
            "Electromagnetism Intro",
          ],
          link: "/courses/year-11-physics",
          students: "954",
          rating: "4.9",
        },
        {
          name: "Quantum & Relativistic Physics",
          subtitle: "Year 12 Advanced Research",
          level: "Advanced",
          duration: "12 Months",
          description:
            "Advanced study of quantum mechanics, relativity, and modern physics applications.",
          topics: [
            "Quantum Mechanics",
            "Special Relativity",
            "Particle Physics",
            "Astrophysics",
          ],
          link: "/courses/year-12-physics",
          students: "700",
          rating: "4.9",
        },
      ],
    },
  ];

  const navigate = useNavigate();

  const handleCourseNavigation = (link) => {
    navigate(link);
  };

  const getLevelColor = (level) => {
    switch (level) {
      case "Foundation":
        return "bg-gray-50 text-gray-700 border-gray-200";
      case "Intermediate":
        return "bg-gray-50 text-gray-700 border-gray-200";
      case "Advanced":
        return "bg-gray-100 text-gray-800 border-gray-300";
      case "Expert":
        return "bg-gray-200 text-gray-900 border-gray-400";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div
        className="relative bg-white overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Geometric Background */}
        <div className="absolute inset-0">
          <svg
            className="absolute top-0 left-0 w-full h-full"
            viewBox="0 0 1200 800"
            fill="none"
          >
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#002F67", stopOpacity: 0.1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#1e40af", stopOpacity: 0.05 }}
                />
              </linearGradient>
            </defs>
            <polygon points="0,0 600,0 400,400" fill="url(#grad1)" />
            <polygon points="1200,0 1200,300 800,200" fill="url(#grad1)" />
            <polygon points="1200,800 600,800 900,400" fill="url(#grad1)" />
          </svg>

          {/* Floating Elements */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-4 h-4 bg-blue-500 rounded-full"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.1 }}
          />
          <motion.div
            className="absolute top-1/3 left-1/4 w-3 h-3 bg-cyan-500 rounded-full"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/3 w-5 h-5 bg-blue-400 rounded-full"
            animate={{ y: [0, -25, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
            {/* Left Side - Content */}
            <motion.div className="space-y-8" variants={itemVariants}>
              <div className="inline-flex items-center gap-2 text-blue-600 px-4 py-2 rounded-full text-sm font-medium bg-blue-50 border border-blue-200">
                <Sparkles className="w-4 h-4" />
                <span>Premium Academic Excellence Program</span>
              </div>

              <h1 className="text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
                Unlock Your
                <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Academic
                </span>
                Potential
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Join the elite ranks of academic achievers with our
                comprehensive, research-backed curriculum designed for
                tomorrow's leaders.
              </p>
            </motion.div>

            {/* Right Side - Stats Card */}
            <motion.div className="relative" variants={itemVariants}>
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <img
                  src="https://img.freepik.com/free-vector/online-courses-tutorials_52683-37860.jpg"
                  alt="Courses image"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Subjects Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <MotionDiv delay={300} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-600 mb-6">
            Master Core Disciplines
          </h2>
          <p className="text-xl text-sky-900 max-w-2xl mx-auto">
            Comprehensive programs designed by leading academics and industry
            experts
          </p>
        </MotionDiv>

        <div className="grid lg:grid-cols-3 gap-8">
          {subjects.map((subject, index) => {
            const IconComponent = subject.icon;

            return (
              <MotionDiv
                key={subject.id}
                delay={500 + index * 200}
                className="group relative"
              >
                <div
                  className={`relative overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-200 transition-all duration-500
                    ${
                      hoveredCard === subject.id
                        ? "shadow-2xl border-gray-300 scale-[1.02]"
                        : "hover:shadow-xl hover:border-gray-300"
                    }
                  `}
                  onMouseEnter={() => setHoveredCard(subject.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Card Header */}
                  <div className="p-8 pb-6">
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`p-4 rounded-xl bg-gradient-to-br ${subject.color} shadow-lg`}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-[#002F67] mb-3">
                      {subject.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {subject.description}
                    </p>

                    {/* Advanced Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-lg font-bold text-gray-900">
                          {subject.totalStudents}
                        </div>
                        <div className="text-xs text-gray-600">Enrolled</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-lg font-bold text-gray-900 flex items-center justify-center gap-1">
                          {subject.averageRating}
                          <Star className="w-3 h-3 fill-gray-400 text-gray-400" />
                        </div>
                        <div className="text-xs text-gray-600">Rating</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-lg font-bold text-gray-900">
                          {subject.completion}
                        </div>
                        <div className="text-xs text-gray-600">Complete</div>
                      </div>
                    </div>

                    {/* Course List - Always Visible */}
                    <div className="space-y-4 pt-6 border-t border-gray-100">
                      {subject.courses.map((course, courseIndex) => (
                        <div
                          key={courseIndex}
                          className="group/course p-5 rounded-xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200 hover:shadow-sm transition-all duration-300"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h4 className="font-semibold text-[#002F67] text-lg">
                                  {course.name}
                                </h4>
                                <span
                                  className={`px-3 py-1 rounded-full text-xs font-medium border ${getLevelColor(
                                    course.level
                                  )}`}
                                >
                                  {course.level}
                                </span>
                              </div>
                              <p className="text-sm text-gray-600 mb-2">
                                {course.subtitle}
                              </p>
                              <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                                {course.description}
                              </p>

                              {/* Course Meta */}
                              <div className="flex items-center gap-6 text-xs text-gray-600 mb-4">
                                <div className="flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  <span>{course.duration}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Users className="w-3 h-3" />
                                  <span>{course.students} students</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Star className="w-3 h-3 fill-gray-400 text-gray-400" />
                                  <span>{course.rating}</span>
                                </div>
                              </div>

                              {/* Topics */}
                              <div className="flex flex-wrap gap-2 mb-4">
                                {course.topics.map((topic, topicIndex) => (
                                  <span
                                    key={topicIndex}
                                    className="px-3 py-1 bg-white text-xs text-gray-700 rounded-lg border border-gray-200"
                                  >
                                    {topic}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCourseNavigation(course.link);
                            }}
                            className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:text-white hover:border-gray-600 transition-all duration-300 group-hover/course:shadow-sm"
                            style={{
                              "&:hover": {
                                backgroundColor: "#002F67",
                              },
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.backgroundColor = "#002F67";
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.backgroundColor = "";
                            }}
                          >
                            <span>Explore Course</span>
                            <ExternalLink className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </MotionDiv>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <MotionDiv delay={1200} className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div
            className="rounded-3xl p-12 text-white relative overflow-hidden"
            style={{
              background: "linear-gradient(to right, #002F67, #001840)",
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(0, 47, 103, 0.1), rgba(0, 24, 64, 0.1))",
              }}
            ></div>
            <div className="relative">
              <h2 className="text-4xl font-bold mb-6">
                Transform Your Academic Future Today
              </h2>
              <p
                className="text-xl mb-8 max-w-2xl mx-auto"
                style={{ color: "rgba(255, 255, 255, 0.9)" }}
              >
                Join thousands of students who have elevated their academic
                performance through our proven methodology
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  className="group inline-flex items-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  style={{
                    color: "#002F67",
                  }}
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300">
                  Schedule Consultation
                  <ExternalLink className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </MotionDiv>
    </div>
  );
};

export default CoursePage;
