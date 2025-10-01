import React from "react";
import { Biohazard } from "lucide-react";
import SubjectDetails from "../../reuse-subject-comps/SubjectDetails";
import ComArea from "../../reuse-subject-comps/ComArea";
import LittleDescription from "../../reuse-subject-comps/littleDescription";
import TermsTable from "../../reuse-subject-comps/TermsTable";

const chemTerms = [
  {
    name: "Module 5, Module 6 (6.1)",
    lessons: [
      "Lesson 1: Module 5 - Static and Dynamic Equilibrium",
      "Lesson 2: Module 5 - Le Chatelier's principle",
      "Lesson 3: Module 5 - Collision Theory",
      "Lesson 4: Module 5 - The Equilibrium Constant I",
      "Lesson 5: Module 5 - The Equilibrium Constant II",
      "Lesson 6: Module 5 - Solubility Product I",
      "Lesson 7: Module 5 - Solubility Product II",
      "Lesson 8: Module 5 Review",
      "Lesson 9: Module 6 - Introduction to Acids and Bases",
      "Lesson 10: Module 6 - Acid Base Theory",
    ],
  },
  {
    name: "Module 6 (6.2-6.3), Module 7 (7.1-7.5)",
    lessons: [
      "Lesson 1: Module 6 - pH and pOH Calculations",
      "Lesson 2: Module 6 - Further Acid Base Calculations",
      "Lesson 3: Module 6 - Standard Titrations",
      "Lesson 4: Module 6 - Further Titration",
      "Lesson 5: Module 6 Review",
      "Lesson 6: Module 7 - Organic Nomenclature",
      "Lesson 7: Module 7 - Properties of Hydrocarbons",
      "Lesson 8: Module 7 - Hydrocarbon Reactions",
      "Lesson 9: Module 7 - Alcohols",
      "Lesson 10: Module 7 - Organic Acids and Bases",
    ],
  },
  {
    name: "Module 7 (7.6), Module 8",
    lessons: [
      "Lesson 1: Module 7 - Polymers",
      "Lesson 2: Module 7 Review",
      "Lesson 3: Module 8 - Ion Testing",
      "Lesson 4: Module 8 - Inorganic Spectroscopy",
      "Lesson 5: Module 8 - Organic Testing",
      "Lesson 6: Module 8 - Infrared and Mass Spectroscopy",
      "Lesson 7: Module 8 - C and H NMR",
      "Lesson 8: Module 8 - Spectra",
      "Lesson 9: Module 8 - Industrial Application",
      "Lesson 10: Module 8 Review",
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

        <ComArea />

        <TermsTable subjectName=" Chemistry" termDetails={chemTerms} />
        <LittleDescription />
      </div>
    </div>
  );
};

export default Yr12Chem;
