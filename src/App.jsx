import React, { useEffect, useState } from "react";
import CourseList from "./components/CourseList";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Companies from "./components/Companies";
import Goals from "./components/Goals";
import Plan from "./components/Plan";
import Review from "./components/Review";

import Trending from "./components/Trending";
import TopTrending from "./components/TopTrending";

const App = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://almaazkhan1055.github.io/udemy_data/udemy-data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);

  return (
    <div className="overflow-hidden">
      <Navbar />
      <Slider />
      <CourseList />
      <Companies />
      <Goals />
      <Plan data={data} />
      <Review data={data} />
      <Trending data={data} />
      <TopTrending data={data} />
    </div>
  );
};

export default App;
