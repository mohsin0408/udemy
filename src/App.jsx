import React, { useEffect, useState } from "react";
import CourseList from "./components/CourseList";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Companies from "./components/Companies";
import Goals from "./components/Goals";
import Plan from "./components/Plan";

const App = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://almaazkhan1055.github.io/udemy_data/udemy-data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);

  // fetch("https://almaazkhan1055.github.io/udemy_data/udemy-data.json")
  //   .then((res) => res.json())
  //   .then((data) => setData(data));

  return (
    <div className="overflow-hidden">
      <Navbar />
      <Slider />
      <CourseList />
      <Companies />
      <Goals />
      <Plan data={data} />
    </div>
  );
};

export default App;
