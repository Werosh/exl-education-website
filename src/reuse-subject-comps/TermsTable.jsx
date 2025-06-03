import React from "react";

// Mock framer-motion for demonstration
const motion = {
  div: ({ children, initial, animate, transition, whileHover, ...props }) => (
    <div
      {...props}
      style={{
        ...props.style,
        animation: "fadeInUp 0.6s ease-out forwards",
        opacity: initial?.opacity || 1,
        transform: initial?.y ? `translateY(${initial.y}px)` : "translateY(0)",
      }}
    >
      {children}
    </div>
  ),
  h2: ({ children, ...props }) => (
    <h2
      {...props}
      style={{
        ...props.style,
        animation: "fadeIn 0.8s ease-out forwards",
      }}
    >
      {children}
    </h2>
  ),
  ul: ({ children, ...props }) => (
    <ul
      {...props}
      style={{
        ...props.style,
        animation: "slideIn 0.5s ease-out forwards",
      }}
    >
      {children}
    </ul>
  ),
};

const TermsTable = ({ subjectName, termDetails }) => {
  return (
    <>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .glass-effect {
          backdrop-filter: blur(20px);
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .term-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .term-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px rgba(59, 130, 246, 0.15);
        }
        .gradient-border {
          background: linear-gradient(135deg, #3b82f6, #60a5fa);
          padding: 1px;
          border-radius: 16px;
        }
        .lesson-item {
          transition: all 0.2s ease;
          padding: 8px 12px;
          margin: 4px 0;
          border-radius: 8px;
        }
        .lesson-item:hover {
          background: rgba(59, 130, 246, 0.08);
          transform: translateX(8px);
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-effect rounded-3xl p-8 w-full max-w-6xl mx-auto shadow-2xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.4 + index * 0.2,
                  ease: "easeOut",
                }}
                className="term-card group"
              >
                <div className="gradient-border">
                  <div className="bg-white rounded-2xl p-6 h-full">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mb-4 mx-auto shadow-lg">
                      <span className="text-white font-semibold text-lg">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="text-2xl font-medium text-slate-800 mb-6 text-center tracking-wide">
                      {term.name}
                    </h3>
                    <motion.ul
                      className="space-y-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      {term.lessons.map((lesson, idx) => (
                        <li
                          key={idx}
                          className="lesson-item rounded-lg cursor-pointer"
                        >
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                            <span className="text-slate-700 font-light leading-relaxed">
                              {lesson}
                            </span>
                          </div>
                        </li>
                      ))}
                    </motion.ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
              <span className="font-light tracking-wide">Ready to Begin</span>
              <div className="ml-2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default TermsTable;
