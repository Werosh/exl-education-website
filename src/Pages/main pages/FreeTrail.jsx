import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPinHouse,
  Send,
  User,
  GraduationCap,
  Calendar,
  School,
  UserCheck,
  Users,
  BookOpen,
  Plus,
  X,
} from "lucide-react";

// eslint-disable-next-line no-unused-vars
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// eslint-disable-next-line no-unused-vars
const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const BookFreeTrialPage = () => {
  const [formType, setFormType] = useState("student"); // "student" or "parent"
  const [formData, setFormData] = useState({
    studentFirstName: "",
    studentLastName: "",
    parentFirstName: "",
    parentLastName: "",
    school: "",
    studentEmail: "",
    parentEmail: "",
    studentMobile: "",
    parentMobile: "",
    year2025: "",
    subjectsInterested: [],
    customClass: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showCustomClass, setShowCustomClass] = useState(false);

  const subjects = ["Mathematics", "Chemistry", "Physics"];

  const years = Array.from({ length: 6 }, (_, i) => ({
    value: i + 7,
    label: `Year ${i + 7}`,
  }));

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubjectChange = (subject) => {
    setFormData((prev) => ({
      ...prev,
      subjectsInterested: prev.subjectsInterested.includes(subject)
        ? prev.subjectsInterested.filter((s) => s !== subject)
        : [...prev.subjectsInterested, subject],
    }));
  };

  const removeSubject = (subject) => {
    setFormData((prev) => ({
      ...prev,
      subjectsInterested: prev.subjectsInterested.filter((s) => s !== subject),
    }));
  };

  const addCustomClass = () => {
    if (formData.customClass.trim()) {
      setFormData((prev) => ({
        ...prev,
        subjectsInterested: [
          ...prev.subjectsInterested,
          `Custom: ${formData.customClass}`,
        ],
        customClass: "",
      }));
      setShowCustomClass(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    // EmailJS Configuration - Replace with your actual credentials
    // Get these from https://www.emailjs.com/
    const EMAILJS_SERVICE_ID =
      import.meta.env.VITE_EMAILJS_SERVICE_ID_TRIAL ||
      import.meta.env.VITE_EMAILJS_SERVICE_ID ||
      "YOUR_SERVICE_ID";
    const EMAILJS_TEMPLATE_ID =
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID_TRIAL || "YOUR_TEMPLATE_ID";
    const EMAILJS_PUBLIC_KEY =
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

    // Prepare template parameters for EmailJS
    const templateParams = {
      form_type: formType === "student" ? "Student" : "Parent",
      student_first_name: formData.studentFirstName,
      student_last_name: formData.studentLastName,
      parent_first_name: formData.parentFirstName || "N/A",
      parent_last_name: formData.parentLastName || "N/A",
      school: formData.school,
      student_email: formData.studentEmail || "N/A",
      parent_email: formData.parentEmail || "N/A",
      student_mobile: formData.studentMobile || "N/A",
      parent_mobile: formData.parentMobile || "N/A",
      year_2025: formData.year2025,
      subjects_interested: formData.subjectsInterested.join(", "),
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

      // Reset form
      setFormData({
        studentFirstName: "",
        studentLastName: "",
        parentFirstName: "",
        parentLastName: "",
        school: "",
        studentEmail: "",
        parentEmail: "",
        studentMobile: "",
        parentMobile: "",
        year2025: "",
        subjectsInterested: [],
        customClass: "",
      });

      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setIsSubmitting(false);
      setErrorMessage(
        "Failed to submit your booking. Please try again or contact us directly at admin@exleducation.com.au"
      );
      setTimeout(() => setErrorMessage(""), 8000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-100 p-6 md:p-10">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-green-100 rounded-t-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-[#002F67] mb-4 flex items-center justify-center gap-5">
              <BookOpen className="w-10 h-10 text-[#002F67]" />
              Book Your FREE TRIAL
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience our expert tutoring with a complimentary trial session.
              No commitment required - just quality education tailored to your
              needs.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-green-100">
              {/* Form Type Toggle */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Who's booking the trial?
                </h2>
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button
                    type="button"
                    onClick={() => setFormType("student")}
                    className={`flex-1 flex items-center justify-center px-4 py-3 rounded-md font-medium transition-all ${
                      formType === "student"
                        ? "bg-[#002F67] text-white shadow-md"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <UserCheck className="w-5 h-5 mr-2" />
                    I'm a Student
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormType("parent")}
                    className={`flex-1 flex items-center justify-center px-4 py-3 rounded-md font-medium transition-all ${
                      formType === "parent"
                        ? "bg-[#002F67] text-white shadow-md"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <Users className="w-5 h-5 mr-2" />
                    I'm a Parent
                  </button>
                </div>
              </div>

              {showSuccess && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-[#002F67] font-medium">
                    ✓ Free trial booked successfully! We'll contact you within
                    24 hours to confirm your session.
                  </p>
                </div>
              )}

              {errorMessage && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 font-medium">{errorMessage}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Student Details */}
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <User className="w-5 h-5 mr-2 text-[#002F67]" />
                    Student Details
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Student First Name *
                      </label>
                      <input
                        type="text"
                        name="studentFirstName"
                        value={formData.studentFirstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002F67]focus:border-transparent"
                        placeholder="Enter student's first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Student Last Name *
                      </label>
                      <input
                        type="text"
                        name="studentLastName"
                        value={formData.studentLastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002F67] focus:border-transparent"
                        placeholder="Enter student's last name"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Mail className="inline w-4 h-4 mr-1" />
                        Student Email {formType === "student" ? "*" : ""}
                      </label>
                      <input
                        type="email"
                        name="studentEmail"
                        value={formData.studentEmail}
                        onChange={handleInputChange}
                        required={formType === "student"}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002F67] focus:border-transparent"
                        placeholder="Enter student's email"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Phone className="inline w-4 h-4 mr-1" />
                        Student Mobile {formType === "student" ? "*" : ""}
                      </label>
                      <input
                        type="tel"
                        name="studentMobile"
                        value={formData.studentMobile}
                        onChange={handleInputChange}
                        required={formType === "student"}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002F67] focus:border-transparent"
                        placeholder="Enter student's mobile"
                      />
                    </div>
                  </div>
                </div>

                {/* Parent Details */}
                <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-[#002F67]" />
                    Parent/Guardian Details
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Parent First Name {formType === "parent" ? "*" : ""}
                      </label>
                      <input
                        type="text"
                        name="parentFirstName"
                        value={formData.parentFirstName}
                        onChange={handleInputChange}
                        required={formType === "parent"}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002F67] focus:border-transparent"
                        placeholder="Enter parent's first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Parent Last Name {formType === "parent" ? "*" : ""}
                      </label>
                      <input
                        type="text"
                        name="parentLastName"
                        value={formData.parentLastName}
                        onChange={handleInputChange}
                        required={formType === "parent"}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002F67] focus:border-transparent"
                        placeholder="Enter parent's last name"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Mail className="inline w-4 h-4 mr-1" />
                        Parent Email {formType === "parent" ? "*" : ""}
                      </label>
                      <input
                        type="email"
                        name="parentEmail"
                        value={formData.parentEmail}
                        onChange={handleInputChange}
                        required={formType === "parent"}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:[#002F67] focus:border-transparent"
                        placeholder="Enter parent's email"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Phone className="inline w-4 h-4 mr-1" />
                        Parent Mobile {formType === "parent" ? "*" : ""}
                      </label>
                      <input
                        type="tel"
                        name="parentMobile"
                        value={formData.parentMobile}
                        onChange={handleInputChange}
                        required={formType === "parent"}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002F67] focus:border-transparent"
                        placeholder="Enter parent's mobile"
                      />
                    </div>
                  </div>
                </div>

                {/* Academic Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <School className="inline w-4 h-4 mr-1" />
                      School *
                    </label>
                    <input
                      type="text"
                      name="school"
                      value={formData.school}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002F67] focus:border-transparent"
                      placeholder="Enter school name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="inline w-4 h-4 mr-1" />
                      Year in 2025 *
                    </label>
                    <select
                      name="year2025"
                      value={formData.year2025}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002F67] focus:border-transparent"
                    >
                      <option value="">Select year level</option>
                      {years.map((year) => (
                        <option key={year.value} value={year.value}>
                          {year.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Subjects Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    <GraduationCap className="inline w-4 h-4 mr-1" />
                    Subjects Interested *
                  </label>

                  {/* Selected Subjects */}
                  {formData.subjectsInterested.length > 0 && (
                    <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">
                        Selected Subjects:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {formData.subjectsInterested.map((subject, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-[#002F67]"
                          >
                            {subject}
                            <button
                              type="button"
                              onClick={() => removeSubject(subject)}
                              className="ml-2 hover:text-[#002F67]"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Subject Categories */}
                  <div className="space-y-3">
                    {subjects.map((subject) => (
                      <label
                        key={subject}
                        className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={formData.subjectsInterested.includes(
                            subject
                          )}
                          onChange={() => handleSubjectChange(subject)}
                          className="h-5 w-5 text-[#002F67] focus:ring-[#002F67] border-gray-300 rounded"
                        />
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {subject}
                        </span>
                      </label>
                    ))}
                  </div>

                  {/* Custom Class Option */}
                  <div className="mt-4 p-4 border-2 border-dashed border-gray-300 rounded-lg">
                    {!showCustomClass ? (
                      <button
                        type="button"
                        onClick={() => setShowCustomClass(true)}
                        className="w-full flex items-center justify-center px-4 py-3 text-[#002F67] hover:text-blue-900 hover:bg-green-50 rounded-lg transition-colors"
                      >
                        <Plus className="w-5 h-5 mr-2" />
                        Create Your Own Class
                      </button>
                    ) : (
                      <div className="space-y-3">
                        <input
                          type="text"
                          name="customClass"
                          value={formData.customClass}
                          onChange={handleInputChange}
                          placeholder="Describe your custom class needs..."
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002F67] focus:border-transparent"
                        />
                        <div className="flex space-x-2">
                          <button
                            type="button"
                            onClick={addCustomClass}
                            className="px-4 py-2 bg-[#002F67] text-white rounded-lg hover:bg-[#043d83] transition-colors"
                          >
                            Add Custom Class
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setShowCustomClass(false);
                              setFormData((prev) => ({
                                ...prev,
                                customClass: "",
                              }));
                            }}
                            className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={
                    isSubmitting || formData.subjectsInterested.length === 0
                  }
                  className="w-full bg-[#002F67] hover:bg-[#092a53] disabled:bg-gray-400 text-white font-semibold py-4 px-6 rounded-lg flex items-center justify-center space-x-2 transition duration-200"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Booking Trial...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Book My FREE Trial</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-8">
            {/* Trial Benefits */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-green-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                What's Included?
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#002F67] rounded-full mt-2"></div>
                  <p className="text-gray-600">Full 90-minute lesson</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#002F67] rounded-full mt-2"></div>
                  <p className="text-gray-600">Personalized assessment</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#002F67] rounded-full mt-2"></div>
                  <p className="text-gray-600">Learning materials provided</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#002F67] rounded-full mt-2"></div>
                  <p className="text-gray-600">Progress report</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#002F67] rounded-full mt-2"></div>
                  <p className="text-gray-600">No obligation to continue</p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Need Help?
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#002F67]" />
                  <p className="text-gray-700">0431 498 913</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#002F67]" />
                  <p className="text-gray-700">admin@exleducation.com.au</p>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPinHouse className="w-5 h-5 text-[#002F67] mt-1" />
                  <div>
                    <p className="text-gray-700">6/25 Terminus St,</p>
                    <p className="text-gray-700">Castle Hill 2154</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-yellow-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Office Hours
              </h3>
              <div className="space-y-1 text-sm text-gray-600">
                <p>
                  <span className="font-medium">Monday-Thursday:</span> 3:30 PM
                  – 9:00 PM
                </p>
                <p>
                  <span className="font-medium">Friday:</span> 3:30 PM – 9:00 PM
                </p>
                <p>
                  <span className="font-medium">Saturday:</span> 10:30 AM – 5:30
                  PM
                </p>
                <p>
                  <span className="font-medium">Sunday:</span> 10:30 AM – 6:00
                  PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookFreeTrialPage;
