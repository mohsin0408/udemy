import React, { useState } from "react";
import { data } from "../data/data";

const CourseList = () => {
  const [selectedTab, setSelectedTab] = useState(data.courseList.tabsData[0]);
  const [selectedCourse, setSelectedCourse] = useState(selectedTab.topics[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [subCurrentIndex, setSubCurrentIndex] = useState(0);

  console.log(currentIndex, "çurrent");

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
                ${
                  currentIndex === index
                    ? " text-black border border-b-black"
                    : ""
                } `}
              onClick={() => setSelectedTab(tab)}>
              <span>{tab.name}</span>
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-8 gap-5 text-sm items-center justify-center text-center ">
        {selectedTab.topics.map((topic, index) => (
          <div onClick={() => setSubCurrentIndex(index)}>
            <button
              key={topic.name}
              className={`mb-6 cursor-pointer p-3 rounded-3xl bg-gray-200 hover:bg-gray-300 whitespace-nowrap gap-7 ${
                subCurrentIndex === index ? "bg-black text-white" : ""
              }`}
              onClick={() => setSelectedCourse(topic)}
              style={{
                backgroundColor: subCurrentIndex === index ? "black" : "",
              }}>
              <h3 className="text-[18px] font-bold">{topic.name}</h3>
              <p>Total Learners: {topic.totalLearners}</p>
            </button>
          </div>
        ))}
      </div>

      <div className=" grid grid-cols-6 gap-5 mt-4 mb-10 ">
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
            <span className="bg-green-500 text-white font-bold px-2 py-1 rounded">
              {course.tag}
            </span>
          </div>
        ))}
      </div>

      <div>
        <button className=" px-5 py-2 border font-bold border-black hover:bg-gray-200 ">
          Show all Data Science courses
        </button>
      </div>
    </section>
  );
};

export default CourseList;
