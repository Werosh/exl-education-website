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
      id: 4,
      name: "William Leong",
      subject: "Chemistry & English",
      score: "99.70",
      degree: "B Commerce/B Laws @ USYD",
      experience: "96 in Chemistry, 90 in English Adv",
      specialization: "Chemistry and English Teacher",
      image:
        "https://static.wixstatic.com/media/16dc17_06519fc0f0504b6fa9972e019be19fdf~mv2.jpg/v1/crop/x_10,y_0,w_1786,h_1786/fill/w_187,h_187,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_1662_JPG.jpg",
    },
    {
      id: 1,
      name: "Matthew Chen",
      subject: "Chemistry",
      score: "99.75",
      degree: "B DentHSc/M Dentistry @ Griffith",
      experience: "97 in Chemistry, Rank 2 in NBHS",
      specialization: "Chemistry Teacher",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Yu-Tang Lin",
      subject: "Chemistry & Math",
      score: "99.15",
      degree: "B Actuarial/B Computer Sci @ UNSW",
      experience: "93 in Chemistry, 94 in Math Ext 1",
      specialization: "Chemistry and Math Teacher",
      image:
        "https://static.wixstatic.com/media/16dc17_b988e22837804df3b9bd916015def8c6~mv2.jpg/v1/crop/x_67,y_0,w_1823,h_1823/fill/w_187,h_187,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_1681_JPG.jpg",
    },
    {
      id: 3,
      name: "Nicholas Ip",
      subject: "Chemistry & Math",
      score: "99.45",
      degree: "B Physiotherapy @ USYD",
      experience: "94 in Chemistry, 97 in Math Ext 1",
      specialization: "Chemistry and Math Teacher",
      image:
        "https://static.wixstatic.com/media/16dc17_81793bbcabbb41b4b759fdce9fd76dea~mv2.jpg/v1/crop/x_55,y_0,w_1824,h_1824/fill/w_187,h_187,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_1675_JPG.jpg",
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
      const cardWidth = 320;
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
      y: -10,
      scale: 1.02,
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
    <section className="relative py-20 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen overflow-hidden">
      {/* Decorative Background - Calm & Curved Only */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Bottom right soft blob */}
        <div className="absolute bottom-[-60px] right-[-60px] w-72 h-72 bg-green-300 rounded-[50%] z-[-1]" />

        {/* Top right rounded shape */}
        <div className="absolute top-[25%] right-[-40px] w-48 h-48 bg-yellow-200 rounded-[50%] z-[-1]" />

        {/* Bottom left soft rounded shape */}
        <div className="absolute bottom-[-40px] left-[-40px] w-40 h-40 bg-sky-900 rounded-[50%] z-[-1]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Award className="w-4 h-4" />
            Excellence in Education
          </motion.div>

          <motion.h2
            className="text-5xl font-bold text-gray-600 mb-6"
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

        {/* Scrollable Cards + Arrows */}
        <div className="relative">
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
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={teacher.image}
                      alt={teacher.name}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
