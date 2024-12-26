import React from "react";

const TopTrending = ({ data }) => {
  return (
    <div className="container">
      <span>{data?.topTrending?.heading}</span>
      <div>
        <div className=" flex gap-5 ">
          {data?.topTrending?.cards.map((card, index) => (
            <div key={index}>
              <span>{card.title}</span>
              <div>
                {card.courses?.map((course, index) => (
                  <div key={index} className=" flex flex-col ">
                    <span>{course.name}</span>
                    <span>{course.learners}</span>
                    <span>{course.btn}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopTrending;
