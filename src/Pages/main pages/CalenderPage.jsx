import React, { useState } from "react";
import { motion } from "framer-motion";

const categories = ["All", "Maths", "Chemistry", "Physics"];

const scheduleData = [
  {
    day: "Monday",
    classes: [
      {
        subject: "Standard Chemistry Year 11 ONLINE",
        time: "5:30",
        type: "Chemistry",
        teacher: "Yu-Tang",
        color: "bg-rose-50 border-l-4 border-rose-400 text-rose-800",
      },
    ],
  },
  {
    day: "Tuesday",
    classes: [
      {
        subject: "Accelerated Chemistry Year 11",
        time: "6:30",
        type: "Chemistry",
        teacher: "Yu-Tang",
        color: "bg-rose-50 border-l-4 border-rose-400 text-rose-800",
      },
      {
        subject: "Standard Mathematics Advanced Year 11",
        time: "4:30",
        type: "Maths",
        teacher: "Anna",
        color: "bg-green-50 border-l-4 border-green-400 text-green-800",
      },
      {
        subject: "Standard Mathematics Extension 1 Year 11",
        time: "4:30",
        type: "Maths",
        teacher: "Anna",
        color: "bg-green-50 border-l-4 border-green-400 text-green-800",
      },
      {
        subject: "Mathematics Year 10",
        time: "4:30",
        type: "Maths",
        teacher: "Yu-Tang",
        color: "bg-green-50 border-l-4 border-green-400 text-green-800",
      },
    ],
  },
  {
    day: "Wednesday",
    classes: [
      {
        subject: "Standard Physics Year 11",
        time: "4:00",
        type: "Physics",
        teacher: "William",
        color: "bg-blue-50 border-l-4 border-blue-400 text-blue-800",
      },
      {
        subject: "Standard Chemistry Year 12 (Oakhill)",
        time: "6:00",
        type: "Chemistry",
        teacher: "William",
        color: "bg-rose-50 border-l-4 border-rose-400 text-rose-800",
      },
    ],
  },
  {
    day: "Thursday",
    classes: [
      {
        subject: "Accelerated Physics Year 11",
        time: "4:30",
        type: "Physics",
        teacher: "William",
        color: "bg-blue-50 border-l-4 border-blue-400 text-blue-800",
      },
      {
        subject: "Mathematics Extension 1 Year 12 (PHHS + NBHS)",
        time: "6:00",
        type: "Maths",
        teacher: "Yu-Tang",
        color: "bg-green-50 border-l-4 border-green-400 text-green-800",
      },
      {
        subject: "Physics Year 11 ONLINE GOSFORD",
        time: "6:30",
        type: "Physics",
        teacher: "William",
        color: "bg-blue-50 border-l-4 border-blue-400 text-blue-800",
      },
    ],
  },
  {
    day: "Friday",
    classes: [
      // No classes on Friday based on the image
    ],
  },
  {
    day: "Saturday",
    classes: [
      {
        subject: "Accelerated Chemistry Year 11",
        time: "10:30",
        type: "Chemistry",
        teacher: "Nic",
        color: "bg-rose-50 border-l-4 border-rose-400 text-rose-800",
      },
      {
        subject: "Mathematics Year 8",
        time: "1:30",
        type: "Maths",
        teacher: "Anna",
        color: "bg-green-50 border-l-4 border-green-400 text-green-800",
      },
    ],
  },
  {
    day: "Sunday",
    classes: [
      {
        subject: "Accelerated Mathematics Extension 1 Year 11",
        time: "1:00",
        type: "Maths",
        teacher: "Nic",
        color: "bg-green-50 border-l-4 border-green-400 text-green-800",
      },
    ],
  },
];

const CalendarPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filterByCategory = (item) =>
    selectedCategory === "All" || item.type === selectedCategory;

  return (
    <div className=" max-w-7xl mx-auto p-20">
      <h1 className="text-3xl font-bold mb-6 text-center text-[#002F67]">
        Weekly Tutoring Schedule
      </h1>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-3 mb-8 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedCategory === cat
                ? "bg-gray-900 text-white"
                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Schedule Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
        {scheduleData.map((day, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-4 flex flex-col min-h-[200px]"
          >
            <div className="text-lg font-semibold mb-3 text-center text-gray-800 border-b pb-2">
              {day.day}
            </div>
            <div className="flex-1 space-y-2">
              {day.classes.filter(filterByCategory).map((cls, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className={`p-3 rounded-lg ${cls.color} hover:shadow-md transition-shadow duration-200`}
                >
                  <div className="text-sm font-medium leading-tight mb-1">
                    {cls.subject}
                  </div>
                  <div className="text-xs opacity-80 font-medium">
                    {cls.time}
                  </div>
                  <div className="text-xs opacity-70 mt-1">
                    by {cls.teacher}
                  </div>
                </motion.div>
              ))}
              {day.classes.filter(filterByCategory).length === 0 && (
                <div className="text-center text-gray-400 text-sm py-8">
                  No classes scheduled
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Summary Statistics */}
      <div className="mt-8 bg-gray-50 rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4 text-center text-[#002F67]">
          Weekly Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="bg-white rounded-lg p-4">
            <div className="text-2xl font-bold text-green-600">
              {scheduleData.reduce(
                (acc, day) =>
                  acc +
                  day.classes.filter((cls) => cls.type === "Maths").length,
                0
              )}
            </div>
            <div className="text-sm text-gray-600">Maths Classes</div>
          </div>
          <div className="bg-white rounded-lg p-4">
            <div className="text-2xl font-bold text-rose-600">
              {scheduleData.reduce(
                (acc, day) =>
                  acc +
                  day.classes.filter((cls) => cls.type === "Chemistry").length,
                0
              )}
            </div>
            <div className="text-sm text-gray-600">Chemistry Classes</div>
          </div>
          <div className="bg-white rounded-lg p-4">
            <div className="text-2xl font-bold text-blue-600">
              {scheduleData.reduce(
                (acc, day) =>
                  acc +
                  day.classes.filter((cls) => cls.type === "Physics").length,
                0
              )}
            </div>
            <div className="text-sm text-gray-600">Physics Classes</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
