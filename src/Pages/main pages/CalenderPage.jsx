import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { scheduleData } from "../../data/scheduleData";

const categories = ["All", "Maths", "Chemistry", "Physics"];

// Color mapping for each day
const dayColors = [
  "#003466", // Monday
  "#003466", // Tuesday
  "#003466", // Wednesday
  "#003466", // Thursday
  "#003466", // Friday
  "#003466", // Saturday
  "#003466", // Sunday
];

// helper function to extract year and subject separately
const extractYearAndSubject = (text) => {
  const yearMatch = text.match(/Year\s\d+/gi);
  if (yearMatch) {
    // Normalize the year format (capitalize first letter, ensure proper spacing)
    const year =
      yearMatch[0].charAt(0).toUpperCase() +
      yearMatch[0].slice(1).toLowerCase();
    // Remove the year from the subject text and clean up extra spaces
    const subject = text
      .replace(new RegExp(yearMatch[0], "gi"), "")
      .replace(/\s+/g, " ")
      .trim();
    return { year, subject };
  }
  return { year: null, subject: text };
};

const CalendarPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");

  // Extract all unique years from schedule data
  const availableYears = useMemo(() => {
    const yearsSet = new Set();
    scheduleData.forEach((day) => {
      day.classes.forEach((cls) => {
        const { year } = extractYearAndSubject(cls.subject);
        if (year) {
          yearsSet.add(year);
        }
      });
    });
    // Sort years in descending order (Year 12, Year 11, ..., Year 7)
    return Array.from(yearsSet).sort((a, b) => {
      const yearNumA = parseInt(a.match(/\d+/)[0]);
      const yearNumB = parseInt(b.match(/\d+/)[0]);
      return yearNumB - yearNumA;
    });
  }, []);

  // Filter function that checks both category and year
  const filterByCategoryAndYear = (item) => {
    const { year } = extractYearAndSubject(item.subject);
    const categoryMatch =
      selectedCategory === "All" || item.type === selectedCategory;
    const yearMatch = selectedYear === "All" || year === selectedYear;
    return categoryMatch && yearMatch;
  };

  const getCardRoundedClass = (dayName) => {
    if (dayName === "Monday") {
      return "rounded-l-3xl";
    } else if (dayName === "Sunday") {
      return "rounded-r-3xl";
    } else {
      return "";
    }
  };

  const getHeaderRoundedClass = (dayName) => {
    if (dayName === "Monday") {
      return "rounded-tl-3xl";
    } else if (dayName === "Sunday") {
      return "rounded-tr-3xl";
    } else {
      return "";
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-20 mt-15">
      {/* Main Title */}
      <h1 className="text-3xl font-bold mb-5 text-center text-[#002f67]">
        Weekly Tutoring Schedule
      </h1>

      {/* Subject Filter Buttons */}
      <div className="flex justify-center gap-3 mb-6 flex-wrap">
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

      {/* Year Filter Buttons */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        <button
          onClick={() => setSelectedYear("All")}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
            selectedYear === "All"
              ? "bg-[#002F67] text-white shadow-lg"
              : "bg-white text-gray-700 border border-gray-200 hover:border-[#002F67] hover:text-[#002F67]"
          }`}
        >
          All Years
        </button>
        {availableYears.map((year) => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              selectedYear === year
                ? "bg-[#002F67] text-white shadow-lg"
                : "bg-white text-gray-700 border border-gray-200 hover:border-[#002F67] hover:text-[#002F67]"
            }`}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Schedule Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
        {scheduleData.map((day, index) => (
          <div
            key={index}
            className={`bg-white border-2 border-gray-500 shadow-lg p-0 flex flex-col min-h-[200px] overflow-hidden ${getCardRoundedClass(
              day.day
            )}`}
          >
            <div
              className={`text-lg font-semibold py-3 text-center text-white border-b-2 border-gray-500 ${getHeaderRoundedClass(
                day.day
              )}`}
              style={{ backgroundColor: dayColors[index] }}
            >
              {day.day}
            </div>
            <div className="flex-1 space-y-2 p-4">
              {day.classes.filter(filterByCategoryAndYear).map((cls, i) => {
                const { year, subject } = extractYearAndSubject(cls.subject);
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    className={`p-3 rounded-lg ${cls.color} hover:shadow-md transition-shadow duration-200`}
                  >
                    {year && (
                      <div className="text-sm font-bold leading-tight mb-1">
                        {year}
                      </div>
                    )}
                    <div className="text-sm font-bold leading-tight mb-1">
                      {subject}
                    </div>
                    <div className="text-xs opacity-80 font-medium">
                      {cls.time}
                    </div>
                    <div className="text-xs opacity-70 mt-1">
                      by {cls.teacher}
                    </div>
                  </motion.div>
                );
              })}
              {day.classes.filter(filterByCategoryAndYear).length === 0 && (
                <div className="text-center text-gray-400 text-sm py-8">
                  No classes scheduled
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Descriptive Box */}
      <div className="mt-10 bg-blue-50 border-l-4 border-r-4 border-blue-400 rounded-xl p-6 text-gray-800">
        <p>
          Can't find a class for you or your friend? Contact us and we'll create
          a class for you!
        </p>
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
