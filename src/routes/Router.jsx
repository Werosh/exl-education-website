import { Routes, Route } from "react-router-dom";

// Importing main pages
import Home from "../Pages/main pages/Home";
import About from "../Pages/main pages/About";
import CalendarPage from "../Pages/main pages/CalenderPage";
import PricingPage from "../Pages/main pages/PricingPage";
import ContactUsPage from "../Pages/main pages/ContactUsPage";
import CoursePage from "../Pages/main pages/CoursePage";

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

import NotFound from "../Pages/main pages/NotFound";
import BookFreeTrialPage from "../Pages/main pages/FreeTrail";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/contact" element={<ContactUsPage />} />
      <Route path="/courses" element={<CoursePage />} />
      <Route path="/free-trail" element={<BookFreeTrialPage />} />
      {/*Math Subject pages */}
      <Route path="/courses/junior-maths" element={<JuniorMaths />} /> //for 7 8
      9 10 maths
      <Route path="/courses/year-11-adv-maths" element={<Yr11AdvMaths />} />
      <Route path="/courses/year-11-ext-maths" element={<Yr11ExtMaths />} />
      <Route path="/courses/year-12-adv-maths" element={<Yr12AdvMaths />} />
      <Route path="/courses/year-12-ext1-maths" element={<Yr12ExtMaths />} />
      {/* Chem subject pages */}
      <Route path="/courses/year-11-chem" element={<Yr11Chem />} />
      <Route path="/courses/year-12-chem" element={<Yr12Chem />} />
      {/* P6 subject pages */}
      <Route path="/courses/year-11-physics" element={<Yr11Phys />} />
      <Route path="/courses/year-12-physics" element={<Yr12Phys />} />
      {/* Catch-All Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
