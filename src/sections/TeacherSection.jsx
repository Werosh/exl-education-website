import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Award,
  Star,
  BookOpen,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const TeacherSection = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const teachers = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      subject: "Mathematics",
      score: "99.8",
      degree: "Ph.D Mathematics",
      experience: "12+ years",
      specialization: "Advanced Calculus & Statistics",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Prof. Michael Rodriguez",
      subject: "Physics",
      score: "99.6",
      degree: "Ph.D Physics",
      experience: "15+ years",
      specialization: "Quantum Mechanics & Thermodynamics",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Dr. Emily Watson",
      subject: "Chemistry",
      score: "99.9",
      degree: "Ph.D Chemistry",
      experience: "10+ years",
      specialization: "Organic & Analytical Chemistry",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
    },
    {
      id: 4,
      name: "Dr. James Liu",
      subject: "Biology",
      score: "99.7",
      degree: "Ph.D Biology",
      experience: "14+ years",
      specialization: "Molecular Biology & Genetics",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    },
    {
      id: 5,
      name: "Dr. Amanda Foster",
      subject: "English Literature",
      score: "99.5",
      degree: "Ph.D English Literature",
      experience: "11+ years",
      specialization: "Contemporary & Classical Literature",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    },
    {
      id: 6,
      name: "Prof. David Kim",
      subject: "Computer Science",
      score: "99.4",
      degree: "Ph.D Computer Science",
      experience: "13+ years",
      specialization: "AI & Machine Learning",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    },
    {
      id: 7,
      name: "Dr. Lisa Thompson",
      subject: "Psychology",
      score: "99.3",
      degree: "Ph.D Psychology",
      experience: "16+ years",
      specialization: "Cognitive & Behavioral Psychology",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face",
    },
    {
      id: 8,
      name: "Prof. Robert Wilson",
      subject: "History",
      score: "99.2",
      degree: "Ph.D History",
      experience: "18+ years",
      specialization: "Modern World History",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face",
    },
  ];

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = 320; // Card width + gap
      const scrollAmount = cardWidth * 2;
      const newScrollLeft =
        direction === "left"
          ? scrollRef.current.scrollLeft - scrollAmount
          : scrollRef.current.scrollLeft + scrollAmount;

      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const scoreVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.5,
        ease: "backOut",
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Award className="w-4 h-4" />
            Excellence in Education
          </motion.div>

          <motion.h2
            className="text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Meet Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              {" "}
              Expert{" "}
            </span>
            Educators
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our distinguished faculty combines academic excellence with
            practical expertise, delivering personalized education that
            transforms learning experiences and unlocks student potential.
          </motion.p>
        </motion.div>

        {/* Navigation Container */}
        <div className="relative">
          {/* Left Arrow */}
          <motion.button
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center transition-all duration-300 ${
              canScrollLeft
                ? "text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200"
                : "text-gray-300 cursor-not-allowed"
            }`}
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            whileHover={canScrollLeft ? { scale: 1.1 } : {}}
            whileTap={canScrollLeft ? { scale: 0.95 } : {}}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          {/* Right Arrow */}
          <motion.button
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center transition-all duration-300 ${
              canScrollRight
                ? "text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200"
                : "text-gray-300 cursor-not-allowed"
            }`}
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            whileHover={canScrollRight ? { scale: 1.1 } : {}}
            whileTap={canScrollRight ? { scale: 0.95 } : {}}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          {/* Scrollable Teachers Container */}
          <div
            ref={scrollRef}
            className="overflow-x-auto scrollbar-hide pb-4 mx-12"
            onScroll={checkScrollButtons}
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <div className="flex gap-6 pb-2" style={{ width: "max-content" }}>
              {teachers.map((teacher, index) => (
                <motion.div
                  key={teacher.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group flex-shrink-0"
                  style={{ width: "300px" }}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Image Section */}
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={teacher.image}
                      alt={teacher.name}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Score Badge */}
                    <motion.div
                      className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg"
                      variants={scoreVariants}
                    >
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-bold text-gray-900">
                          {teacher.score}
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <motion.h3
                      className="text-xl font-bold text-gray-900 mb-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                    >
                      {teacher.name}
                    </motion.h3>

                    <motion.div
                      className="flex items-center gap-2 mb-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.4 }}
                      viewport={{ once: true }}
                    >
                      <BookOpen className="w-4 h-4 text-blue-600" />
                      <span className="text-blue-600 font-semibold">
                        {teacher.subject}
                      </span>
                    </motion.div>

                    <motion.div
                      className="space-y-2 mb-4"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                    >
                      <p className="text-sm text-gray-600 font-medium">
                        {teacher.degree}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Users className="w-3 h-3" />
                        <span>{teacher.experience}</span>
                      </div>
                    </motion.div>

                    <motion.div
                      className="border-t pt-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.6 }}
                      viewport={{ once: true }}
                    >
                      <p className="text-xs text-gray-500 font-medium mb-2">
                        SPECIALIZATION
                      </p>
                      <p className="text-sm text-gray-700">
                        {teacher.specialization}
                      </p>
                    </motion.div>

                    {/* Hover Effect Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      initial={false}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: Math.ceil(teachers.length / 3) }).map(
            (_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-gray-300 transition-colors duration-300"
              />
            )
          )}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default TeacherSection;
