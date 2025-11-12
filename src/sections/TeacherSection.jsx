import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Award,
  Star,
  BookOpen,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import WillImg from "../images/teachers/WillStand.jpeg";
import YutangImg from "../images/teachers/yutang_lin.jpeg";
import NicholasImg from "../images/teachers/nicholas_ip.jpeg";
import AnnaImg from "../images/teachers/anna.jpeg";
import TishaanImg from "../images/teachers/tishan.png";

const TeacherSection = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const teachers = [
    {
      id: 3,
      name: "Yu-Tang Lin",
      subjects: ["Chemistry", "Mathematics"],
      score: "99.15",
      degree: "B Actuarial/B Computer Sci @ UNSW",
      results: [
        "93 in Chemistry, 94 in Physics",
        "94 in Math Ext 1, 95 in Math Ext 2",
      ],
      image: YutangImg,
    },
    {
      id: 5,
      name: "Anna Jin",
      subjects: ["Mathematics", "Biology"],
      score: "99.35",
      degree: "B. Exercise Sci/ M. Physio @ UNSW",
      results: [
        "97 in Math Ext 1, 94 in Math Ext 2 ",
        "96 in Biology, 95 in Chemistry",
      ],
      image: AnnaImg,
    },
    {
      id: 6,
      name: "Tishaan Siriwardana",
      subjects: ["Chemistry", "Physics"],
      score: "99.60",
      degree: "Medicine @ UoNewcastle",
      results: [
        "97 in Chemistry, 94 in Physics",
        "94 in Math Ext 1, 94 in Math Ext 2",
      ],
      image: TishaanImg,
    },
    {
      id: 1,
      name: "William Leong",
      subjects: ["Chemistry", "Mathematics"],
      score: "99.70",
      degree: "B Commerce/B Laws @ USYD",
      results: [
        "96 in Chemistry, 90 in Physics",
        "92 in Math Ext 1, 88 in Math Ext 2",
      ],
      image: WillImg,
    },
    {
      id: 4,
      name: "Nicholas Ip",
      subjects: ["Chemistry", "Mathematics"],
      score: "99.45",
      degree: "B Physiotherapy @ USYD",
      results: [
        "94 in Chemistry, 91 in Physics",
        "97 in Math Ext 1, 95 in Math Ext 2",
      ],
      image: NicholasImg,
    },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = isMobile ? 280 : 320;
      const scrollAmount = isMobile ? cardWidth + 16 : cardWidth * 2;
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
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      y: isMobile ? -5 : -10,
      scale: isMobile ? 1.01 : 1.02,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const scoreVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { delay: 0.3, duration: 0.5, ease: "backOut" },
    },
  };

  return (
    <section className="relative py-12 md:py-20 min-h-screen overflow-hidden">
      {/* Decorative Background - Responsive */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Mobile: Smaller, repositioned shapes */}
        <div className="absolute bottom-0 md:bottom-0 right-[-30px] md:right-[-80px] w-32 h-32 md:w-72 md:h-72 bg-[#f6b3c4]/60 rounded-[50%] z-[-1]" />
        <div className="absolute top-[20%] md:top-[25%] right-[-20px] md:right-[-40px] w-24 h-24 md:w-48 md:h-48 bg-[#c8e3ff] rounded-[50%] z-[-1]" />
        <div className="absolute bottom-0 md:bottom-0 left-[-20px] md:left-[-40px] w-20 h-20 md:w-40 md:h-40 bg-sky-900 rounded-[50%] z-[-1]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 z-10">
        {/* Header Section - Mobile Responsive */}
        <motion.div
          className="text-center mb-8 md:mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-gray-600 mb-4 md:mb-6 px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            style={{ fontWeight: 900 }}
          >
            Meet Our
            <span className="text-[#002F67] " style={{ fontWeight: 900 }}>
              {" "}
              Teachers{" "}
            </span>
          </motion.h2>

          <motion.p
            className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            We’re{" "}
            <span className="text-[#b19ab2] font-extrabold span-text">
              high achievers
            </span>{" "}
            AND{" "}
            <span className="text-[#b19ab2] font-extrabold span-text">
              passionate educators
            </span>
            . Our tutors know what it takes to succeed. They don’t just teach -
            they mentor, motivate, and guide students towards their own academic
            and personal goals.
          </motion.p>
        </motion.div>

        {/* Scrollable Cards + Arrows - Mobile Responsive */}
        <div className="relative ">
          {/* Desktop arrows - hidden on mobile */}
          <motion.button
            className={`hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 items-center justify-center transition-all duration-300 ${
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

          <motion.button
            className={`hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 items-center justify-center transition-all duration-300 ${
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

          {/* Mobile scroll buttons - positioned below header */}
          <div className="flex md:hidden justify-center gap-4 mb-6">
            <motion.button
              className={`w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center transition-all duration-300 ${
                canScrollLeft
                  ? "text-gray-700 active:bg-blue-50 active:text-blue-600"
                  : "text-gray-300 cursor-not-allowed"
              }`}
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              whileTap={canScrollLeft ? { scale: 0.95 } : {}}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            <motion.button
              className={`w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center transition-all duration-300 ${
                canScrollRight
                  ? "text-gray-700 active:bg-blue-50 active:text-blue-600"
                  : "text-gray-300 cursor-not-allowed"
              }`}
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              whileTap={canScrollRight ? { scale: 0.95 } : {}}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          <div
            ref={scrollRef}
            className="overflow-x-auto scrollbar-hide pb-4 md:mx-12  py-6 "
            onScroll={checkScrollButtons}
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <div
              className="flex gap-4 md:gap-6 pb-2 px-4 md:px-0"
              style={{ width: "max-content" }}
            >
              {teachers.map((teacher, index) => (
                <motion.div
                  key={teacher.id}
                  className="bg-white rounded-2xl hover:rounded-2xl  shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group flex-shrink-0"
                  style={{ width: isMobile ? "280px" : "300px" }}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={teacher.image}
                      alt={teacher.name}
                      className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <motion.div
                      className="absolute top-3 md:top-4 right-3 md:right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 md:px-4 py-2 shadow-lg"
                      variants={scoreVariants}
                    >
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 fill-current" />
                        <span className="text-sm md:text-base font-bold text-gray-900">
                          {teacher.score}
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  <div className="p-4 md:p-6">
                    <motion.h3
                      className="text-lg md:text-xl font-bold text-gray-900 mb-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                    >
                      {teacher.name}
                    </motion.h3>

                    {/* Degree */}
                    <motion.div
                      className="mb-3"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.4 }}
                      viewport={{ once: true }}
                    >
                      <p className="text-xs md:text-sm text-gray-600 font-medium leading-tight">
                        {teacher.degree}
                      </p>
                    </motion.div>

                    {/* Subjects */}
                    <motion.div
                      className="mb-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-3 h-3 md:w-4 md:h-4 text-[#002F67]" />
                        <span className="text-xs md:text-sm text-gray-700 font-medium">
                          {teacher.subjects.join(" & ")}
                        </span>
                      </div>
                    </motion.div>

                    {/* Results */}
                    <motion.div
                      className="mb-4"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.6 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="w-3 h-3 md:w-4 md:h-4 text-[#002F67]" />
                        <span className="text-xs md:text-sm text-blue-900 font-semibold">
                          Results
                        </span>
                      </div>
                      <div className="ml-6 space-y-1">
                        {teacher.results.map((result, resultIndex) => (
                          <p
                            key={resultIndex}
                            className="text-xs md:text-sm text-gray-600 leading-tight"
                          >
                            {result}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator Dots - Mobile Responsive */}
        <div className="flex justify-center mt-6 md:mt-8 gap-2">
          {Array.from({
            length: Math.ceil(teachers.length / (isMobile ? 1 : 3)),
          }).map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-gray-300 transition-colors duration-300"
            />
          ))}
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
