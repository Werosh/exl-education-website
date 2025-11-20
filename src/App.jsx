import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routes/Router";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import ScrollToTop from "./component/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Navbar />
        <main className="p-2 md:p-4 lg:p-6">
          <AppRouter />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
