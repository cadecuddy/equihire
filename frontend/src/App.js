import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar.js"
import Review from "./components/Review.js"
import Settings from "./components/Settings.js"
import About from "./components/About.js"

function App() {
  return (
    <Router>
      <div>
        <header className="text-3xl mt-8">
          <span className="ml-16 font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600"> equihire</span>
          <Navbar />
        </header>

        <Routes>
          <Route path="/" element={<Review />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/about" element={<About />} />
        </Routes>

      </div>
    </Router >
  );
}

export default App;
