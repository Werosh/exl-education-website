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
      color: "from-blue-600 to-blue-500",
      accent: "text-blue-600",
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
      color: "from-blue-600 to-blue-500",
      accent: "text-blue-600",
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
      color: "from-blue-600 to-blue-500",
      accent: "text-blue-600",
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
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "Intermediate":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "Advanced":
        return "bg-blue-100 text-blue-800 border-blue-300";
      case "Expert":
        return "bg-blue-200 text-blue-900 border-blue-400";
      default:
        return "bg-blue-50 text-blue-700 border-blue-200";
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-blue-100/50"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)`,
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <MotionDiv delay={200} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-blue-200">
              <Sparkles className="w-4 h-4" />
              <span>Premium Academic Excellence Program</span>
            </div>

            <h1 className="text-6xl font-bold text-blue-900 mb-8 leading-tight">
              Unlock Your
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                {" "}
                Academic{" "}
              </span>
              Potential
            </h1>

            <p className="text-xl text-blue-700 mb-12 leading-relaxed">
              Join the elite ranks of academic achievers with our comprehensive,
              research-backed curriculum. Experience world-class education
              designed for tomorrow's leaders.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <MotionDiv delay={400} className="text-center">
                <div className="text-3xl font-bold text-blue-900 mb-2">
                  6,424
                </div>
                <div className="text-sm text-blue-600 flex items-center justify-center gap-2">
                  <Users className="w-4 h-4" />
                  Elite Students
                </div>
              </MotionDiv>
              <MotionDiv delay={500} className="text-center">
                <div className="text-3xl font-bold text-blue-900 mb-2">
                  98.7%
                </div>
                <div className="text-sm text-blue-600 flex items-center justify-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Success Rate
                </div>
              </MotionDiv>
              <MotionDiv delay={600} className="text-center">
                <div className="text-3xl font-bold text-blue-900 mb-2">4.9</div>
                <div className="text-sm text-blue-600 flex items-center justify-center gap-2">
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
          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            Master Core Disciplines
          </h2>
          <p className="text-xl text-blue-700 max-w-2xl mx-auto">
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
                  className={`relative overflow-hidden rounded-2xl bg-white shadow-lg border border-blue-200 transition-all duration-500
                    ${
                      hoveredCard === subject.id
                        ? "shadow-2xl border-blue-300 scale-[1.02]"
                        : "hover:shadow-xl hover:border-blue-300"
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

                    <h3 className="text-2xl font-bold text-blue-900 mb-3">
                      {subject.title}
                    </h3>

                    <p className="text-blue-700 mb-6 leading-relaxed">
                      {subject.description}
                    </p>

                    {/* Advanced Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="text-lg font-bold text-blue-900">
                          {subject.totalStudents}
                        </div>
                        <div className="text-xs text-blue-600">Enrolled</div>
                      </div>
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="text-lg font-bold text-blue-900 flex items-center justify-center gap-1">
                          {subject.averageRating}
                          <Star className="w-3 h-3 fill-blue-400 text-blue-400" />
                        </div>
                        <div className="text-xs text-blue-600">Rating</div>
                      </div>
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="text-lg font-bold text-blue-900">
                          {subject.completion}
                        </div>
                        <div className="text-xs text-blue-600">Complete</div>
                      </div>
                    </div>

                    {/* Course List - Always Visible */}
                    <div className="space-y-4 pt-6 border-t border-blue-100">
                      {subject.courses.map((course, courseIndex) => (
                        <div
                          key={courseIndex}
                          className="group/course p-5 rounded-xl bg-blue-50 hover:bg-white border border-transparent hover:border-blue-200 hover:shadow-sm transition-all duration-300"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h4 className="font-semibold text-blue-900 text-lg">
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
                              <p className="text-sm text-blue-600 mb-2">
                                {course.subtitle}
                              </p>
                              <p className="text-sm text-blue-700 mb-4 leading-relaxed">
                                {course.description}
                              </p>

                              {/* Course Meta */}
                              <div className="flex items-center gap-6 text-xs text-blue-600 mb-4">
                                <div className="flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  <span>{course.duration}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Users className="w-3 h-3" />
                                  <span>{course.students} students</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Star className="w-3 h-3 fill-blue-400 text-blue-400" />
                                  <span>{course.rating}</span>
                                </div>
                              </div>

                              {/* Topics */}
                              <div className="flex flex-wrap gap-2 mb-4">
                                {course.topics.map((topic, topicIndex) => (
                                  <span
                                    key={topicIndex}
                                    className="px-3 py-1 bg-white text-xs text-blue-700 rounded-lg border border-blue-200"
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
                            className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-white border border-blue-200 rounded-lg text-sm font-medium text-blue-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 group-hover/course:shadow-sm"
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
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-800/10"></div>
            <div className="relative">
              <h2 className="text-4xl font-bold mb-6">
                Transform Your Academic Future Today
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join thousands of students who have elevated their academic
                performance through our proven methodology
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group inline-flex items-center px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
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
