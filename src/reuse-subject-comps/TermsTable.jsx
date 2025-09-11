import React from "react";
import { motion } from "framer-motion";

const TermsTable = ({ subjectName, termDetails }) => {
  const directions = ["-40", "40", "-40"]; // Top, Bottom, Top

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {termDetails.map((term, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: parseInt(directions[index % 3]) }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + index * 0.2,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="term-card group"
              >
                <div className="bg-gradient-to-br from-blue-400 to-blue-500 p-[1px] rounded-2xl">
                  <div className="bg-white rounded-2xl p-6 h-full">
                    <h3 className="text-2xl font-medium text-slate-800 mb-6 text-center tracking-wide">
                      {term.name}
                    </h3>
                    <ul className="space-y-2">
                      {term.lessons.map((lesson, idx) => (
                        <li
                          key={idx}
                          className="lesson-item rounded-lg cursor-pointer transition-all duration-300 hover:bg-blue-50 hover:translate-x-2 px-3 py-1"
                        >
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                            <span className="text-slate-700 font-light leading-relaxed">
                              {lesson}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
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
