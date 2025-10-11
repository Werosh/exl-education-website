import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Users,
  Calendar,
  Target,
  Award,
  TrendingUp,
} from "lucide-react";
import smartBoardImage from "../images/others/smartBoard.jpeg";

const LittleDescription = () => {
  const features = [
    {
      icon: Target,
      title: "Adaptive Learning",
      description:
        "Curriculum adjusts to your pace and learning style for optimal understanding",
    },
    {
      icon: Award,
      title: "Expert Guidance",
      description:
        "One-on-one tutoring and personalized catch-up materials when needed",
    },
    {
      icon: TrendingUp,
      title: "Track Progress",
      description:
        "Monitor your improvement with detailed analytics and performance insights",
    },
  ];

  const cohorts = [
    { year: "2024", status: "Now Available", icon: BookOpen },
    { year: "2025", status: "Opening Soon", icon: Users },
    { year: "2026", status: "Early Access", icon: Calendar },
  ];

  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Header */}
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-black text-white text-xs font-bold tracking-widest">
                PERSONALIZED APPROACH
              </div>
              <h2 className="text-5xl font-bold text-black leading-tight">
                Learning That
                <span className="block" style={{ color: "#002f67" }}>
                  Adapts to You
                </span>
              </h2>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed border-l-4 border-black pl-6">
              Every student learns differently - and we understand that. Our
              adaptive curriculum adjusts to each student's pace and learning
              style, ensuring optimal comprehension and engagement throughout
              their educational journey.
            </p>

            {/* Feature Cards */}
            <div className="space-y-4 pt-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 p-4 border-2 border-gray-200 hover:border-black transition-all group"
                >
                  <div
                    className="w-12 h-12 flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: "#002f67" }}
                  >
                    <feature.icon
                      className="w-6 h-6 text-white"
                      strokeWidth={2}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Cohorts & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Cohort Cards */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold tracking-wider text-gray-500 mb-4">
                AVAILABLE COHORTS
              </h3>
              {cohorts.map((cohort, index) => (
                <Link key={index} to="/free-trail">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.02, y: -4 }}
                    className="relative overflow-hidden cursor-pointer"
                  >
                    <div className="flex items-center justify-between p-6 bg-white border-2 border-black hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div
                          className="w-14 h-14 flex items-center justify-center"
                          style={{ backgroundColor: "#002f67" }}
                        >
                          <cohort.icon
                            className="w-7 h-7 text-white"
                            strokeWidth={2}
                          />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-black">
                            {cohort.year}
                          </div>
                          <div className="text-sm text-gray-600">
                            {cohort.status}
                          </div>
                        </div>
                      </div>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-black font-bold"
                      >
                        →
                      </motion.div>
                    </div>
                    {index === 0 && (
                      <div
                        className="absolute top-0 right-0 px-3 py-1 text-xs font-bold text-white"
                        style={{ backgroundColor: "#002f67" }}
                      >
                        ACTIVE
                      </div>
                    )}
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* Smart Board Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="pt-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <img
                    src={smartBoardImage}
                    alt="Smart Board Teaching Session"
                    className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
              </div>
            </motion.div>

            {/* Call to Action */}
            <a href="/pricing">
              <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-black text-white font-bold text-lg hover:bg-gray-800 transition-colors"
                style={{ backgroundColor: "#002f67" }}
              >
                START YOUR JOURNEY TODAY
              </motion.button>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LittleDescription;
