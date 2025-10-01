import React from "react";
import { Omega } from "lucide-react";
import SubjectDetails from "../../reuse-subject-comps/SubjectDetails";
import ComArea from "../../reuse-subject-comps/ComArea";
import LittleDescription from "../../reuse-subject-comps/littleDescription";
import TermsTable from "../../reuse-subject-comps/TermsTable";

const PhysTerms = [
  {
    name: "Module 1, Module 2 (2.1)",
    lessons: [
      "Lesson 1: Module 1 - Introduction to Motion",
      "Lesson 2: Module 1 - Further Work with Velocity",
      "Lesson 3: Module 1 - Kinematics Equations",
      "Lesson 4: Module 1 - Two-Dimensional Motion",
      "Lesson 5: Module 1 - Further Two-Dimensional Motion",
      "Lesson 6: Module 1 - Relative Vectors",
      "Lesson 7: Working Scientifically and Scientific Skills",
      "Lesson 8: Module 1 - Mini-Exam and Review",
      "Lesson 9: Module 2 - Introduction to Forces",
      "Lesson 10: Module 2 - Further Work With Forces",
    ],
  },
  {
    name: "Module 2 (2.2 - 2.4), Module 3",
    lessons: [
      "Lesson 1: Module 2 - Friction and Multiple Body Systems",
      "Lesson 2: Module 2 - Work, Energy and Power",
      "Lesson 3: Module 2 - Momentum and Collisions",
      "Lesson 4: Module 2 - Impulse and Further Work With Collisions",
      "Lesson 5: Module 2 - Mini Exam and Review",
      "Lesson 6: Module 3 - Introduction to Waves",
      "Lesson 7: Module 3 - Behaviour of Waves",
      "Lesson 8: Module 3 - Sound Waves",
      "Lesson 9: Module 3 - Ray Model of Light",
      "Lesson 10: Module 3 - Introduction to Thermodynamics",
    ],
  },
  {
    name: "Module 4, Foundations for Year 12",
    lessons: [
      "Lesson 1: Module 3 - Further Work with Thermodynamics",
      "Lesson 2: Module 4 - Introduction to Electrostatics",
      "Lesson 3: Module 4 - Further Work with Electrostatics",
      "Lesson 4: Module 4 - Introduction to Circuits",
      "Lesson 5: Module 4 - Introduction to Magnetism",
      "Lesson 6: Module 4 - Mini Exam and Review",
      "Lesson 7: Year 11 Review",
      "Lesson 8: Foundations for Year 12 I",
      "Lesson 9: Foundations for Year 12 II",
      "Lesson 10: Foundations for Year 12 III",
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

        <ComArea />

        <TermsTable subjectName="Physics" termDetails={PhysTerms} />

        <LittleDescription />
      </div>
    </div>
  );
};

export default Yr11Phys;
