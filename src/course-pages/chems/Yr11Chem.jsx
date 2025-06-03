import React from "react";
import { FlaskConical } from "lucide-react";
import SubjectDetails from "../../reuse-subject-comps/SubjectDetails";
import ComArea from "../../reuse-subject-comps/ComArea";
import LittleDescription from "../../reuse-subject-comps/littleDescription";
import TermsTable from "../../reuse-subject-comps/TermsTable";

const chemTerms = [
  {
    name: "Module 1, Module 2 (2.1)",
    lessons: [
      "Lesson 1: Module 1 - Properties of Matter",
      "Lesson 2: Module 1 - Models of the Atom and Isotopes",
      "Lesson 3: Module 1 - Nuclear Decay, Radioisotopes",
      "Lesson 4: Module 1 - Periodicity",
      "Lesson 5: Module 1 - Bonding I",
      "Lesson 6: Module 1 - Intermolecular Forces",
      "Lesson 7: Working Scientifically and Scientific Skills",
      "Lesson 8: Module 1 Review",
      "Lesson 9: Module 2 - Balancing Equations",
      "Lesson 10: Module 2 - Stoichiometry",
    ],
  },
  {
    name: "Module 2 (2.2 - 2.4), Module 3",
    lessons: [
      "Lesson 1: Module 2 - Intro to Moles",
      "Lesson 2: Module 2 - Mole Concept",
      "Lesson 3: Module 2 - Concentration and Molarity",
      "Lesson 4: Module 2 - Gas Laws",
      "Lesson 5: Module 2 Review",
      "Lesson 6: Module 3 - Chemical Reactions",
      "Lesson 7: Module 3 - Reactivity of Metals",
      "Lesson 8: Module 3 - Galvanic Cells",
      "Lesson 9: Module 3 - Rates of Reactions",
      "Lesson 10: Module 3 Review",
    ],
  },
  {
    name: "Module 4, Foundations for Year 12",
    lessons: [
      "Lesson 1: Module 4 - Endothermic and Exothermic Reactions",
      "Lesson 2: Module 4 - Enthalpy Calculations",
      "Lesson 3: Module 4 - Hess' Law",
      "Lesson 4: Module 4 - Entropy",
      "Lesson 5: Module 4 - Gibbs Free Energy",
      "Lesson 6: Module 4 Review",
      "Lesson 7: Year 11 Review",
      "Lesson 8: Foundations for Year 12 I",
      "Lesson 9: Foundations for Year 12 II",
      "Lesson 10: Foundations for Year 12 III",
    ],
  },
];

const Yr11Chem = () => {
  return (
    <div>
      <div>
        <SubjectDetails
          subject=" Chemistry"
          year="Year 11"
          description="
Year 11 Chemistry

 Chemistry
Build your foundation for Chemistry in our Year 11 Chemistry course.  You'll develop your scientific skills and knowledge of chemical principles, reactions, and laboratory techniques."
          gradientFrom="from-green-600"
          gradientTo="to-teal-400"
          icon={FlaskConical}
        />

        <ComArea />

        <LittleDescription />

        <TermsTable subjectName=" Chemistry" termDetails={chemTerms} />
      </div>
    </div>
  );
};

export default Yr11Chem;
