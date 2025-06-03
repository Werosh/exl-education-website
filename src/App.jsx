// src/App.jsx
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routes/Router";
import Navbar from "./component/Navbar";

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <main className="p-6">
          <AppRouter />
        </main>
      </div>
    </Router>
  );
}

export default App;
