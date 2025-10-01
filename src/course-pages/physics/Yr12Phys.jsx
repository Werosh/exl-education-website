import React from "react";
import { Orbit } from "lucide-react";
import SubjectDetails from "../../reuse-subject-comps/SubjectDetails";
import ComArea from "../../reuse-subject-comps/ComArea";
import LittleDescription from "../../reuse-subject-comps/littleDescription";
import TermsTable from "../../reuse-subject-comps/TermsTable";

const PhysTerms = [
  {
    name: "Module 5, Module 6 (6.1)",
    lessons: [
      "Lesson 1: Module 5 - Introduction to Projectile Motion",
      "Lesson 2: Module 5 - Further Work with Projectile Motion",
      "Lesson 3: Module 5 - Circular Motion",
      "Lesson 4: Module 5 - Further Work with Circular Motion",
      "Lesson 5: Module 5 - Introduction to Gravity",
      "Lesson 6: Module 5 - Further work with Gravity",
      "Lesson 7: Module 5 - Module 5 Exam and Review",
      "Lesson 8: Module 6 - Charges in Fields",
      "Lesson 9: Module 6 - The Motor Effect",
      "Lesson 10: Module 6 - Relationship Between Electricity and Magnetism",
    ],
  },
  {
    name: "Module 6 (6.2-6.3), Module 7 (7.1-7.5)",
    lessons: [
      "Lesson 1: Module 6 - Transformers",
      "Lesson 2: Module 6 - Applications of the Motor Effect",
      "Lesson 3: Module 6 - Further Work with Electromagnetism",
      "Lesson 4: Module 6 - Mini Exam and Review",
      "Lesson 5: Module 7 - Introduction to Electromagnetic Waves",
      "Lesson 6: Module 7 - The Light Spectrum",
      "Lesson 7: Module 7 - Early Models of Light",
      "Lesson 8: Module 7 - Diffraction and Polarisation",
      "Lesson 9: Module 7 - The Quantum Model of Light",
      "Lesson 10: Module 7 - Introduction to Special Relativity",
    ],
  },
  {
    name: "Module 7 (7.6), Module 8",
    lessons: [
      "Lesson 1: Module 7 - Further Special Relativity",
      "Lesson 2: Module 7 - Mini Exam and Review",
      "Lesson 3: Module 8 - The Big Bang",
      "Lesson 4: Module 8 - Stars",
      "Lesson 5: Module 8 - Subatomic Particles",
      "Lesson 6: Module 8 - Later Models of the Atom",
      "Lesson 7: Module 8 - Nuclear Decay",
      "Lesson 8: Module 8 - Energy in Nuclear Reactions",
      "Lesson 9: Module 8 - The Standard Model",
      "Lesson 10: Module 8 - Mini Exam and Review",
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

        <ComArea />

        <TermsTable subjectName="Physics" termDetails={PhysTerms} />

        <LittleDescription />
      </div>
    </div>
  );
};

export default Yr12Phys;
