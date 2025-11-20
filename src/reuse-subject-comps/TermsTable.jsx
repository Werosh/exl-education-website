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
      <div className="bg-white px-4 md:px-6 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="glass-effect rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 w-full max-w-6xl mx-auto shadow-2xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <div className="inline-block">
              <motion.h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-slate-800 mb-2 tracking-wide">
                {subjectName}
              </motion.h2>
              <div className="h-1 w-20 md:w-24 bg-gradient-to-r from-[#002f67] to-blue-600 mx-auto rounded-full"></div>
              <p className="text-slate-600 mt-3 md:mt-4 font-light text-base md:text-lg">
                Course Structure Overview
              </p>
            </div>
          </motion.div>

          <div className="space-y-3 md:space-y-4">
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
                <div className="bg-gradient-to-br from-[#002f67] to-[#002f67] p-[1px] rounded-xl md:rounded-2xl">
                  <div className="bg-white rounded-xl md:rounded-2xl overflow-hidden">
                    {/* Module Header */}
                    <motion.div
                      className="p-4 md:p-6 cursor-pointer hover:bg-blue-50 transition-colors duration-200"
                      onClick={() => toggleModule(index)}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center flex-1 min-w-0">
                          <h3 className="text-base md:text-lg lg:text-xl font-medium text-slate-800 tracking-wide truncate">
                            {module.name}
                          </h3>
                        </div>
                        <div className="flex items-center space-x-2 md:space-x-4 flex-shrink-0">
                          {isPhysicsOrChemistry && module.startDate && (
                            <span className="text-xs md:text-sm text-slate-600 font-light hidden sm:inline">
                              Starts {module.startDate}
                            </span>
                          )}
                          <motion.div
                            animate={{
                              rotate: expandedModules[index] ? 180 : 0,
                            }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-slate-600" />
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
                          <div className="px-4 md:px-6 pb-4 md:pb-6">
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
                                  className="lesson-item rounded-lg transition-all duration-300 hover:bg-blue-50 hover:translate-x-1 md:hover:translate-x-2 px-2 md:px-3 py-1.5 md:py-2"
                                >
                                  <div className="flex items-center justify-between gap-2">
                                    <div className="flex items-center flex-1 min-w-0">
                                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#002f67] rounded-full mr-2 md:mr-3 flex-shrink-0"></div>
                                      <span className="text-sm md:text-base text-slate-700 font-light leading-relaxed">
                                        {typeof lesson === "string"
                                          ? lesson
                                          : lesson.name}
                                      </span>
                                    </div>
                                    {isPhysicsOrChemistry && lesson.date && (
                                      <span className="text-xs md:text-sm text-slate-500 font-light flex-shrink-0">
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
