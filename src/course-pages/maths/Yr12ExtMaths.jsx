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
    name: "Proof, Financial Math and Vectors",
    lessons: [
      "Lesson 1: Sequences and Series",
      "Lesson 2: Financial Series",
      "Lesson 3: Mathematical Induction",
      "Lesson 4: Trigonometric Equations",
      "Lesson 5: Graphs and Equations",
      "Lesson 6: Curve Sketching and Calculus I",
      "Lesson 7: Curve Sketching and Calculus II",
      "Lesson 8: Introduction to Vectors",
      "Lesson 9: Further Vectors",
      "Lesson 10: Term 1 Review",
    ],
  },
  {
    name: "Further Calculus and Statistics",
    lessons: [
      "Lesson 1: Calculus",
      "Lesson 2: Integration I",
      "Lesson 3: Exponential and Logarithmic Functions",
      "Lesson 4: Integration II",
      "Lesson 5: Trigonometry",
      "Lesson 6: Integration III",
      "Lesson 7: Motion and Rates",
      "Lesson 8: Calculus Review",
      "Lesson 9: Statistics",
      "Lesson 10: Term 2 Review",
    ],
  },
  {
    name: "Calculus, Exponential and Logarithmic Functions",
    lessons: [
      "Lesson 1: Differential Equations I",
      "Lesson 2: Differential Equations II",
      "Lesson 3: Projectile Motion I",
      "Lesson 4: Projectile Motion II",
      "Lesson 5: Further Projectile Motion",
      "Lesson 6: Continuous Probability Distributions",
      "Lesson 7: Exponential and Logarithmic Functions III",
      "Lesson 8: Statistics Review",
      "Lesson 9: Calculus Review",
      "Lesson 10: Year 12 Review",
    ],
  },
];
const Yr12ExtMaths = () => {
  return (
    <div>
      <div>
        <SubjectDetails
          subject="Mathematics Extension 1"
          year="Year 12"
          description="Excel in your HSC with the help of EXL's Extension 1 Maths resources. You'll master vectors, sequences and series and inverse trigonometry guided by our amazing team of teachers.."
          gradientFrom="from-purple-600"
          gradientTo="to-violet-400"
          icon={SquareFunction}
        />

        <ResourcesSection
          subjectName="Mathematics Extension 1"
        />

        <ExpertsSection />

        <ClassTimes subjectName="Mathematics Extension 1" year="Year 12" />

        <TermsTable
          subjectName="Mathematics Extension 1"
          termDetails={mathTerms}
          subjectType="mathematics"
        />

        {/* <ComArea /> */}
      </div>

      {/* <LittleDescription /> */}

      <CoursePricing year="Year 12" />

      <CTA />
    </div>
  );
};

export default Yr12ExtMaths;
