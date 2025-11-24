import React from "react";
import { SquareFunction } from "lucide-react";
import SubjectDetails from "../../reuse-subject-comps/SubjectDetails";
import ResourcesSection from "../../reuse-subject-comps/ResourcesSection";
import ExpertsSection from "../../reuse-subject-comps/ExpertsSection";
import ClassTimes from "../../reuse-subject-comps/ClassTimes";
import ComArea from "../../reuse-subject-comps/ComArea";
import LittleDescription from "../../reuse-subject-comps/littleDescription";
import CoursePricing from "../../reuse-subject-comps/CoursePricing";
import TermsTable from "../../reuse-subject-comps/TermsTable";
import CTA from "../../sections/CTA";

const mathTerms = [
  {
    name: "Financial Mathematics, Functions and Calculus",
    lessons: [
      "Lesson 1: Financial Mathematics",
      "Lesson 2: Sequences and Series I",
      "Lesson 3: Sequences and Series II",
      "Lesson 4: Graphs and Equations",
      "Lesson 5: Functions I",
      "Lesson 6: Functions II",
      "Lesson 7: Calculus",
      "Lesson 8: Curve Sketching I",
      "Lesson 9: Curve Sketching II",
      "Lesson 10: Term 1 Review",
    ],
  },
  {
    name: "Integration and Trigonometric Functions",
    lessons: [
      "Lesson 1: Calculus",
      "Lesson 2: Integration I",
      "Lesson 3: Integration II",
      "Lesson 4: Exponential and Logarithmic Functions",
      "Lesson 5: Integration III",
      "Lesson 6: Integration Review",
      "Lesson 7: Trigonometric Functions I",
      "Lesson 8: Trigonometric Functions II",
      "Lesson 9: Trigonometric Functions III",
      "Lesson 10: Term 2 Review",
    ],
  },
  {
    name: "Calculus, Exponential and Logarithmic Functions",
    lessons: [
      "Lesson 1: Statistics",
      "Lesson 2: Displaying and Interpreting Data",
      "Lesson 3: Motion and Rates I",
      "Lesson 4: Motion and Rates II",
      "Lesson 5: Motion and Rates III",
      "Lesson 6: Financial Series I",
      "Lesson 7: Financial Series II",
      "Lesson 8: Continuous Probability Distributions I",
      "Lesson 9: Continuous Probability Distributions II",
      "Lesson 10: Year 11 Review",
    ],
  },
];
const Yr12AdvMaths = () => {
  return (
    <div>
      <SubjectDetails
        subject="Mathematics Advanced"
        year="Year 12"
        description="Excel in Year 12 Mathematics Advanced with EXL's Mathematics Advanced course, you'll master calculus, algebra, and statistics with the help of our topic-by-topic booklets and experienced tutors."
        gradientFrom="from-slate-600"
        gradientTo="to-slate-400"
        icon={SquareFunction}
      />
      <ResourcesSection subjectName="Mathematics Advanced" />
      <ExpertsSection />
      <ClassTimes subjectName="Mathematics Advanced" year="Year 12" />
      <TermsTable
        subjectName="Mathematics Advanced"
        termDetails={mathTerms}
        subjectType="mathematics"
      />

      <CoursePricing year="Year 12" />

      <CTA />
    </div>
  );
};

export default Yr12AdvMaths;
