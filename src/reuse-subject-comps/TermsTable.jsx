import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const TermsTable = ({ subjectName, termDetails, subjectType }) => {
  const [expandedModules, setExpandedModules] = useState({});

  const toggleModule = (index) => {
    setExpandedModules((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const isPhysicsOrChemistry =
    subjectType === "physics" || subjectType === "chemistry";

  return (
    <>
      <div className="min-h-screen bg-white py-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="glass-effect rounded-3xl p-8 w-full max-w-6xl mx-auto shadow-2xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block">
              <motion.h2 className="text-4xl font-light text-slate-800 mb-2 tracking-wide">
                {subjectName}
              </motion.h2>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
              <p className="text-slate-600 mt-4 font-light text-lg">
                Course Structure Overview
              </p>
            </div>
          </motion.div>

          <div className="space-y-4">
            {termDetails.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="module-card"
              >
                <div className="bg-gradient-to-br from-blue-400 to-blue-500 p-[1px] rounded-2xl">
                  <div className="bg-white rounded-2xl overflow-hidden">
                    {/* Module Header */}
                    <motion.div
                      className="p-6 cursor-pointer hover:bg-blue-50 transition-colors duration-200"
                      onClick={() => toggleModule(index)}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <h3 className="text-xl font-medium text-slate-800 tracking-wide">
                            {module.name}
                          </h3>
                        </div>
                        <div className="flex items-center space-x-4">
                          {isPhysicsOrChemistry && module.startDate && (
                            <span className="text-sm text-slate-600 font-light">
                              Starts {module.startDate}
                            </span>
                          )}
                          <motion.div
                            animate={{
                              rotate: expandedModules[index] ? 180 : 0,
                            }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <ChevronDown className="w-5 h-5 text-slate-600" />
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Collapsible Content */}
                    <AnimatePresence>
                      {expandedModules[index] && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6">
                            <ul className="space-y-2">
                              {module.lessons.map((lesson, lessonIndex) => (
                                <motion.li
                                  key={lessonIndex}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    duration: 0.3,
                                    delay: lessonIndex * 0.05,
                                  }}
                                  className="lesson-item rounded-lg transition-all duration-300 hover:bg-blue-50 hover:translate-x-2 px-3 py-2"
                                >
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                                      <span className="text-slate-700 font-light leading-relaxed">
                                        {typeof lesson === "string"
                                          ? lesson
                                          : lesson.name}
                                      </span>
                                    </div>
                                    {isPhysicsOrChemistry && lesson.date && (
                                      <span className="text-sm text-slate-500 font-light">
                                        {lesson.date}
                                      </span>
                                    )}
                                  </div>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          ></motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default TermsTable;
