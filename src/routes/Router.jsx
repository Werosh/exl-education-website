import { Routes, Route } from "react-router-dom";

// Importing main pages
import Home from "../Pages/main pages/Home";
import About from "../Pages/main pages/About";

// importing subjects pages
import Yr11AdvMaths from "../course-pages/maths/Yr11AdvMaths";
import JuniorMaths from "../course-pages/maths/JuniorMaths";
import Yr11ExtMaths from "../course-pages/maths/Yr11ExtMaths";
import Yr12AdvMaths from "../course-pages/maths/Yr12AdvMaths";
import Yr12ExtMaths from "../course-pages/maths/Yr12ExtMaths";

import Yr11Chem from "../course-pages/chems/Yr11Chem";
import Yr12Chem from "../course-pages/chems/Yr12Chem";

import Yr11Phys from "../course-pages/physics/Yr11Phys";
import Yr12Phys from "../course-pages/physics/Yr12Phys";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />

      {/*Math Subject pages */}
      <Route path="/courses/year-11-adv-maths" element={<Yr11AdvMaths />} />
      <Route path="/courses/junior-maths" element={<JuniorMaths />} />
      <Route path="/courses/year-11-ext-maths" element={<Yr11ExtMaths />} />
      <Route path="/courses/year-12-adv-maths" element={<Yr12AdvMaths />} />
      <Route path="/courses/year-12-ext1-maths" element={<Yr12ExtMaths />} />

      {/* Chem subject pages */}
      <Route path="/courses/year-11-chem" element={<Yr11Chem />} />
      <Route path="/courses/year-12-chem" element={<Yr12Chem />} />

      {/* P6 subject pages */}
      <Route path="/courses/year-11-physics" element={<Yr11Phys />} />
      <Route path="/courses/year-12-physics" element={<Yr12Phys />} />

      {/* Add more routes as needed */}
      {/* <Route path="/courses/subject-name" element={<SubjectComponent />} /> */}
    </Routes>
  );
};

export default AppRouter;
