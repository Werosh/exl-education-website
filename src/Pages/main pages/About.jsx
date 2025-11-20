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
  BarChart3,
  Medal,
  Globe,
  ArrowRight,
  Quote,
} from "lucide-react";

import WillImg from "../../images/teachers/will.jpeg";
import YutangImg from "../../images/teachers/yutang_lin.jpeg";
import NicholasImg from "../../images/teachers/nicholas_ip.jpeg";
import AnnaImg from "../../images/teachers/anna.jpeg";
import AboutBannerImg from "../../images/others/aboutBanner.webp";
import TeacherSection from "../../sections/TeacherSection";

import UniIMg1 from "../../images/about-image/img1.jpg";
import UniIMg2 from "../../images/about-image/img2.jpg";
import UniIMg3 from "../../images/about-image/img3.jpg";

const About = () => {
  const [visibleStats, setVisibleStats] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisibleStats(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // const coreValues = [
  //   {
  //     icon: Target,
  //     title: "Excellence in Education",
  //     description:
  //       "Committed to delivering the highest standard of academic instruction and support for HSC success.",
  //   },
  //   {
  //     icon: Users,
  //     title: "Personalized Learning",
  //     description:
  //       "Tailored teaching approaches that adapt to each student's unique learning style and academic needs.",
  //   },
  //   {
  //     icon: TrendingUp,
  //     title: "Proven Results",
  //     description:
  //       "Consistent track record of helping students achieve top marks and secure university placements.",
  //   },
  //   {
  //     icon: Globe,
  //     title: "Comprehensive Support",
  //     description:
  //       "Complete academic ecosystem including study materials, mock exams, and career guidance.",
  //   },
  // ];

  // const courseStructure = [
  //   {
  //     icon: Users,
  //     title: "Expert Faculty",
  //     description:
  //       "Learn from high-achieving HSC graduates and experienced educators with proven teaching methodologies.",
  //     features: [
  //       "University-qualified instructors",
  //       "Subject matter experts",
  //       "Continuous professional development",
  //     ],
  //   },
  //   {
  //     icon: BookOpen,
  //     title: "Comprehensive Curriculum",
  //     description:
  //       "Structured learning pathway covering all HSC subjects with detailed study materials and resources.",
  //     features: [
  //       "Complete syllabus coverage",
  //       "Practice papers & mock exams",
  //       "Digital learning resources",
  //     ],
  //   },
  //   {
  //     icon: BarChart3,
  //     title: "Performance Analytics",
  //     description:
  //       "Track your progress with detailed analytics and personalised feedback to optimise learning outcomes.",
  //     features: [
  //       "Regular assessment reports",
  //       "Progress tracking dashboard",
  //       "Personalized improvement plans",
  //     ],
  //   },
  //   {
  //     icon: Clock,
  //     title: "Flexible Learning",
  //     description:
  //       "Convenient scheduling options with both live classes and recorded sessions for maximum flexibility.",
  //     features: [
  //       "Live interactive sessions",
  //       "On-demand video content",
  //       "Flexible study schedules",
  //     ],
  //   },
  // ];

  const faculty = [
    {
      name: "William Leong",
      position: "Chemistry and English Teacher",
      qualifications: "B Commerce/B Laws @ USYD",
      experience: "96 in Chemistry, 90 in English Adv",
      specialisation: "Chemistry & English",
      achievements: "ATAR: 99.70",
      rating: null,
      image: WillImg,
    },

    {
      name: "Yu-Tang Lin",
      position: "Chemistry and Math Teacher",
      qualifications: "B Actuarial/B Computer Sci @ UNSW",
      experience: "93 in Chemistry, 94 in Math Ext 1",
      specialisation: "Chemistry & Math",
      achievements: "ATAR: 99.15",
      rating: null,
      image: YutangImg,
    },
    {
      name: "Nicholas Ip",
      position: "Chemistry and Math Teacher",
      qualifications: "B Physiotherapy @ USYD",
      experience: "94 in Chemistry, 97 in Math Ext 1",
      specialisation: "Chemistry & Math",
      achievements: "ATAR: 99.45",
      rating: null,
      image: NicholasImg,
    },
    {
      name: "Anna Jin",
      position: "Maths and Science Teacher",
      qualifications: "B. Exercise Sci/ M. Physiotherapy @ UNSW",
      experience:
        "97 in Mathematics Extension 1, 94 in Mathematics Extension 2",
      specialisation: "Mathematics & Science",
      achievements: "ATAR: 99.35",
      rating: null,
      image: AnnaImg,
    },
  ];

  // const achievements = [
  //   {
  //     icon: Award,
  //     value: "99.45",
  //     label: "Average ATAR",
  //     subtitle: "Top 1% state ranking",
  //     color: "text-blue-600",
  //   },
  //   {
  //     icon: Medal,
  //     value: "State Ranking",
  //     label: "Marks Achieved",
  //     subtitle: "Multiple subjects",
  //     color: "text-blue-700",
  //   },
  //   {
  //     icon: GraduationCap,
  //     value: "100+",
  //     label: "University Placements",
  //     subtitle: "Top-tier institutions",
  //     color: "text-blue-800",
  //   },
  //   {
  //     icon: TrendingUp,
  //     value: "500+",
  //     label: "Successful Graduates",
  //     subtitle: "Over 8 years",
  //     color: "text-blue-900",
  //   },
  // ];

  const testimonials = [
    {
      name: "Priyani P",
      school: "Killara High School",
      quote:
        "William is an amazing tutor—knowledgeable, approachable, and always willing to help. His clear teaching style and guidance really boosted my understanding and confidence.",
      subjects: "Chemistry",
    },
    {
      name: "Jessica K",
      school: "TARA Anglican School for Girls",
      quote:
        "Nicholas’s clear teaching and structured practice made math and chemistry much easier to master, and my results have improved greatly",
      subjects: "Math Extension 1, Chemistry",
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
        className="relative text-white py-24 mt-15"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={AboutBannerImg} // replace with your image path
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          {/* Blue + white gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#002f67] via-[#002f67]/70 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 md:px-6">
          <motion.div
            className="max-w-4xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight"
              variants={itemVariants}
            >
              Helping all students unlock their full potential
            </motion.h1>
            <motion.p
              className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-blue-100 leading-relaxed"
              variants={itemVariants}
            >
              We believe every student can achieve excellence with the right
              guidance. That's why we help students and parents understand NSW's
              high school journey as a whole from <br className="hidden md:block" /> year 7 foundations to
              year 12 final exams.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4 md:gap-6 text-xs md:text-sm text-blue-200"
              variants={itemVariants}
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Small Class Sizes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Expert Teachers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Custom Learning Materials</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Faculty Section */}
      {/* <motion.section
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
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
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
                        specialisation
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
      </motion.section> */}
      <TeacherSection />

      {/* Testimonials */}
      <motion.section
        className="py-12 md:py-20 px-4 md:px-6 bg-gray-50"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto">
          <motion.div className="text-center mb-8 md:mb-16" variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              What our Students Say
            </h2>
            <div className="w-20 h-1 bg-[#002f67] mx-auto mb-6 md:mb-8"></div>
            <p className="text-base md:text-lg lg:text-xl text-gray-600">
              Our students turned their goals into a reality
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-6 md:gap-8"
            variants={containerVariants}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100"
                variants={itemVariants}
              >
                <Quote className="w-6 h-6 md:w-8 md:h-8 text-[#002f67] mb-4 md:mb-6" />
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm md:text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-[#002f67] text-xs md:text-sm font-bold">
                      {testimonial.school}
                    </p>
                    <p className="text-gray-600 text-xs md:text-sm">
                      {testimonial.subjects}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Map Section */}
      <motion.section
        className="mt-8 md:mt-10 mb-12 md:mb-20 px-4 md:px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Subtitle */}
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 text-center mb-4 md:mb-6">
          We are located 4 minutes away from Castle Hill Metro Station
        </h2>

        {/* Google Map */}
        <div className="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg mb-4 md:mb-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d829.4996030926637!2d151.00406557583494!3d-33.73485717873797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a10b4b565e19%3A0x2c0a4403a74cfa97!2s6%2F25%20Terminus%20St%2C%20Castle%20Hill%20NSW%202154%2C%20Australia!5e0!3m2!1sen!2slk!4v1763002743150!5m2!1sen!2slk"
            width="100%"
            height="100%"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Directions Button */}
        <div className="flex justify-center mb-6 md:mb-10">
          <a
            href="https://maps.app.goo.gl/g56cCZZ2bLE68cMU7"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#002F67] text-white font-medium px-5 md:px-6 py-2 md:py-3 rounded-xl text-sm md:text-base shadow-md hover:bg-blue-100 hover:text-gray-700 hover:border-1 hover:border-black transition"
          >
            Get Directions
          </a>
        </div>

        {/* Clinic Pictures */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-2">
          {[UniIMg1, UniIMg2, UniIMg3].map((img, i) => (
            <motion.div
              key={i}
              className="rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <img
                src={img}
                alt={`Clinic view ${i + 1}`}
                className="w-full h-64 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* About Section */}
      {/* <motion.section
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
                  EXL Education was founded by a group of high-achieving
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

            <motion.div
              className="relative"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="bg-blue-50 rounded-2xl p-8">
                <div className="bg-white rounded-xl p-6 shadow-lg flex flex-col items-center gap-6">
                 
                  <motion.img
                    src={AboutImg}
                    alt="Our Courses"
                    className="w-full h-64 object-cover rounded-xl shadow-md"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
     <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Our Courses
                    </h3>
                    <p className="text-gray-600 mb-6">
                      We offer comprehensive HSC programs designed to provide
                      students with the knowledge and skills needed for success.
                    </p>

                    <div className="space-y-3">
                      {[
                        "All HSC Subjects Covered",
                        "Small Class Sizes",
                        "Individual Attention",
                      ].map((point, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center justify-center gap-3"
                          initial={{ opacity: 0, y: 15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: i * 0.2 }}
                        >
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-700">{point}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section> */}

      {/* Core Values */}
      {/* <motion.section
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
      </motion.section> */}

      {/* Course Structure */}
      {/* <motion.section
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
              Comprehensive programs designed to maximise student potential and
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
      </motion.section> */}

      {/* Achievements */}
      {/* <motion.section
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
      </motion.section> */}

      {/* CTA Section */}
      <motion.section
        className="py-12 md:py-20 px-4 md:px-6 bg-[#002F67] text-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto text-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6">
              Ready to Excel in Your HSC?
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-blue-100 mb-6 md:mb-8 max-w-3xl mx-auto">
              Join our community of high-achieving students and experience the
              difference that expert guidance and comprehensive support can make
              in your academic journey.
            </p>
            <a href="/contact">
              <motion.button
                className="bg-white text-blue-900 px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-blue-50 transition-colors duration-300 inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Journey
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </motion.button>
            </a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
