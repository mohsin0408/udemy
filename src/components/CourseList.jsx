import React, { useState } from "react";
import { data } from "../data/data";

const CourseList = () => {
    const [selectedTab, setSelectedTab] = useState(data.courseList.tabsData[0]); 
    const [selectedCourse, setSelectedCourse] = useState(selectedTab.topics[0])

    return (
        <section className="container">
            <div>
                <h2 className="text-2xl mt-5 font-semibold">{data.courseList.heading}</h2>
                <p>{data.courseList.desc}</p>
            </div>

            <div className="flex gap-5 mt-4">
                {data.courseList.tabsData.map((tab) => (
                    <div key={tab.name}>
                        <button
                            className={`px-4 py-2 border rounded border-black `} 
                            onClick={() => setSelectedTab(tab) }
                        >
                            <span>{tab.name}</span>
                        </button>
                    </div>
                ))}
            </div>

            
            <div className="mt-6 grid grid-cols-8 ">
                {selectedTab.topics.map((topic) => (
                    <div>
                      <div key={topic.name} className="mb-6 cursor-pointer " onClick={()=> setSelectedCourse(topic)} >  
                        <h3 className="text-xl font-semibold">{topic.name}</h3>
                        <p>Total Learners: {topic.totalLearners}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className=" grid grid-cols-6 gap-5 mt-4     ">
                            {selectedCourse.courses.map((course) => (
                                <div key={course.name} className="border p-4  ">
                                    <img src={course.image} alt={course.name} className="w-full h-auto mb-3" />
                                    <h4 className="font-semibold">{course.name}</h4>
                                      <p>By: {course.tutor.join(", ")}</p>
                                    <p>Rating: {course.rating} | Buyers: {course.buyers}</p>
                                    <p>Price: ₹{course.price}</p>
                                    <span className="bg-green-500 text-white px-2 py-1 rounded">{course.tag}</span>
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
