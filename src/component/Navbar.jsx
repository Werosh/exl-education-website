import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import LogoImg from "../assets/logo.png";

import {
  ChevronDown,
  Menu,
  X,
  Calendar,
  DollarSign,
  Phone,
  Mail,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Trigger loading animation
    const timer = setTimeout(() => setIsLoaded(true), 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const mathsSubjects = [
    { name: "Junior Maths (Years 7 to 10)", href: "/courses/junior-maths" },
    { name: "Year 11 Maths Adv.", href: "/courses/year-11-adv-maths" },
    { name: "Year 11 Maths Ext", href: "/courses/year-11-ext-maths" },
    { name: "Year 12 Maths Adv.", href: "/courses/year-12-adv-maths" },
    { name: "Year 12 Maths Ext 1", href: "/courses/year-12-ext1-maths" },
  ];

  const chemistrySubjects = [
    { name: "Year 11 Chemistry", href: "/courses/year-11-chem" },
    { name: "Year 12 Chemistry", href: "/courses/year-12-chem" },
  ];

  const physicsSubjects = [
    { name: "Year 11 Physics", href: "/courses/year-11-physics" },
    { name: "Year 12 Physics", href: "/courses/year-12-physics" },
  ];

  const handleDropdownEnter = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobile = () => {
    setIsOpen(!isOpen);
  };

  // Animation variants
  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const logoVariants = {
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

  const navItemVariants = {
    hidden: { y: -20, opacity: 0 },
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

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
  };

  const dropdownItemVariants = {
    hidden: { x: -10, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  const mobileMenuVariants = {
    hidden: {
      height: 0,
      opacity: 0,
    },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        height: {
          type: "spring",
          stiffness: 300,
          damping: 30,
        },
        opacity: {
          duration: 0.3,
        },
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: {
        height: {
          duration: 0.3,
        },
        opacity: {
          duration: 0.2,
        },
      },
    },
  };

  const mobileItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };
  const navigate = useNavigate();

  const handleCourseNavigation = () => {
    navigate("/courses");
  };

  return (
    <motion.nav
      initial="hidden"
      animate={isLoaded ? "visible" : "hidden"}
      variants={navbarVariants}
      className={`fixed w-full top-0 z-50 transition-all duration-300  ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
      }`}
    >
      <div className="max-w-7xl  mx-auto h-25  sm:px-6 lg:px-8 items-center justify-center ">
        <div className="flex justify-between items-center h-16 ">
          {/* Logo */}
          <motion.div variants={navItemVariants} className="flex-shrink-0">
            <a href="/" className="flex items-center group">
              <motion.div
                variants={logoVariants}
                className=" w-auto max-w-[150px]  rounded-lg overflow-hidden flex items-center justify-center mt-8  "
              >
                <img
                  src={LogoImg}
                  alt="EXL Education Logo"
                  className="h-full w-auto max-w-full object-contain"
                />
              </motion.div>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            variants={navItemVariants}
            className="hidden md:flex items-center mt-6 space-x-8 justify-center"
          >
            <motion.a
              variants={navItemVariants}
              whileHover={{ y: -2 }}
              href="/about"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </motion.a>

            {/* Courses Dropdown */}
            <motion.div
              variants={navItemVariants}
              className="relative"
              onMouseEnter={() => handleDropdownEnter("courses")}
              onMouseLeave={handleDropdownLeave}
            >
              <motion.button
                whileHover={{ y: -2 }}
                className="flex items-center text-gray-700  hover:text-blue-600 font-medium transition-colors duration-200 relative group"
                onClick={handleCourseNavigation}
              >
                Courses
                <motion.div
                  animate={{ rotate: activeDropdown === "courses" ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="ml-1 w-4 h-4" />
                </motion.div>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </motion.button>

              {/* Courses Mega Dropdown */}
              <AnimatePresence>
                {activeDropdown === "courses" && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
                    style={{ minWidth: "600px" }}
                  >
                    <div className="p-6">
                      <div className="grid grid-cols-3 gap-6">
                        {/* Mathematics */}
                        <motion.div variants={dropdownItemVariants}>
                          <h3 className="font-semibold text-[#002f67] mb-3 flex items-center">
                            <div className="w-2 h-2 bg-[#002f67] rounded-full mr-2"></div>
                            Mathematics
                          </h3>
                          <ul className="space-y-2">
                            {mathsSubjects.map((subject, index) => (
                              <motion.li
                                key={index}
                                variants={dropdownItemVariants}
                                whileHover={{ x: 5 }}
                              >
                                <a
                                  href={subject.href}
                                  className="text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg transition-all duration-200 block"
                                >
                                  {subject.name}
                                </a>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>

                        {/* Chemistry */}
                        <motion.div variants={dropdownItemVariants}>
                          <h3 className="font-semibold text-[#002f67] mb-3 flex items-center">
                            <div className="w-2 h-2 bg-[#002f67] rounded-full mr-2"></div>
                            Chemistry
                          </h3>
                          <ul className="space-y-2">
                            {chemistrySubjects.map((subject, index) => (
                              <motion.li
                                key={index}
                                variants={dropdownItemVariants}
                                whileHover={{ x: 5 }}
                              >
                                <a
                                  href={subject.href}
                                  className="text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg transition-all duration-200 block"
                                >
                                  {subject.name}
                                </a>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>

                        {/* Physics */}
                        <motion.div variants={dropdownItemVariants}>
                          <h3 className="font-semibold text-[#002f67] mb-3 flex items-center">
                            <div className="w-2 h-2 bg-[#002f67] rounded-full mr-2"></div>
                            Physics
                          </h3>
                          <ul className="space-y-2">
                            {physicsSubjects.map((subject, index) => (
                              <motion.li
                                key={index}
                                variants={dropdownItemVariants}
                                whileHover={{ x: 5 }}
                              >
                                <a
                                  href={subject.href}
                                  className="text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg transition-all duration-200 block"
                                >
                                  {subject.name}
                                </a>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      </div>

                      <motion.div
                        variants={dropdownItemVariants}
                        className="mt-6 pt-6 border-t border-gray-100"
                      >
                        <a
                          href="/courses"
                          className="inline-flex items-center text-[#002f67] hover:text-blue-700 font-medium"
                        >
                          View All Courses
                          <ChevronDown className="ml-1 w-4 h-4 rotate-[-90deg]" />
                        </a>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.a
              variants={navItemVariants}
              whileHover={{ y: -2 }}
              href="/calendar"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group flex items-center"
            >
              <Calendar className="w-4 h-4 mr-1" />
              Timetable
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </motion.a>

            <motion.a
              variants={navItemVariants}
              whileHover={{ y: -2 }}
              href="/pricing"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group flex items-center"
            >
              <DollarSign className="w-4 h-4 mr-1" />
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </motion.a>

            <motion.a
              variants={navItemVariants}
              whileHover={{ y: -2 }}
              href="/contact"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group flex items-center"
            >
              <Mail className="w-4 h-4 mr-1" />
              Contact Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </motion.a>

            {/* CTA Button */}
            <motion.a
              variants={navItemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="/free-trail"
              className="bg-gradient-to-r from-[#002F67] to-[#002F67] text-white px-6 py-2.5 rounded-full font-medium hover:from-[#011f42] hover:to-[#011f42] transition-all duration-200 shadow-lg hover:shadow-xl flex items-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Book Free Trial
            </motion.a>
          </motion.div>

          {/* Mobile menu button */}
          <motion.div variants={navItemVariants} className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMobile}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 p-2 "
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden overflow-hidden bg-white rounded-lg shadow-lg mt-2"
            >
              <div className="px-2 pt-4 pb-3 space-y-2">
                <motion.a
                  variants={mobileItemVariants}
                  whileTap={{ scale: 0.95 }}
                  href="/about"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                >
                  About
                </motion.a>

                {/* Mobile Courses */}
                <motion.div variants={mobileItemVariants}>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === "mobile-courses"
                          ? null
                          : "mobile-courses"
                      )
                    }
                    className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                  >
                    Courses
                    <motion.div
                      animate={{
                        rotate: activeDropdown === "mobile-courses" ? 180 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {activeDropdown === "mobile-courses" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="ml-4 mt-2 space-y-1 overflow-hidden"
                      >
                        <motion.div
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.1 }}
                          className="py-2"
                        >
                          <h4 className="text-sm font-semibold text-blue-700 mb-2">
                            Mathematics
                          </h4>
                          {mathsSubjects.map((subject, index) => (
                            <motion.a
                              key={index}
                              initial={{ x: -10, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: 0.2 + index * 0.05 }}
                              href={subject.href}
                              className="block px-3 py-1 text-sm text-gray-600 hover:text-blue-600"
                            >
                              {subject.name}
                            </motion.a>
                          ))}
                        </motion.div>
                        <motion.div
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className="py-2"
                        >
                          <h4 className="text-sm font-semibold text-blue-700 mb-2">
                            Chemistry
                          </h4>
                          {chemistrySubjects.map((subject, index) => (
                            <motion.a
                              key={index}
                              initial={{ x: -10, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: 0.4 + index * 0.05 }}
                              href={subject.href}
                              className="block px-3 py-1 text-sm text-gray-600 hover:text-blue-600"
                            >
                              {subject.name}
                            </motion.a>
                          ))}
                        </motion.div>
                        <motion.div
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="py-2"
                        >
                          <h4 className="text-sm font-semibold text-blue-700 mb-2">
                            Physics
                          </h4>
                          {physicsSubjects.map((subject, index) => (
                            <motion.a
                              key={index}
                              initial={{ x: -10, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: 0.5 + index * 0.05 }}
                              href={subject.href}
                              className="block px-3 py-1 text-sm text-gray-600 hover:text-blue-600"
                            >
                              {subject.name}
                            </motion.a>
                          ))}
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                <motion.a
                  variants={mobileItemVariants}
                  whileTap={{ scale: 0.95 }}
                  href="/calendar"
                  className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Timetable
                </motion.a>

                <motion.a
                  variants={mobileItemVariants}
                  whileTap={{ scale: 0.95 }}
                  href="/pricing"
                  className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                >
                  <DollarSign className="w-4 h-4 mr-2" />
                  Pricing
                </motion.a>

                <motion.a
                  variants={mobileItemVariants}
                  whileTap={{ scale: 0.95 }}
                  href="/contact"
                  className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Us
                </motion.a>

                <motion.div variants={mobileItemVariants} className="pt-4">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="/free-trail"
                    className="flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Book Free Trial
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
