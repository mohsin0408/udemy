import React from "react";
import CourseList from "./components/CourseList";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Companies from "./components/Companies";
import Goals from "./components/Goals";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Slider />
      <CourseList />
      <Companies />
      <Goals />
    </div>
  );
};

export default App;
