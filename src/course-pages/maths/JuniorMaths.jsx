import React from "react";
import { SquareDivide } from "lucide-react";
import SubjectDetails from "../../reuse-subject-comps/SubjectDetails";
import ResourcesSection from "../../reuse-subject-comps/ResourcesSection";
import ExpertsSection from "../../reuse-subject-comps/ExpertsSection";
import ClassTimes from "../../reuse-subject-comps/ClassTimes";
import ComArea from "../../reuse-subject-comps/ComArea";
import LittleDescription from "../../reuse-subject-comps/littleDescription";
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

      <ResourcesSection
        subjectName="Junior Maths"
        heading="Targeted, syllabus-ready resources"
        description="Our Year 7–10 Mathematics tutoring resources are designed by subject matter experts and cover all aspects of the NSW Mathematics syllabus. Get ahead with comprehensive content, exam-style workbooks, quizzes, and topic tests for each module."
      />

      <ExpertsSection
        heading="Subject matter experts"
        description="EXL teachers are experts in their field with real teaching experience. Develop in-depth knowledge and understanding with our experienced teachers by applying our proven methods for Maths."
      />

      <ClassTimes subjectName="Junior Maths" year="Year 7/8/10" />

      <ComArea />

      <LittleDescription />

      <CTA />
    </div>
  );
};

export default JuniorMaths;
