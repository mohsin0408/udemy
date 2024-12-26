import React from "react";

const Trending = ({ data }) => {
  return (
    <div className="container flex justify-center items-center ">
      <div className=" flex flex-col ">
        <span>{data?.trending?.heading}</span>
        <span>{data?.trending?.desc}</span>
        <span>{data?.trending?.btn}</span>
      </div>
      <div>
        <img src={data?.trending?.img} />
      </div>
    </div>
  );
};

export default Trending;
