import React from "react";
import CourseList from "./components/CourseList";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Companies from "./components/Companies";

const App = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <CourseList />
      <Companies />
    </div>
  );
};

export default App;
