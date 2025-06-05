import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Award,
  BookOpen,
  Clock,
  Star,
  GraduationCap,
  TrendingUp,
  Target,
  CheckCircle,
  PlayCircle,
  BarChart3,
  Medal,
  Globe,
  Briefcase,
  ArrowRight,
  Quote,
} from "lucide-react";

import WillImg from "../../images/teachers/will.jpeg";

const About = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [visibleStats, setVisibleStats] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisibleStats(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const coreValues = [
    {
      icon: Target,
      title: "Excellence in Education",
      description:
        "Committed to delivering the highest standard of academic instruction and support for HSC success.",
    },
    {
      icon: Users,
      title: "Personalized Learning",
      description:
        "Tailored teaching approaches that adapt to each student's unique learning style and academic needs.",
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description:
        "Consistent track record of helping students achieve top marks and secure university placements.",
    },
    {
      icon: Globe,
      title: "Comprehensive Support",
      description:
        "Complete academic ecosystem including study materials, mock exams, and career guidance.",
    },
  ];

  const courseStructure = [
    {
      icon: Users,
      title: "Expert Faculty",
      description:
        "Learn from high-achieving HSC graduates and experienced educators with proven teaching methodologies.",
      features: [
        "University-qualified instructors",
        "Subject matter experts",
        "Continuous professional development",
      ],
    },
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description:
        "Structured learning pathway covering all HSC subjects with detailed study materials and resources.",
      features: [
        "Complete syllabus coverage",
        "Practice papers & mock exams",
        "Digital learning resources",
      ],
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description:
        "Track your progress with detailed analytics and personalized feedback to optimize learning outcomes.",
      features: [
        "Regular assessment reports",
        "Progress tracking dashboard",
        "Personalized improvement plans",
      ],
    },
    {
      icon: Clock,
      title: "Flexible Learning",
      description:
        "Convenient scheduling options with both live classes and recorded sessions for maximum flexibility.",
      features: [
        "Live interactive sessions",
        "On-demand video content",
        "Flexible study schedules",
      ],
    },
  ];

  const faculty = [
    {
      name: "William Leong",
      position: "Chemistry and English Teacher",
      qualifications: "B Commerce/B Laws @ USYD",
      experience: "96 in Chemistry, 90 in English Adv",
      specialization: "Chemistry & English",
      achievements: "ATAR: 99.70",
      rating: null,
      image: WillImg,
    },
    {
      name: "Matthew Chen",
      position: "Chemistry Teacher",
      qualifications: "B DentHSc/M Dentistry @ Griffith",
      experience: "97 in Chemistry, Rank 2 in NBHS",
      specialization: "Chemistry",
      achievements: "ATAR: 99.75",
      rating: null,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Yu-Tang Lin",
      position: "Chemistry and Math Teacher",
      qualifications: "B Actuarial/B Computer Sci @ UNSW",
      experience: "93 in Chemistry, 94 in Math Ext 1",
      specialization: "Chemistry & Math",
      achievements: "ATAR: 99.15",
      rating: null,
      image:
        "https://static.wixstatic.com/media/16dc17_b988e22837804df3b9bd916015def8c6~mv2.jpg/v1/crop/x_67,y_0,w_1823,h_1823/fill/w_187,h_187,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_1681_JPG.jpg",
    },
    {
      name: "Nicholas Ip",
      position: "Chemistry and Math Teacher",
      qualifications: "B Physiotherapy @ USYD",
      experience: "94 in Chemistry, 97 in Math Ext 1",
      specialization: "Chemistry & Math",
      achievements: "ATAR: 99.45",
      rating: null,
      image:
        "https://static.wixstatic.com/media/16dc17_81793bbcabbb41b4b759fdce9fd76dea~mv2.jpg/v1/crop/x_55,y_0,w_1824,h_1824/fill/w_187,h_187,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_1675_JPG.jpg",
    },
  ];

  const achievements = [
    {
      icon: Award,
      value: "99.45",
      label: "Average ATAR",
      subtitle: "Top 1% state ranking",
      color: "text-blue-600",
    },
    {
      icon: Medal,
      value: "State Ranking",
      label: "Marks Achieved",
      subtitle: "Multiple subjects",
      color: "text-blue-700",
    },
    {
      icon: GraduationCap,
      value: "100+",
      label: "University Placements",
      subtitle: "Top-tier institutions",
      color: "text-blue-800",
    },
    {
      icon: TrendingUp,
      value: "500+",
      label: "Successful Graduates",
      subtitle: "Over 8 years",
      color: "text-blue-900",
    },
  ];

  const testimonials = [
    {
      name: "Priya Patel",
      school: "Knox Elite High School",
      quote:
        "The personalized approach and expert guidance helped me achieve beyond my expectations. The structured curriculum and supportive environment made all the difference.",
      subjects: "Mathematics Extension 2, Physics, Chemistry",
    },
    {
      name: "James Liu",
      school: "Sydney Grammar School",
      quote:
        "Exceptional teaching quality and comprehensive resources. The faculty's expertise and dedication to student success is truly remarkable.",
      subjects: "Economics, Business Studies, Legal Studies",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-transparent"></div>
        <div className="relative container mx-auto px-6">
          <motion.div
            className="max-w-4xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              variants={itemVariants}
            >
              Transforming Academic Excellence
            </motion.h1>
            <motion.p
              className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed"
              variants={itemVariants}
            >
              Empowering HSC students to achieve exceptional results through
              expert instruction, comprehensive resources, and personalized
              support.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-6 text-sm text-blue-200"
              variants={itemVariants}
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Expert Faculty</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Proven Results</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Comprehensive Support</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        className="py-20 px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="w-20 h-1 bg-blue-600 mb-8"></div>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  E&L Education was founded by a group of high-achieving
                  graduates who understood the difference that could be made in
                  the academic success of students through expert guidance and
                  quality education with targeted support for HSC excellence.
                </p>
                <p>
                  Starting out as graduates and small class tutors, we realized
                  the value that students gained from having excellent learning
                  experiences and teacher support systems. Our classroom and
                  Individual support approach has helped thousands of students
                  achieve their academic goals and secure placements at top
                  universities.
                </p>
                <p>
                  We have maintained our commitment to excellence, developing
                  comprehensive curricula, advanced teaching methodologies, and
                  a supportive learning environment that enables every student
                  to reach their potential.
                </p>
              </div>
            </motion.div>

            <motion.div className="relative" variants={itemVariants}>
              <div className="bg-blue-50 rounded-2xl p-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Our Courses
                  </h3>
                  <p className="text-gray-600 mb-6">
                    We offer comprehensive HSC programs designed to provide
                    students with the knowledge and skills needed for success.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">
                        All HSC Subjects Covered
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">Small Class Sizes</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">
                        Individual Attention
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Core Values */}
      <motion.section
        className="py-20 px-6 bg-gray-50"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Drives Us
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to educational excellence is built on these
              fundamental principles
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
          >
            {coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Course Structure */}
      <motion.section
        className="py-20 px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Course Structure
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive programs designed to maximize student potential and
              academic achievement
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {courseStructure.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {item.description}
                      </p>
                      <ul className="space-y-2">
                        {item.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-3 text-gray-700"
                          >
                            <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Achievements */}
      <motion.section
        className="py-20 px-6 bg-blue-50"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Teachers' Results
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600">
              Outstanding outcomes that speak to our commitment to excellence
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
          >
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 text-center shadow-lg"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className={`w-8 h-8 ${achievement.color}`} />
                  </div>
                  <div
                    className={`text-3xl font-bold ${achievement.color} mb-2`}
                  >
                    {achievement.value}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">
                    {achievement.label}
                  </div>
                  <div className="text-sm text-gray-600">
                    {achievement.subtitle}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Faculty Section */}
      <motion.section
        className="py-20 px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Team
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our exceptional faculty members who bring expertise, passion,
              and proven track records to your education
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {faculty.map((teacher, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={teacher.image}
                      alt={teacher.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />

                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {teacher.name}
                      </h3>
                      <p className="text-blue-600 font-medium text-sm">
                        {teacher.position}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-full">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-bold text-gray-800">
                        {teacher.rating}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Qualifications
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {teacher.qualifications}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Specialization
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {teacher.specialization}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Experience & Achievements
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {teacher.experience} • {teacher.achievements}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        className="py-20 px-6 bg-gray-50"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Stories from our Students
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600">
              Real success stories from students who achieved their goals
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-8"
            variants={containerVariants}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
                variants={itemVariants}
              >
                <Quote className="w-8 h-8 text-blue-600 mb-6" />
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-blue-600 text-sm">
                      {testimonial.school}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {testimonial.subjects}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 px-6 bg-blue-900 text-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto text-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Excel in Your HSC?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join our community of high-achieving students and experience the
              difference that expert guidance and comprehensive support can make
              in your academic journey.
            </p>
            <motion.button
              className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors duration-300 inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
