import { Routes, Route } from "react-router-dom";

// Importing main pages
import Home from "../Pages/main pages/Home";
import About from "../Pages/main pages/About";

// importing subjects pages
import Yr11AdvMaths from "../course-pages/maths/Yr11AdvMaths";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />

      {/* Subject pages */}
      <Route path="/Yr11AdvMaths" element={<Yr11AdvMaths />} />
    </Routes>
  );
};

export default AppRouter;
