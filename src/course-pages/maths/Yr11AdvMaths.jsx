import React from "react";
import { DraftingCompass } from "lucide-react";
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
    name: "Functions and Statistics",
    lessons: [
      "Lesson 1: Algebraic Techniques I",
      "Lesson 2: Algebraic Techniques II",
      "Lesson 3: Numbers and Surds I",
      "Lesson 4: Numbers and Surds II",
      "Lesson 5: Introduction to Functions I",
      "Lesson 6: Introduction to Functions II",
      "Lesson 7: Transformations and Symmetry I",
      "Lesson 8: Transformations and Symmetry II",
      "Lesson 9: Probability and Venn Diagrams",
      "Lesson 10: Term 1 Review",
    ],
  },
  {
    name: "Trigonometric Functions, Further Functions and Statistics",
    lessons: [
      "Lesson 1: Trigonometry I",
      "Lesson 2: Trigonometry II",
      "Lesson 3: Trigonometry III",
      "Lesson 4: Trigonometry IV",
      "Lesson 5: Radians",
      "Lesson 6: The Coordinate Plane I",
      "Lesson 7: The Coordinate Plane II",
      "Lesson 8: Discrete Probability Distributions I",
      "Lesson 9: Discrete Probability Distributions II",
      "Lesson 10: Term 2 Review",
    ],
  },
  {
    name: "Calculus, Exponential and Logarithmic Functions",
    lessons: [
      "Lesson 1: Differentiation I",
      "Lesson 2: Differentiation II",
      "Lesson 3: Differentiation III",
      "Lesson 4: Differentiation IV",
      "Lesson 5: Exponential and Logarithmic Functions I",
      "Lesson 6: Exponential and Logarithmic Functions II",
      "Lesson 7: Exponential and Logarithmic Functions III",
      "Lesson 8: Extending Calculus I",
      "Lesson 9: Extending Calculus II",
      "Lesson 10: Y11 Review",
    ],
  },
];
const Yr11AdvMaths = () => {
  return (
    <div>
      <SubjectDetails
        subject="Mathematics Advanced"
        year="Year 11"
        description="Build a strong foundation in Year 11 Maths Advanced where our structured learning materials and excellent teachers help you excel in calculus, algebra, trigonometry, and statistics."
        gradientFrom="from-[#2A5C90]"
        gradientTo="to-[#75A9D3]"
        icon={DraftingCompass}
      />

      <ResourcesSection subjectName="Mathematics Advanced" />

      <ExpertsSection />

      <ClassTimes subjectName="Mathematics Advanced" year="Year 11" />

      <TermsTable
        subjectName="Mathematics Advanced"
        termDetails={mathTerms}
        subjectType="mathematics"
      />

      {/* <ComArea /> */}

      {/* <LittleDescription /> */}

      <CoursePricing year="Year 11" />

      <CTA />
    </div>
  );
};

export default Yr11AdvMaths;
