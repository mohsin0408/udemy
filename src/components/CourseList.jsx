import React, { useState } from "react";
import { data } from "../data/data";

const CourseList = () => {
  const [selectedTab, setSelectedTab] = useState(data.courseList.tabsData[0]);
  const [selectedCourse, setSelectedCourse] = useState(selectedTab.topics[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="container">
      <div>
        <h2 className="text-2xl mt-5 font-semibold">
          {data.courseList.heading}
        </h2>
        <p>{data.courseList.desc}</p>
      </div>

      <div className="flex gap-5 mt-4">
        {data.courseList.tabsData.map((tab, index) => (
          <div key={tab.name} onClick={() => setCurrentIndex(index)}>
            <button
              className={`px-4 py-2 text-gray-600 text-xl font-semibold hover:text-black
                ${currentIndex === index ? "border border-b-black" : ""} `}
              onClick={() => setSelectedTab(tab)}>
              <span>{tab.name}</span>
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-8 gap-5 text-sm items-center justify-center text-center ">
        {selectedTab.topics.map((topic) => (
          <div>
            <div
              key={topic.name}
              className="mb-6 cursor-pointer bg-gray-200 p-3 rounded-3xl hover:bg-gray-300 "
              onClick={() => setSelectedCourse(topic)}>
              <h3 className="text-[18px] font-bold">{topic.name}</h3>
              <p>Total Learners: {topic.totalLearners}</p>
            </div>
          </div>
        ))}
      </div>

      <div className=" grid grid-cols-6 gap-5 mt-4 ">
        {selectedCourse.courses.map((course) => (
          <div key={course.name} className="border p-4  ">
            <img
              src={course.image}
              alt={course.name}
              className="w-full h-auto mb-3"
            />
            <h4 className="font-semibold">{course.name}</h4>
            <p>By: {course.tutor.join(", ")}</p>
            <p>
              Rating: {course.rating} | Buyers: {course.buyers}
            </p>
            <p>Price: ₹{course.price}</p>
            <span className="bg-green-500 text-white px-2 py-1 rounded">
              {course.tag}
            </span>
          </div>
        ))}
      </div>

      <div>
        <button></button>
      </div>
    </section>
  );
};

export default CourseList;
