import React from "react";
import CourseList from "./components/CourseList";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";

const App = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <CourseList />
    </div>
  );
};

export default App;
