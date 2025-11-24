import React from "react";
import { FlaskConical } from "lucide-react";
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
    name: "Module 1, Module 2 (2.1)",
    startDate: "15/1/25",
    lessons: [
      { name: "Lesson 1: Module 1 - Properties of Matter", date: "15/1/25" },
      {
        name: "Lesson 2: Module 1 - Models of the Atom and Isotopes",
        date: "22/1/25",
      },
      {
        name: "Lesson 3: Module 1 - Nuclear Decay, Radioisotopes",
        date: "29/1/25",
      },
      { name: "Lesson 4: Module 1 - Periodicity", date: "5/2/25" },
      { name: "Lesson 5: Module 1 - Bonding I", date: "12/2/25" },
      { name: "Lesson 6: Module 1 - Intermolecular Forces", date: "19/2/25" },
      {
        name: "Lesson 7: Working Scientifically and Scientific Skills",
        date: "26/2/25",
      },
      { name: "Lesson 8: Module 1 Review", date: "5/3/25" },
      { name: "Lesson 9: Module 2 - Balancing Equations", date: "12/3/25" },
      { name: "Lesson 10: Module 2 - Stoichiometry", date: "19/3/25" },
    ],
  },
  {
    name: "Module 2 (2.2 - 2.4), Module 3",
    startDate: "26/3/25",
    lessons: [
      { name: "Lesson 1: Module 2 - Intro to Moles", date: "26/3/25" },
      { name: "Lesson 2: Module 2 - Mole Concept", date: "2/4/25" },
      {
        name: "Lesson 3: Module 2 - Concentration and Molarity",
        date: "9/4/25",
      },
      { name: "Lesson 4: Module 2 - Gas Laws", date: "16/4/25" },
      { name: "Lesson 5: Module 2 Review", date: "23/4/25" },
      { name: "Lesson 6: Module 3 - Chemical Reactions", date: "30/4/25" },
      { name: "Lesson 7: Module 3 - Reactivity of Metals", date: "7/5/25" },
      { name: "Lesson 8: Module 3 - Galvanic Cells", date: "14/5/25" },
      { name: "Lesson 9: Module 3 - Rates of Reactions", date: "21/5/25" },
      { name: "Lesson 10: Module 3 Review", date: "28/5/25" },
    ],
  },
  {
    name: "Module 4, Foundations for Year 12",
    startDate: "4/6/25",
    lessons: [
      {
        name: "Lesson 1: Module 4 - Endothermic and Exothermic Reactions",
        date: "4/6/25",
      },
      { name: "Lesson 2: Module 4 - Enthalpy Calculations", date: "11/6/25" },
      { name: "Lesson 3: Module 4 - Hess' Law", date: "18/6/25" },
      { name: "Lesson 4: Module 4 - Entropy", date: "25/6/25" },
      { name: "Lesson 5: Module 4 - Gibbs Free Energy", date: "2/7/25" },
      { name: "Lesson 6: Module 4 Review", date: "9/7/25" },
      { name: "Lesson 7: Year 11 Review", date: "16/7/25" },
      { name: "Lesson 8: Foundations for Year 12 I", date: "23/7/25" },
      { name: "Lesson 9: Foundations for Year 12 II", date: "30/7/25" },
      { name: "Lesson 10: Foundations for Year 12 III", date: "6/8/25" },
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
          gradientFrom="from-[#6E4A6F]"
          gradientTo="to-[#E683BB]"
          icon={FlaskConical}
        />

        <ResourcesSection subjectName="Chemistry" />

        <ExpertsSection />

        <ClassTimes subjectName="Chemistry" year="Year 11" />

        <TermsTable
          subjectName="Chemistry"
          termDetails={chemTerms}
          subjectType="chemistry"
        />

        {/* <ComArea /> */}

        {/* <LittleDescription /> */}
      </div>

      <CoursePricing year="Year 11" />

      <CTA />
    </div>
  );
};

export default Yr11Chem;
