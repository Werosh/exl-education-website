import React from "react";
import { SquareDivide } from "lucide-react";
import SubjectDetails from "../../reuse-subject-comps/SubjectDetails";
import ResourcesSection from "../../reuse-subject-comps/ResourcesSection";
import ExpertsSection from "../../reuse-subject-comps/ExpertsSection";
import ClassTimes from "../../reuse-subject-comps/ClassTimes";
import ComArea from "../../reuse-subject-comps/ComArea";
import LittleDescription from "../../reuse-subject-comps/littleDescription";
import CoursePricing from "../../reuse-subject-comps/CoursePricing";
import CTA from "../../sections/CTA";

const JuniorMaths = () => {
  return (
    <div>
      <SubjectDetails
        subject="Junior Maths"
        year="Year 7/8/10"
        description="EXL's Year 7–10 Mathematics courses build a strong foundation and progressively develop skills for senior studies, with HSC-style practice to ensure students are fully prepared."
        gradientFrom="from-sky-600"
        gradientTo="to-blue-400"
        icon={SquareDivide}
      />

      <ResourcesSection subjectName="Junior Maths" />

      <ExpertsSection />

      <ClassTimes subjectName="Junior Maths" year="Year 7/8/10" />

      {/* <ComArea /> */}

      {/* <LittleDescription /> */}

      <CoursePricing
        year="Year 7"
        showYear10Note={true}
        showYearSelector={true}
      />

      <CTA />
    </div>
  );
};

export default JuniorMaths;
