import React from "react";
import { Biohazard } from "lucide-react";
import SubjectDetails from "../../reuse-subject-comps/SubjectDetails";
import ResourcesSection from "../../reuse-subject-comps/ResourcesSection";
import ExpertsSection from "../../reuse-subject-comps/ExpertsSection";
import ClassTimes from "../../reuse-subject-comps/ClassTimes";
import ComArea from "../../reuse-subject-comps/ComArea";
import LittleDescription from "../../reuse-subject-comps/littleDescription";
import CoursePricing from "../../reuse-subject-comps/CoursePricing";
import TermsTable from "../../reuse-subject-comps/TermsTable";
import CTA from "../../sections/CTA";

const chemTerms = [
  {
    name: "Module 5, Module 6 (6.1)",
    startDate: "15/1/25",
    lessons: [
      {
        name: "Lesson 1: Module 5 - Static and Dynamic Equilibrium",
        date: "15/1/25",
      },
      {
        name: "Lesson 2: Module 5 - Le Chatelier's principle",
        date: "22/1/25",
      },
      { name: "Lesson 3: Module 5 - Collision Theory", date: "29/1/25" },
      {
        name: "Lesson 4: Module 5 - The Equilibrium Constant I",
        date: "5/2/25",
      },
      {
        name: "Lesson 5: Module 5 - The Equilibrium Constant II",
        date: "12/2/25",
      },
      { name: "Lesson 6: Module 5 - Solubility Product I", date: "19/2/25" },
      { name: "Lesson 7: Module 5 - Solubility Product II", date: "26/2/25" },
      { name: "Lesson 8: Module 5 Review", date: "5/3/25" },
      {
        name: "Lesson 9: Module 6 - Introduction to Acids and Bases",
        date: "12/3/25",
      },
      { name: "Lesson 10: Module 6 - Acid Base Theory", date: "19/3/25" },
    ],
  },
  {
    name: "Module 6 (6.2-6.3), Module 7 (7.1-7.5)",
    startDate: "26/3/25",
    lessons: [
      { name: "Lesson 1: Module 6 - pH and pOH Calculations", date: "26/3/25" },
      {
        name: "Lesson 2: Module 6 - Further Acid Base Calculations",
        date: "2/4/25",
      },
      { name: "Lesson 3: Module 6 - Standard Titrations", date: "9/4/25" },
      { name: "Lesson 4: Module 6 - Further Titration", date: "16/4/25" },
      { name: "Lesson 5: Module 6 Review", date: "23/4/25" },
      { name: "Lesson 6: Module 7 - Organic Nomenclature", date: "30/4/25" },
      {
        name: "Lesson 7: Module 7 - Properties of Hydrocarbons",
        date: "7/5/25",
      },
      { name: "Lesson 8: Module 7 - Hydrocarbon Reactions", date: "14/5/25" },
      { name: "Lesson 9: Module 7 - Alcohols", date: "21/5/25" },
      {
        name: "Lesson 10: Module 7 - Organic Acids and Bases",
        date: "28/5/25",
      },
    ],
  },
  {
    name: "Module 7 (7.6), Module 8",
    startDate: "4/6/25",
    lessons: [
      { name: "Lesson 1: Module 7 - Polymers", date: "4/6/25" },
      { name: "Lesson 2: Module 7 Review", date: "11/6/25" },
      { name: "Lesson 3: Module 8 - Ion Testing", date: "18/6/25" },
      { name: "Lesson 4: Module 8 - Inorganic Spectroscopy", date: "25/6/25" },
      { name: "Lesson 5: Module 8 - Organic Testing", date: "2/7/25" },
      {
        name: "Lesson 6: Module 8 - Infrared and Mass Spectroscopy",
        date: "9/7/25",
      },
      { name: "Lesson 7: Module 8 - C and H NMR", date: "16/7/25" },
      { name: "Lesson 8: Module 8 - Spectra", date: "23/7/25" },
      { name: "Lesson 9: Module 8 - Industrial Application", date: "30/7/25" },
      { name: "Lesson 10: Module 8 Review", date: "6/8/25" },
    ],
  },
];
const Yr12Chem = () => {
  return (
    <div>
      <div>
        <SubjectDetails
          subject=" Chemistry"
          year="Year 12"
          description="Excel in Year 12 Chemistry with our booklets which are guided by NESA syllabus dot-points and inquiry questions. You'll master Equilibrium Principles, Acid-Base reactions, and Organic Chemistry."
          gradientFrom="from-[#6E4A6F]"
          gradientTo="to-[#E683BB]"
          icon={Biohazard}
        />

        <ResourcesSection
          subjectName="Chemistry"
        />

        <ExpertsSection />

        <ClassTimes subjectName="Chemistry" year="Year 12" />

        <TermsTable
          subjectName="Chemistry"
          termDetails={chemTerms}
          subjectType="chemistry"
        />

        {/* <ComArea /> */}

        {/* <LittleDescription /> */}
      </div>

      <CoursePricing year="Year 12" />

      <CTA />
    </div>
  );
};

export default Yr12Chem;
