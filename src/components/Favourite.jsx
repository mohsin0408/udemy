import React from "react";

const Favourite = ({ data }) => {
  return (
    <div className="container">
      <div>
        <span>{data?.viewersFav?.heading}</span>
      </div>
      <div className=" grid grid-cols-4 gap-5 ">
        {data?.viewersFav?.courses.map((course, index) => (
          <div key={index} className=" flex flex-col ">
            <img src={course.image} />
            <span>{course.name}</span>
            <span>{course.buyers}</span>
            <span>{course.rating}</span>
            <span>{course.price}</span>
            <span>{course.tag}</span>
            <div>
              {course.tutor?.map((tutors, index) => (
                <div key={index}>
                  <span>{tutors}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favourite;
