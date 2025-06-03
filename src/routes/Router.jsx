import { Routes, Route } from "react-router-dom";
import Home from "../Pages/main pages/Home";
import About from "../Pages/main pages/About";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AppRouter;
