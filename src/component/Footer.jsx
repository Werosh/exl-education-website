import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUp,
  Calendar,
  Award,
  Users,
  Clock,
} from "lucide-react";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const socialVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  },
};

const floatingVariants = {
  float: {
    y: [-5, 5, -5],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Courses", href: "/courses" },
    { name: "Success Stories", href: "/testimonials" },
    { name: "Free Resources", href: "/resources" },
    { name: "Book a Trial", href: "/book-trial" },
  ];

  const subjects = [
    { name: "Mathematics", href: "/courses/mathematics" },
    { name: "Chemistry", href: "/courses/chemistry" },
    { name: "Physics", href: "/courses/physics" },
    { name: "HSC Preparation", href: "/courses/hsc-prep" },
  ];

  const contactInfo = [
    { icon: Phone, text: "0431498913", href: "tel:+0431498913" }, //+61 0 4 3149 8913
    {
      icon: Mail,
      text: "admin@exleducation.com.au",
      href: "mailto:admin@exleducation.com.au",
    },
    { icon: MapPin, text: "Sydney, NSW Australia", href: "#" },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/people/EXL-Education/61561158556489/",
      color: "hover:text-blue-300",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/exl.education/",
      color: "hover:text-pink-300",
    },
  ];

  const stats = [
    { icon: Users, number: "2,500+", label: "Students Helped" },
    { icon: Award, number: "99.05", label: "Median ATAR" },
    { icon: Clock, number: "10+", label: "Years Experience" },
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
      {/* Curved Line Decorations at Top */}
      <div className="absolute top-0 left-0 w-full h-20 overflow-hidden">
        {/* Primary Curve */}
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            d="M0,50 Q300,10 600,50 T1200,50 L1200,0 L0,0 Z"
            fill="rgba(59, 130, 246, 0.3)"
          />
        </svg>

        {/* Secondary Curve */}
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.5, ease: "easeInOut", delay: 0.3 }}
            d="M0,80 Q400,20 800,60 T1200,40 L1200,0 L0,0 Z"
            fill="rgba(147, 197, 253, 0.2)"
          />
        </svg>

        {/* Tertiary Curve */}
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut", delay: 0.6 }}
            d="M0,30 Q200,70 500,40 Q800,10 1200,60 L1200,0 L0,0 Z"
            fill="rgba(191, 219, 254, 0.15)"
          />
        </svg>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={floatingVariants.float}
          className="absolute top-32 left-10 w-32 h-32 bg-blue-400 rounded-full opacity-10"
        />
        <motion.div
          animate={{
            ...floatingVariants.float,
            transition: { ...floatingVariants.float.transition, delay: 1 },
          }}
          className="absolute bottom-32 right-16 w-24 h-24 bg-blue-300 rounded-full opacity-15"
        />
        <motion.div
          animate={{
            ...floatingVariants.float,
            transition: { ...floatingVariants.float.transition, delay: 2 },
          }}
          className="absolute top-1/2 left-1/3 w-16 h-16 bg-blue-200 rounded-full opacity-20"
        />

        {/* Additional decorative elements */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 right-1/4 w-8 h-8 border border-blue-300 opacity-20 rounded-full"
        />

        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 left-1/5 w-12 h-12 border-2 border-blue-400 opacity-15 rounded-full"
        />
      </div>

      {/* Main Footer Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-6 py-16 pt-24 relative z-10"
      >
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center space-x-3 mb-6"
            >
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                className="w-12 h-12 bg-gradient-to-br from-blue-300 to-blue-500 rounded-xl flex items-center justify-center shadow-lg"
              >
                <BookOpen className="w-7 h-7 text-white" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                  EXL Education
                </h3>
                <p className="text-sm text-blue-200">Excellence in Learning</p>
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-blue-100 mb-6 leading-relaxed"
            >
              EXL Education is a NSW-based Tuition Centre focused on High School
              Education, providing a premier combination of resources and
              teachers.
            </motion.p>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-3">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="flex items-center space-x-3 text-blue-200 hover:text-white transition-all duration-200 group"
                >
                  <motion.div
                    whileHover={{ rotate: 5 }}
                    className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-200"
                  >
                    <contact.icon className="w-4 h-4" />
                  </motion.div>
                  <span className="text-sm">{contact.text}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <div className="w-2 h-2 bg-blue-300 rounded-full mr-3"></div>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-blue-200 hover:text-white transition-all duration-200 text-sm flex items-center group"
                  >
                    <motion.span
                      initial={{ width: 0 }}
                      whileHover={{ width: 8 }}
                      className="h-0.5 bg-blue-300 mr-0 group-hover:mr-2 transition-all duration-200"
                    />
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Subjects */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <div className="w-2 h-2 bg-blue-300 rounded-full mr-3"></div>
              Our Subjects
            </h4>
            <ul className="space-y-3">
              {subjects.map((subject, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <motion.a
                    href={subject.href}
                    whileHover={{ x: 5 }}
                    className="text-blue-200 hover:text-white transition-all duration-200 text-sm flex items-center group"
                  >
                    <motion.span
                      initial={{ width: 0 }}
                      whileHover={{ width: 8 }}
                      className="h-0.5 bg-blue-300 mr-0 group-hover:mr-2 transition-all duration-200"
                    />
                    {subject.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter & Social */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <div className="w-2 h-2 bg-blue-300 rounded-full mr-3"></div>
              Stay Connected
            </h4>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <p className="text-sm text-blue-200 mb-4">
                Follow us on social media
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    target="_blank"
                    key={index}
                    href={social.href}
                    variants={socialVariants}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center text-blue-200 ${social.color} transition-all duration-200 shadow-md hover:shadow-lg border border-blue-600 hover:bg-blue-600`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="border-t border-blue-700 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              variants={itemVariants}
              className="text-sm text-blue-200 text-center md:text-left"
            >
              © 2025 EXL Education. All rights reserved.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-4"
            >
              <p className="text-sm text-blue-200">
                Crafted with ❤️ by{" "}
                <a
                  href="https://www.nextgenwebsites.info/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-300"
                >
                  NextGen Websites
                </a>
              </p>

              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-400 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
