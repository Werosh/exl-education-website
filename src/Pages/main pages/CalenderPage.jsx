import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Clock,
  BookOpen,
  Building,
  Users,
  FileText,
} from "lucide-react";

const CalendarPage = () => {
  const [selectedWeek, setSelectedWeek] = useState(0);
  const [selectedDay, setSelectedDay] = useState(null);

  const scheduleData = {
    weekdays: [
      {
        day: "MON",
        classes: [
          {
            subject: "Mathematics Extension Y11",
            time: "4:30-6:30PM",
            type: "mathematics",
            color: "bg-blue-50 border-l-4 border-blue-400 text-blue-800",
            location: "Room 101",
          },
          {
            subject: "Physics Y12 Normanhurst Boys",
            time: "6:30-9PM",
            type: "physics",
            color: "bg-teal-50 border-l-4 border-teal-400 text-teal-800",
            location: "Science Lab A",
          },
        ],
      },
      {
        day: "TUE",
        classes: [
          {
            subject: "Chemistry Y11",
            time: "4:30-6:30PM",
            type: "chemistry",
            color: "bg-rose-50 border-l-4 border-rose-400 text-rose-800",
            location: "Chemistry Lab",
          },
          {
            subject: "Chemistry Y12 Oakhill College",
            time: "5:30-8PM",
            type: "chemistry",
            color: "bg-rose-50 border-l-4 border-rose-400 text-rose-800",
            location: "Chemistry Lab",
          },
          {
            subject: "Mathematics Extension Y12",
            time: "6:30-9PM",
            type: "mathematics",
            color: "bg-blue-50 border-l-4 border-blue-400 text-blue-800",
            location: "Room 102",
          },
        ],
      },
      {
        day: "WED",
        classes: [
          {
            subject: "Mathematics Advanced Y12",
            time: "6:30-9PM",
            type: "mathematics",
            color: "bg-blue-50 border-l-4 border-blue-400 text-blue-800",
            location: "Room 103",
          },
        ],
      },
      {
        day: "THU",
        classes: [
          {
            subject: "Physics Y11",
            time: "4:30-6:30PM",
            type: "physics",
            color: "bg-teal-50 border-l-4 border-teal-400 text-teal-800",
            location: "Science Lab B",
          },
        ],
      },
      {
        day: "FRI",
        classes: [
          {
            subject: "Mathematics Advanced Y11",
            time: "4:30-6:30PM",
            type: "mathematics",
            color: "bg-blue-50 border-l-4 border-blue-400 text-blue-800",
            location: "Room 104",
          },
          {
            subject: "Chemistry Y12",
            time: "6:30-9PM",
            type: "chemistry",
            color: "bg-rose-50 border-l-4 border-rose-400 text-rose-800",
            location: "Chemistry Lab",
          },
        ],
      },
    ],
    weekend: [
      {
        day: "SAT",
        classes: [
          {
            subject: "Mathematics Extension Y11",
            time: "9:15-11:15AM",
            type: "mathematics",
            color: "bg-blue-50 border-l-4 border-blue-400 text-blue-800",
            location: "Room 201",
          },
          {
            subject: "Physics Y11",
            time: "11:30AM-1:30PM",
            type: "physics",
            color: "bg-teal-50 border-l-4 border-teal-400 text-teal-800",
            location: "Science Lab A",
          },
          {
            subject: "Mathematics Y7",
            time: "1:30-3PM",
            type: "mathematics",
            color: "bg-blue-50 border-l-4 border-blue-400 text-blue-800",
            location: "Room 105",
          },
          {
            subject: "English Advanced Y11",
            time: "3-5PM",
            type: "english",
            color:
              "bg-emerald-50 border-l-4 border-emerald-400 text-emerald-800",
            location: "English Room",
          },
          {
            subject: "Physics Y12",
            time: "5-7:30PM",
            type: "physics",
            color: "bg-teal-50 border-l-4 border-teal-400 text-teal-800",
            location: "Science Lab B",
          },
        ],
      },
      {
        day: "SUN",
        classes: [
          {
            subject: "Mathematics Extension Y12",
            time: "10:30AM-1:00PM",
            type: "mathematics",
            color: "bg-blue-50 border-l-4 border-blue-400 text-blue-800",
            location: "Room 202",
          },
          {
            subject: "Chemistry Y11",
            time: "1:00-3:00PM",
            type: "chemistry",
            color: "bg-rose-50 border-l-4 border-rose-400 text-rose-800",
            location: "Chemistry Lab",
          },
          {
            subject: "Chemistry Y12",
            time: "3:00-5:30PM",
            type: "chemistry",
            color: "bg-rose-50 border-l-4 border-rose-400 text-rose-800",
            location: "Chemistry Lab",
          },
          {
            subject: "Physics Y12",
            time: "5:40-8:10PM",
            type: "physics",
            color: "bg-teal-50 border-l-4 border-teal-400 text-teal-800",
            location: "Science Lab C",
          },
        ],
      },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const classVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
    hover: {
      scale: 1.01,
      transition: { duration: 0.2 },
    },
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "mathematics":
        return <BookOpen className="w-4 h-4" />;
      case "physics":
        return <Building className="w-4 h-4" />;
      case "chemistry":
        return <FileText className="w-4 h-4" />;
      case "english":
        return <Users className="w-4 h-4" />;
      default:
        return <BookOpen className="w-4 h-4" />;
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-50 p-6 mt-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="flex items-center justify-between mb-8"
          variants={itemVariants}
        >
          <div className="flex items-center space-x-4">
            <motion.div
              className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Calendar className="w-6 h-6 text-white" />
            </motion.div>
            <div>
              <h1 className="text-3xl font-semibold text-gray-900">
                Weekly Schedule
              </h1>
              <p className="text-gray-600 font-medium">
                Academic Tutoring Calendar
              </p>
            </div>
          </div>
        </motion.div>

        {/* Weekdays Schedule */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8"
          variants={itemVariants}
        >
          {scheduleData.weekdays.map((day, index) => (
            <motion.div
              key={day.day}
              className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -1 }}
            >
              <div className="bg-gray-800 px-4 py-3">
                <div className="flex items-center justify-center">
                  <h3 className="font-semibold text-white text-sm tracking-wide">
                    {day.day}
                  </h3>
                </div>
              </div>

              <div className="p-4 space-y-3">
                <AnimatePresence>
                  {day.classes.map((classItem, classIndex) => (
                    <motion.div
                      key={classIndex}
                      className={`p-3 rounded-lg ${classItem.color} cursor-pointer hover:shadow-sm transition-shadow`}
                      variants={classVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover="hover"
                      layout
                    >
                      <div className="flex items-start justify-between mb-2">
                        <span className="text-xs font-medium opacity-75 flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {classItem.time}
                        </span>
                        <span className="opacity-60">
                          {getTypeIcon(classItem.type)}
                        </span>
                      </div>
                      <h4 className="font-semibold text-sm leading-tight mb-1">
                        {classItem.subject}
                      </h4>
                      <p className="text-xs opacity-60 font-medium">
                        {classItem.location}
                      </p>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Weekend Schedule */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={itemVariants}
        >
          {scheduleData.weekend.map((day, index) => (
            <motion.div
              key={day.day}
              className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -1 }}
            >
              <div className="bg-gray-700 px-4 py-3">
                <div className="flex items-center justify-center">
                  <h3 className="font-semibold text-white text-sm tracking-wide">
                    {day.day}
                  </h3>
                </div>
              </div>

              <div className="p-4 space-y-3">
                <AnimatePresence>
                  {day.classes.map((classItem, classIndex) => (
                    <motion.div
                      key={classIndex}
                      className={`p-4 rounded-lg ${classItem.color} cursor-pointer hover:shadow-sm transition-shadow`}
                      variants={classVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover="hover"
                      layout
                    >
                      <div className="flex items-start justify-between mb-2">
                        <span className="text-sm font-medium opacity-75 flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {classItem.time}
                        </span>
                        <span className="opacity-60">
                          {getTypeIcon(classItem.type)}
                        </span>
                      </div>
                      <h4 className="font-semibold leading-tight mb-1">
                        {classItem.subject}
                      </h4>
                      <p className="text-sm opacity-60 font-medium">
                        {classItem.location}
                      </p>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Footer */}
        <motion.div
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
          variants={itemVariants}
        >
          <motion.div
            className="bg-white rounded-lg border border-gray-200 p-6 text-center shadow-sm"
            whileHover={{ scale: 1.01 }}
          >
            <div className="text-3xl font-bold text-gray-900 mb-1">16</div>
            <div className="text-gray-600 text-sm font-medium">
              Classes This Week
            </div>
          </motion.div>
          <motion.div
            className="bg-white rounded-lg border border-gray-200 p-6 text-center shadow-sm"
            whileHover={{ scale: 1.01 }}
          >
            <div className="text-3xl font-bold text-gray-900 mb-1">38</div>
            <div className="text-gray-600 text-sm font-medium">Total Hours</div>
          </motion.div>
          <motion.div
            className="bg-white rounded-lg border border-gray-200 p-6 text-center shadow-sm"
            whileHover={{ scale: 1.01 }}
          >
            <div className="text-3xl font-bold text-gray-900 mb-1">4</div>
            <div className="text-gray-600 text-sm font-medium">
              Subject Areas
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CalendarPage;
