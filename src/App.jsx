import React from "react";  
import Header from "./components/header";
import Hero from "./components/hero";
import CourseList from "./components/CourseList";

const App = () => {
  return(
    <>
    <div>
    <Header/>
    <Hero/>
    <CourseList/>
    </div>
    </>
  )
}

export default App