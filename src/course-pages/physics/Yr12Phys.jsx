import React from "react";
import { Orbit } from "lucide-react";
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
    name: "Module 5, Module 6 (6.1)",
    startDate: "15/1/25",
    lessons: [
      {
        name: "Lesson 1: Module 5 - Introduction to Projectile Motion",
        date: "15/1/25",
      },
      {
        name: "Lesson 2: Module 5 - Further Work with Projectile Motion",
        date: "22/1/25",
      },
      { name: "Lesson 3: Module 5 - Circular Motion", date: "29/1/25" },
      {
        name: "Lesson 4: Module 5 - Further Work with Circular Motion",
        date: "5/2/25",
      },
      { name: "Lesson 5: Module 5 - Introduction to Gravity", date: "12/2/25" },
      {
        name: "Lesson 6: Module 5 - Further work with Gravity",
        date: "19/2/25",
      },
      {
        name: "Lesson 7: Module 5 - Module 5 Exam and Review",
        date: "26/2/25",
      },
      { name: "Lesson 8: Module 6 - Charges in Fields", date: "5/3/25" },
      { name: "Lesson 9: Module 6 - The Motor Effect", date: "12/3/25" },
      {
        name: "Lesson 10: Module 6 - Relationship Between Electricity and Magnetism",
        date: "19/3/25",
      },
    ],
  },
  {
    name: "Module 6 (6.2-6.3), Module 7 (7.1-7.5)",
    startDate: "26/3/25",
    lessons: [
      { name: "Lesson 1: Module 6 - Transformers", date: "26/3/25" },
      {
        name: "Lesson 2: Module 6 - Applications of the Motor Effect",
        date: "2/4/25",
      },
      {
        name: "Lesson 3: Module 6 - Further Work with Electromagnetism",
        date: "9/4/25",
      },
      { name: "Lesson 4: Module 6 - Mini Exam and Review", date: "16/4/25" },
      {
        name: "Lesson 5: Module 7 - Introduction to Electromagnetic Waves",
        date: "23/4/25",
      },
      { name: "Lesson 6: Module 7 - The Light Spectrum", date: "30/4/25" },
      { name: "Lesson 7: Module 7 - Early Models of Light", date: "7/5/25" },
      {
        name: "Lesson 8: Module 7 - Diffraction and Polarisation",
        date: "14/5/25",
      },
      {
        name: "Lesson 9: Module 7 - The Quantum Model of Light",
        date: "21/5/25",
      },
      {
        name: "Lesson 10: Module 7 - Introduction to Special Relativity",
        date: "28/5/25",
      },
    ],
  },
  {
    name: "Module 7 (7.6), Module 8",
    startDate: "4/6/25",
    lessons: [
      {
        name: "Lesson 1: Module 7 - Further Special Relativity",
        date: "4/6/25",
      },
      { name: "Lesson 2: Module 7 - Mini Exam and Review", date: "11/6/25" },
      { name: "Lesson 3: Module 8 - The Big Bang", date: "18/6/25" },
      { name: "Lesson 4: Module 8 - Stars", date: "25/6/25" },
      { name: "Lesson 5: Module 8 - Subatomic Particles", date: "2/7/25" },
      { name: "Lesson 6: Module 8 - Later Models of the Atom", date: "9/7/25" },
      { name: "Lesson 7: Module 8 - Nuclear Decay", date: "16/7/25" },
      {
        name: "Lesson 8: Module 8 - Energy in Nuclear Reactions",
        date: "23/7/25",
      },
      { name: "Lesson 9: Module 8 - The Standard Model", date: "30/7/25" },
      { name: "Lesson 10: Module 8 - Mini Exam and Review", date: "6/8/25" },
    ],
  },
];
const Yr12Phys = () => {
  return (
    <div>
      <div>
        <SubjectDetails
          subject="Physics"
          year="Year 12"
          description="Excel in Year 12 Physics with our booklets which are guided by NESA syllabus dot-points and inquiry questions. You'll master content while learning the structures and techniques necessary to obtain high marks"
          gradientFrom="from-slate-500"
          gradientTo="to-black"
          icon={Orbit}
        />

        <ResourcesSection
          subjectName="Physics"
        />

        <ExpertsSection />

        <ClassTimes subjectName="Physics" year="Year 12" />

        <TermsTable
          subjectName="Physics"
          termDetails={PhysTerms}
          subjectType="physics"
        />

        {/* <ComArea /> */}

        {/* <LittleDescription /> */}
      </div>

      <CoursePricing year="Year 12" />

      <CTA />
    </div>
  );
};

export default Yr12Phys;
