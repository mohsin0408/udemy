import React from "react";
import { data } from "../data/data";

const Companies = () => {
  console.log(data.companies);
  return (
    <div className=" container text-center p-14 ">
      <h1 className=" text-[#6a6f73] text-xl mb-5 ">
        Trusted by over 16,000 companies and millions of learners around the
        world
      </h1>
      <div className=" flex gap-11 items-center justify-center w-full h-full ">
        {data.companies.map((image, index) => (
          <img
            src={image}
            key={index}
            alt={`companies-images`}
            className=" w-24 h-28  "
          />
        ))}
      </div>
    </div>
  );
};

export default Companies;
