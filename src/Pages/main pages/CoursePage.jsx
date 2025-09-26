import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { Search, ChevronDown } from "lucide-react";
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
const courseRoutes = {
  "7-maths": "/courses/junior-maths",
  "8-maths": "/courses/junior-maths",
  "9-maths": "/courses/junior-maths",
  "10-maths": "/courses/junior-maths",
  "11-maths": "/courses/year-11-adv-maths",
  "11-ext-maths": "/courses/year-11-ext-maths",
  "12-adv-maths": "/courses/year-12-adv-maths",
  "12-ext-maths": "/courses/year-12-ext1-maths",
  "11-chem": "/courses/year-11-chem",
  "12-chem": "/courses/year-12-chem",
  "11-physics": "/courses/year-11-physics",
  "12-physics": "/courses/year-12-physics",
};

const CoursePage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");

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
          name: "Mathematics Standard (2 units)",
          subtitle: "Year 11 Preliminary Track",
          level: "Foundation",
          duration: "12 Months",
          description:
            "Essential mathematical skills for everyday life and further study with practical applications.",
          topics: [
            "Algebra and Modeling",
            "Measurement and Geometry",
            "Statistics and Probability",
            "Financial Mathematics",
          ],
          link: "/courses/year-11-adv-maths",
          students: "1,247",
          rating: "4.8",
        },
        {
          name: "Mathematics Advanced (2 units)",
          subtitle: "Year 11 Preliminary Track",
          level: "Advanced",
          duration: "12 Months",
          description:
            "Comprehensive exploration of functions, calculus foundations, and advanced mathematical concepts.",
          topics: [
            "Functions and Graphs",
            "Trigonometric Functions",
            "Exponential and Logarithmic Functions",
            "Differential Calculus",
          ],
          link: "/courses/year-11-adv-maths",
          students: "847",
          rating: "4.9",
        },
        {
          name: "Mathematics Extension 1 (1 unit)",
          subtitle: "Year 11 Elite Program (must be taken with Advanced)",
          level: "Expert",
          duration: "12 Months",
          description:
            "Elite-level mathematical reasoning extending Advanced Mathematics with additional depth and complexity.",
          topics: [
            "Further Work with Functions",
            "Combinatorics",
            "Proof by Mathematical Induction",
            "Vectors",
          ],
          link: "/courses/year-11-ext-maths",
          students: "324",
          rating: "4.9",
        },
        {
          name: "Mathematics Standard 2 (2 units)",
          subtitle: "Year 12 HSC Track",
          level: "Foundation",
          duration: "12 Months",
          description:
            "Practical mathematics for real-world applications and career pathways requiring mathematical literacy.",
          topics: [
            "Statistics and Probability",
            "Financial Mathematics",
            "Measurement and Geometry",
            "Networks and Decision Mathematics",
          ],
          link: "/courses/year-12-adv-maths",
          students: "1,023",
          rating: "4.8",
        },
        {
          name: "Mathematics Advanced (2 units)",
          subtitle: "Year 12 HSC Track",
          level: "Advanced",
          duration: "12 Months",
          description:
            "Advanced calculus, probability distributions, and mathematical modeling for university preparation.",
          topics: [
            "Functions and Graphs",
            "Calculus",
            "Financial Mathematics",
            "Statistical Analysis",
          ],
          link: "/courses/year-12-adv-maths",
          students: "756",
          rating: "4.9",
        },
        {
          name: "Mathematics Extension 1 (1 unit)",
          subtitle: "Year 12 HSC (must be taken with Advanced)",
          level: "Expert",
          duration: "12 Months",
          description:
            "Further extension of Advanced Mathematics with additional depth in calculus and mathematical reasoning.",
          topics: ["Proof", "Vectors", "Statistical Analysis", "Mechanics"],
          link: "/courses/year-12-ext1-maths",
          students: "445",
          rating: "4.9",
        },
        {
          name: "Mathematics Extension 2 (2 units)",
          subtitle: "Year 12 HSC (must be taken with Extension 1)",
          level: "Expert",
          duration: "12 Months",
          description:
            "The most challenging mathematics course covering advanced topics for mathematically gifted students.",
          topics: [
            "Proof by Mathematical Induction",
            "Vectors",
            "Complex Numbers",
            "Integration",
          ],
          link: "/courses/year-12-ext2-maths",
          students: "178",
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
          name: "Chemistry (2 units)",
          subtitle: "Year 11 Preliminary Course",
          level: "Intermediate",
          duration: "12 Months",
          description:
            "Foundation course covering fundamental principles of atomic structure, bonding, and chemical reactions.",
          topics: [
            "Properties and Structure of Matter",
            "Introduction to Quantitative Chemistry",
            "Reactive Chemistry",
            "Drivers of Reactions",
          ],
          link: "/courses/year-11-chem",
          students: "1,123",
          rating: "4.8",
        },
        {
          name: "Chemistry (2 units)",
          subtitle: "Year 12 HSC Course",
          level: "Advanced",
          duration: "12 Months",
          description:
            "Advanced study of chemical equilibrium, organic chemistry, and real-world applications of chemical principles.",
          topics: [
            "Equilibrium and Acid Reactions",
            "Acid/Base Reactions",
            "Organic Chemistry",
            "Applying Chemical Ideas",
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
          name: "Physics (2 units)",
          subtitle: "Year 11 Preliminary Course",
          level: "Intermediate",
          duration: "12 Months",
          description:
            "Foundation course exploring motion, forces, waves, and the fundamental principles of electricity and magnetism.",
          topics: [
            "Kinematics",
            "Dynamics",
            "Waves and Thermodynamics",
            "Electricity and Magnetism",
          ],
          link: "/courses/year-11-physics",
          students: "954",
          rating: "4.9",
        },
        {
          name: "Physics (2 units)",
          subtitle: "Year 12 HSC Course",
          level: "Advanced",
          duration: "12 Months",
          description:
            "Advanced study of mechanics, electromagnetic theory, quantum physics, and cosmology.",
          topics: [
            "Advanced Mechanics",
            "Electromagnetism",
            "The Nature of Light",
            "From the Universe to the Atom",
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

  const handleFindCourse = () => {
    const key = `${selectedYear}-${selectedSubject}`;
    const path = courseRoutes[key];

    if (path) {
      navigate(path);
    } else {
      alert("Course not available");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #004080 0%, #003366 50%, #002F67 100%)",
        }}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="relative  mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center p-20">
            {/* Left Side - Content */}
            <motion.div className="space-y-8" variants={itemVariants}>
              <h1 className="text-5xl lg:text-5xl mt-10 font-bold text-white leading-tight">
                Sydney's best tutoring programs
              </h1>

              <p className="text-lg text-white/90 leading-relaxed max-w-lg">
                Boost marks. Build confidence. Get ahead at school with expert
                tutoring for Year 3-12 English, Maths, Science and UCAT.
              </p>

              <div className="flex gap-4 mb-8">
                <button className="bg-[#064491] border hover:bg-white text-white hover:text-[#002F67] hover:border-black hover:border-2 px-8 py-3 rounded-full font-semibold transition-all duration-300">
                  Enrol now
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:border-black hover:border-2 hover:bg-white hover:text-[#002F67] transition-all duration-300">
                  Book your free trial
                </button>
              </div>

              {/* Course Finder */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-white font-semibold">
                    Find a course
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="relative">
                    <span className="absolute -top-2 left-4 bg-[#002F67] text-white text-xs px-2 py-1 rounded">
                      1
                    </span>
                    <select
                      className="w-full bg-white rounded-lg px-4 py-3 pr-10 appearance-none cursor-pointer border border-gray-200"
                      value={selectedYear}
                      onChange={(e) => setSelectedYear(e.target.value)}
                    >
                      <option value="">Year</option>
                      <option value="7">Year 7</option>
                      <option value="8">Year 8</option>
                      <option value="9">Year 9</option>
                      <option value="10">Year 10</option>
                      <option value="11">Year 11</option>
                      <option value="12">Year 12</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4 pointer-events-none" />
                  </div>

                  <div className="relative">
                    <span className="absolute -top-2 left-4 bg-[#002F67] text-white text-xs px-2 py-1 rounded">
                      2
                    </span>
                    <select
                      className="w-full bg-white rounded-lg px-4 py-3 pr-10 appearance-none cursor-pointer border border-gray-200"
                      value={selectedSubject}
                      onChange={(e) => setSelectedSubject(e.target.value)}
                    >
                      <option value="">Subject</option>
                      <option value="maths">Mathematics</option>
                      <option value="adv-maths">Adv: Mathematics</option>
                      <option value="ext-maths">Ext: Mathematics</option>
                      <option value="chem">Chemistry</option>
                      <option value="physics">Physics</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4 pointer-events-none" />
                  </div>

                  <button
                    onClick={handleFindCourse}
                    className="bg-white text-[#002F67] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                  >
                    <Search />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Student Images */}
            <motion.div className="relative" variants={itemVariants}>
              <div className="relative">
                {/* Chemistry Student */}
                <div className="absolute bottom-[-60px] right-0 w-94 h-58 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop"
                    alt="Chemistry student"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute top-4 right-4 bg-white/90 rounded-lg px-3 py-2">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z"
                          fill="currentColor"
                        />
                      </svg>
                      <span className="text-xs font-medium">
                        Comprehensive resources
                      </span>
                    </div>
                  </div>
                </div>

                {/* Online Student */}
                <div className="absolute top-10 right-52 w-94 h-58 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=350&fit=crop"
                    alt="Online learning student"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute bottom-4 left-4 bg-white/90 rounded-lg px-3 py-2">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M8 2V5M16 2V5M3.5 9.5H20.5M4 5.5H20C20.8 5.5 21.5 6.2 21.5 7V19C21.5 19.8 20.8 20.5 20 20.5H4C3.2 20.5 2.5 19.8 2.5 19V7C2.5 6.2 3.2 5.5 4 5.5Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                      </svg>
                      <span className="text-xs font-medium">
                        Study anytime with Matrix+ online
                      </span>
                    </div>
                  </div>
                </div>
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
