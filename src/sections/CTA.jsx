import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Download, FerrisWheel } from "lucide-react";

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

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
const CTA = () => {
  return (
    <div>
      {/* CTA Section */}
      <motion.section
        className="py-20 px-6 bg-[#002F67] text-white mt-10 z-50"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto text-center ">
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Excel in Your HSC?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join our community of high-achieving students and experience the
              difference that expert guidance and comprehensive support can make
              in your academic journey.
            </p>
            <a href="/contact">
              <motion.button
                className="bg-white text-blue-900 px-8 py-4  rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors duration-300 inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default CTA;
