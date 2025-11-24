import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Star } from "lucide-react";

// Import all available images

import learning from "../images/others/Three.png";

// All available images
const allImages = [learning];

// Function to get one random image
const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * allImages.length);
  return allImages[randomIndex];
};

const ExpertsSection = ({
  heading = "Teachers who care",
  description = "Our teachers genuinely care about each student's progress, taking the time to understand their school, strengths, and gaps. In our small classes, they provide clear explanations, targeted feedback, and steady support – whether a student is catching up, aiming for Band 6s, or pushing toward a 99+ ATAR.",
}) => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Initialize with random image
  useEffect(() => {
    setSelectedImage(getRandomImage());
  }, []);

  if (!selectedImage) {
    return null;
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 order-2 lg:order-1"
          >
            {/* Icon and Heading in same line */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#002f67] flex items-center justify-center shadow-md">
                <Star className="w-6 h-6 text-white" fill="white" />
              </div>
              <h2 className="text-3xl md:text-4xl  our-class-bold text-[#002f67] leading-tight">
                {heading}
              </h2>
            </div>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              {description}
            </p>
          </motion.div>

          {/* Right Side - Image with Overlay */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2"
          >
            {/* Image Container */}
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={selectedImage}
                alt="Teaching"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ExpertsSection;
