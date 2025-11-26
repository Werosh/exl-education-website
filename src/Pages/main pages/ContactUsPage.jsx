import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPinHouse,
  Send,
  User,
  MessageSquare,
  GraduationCap,
  Calendar,
} from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    course: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const courses = [
    {
      category: "Mathematics",
      items: [
        "Junior Maths (Years 7, 8, 10)",
        "Year 11 Advanced Maths",
        "Year 11 Extension Maths",
        "Year 12 Advanced Maths",
        "Year 12 Extension 1 Maths",
      ],
    },
    {
      category: "Chemistry",
      items: ["Year 11 Chemistry", "Year 12 Chemistry"],
    },
    { category: "Physics", items: ["Year 11 Physics", "Year 12 Physics"] },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    // EmailJS Configuration - Replace with your actual credentials
    // Get these from https://www.emailjs.com/
    const EMAILJS_SERVICE_ID =
      import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
    const EMAILJS_TEMPLATE_ID =
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
    const EMAILJS_PUBLIC_KEY =
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

    // Prepare template parameters for EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || "Not provided",
      age: formData.age,
      course: formData.course,
      message: formData.message || "No message provided",
      submission_date: new Date().toLocaleString("en-AU", {
        dateStyle: "full",
        timeStyle: "short",
      }),
    };

    try {
      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        age: "",
        course: "",
        message: "",
      });

      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setIsSubmitting(false);
      setErrorMessage(
        "Failed to send your message. Please try again or contact us directly at admin@exleducation.com.au"
      );
      setTimeout(() => setErrorMessage(""), 8000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 p-4 md:p-6 lg:p-10 mt-10">
      {/* Header */}
      <motion.div
        className="bg-white shadow-sm border-b border-blue-100"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#003466] mb-3 md:mb-4">
              Contact Us
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to excel in your studies? Get in touch with our expert
              tutors and take the first step towards academic success.
            </p>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-4 md:p-6 lg:p-8 border border-blue-100"
            variants={fadeInUp}
          >
            <div className="mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                Send us a message
              </h2>
              <p className="text-sm md:text-base text-gray-600">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>
            </div>

            {showSuccess && (
              <motion.div
                className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p className="text-green-800 font-medium">
                  ✓ Message sent successfully! We'll be in touch soon.
                </p>
              </motion.div>
            )}

            {errorMessage && (
              <motion.div
                className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p className="text-red-800 font-medium">{errorMessage}</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <motion.div variants={fadeInUp}>
                  <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
                    <User className="inline w-3 h-3 md:w-4 md:h-4 mr-1" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002F67] focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="inline w-3 h-3 md:w-4 md:h-4 mr-1" />
                    Age *
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    required
                    min="7"
                    max="100"
                    className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002F67] focus:border-transparent"
                    placeholder="Enter your age"
                  />
                </motion.div>
              </div>

              <motion.div variants={fadeInUp}>
                <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
                  <Mail className="inline w-3 h-3 md:w-4 md:h-4 mr-1" />
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002F67] focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
                  <Phone className="inline w-3 h-3 md:w-4 md:h-4 mr-1" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002F67] focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
                  <GraduationCap className="inline w-3 h-3 md:w-4 md:h-4 mr-1" />
                  Course of Interest *
                </label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002F67] focus:border-transparent"
                >
                  <option value="">Select a course</option>
                  {courses.map((category) => (
                    <optgroup key={category.category} label={category.category}>
                      {category.items.map((course) => (
                        <option key={course} value={course}>
                          {course}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
                  <MessageSquare className="inline w-3 h-3 md:w-4 md:h-4 mr-1" />
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002F67] focus:border-transparent resize-none"
                  placeholder="Tell us about your learning goals or any specific questions you have..."
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#002F67] hover:bg-[#022857] disabled:bg-blue-400 text-white font-semibold py-3 md:py-4 px-4 md:px-6 rounded-lg text-sm md:text-base flex items-center justify-center space-x-2 transition duration-200"
                variants={fadeInUp}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 md:h-5 md:w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 md:w-5 md:h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info + Map */}
          <motion.div className="space-y-6 md:space-y-8" variants={fadeInUp}>
            {/* Info */}
            <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 lg:p-8 border border-blue-100">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                Get in Touch
              </h2>
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPinHouse className="w-6 h-6 text-[#002F67]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Address
                    </h3>
                    <p className="text-gray-600">
                      6/25 Terminus St,
                      <br />
                      Castle Hill 2154
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-[#002F67]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">0431 498 913</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-[#002F67]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">admin@exleducation.com.au</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 md:mt-8 p-4 md:p-6 bg-blue-50 rounded-lg border border-blue-100">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">
                  Office Hours
                </h3>
                <div className="text-gray-600 space-y-1 text-xs md:text-sm">
                  <p>Friday: 3:30 PM – 9:00 PM</p>
                  <p>Saturday: 10:30 AM – 5:30 PM</p>
                  <p>Sunday: 10:30 AM – 6:00 PM</p>
                  <p>Monday: 3:30 PM – 9:00 PM</p>
                  <p>Tuesday: 3:30 PM – 9:00 PM</p>
                  <p>Wednesday: 3:30 PM – 9:00 PM</p>
                  <p>Thursday: 3:30 PM – 9:00 PM</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-100">
              <div className="h-64 md:h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d829.4996030926637!2d151.00406557583494!3d-33.73485717873797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a10b4b565e19%3A0x2c0a4403a74cfa97!2s6%2F25%20Terminus%20St%2C%20Castle%20Hill%20NSW%202154%2C%20Australia!5e0!3m2!1sen!2slk!4v1763002743150!5m2!1sen!2slk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUsPage;
