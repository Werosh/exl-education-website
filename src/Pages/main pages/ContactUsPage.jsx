import React, { useState } from "react";
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

  const ages = Array.from({ length: 6 }, (_, i) => i + 7);

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

    await new Promise((resolve) => setTimeout(resolve, 2000));

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
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 p-10 mt-10">
      {/* Header */}
      <motion.div
        className="bg-white shadow-sm border-b border-blue-100"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#003466] mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to excel in your studies? Get in touch with our expert
              tutors and take the first step towards academic success.
            </p>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100"
            variants={fadeInUp}
          >
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Send us a message
              </h2>
              <p className="text-gray-600">
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

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div variants={fadeInUp}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="inline w-4 h-4 mr-1" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002F67] focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="inline w-4 h-4 mr-1" />
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002F67] focus:border-transparent"
                    placeholder="Enter your age"
                  />
                </motion.div>
              </div>

              <motion.div variants={fadeInUp}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="inline w-4 h-4 mr-1" />
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002F67] focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="inline w-4 h-4 mr-1" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002F67] focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <GraduationCap className="inline w-4 h-4 mr-1" />
                  Course of Interest *
                </label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002F67] focus:border-transparent"
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
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MessageSquare className="inline w-4 h-4 mr-1" />
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002F67] focus:border-transparent resize-none"
                  placeholder="Tell us about your learning goals or any specific questions you have..."
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#002F67] hover:bg-[#022857] disabled:bg-blue-400 text-white font-semibold py-4 px-6 rounded-lg flex items-center justify-center space-x-2 transition duration-200"
                variants={fadeInUp}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info + Map */}
          <motion.div className="space-y-8" variants={fadeInUp}>
            {/* Info */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPinHouse className="w-6 h-6 text-[#002F67]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Address
                    </h3>
                    <p className="text-gray-600">
                      Unit 29 10-12 Old Castle Hill Road,
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
              <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-100">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Office Hours
                </h3>
                <div className="text-gray-600 space-y-1">
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
              <div className="h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4134.692852475424!2d151.0073179!3d-33.731624599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a10dd3e88bd5%3A0xde32952464e84d60!2sCastle%20Hill!5e0!3m2!1sen!2slk!4v1757647661772!5m2!1sen!2slk"
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
