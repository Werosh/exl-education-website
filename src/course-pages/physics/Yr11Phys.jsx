import React from "react";
import { Omega } from "lucide-react";
import SubjectDetails from "../../reuse-subject-comps/SubjectDetails";
import ResourcesSection from "../../reuse-subject-comps/ResourcesSection";
import ExpertsSection from "../../reuse-subject-comps/ExpertsSection";
import ClassTimes from "../../reuse-subject-comps/ClassTimes";
import ComArea from "../../reuse-subject-comps/ComArea";
import LittleDescription from "../../reuse-subject-comps/littleDescription";
import CoursePricing from "../../reuse-subject-comps/CoursePricing";
import TermsTable from "../../reuse-subject-comps/TermsTable";
import CTA from "../../sections/CTA";

const PhysTerms = [
  {
    name: "Module 1, Module 2 (2.1)",
    startDate: "15/1/25",
    lessons: [
      { name: "Lesson 1: Module 1 - Introduction to Motion", date: "15/1/25" },
      {
        name: "Lesson 2: Module 1 - Further Work with Velocity",
        date: "22/1/25",
      },
      { name: "Lesson 3: Module 1 - Kinematics Equations", date: "29/1/25" },
      { name: "Lesson 4: Module 1 - Two-Dimensional Motion", date: "5/2/25" },
      {
        name: "Lesson 5: Module 1 - Further Two-Dimensional Motion",
        date: "12/2/25",
      },
      { name: "Lesson 6: Module 1 - Relative Vectors", date: "19/2/25" },
      {
        name: "Lesson 7: Working Scientifically and Scientific Skills",
        date: "26/2/25",
      },
      { name: "Lesson 8: Module 1 - Mini-Exam and Review", date: "5/3/25" },
      { name: "Lesson 9: Module 2 - Introduction to Forces", date: "12/3/25" },
      {
        name: "Lesson 10: Module 2 - Further Work With Forces",
        date: "19/3/25",
      },
    ],
  },
  {
    name: "Module 2 (2.2 - 2.4), Module 3",
    startDate: "26/3/25",
    lessons: [
      {
        name: "Lesson 1: Module 2 - Friction and Multiple Body Systems",
        date: "26/3/25",
      },
      { name: "Lesson 2: Module 2 - Work, Energy and Power", date: "2/4/25" },
      { name: "Lesson 3: Module 2 - Momentum and Collisions", date: "9/4/25" },
      {
        name: "Lesson 4: Module 2 - Impulse and Further Work With Collisions",
        date: "16/4/25",
      },
      { name: "Lesson 5: Module 2 - Mini Exam and Review", date: "23/4/25" },
      { name: "Lesson 6: Module 3 - Introduction to Waves", date: "30/4/25" },
      { name: "Lesson 7: Module 3 - Behaviour of Waves", date: "7/5/25" },
      { name: "Lesson 8: Module 3 - Sound Waves", date: "14/5/25" },
      { name: "Lesson 9: Module 3 - Ray Model of Light", date: "21/5/25" },
      {
        name: "Lesson 10: Module 3 - Introduction to Thermodynamics",
        date: "28/5/25",
      },
    ],
  },
  {
    name: "Module 4, Foundations for Year 12",
    startDate: "4/6/25",
    lessons: [
      {
        name: "Lesson 1: Module 3 - Further Work with Thermodynamics",
        date: "4/6/25",
      },
      {
        name: "Lesson 2: Module 4 - Introduction to Electrostatics",
        date: "11/6/25",
      },
      {
        name: "Lesson 3: Module 4 - Further Work with Electrostatics",
        date: "18/6/25",
      },
      {
        name: "Lesson 4: Module 4 - Introduction to Circuits",
        date: "25/6/25",
      },
      {
        name: "Lesson 5: Module 4 - Introduction to Magnetism",
        date: "2/7/25",
      },
      { name: "Lesson 6: Module 4 - Mini Exam and Review", date: "9/7/25" },
      { name: "Lesson 7: Year 11 Review", date: "16/7/25" },
      { name: "Lesson 8: Foundations for Year 12 I", date: "23/7/25" },
      { name: "Lesson 9: Foundations for Year 12 II", date: "30/7/25" },
      { name: "Lesson 10: Foundations for Year 12 III", date: "6/8/25" },
    ],
  },
];

const Yr11Phys = () => {
  return (
    <div>
      <div>
        <SubjectDetails
          subject="Physics"
          year="Year 11"
          description="Build your foundation for Physics in our Year 11 Physics course. You'll develop your scientific skills and understanding of fundamental physics concepts while learning techniques to approach marking schemes."
          gradientFrom="from-[#0F3F60]"
          gradientTo="to-[#B2DBD8]"
          icon={Omega}
        />

        <ResourcesSection
          subjectName="Physics"
        />

        <ExpertsSection />

        <ClassTimes subjectName="Physics" year="Year 11" />

        <TermsTable
          subjectName="Physics"
          termDetails={PhysTerms}
          subjectType="physics"
        />

        {/* <ComArea /> */}

        {/* <LittleDescription /> */}
      </div>

      <CoursePricing year="Year 11" />

      <CTA />
    </div>
  );
};

export default Yr11Phys;
