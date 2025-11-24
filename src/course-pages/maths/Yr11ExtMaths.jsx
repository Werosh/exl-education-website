import React from "react";
import { SquarePi } from "lucide-react";
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
      "Lesson 1: Algebraic Techniques, Numbers and Surds",
      "Lesson 2: Introduction to Functions and The Coordinate Plane",
      "Lesson 3: Transformations and Symmetry",
      "Lesson 4: Further Graphs, Inverse Functions and Parametric Equations I",
      "Lesson 5: Further Graphs, Inverse Functions and Parametric Equations II",
      "Lesson 6: Probability and Venn Diagrams",
      "Lesson 7: Permutations and Combinations I",
      "Lesson 8: Permutations and Combinations II",
      "Lesson 9: Permutations and Combinations III",
      "Lesson 10: Term 1 Review",
    ],
  },
  {
    name: "Trigonometry, Differentiation and Polynomials",
    lessons: [
      "Lesson 1: Trigonometry I",
      "Lesson 2: Trigonometry II",
      "Lesson 3: Discrete Probability Distributions",
      "Lesson 4: Exponential and Logarithmic Functions",
      "Lesson 5: Differentiation I",
      "Lesson 6: Differentiation II",
      "Lesson 7: Extending Calculus",
      "Lesson 8: Polynomials I",
      "Lesson 9: Polynomials II",
      "Lesson 10: Term 2 Review",
    ],
  },
  {
    name: "Trigonometry, Combinatorics and Calculus",
    lessons: [
      "Lesson 1: Radians",
      "Lesson 2: Inverse Trigonometric Functions",
      "Lesson 3: Further Trigonometric Identities",
      "Lesson 4: Trigonometry Review",
      "Lesson 5: Binomial Expansion and Pascal's Triangle I",
      "Lesson 6: Binomial Expansion and Pascal's Triangle II",
      "Lesson 7: Rates of Change I",
      "Lesson 8: Rates of Change II",
      "Lesson 9: Term 3 Review",
      "Lesson 10: Year 11 Review",
    ],
  },
];
const Yr11ExtMaths = () => {
  return (
    <div>
      <SubjectDetails
        subject="Mathematics Extension 1"
        year="Year 11"
        description="Prepare for your Mathematics Extension 1 HSC topics with EXL's Extension 1 Maths course. You'll the master the basics such as algebra and trigonometry with the help of our topic-by-topic booklets."
        gradientFrom="from-[#3A6F8F]"
        gradientTo="to-[#83C8E6]"
        icon={SquarePi}
      />

      <ResourcesSection
        subjectName="Mathematics Extension 1"
      />

      <ExpertsSection />

      <ClassTimes subjectName="Mathematics Extension 1" year="Year 11" />

      <TermsTable
        subjectName="Mathematics Extension 1"
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

export default Yr11ExtMaths;
