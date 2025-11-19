import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { scheduleData } from "../data/scheduleData";

// Helper function to match subject pages to schedule data
const matchSubjectToSchedule = (subjectName, year) => {
  const matches = [];
  const searchSubject = subjectName.toLowerCase().trim();
  const searchYear = year.toLowerCase().trim();

  scheduleData.forEach((day) => {
    day.classes.forEach((cls) => {
      const clsSubject = cls.subject.toLowerCase();
      let isMatch = false;

      // Junior Maths - matches Year 7, 8, 9, 10 Mathematics
      if (searchSubject.includes("junior") && searchSubject.includes("math")) {
        if (
          clsSubject.includes("year 7 mathematics") ||
          clsSubject.includes("year 8 mathematics") ||
          clsSubject.includes("year 9 mathematics") ||
          clsSubject.includes("mathematics year 10") ||
          clsSubject.includes("year 10 mathematics")
        ) {
          isMatch = true;
        }
      }
      // Year 11 Math Advanced
      else if (
        searchSubject.includes("mathematics advanced") &&
        searchYear.includes("11")
      ) {
        if (
          clsSubject.includes("year 11") &&
          clsSubject.includes("math advanced")
        ) {
          isMatch = true;
        }
      }
      // Year 11 Math Extension 1
      else if (
        searchSubject.includes("mathematics extension 1") &&
        searchYear.includes("11")
      ) {
        if (
          clsSubject.includes("year 11") &&
          clsSubject.includes("math extension 1")
        ) {
          isMatch = true;
        }
      }
      // Year 12 Math Advanced - not in schedule, skip
      else if (
        searchSubject.includes("mathematics advanced") &&
        searchYear.includes("12")
      ) {
        isMatch = false; // No Year 12 Math Advanced in schedule
      }
      // Year 12 Math Extension 1
      else if (
        searchSubject.includes("mathematics extension 1") &&
        searchYear.includes("12")
      ) {
        if (
          clsSubject.includes("year 12") &&
          clsSubject.includes("math extension 1")
        ) {
          isMatch = true;
        }
      }
      // Year 11 Chemistry
      else if (
        searchSubject.includes("chemistry") &&
        searchYear.includes("11") &&
        !searchYear.includes("12")
      ) {
        if (
          clsSubject.includes("year 11") &&
          clsSubject.includes("chemistry")
        ) {
          isMatch = true;
        }
      }
      // Year 12 Chemistry
      else if (
        searchSubject.includes("chemistry") &&
        searchYear.includes("12")
      ) {
        if (
          clsSubject.includes("year 12") &&
          clsSubject.includes("chemistry")
        ) {
          isMatch = true;
        }
      }
      // Year 11 Physics
      else if (
        searchSubject.includes("physics") &&
        searchYear.includes("11") &&
        !searchYear.includes("12")
      ) {
        if (clsSubject.includes("year 11") && clsSubject.includes("physics")) {
          isMatch = true;
        }
      }
      // Year 12 Physics
      else if (searchSubject.includes("physics") && searchYear.includes("12")) {
        if (
          clsSubject.includes("year 12") &&
          clsSubject.includes("physics") &&
          !clsSubject.includes("accelerated")
        ) {
          isMatch = true;
        }
      }

      if (isMatch) {
        matches.push({
          day: day.day,
          time: cls.time,
          teacher: cls.teacher,
          subject: cls.subject, // Store original subject to extract year
        });
      }
    });
  });

  return matches;
};

const ClassTimes = ({ subjectName, year }) => {
  const classTimes = matchSubjectToSchedule(subjectName, year);

  // Don't render if no matches found
  if (classTimes.length === 0) {
    return null;
  }

  // Extract year from subject name for Junior Maths
  const extractYear = (subject) => {
    if (!subject) return null;
    // Match patterns like "Year 7", "Year 8", "Year 9", "Year 10", or "Mathematics Year 10"
    const yearMatch = subject.match(/year\s+(\d+)/i);
    if (yearMatch) {
      return `Year ${yearMatch[1]}`;
    }
    return null;
  };

  // Check if this is Junior Maths
  const isJuniorMaths =
    subjectName.toLowerCase().includes("junior") &&
    subjectName.toLowerCase().includes("math");

  // Format time for display (convert "5:30 PM" to "5:30-7:00pm" style)
  const formatTimeRange = (time) => {
    // Extract hour and minute from time like "5:30 PM"
    const match = time.match(/(\d+):(\d+)\s*(AM|PM)/i);
    if (!match) return time;

    const hour = parseInt(match[1]);
    const minute = match[2];
    const period = match[3].toUpperCase();
    const duration = 90; // 90 minutes default duration

    // Convert to 24-hour format for calculation
    let startHour = hour;
    if (period === "PM" && hour !== 12) startHour += 12;
    if (period === "AM" && hour === 12) startHour = 0;

    // Calculate end time
    const startMinutes = startHour * 60 + parseInt(minute);
    const endMinutes = startMinutes + duration;
    let endHour24 = Math.floor(endMinutes / 60);
    const endMin = endMinutes % 60;

    // Convert end time back to 12-hour format
    let endHour = endHour24;
    let endPeriod = "am";

    if (endHour24 >= 12) {
      endPeriod = "pm";
      if (endHour24 > 12) endHour = endHour24 - 12;
      if (endHour24 === 12) endHour = 12;
    } else {
      endPeriod = "am";
      if (endHour24 === 0) endHour = 12;
    }

    // Format start time (remove space before period, lowercase)
    const startPeriod = period.toLowerCase();
    const endTimeFormatted = `${endHour}:${endMin
      .toString()
      .padStart(2, "0")}${endPeriod}`;
    const startTimeFormatted = `${hour}:${minute}${startPeriod}`;

    return `${startTimeFormatted}-${endTimeFormatted}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mt-8 mb-12 flex justify-center px-4"
    >
      <div className="relative w-full max-w-4xl mx-auto">
        {/* Oval/Bubble container - elongated pill/oval shape */}
        <div className="relative bg-white rounded-4xl px-12 py-8 shadow-lg border-2 border-gray-300">
          {/* Content wrapper */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-16">
            {/* Title - "Our Class Times:" in bold */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl our-class-bold text-[#002f67] whitespace-nowrap">
                Our Class Times:
              </h3>
            </div>

            {/* Class times list */}
            <div className="flex flex-col items-center md:items-start">
              {classTimes.length === 1 ? (
                // Single time - display inline with bullet
                <div className="text-center md:text-left">
                  <p className="text-lg md:text-xl text-gray-700">
                    •{" "}
                    {isJuniorMaths && extractYear(classTimes[0].subject)
                      ? `${extractYear(classTimes[0].subject)} `
                      : ""}
                    {classTimes[0].day} {formatTimeRange(classTimes[0].time)}
                  </p>
                </div>
              ) : (
                // Multiple times - display as bullet points
                <div className="flex flex-col items-center md:items-start space-y-2">
                  {classTimes.map((classTime, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center md:justify-start w-full"
                    >
                      <span className="text-lg md:text-xl text-gray-700 text-center md:text-left">
                        •{" "}
                        {isJuniorMaths && extractYear(classTime.subject)
                          ? `${extractYear(classTime.subject)} `
                          : ""}
                        {classTime.day} {formatTimeRange(classTime.time)}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ClassTimes;
