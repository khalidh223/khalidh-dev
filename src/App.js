import React from "react";
import About from "./components/About";
// import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
// import Blog from "./components/Blog";
// import Experience from "./components/Experience";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <About />
      <Projects />
    </main>
  );
}