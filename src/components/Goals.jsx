import React, { useState } from "react";
import data from "../data/index.json";

const Goals = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <h2>Learning focused on your goals</h2>

      <div className=" container flex items-center justify-between gap-5">
        <div className="w-1/2 ">
          {data.goals.map((goal, index) => (
            <div
              key={index}
              className=" flex gap-5 p-10 "
              onClick={() => setCurrentIndex(index)}>
              <div>
                <img src={goal.src} alt={goal.heading} className=" w-20 " />
              </div>
              <div className=" pt-2 ">
                <h1>{goal.heading}</h1>
                <p>{goal.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-1/2 pb-6 ">
          <img src={data.panels[currentIndex]} alt="...img" />
        </div>
      </div>
    </>
  );
};

export default Goals;
