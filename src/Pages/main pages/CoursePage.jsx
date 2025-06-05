import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  ChevronRight,
  BookOpen,
  Calculator,
  Atom,
  Zap,
  Clock,
  Users,
  Award,
  ExternalLink,
  ArrowRight,
  Star,
  TrendingUp,
  CheckCircle,
  Play,
  BarChart3,
  Target,
  Sparkles,
} from "lucide-react";
import { Navigate } from "react-router-dom";

// Framer Motion alternative using CSS animations and transitions
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

      {/* Decorative Background Shapes */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Top Right Curved Wave */}
        <svg
          className="absolute top-0 right-0 w-2/5 h-1/3 -z-10"
          viewBox="0 0 500 300"
          fill="none"
        >
          <path
            d="M500,0 C400,50 300,100 200,150 C150,175 100,200 50,225 L500,225 L500,0 Z"
            fill="#1b7ee0"
            opacity="0.8"
          />
          <path
            d="M500,0 C420,30 340,60 260,90 C200,110 140,130 80,150 L500,150 L500,0 Z"
            fill="#F3F4F6"
            opacity="0.6"
          />
        </svg>

        {/* Mid Right Floating Circle */}
        <div className="absolute top-1/3 right-12 w-32 h-32 rounded-full bg-gradient-to-br from-[#09549e] to-gray-600 opacity-40 z-[-1] blur-sm" />

        {/* Top Left Small Curved Element */}
        <svg
          className="absolute top-20 left-8 w-24 h-24 -z-10"
          viewBox="0 0 100 100"
          fill="none"
        >
          <path
            d="M0,0 Q50,25 100,0 Q75,50 100,100 Q50,75 0,100 Q25,50 0,0 Z"
            fill="#002F67"
            opacity="0.08"
          />
        </svg>

        {/* Bottom Center Curved Arc */}
        <svg
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-96 h-24 -z-10"
          viewBox="0 0 400 100"
          fill="none"
        >
          <path
            d="M0,100 Q200,50 400,100 L400,100 L0,100 Z"
            fill="#F8FAFC"
            opacity="0.9"
          />
        </svg>

        {/* Floating Gradient Orb - Mid Left */}
        <div className="absolute top-2/3 left-16 w-20 h-20 rounded-full bg-gradient-to-br from-gray-900 to-gray-900 opacity-50 z-[-1] blur-[2px]" />

        {/* Top Right Corner Accent */}
        <div className="absolute top-0 right-0 w-40 h-40 rounded-bl-full bg-gradient-to-bl from-gray-500 to-transparent opacity-60 z-[-1]" />

        {/* Subtle Curved Line Elements */}
        <svg
          className="absolute top-1/2 right-1/4 w-16 h-48 -z-10"
          viewBox="0 0 50 200"
          fill="none"
        >
          <path
            d="M25,0 Q40,50 25,100 Q10,150 25,200"
            stroke="#002F67"
            strokeWidth="1"
            opacity="0.1"
            fill="none"
          />
        </svg>
      </div>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50/50 to-gray-100/50"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(0, 47, 103, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(0, 47, 103, 0.05) 0%, transparent 50%)`,
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <MotionDiv delay={200} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 text-gray-600 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-gray-200">
              <Sparkles className="w-4 h-4" />
              <span>Premium Academic Excellence Program</span>
            </div>

            <h1 className="text-6xl font-bold text-gray-600 mb-8 leading-tight">
              Unlock Your
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #002F67, #002F67)",
                }}
              >
                {" "}
                Academic{" "}
              </span>
              Potential
            </h1>

            <p className="text-xl text-gray-700 mb-12 leading-relaxed">
              Join the elite ranks of academic achievers with our comprehensive,
              research-backed curriculum. Experience world-class education
              designed for tomorrow's leaders.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <MotionDiv delay={400} className="text-center">
                <div className="text-3xl font-bold text-[#002F67] mb-2">
                  6,424
                </div>
                <div className="text-sm text-gray-600 flex items-center justify-center gap-2">
                  <Users className="w-4 h-4" />
                  Elite Students
                </div>
              </MotionDiv>
              <MotionDiv delay={500} className="text-center">
                <div className="text-3xl font-bold text-[#002F67] mb-2">
                  98.7%
                </div>
                <div className="text-sm text-gray-600 flex items-center justify-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Success Rate
                </div>
              </MotionDiv>
              <MotionDiv delay={600} className="text-center">
                <div className="text-3xl font-bold text-[#002F67] mb-2">
                  4.9
                </div>
                <div className="text-sm text-gray-600 flex items-center justify-center gap-2">
                  <Star className="w-4 h-4 fill-current" />
                  Student Rating
                </div>
              </MotionDiv>
            </div>
          </MotionDiv>
        </div>
      </div>

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
