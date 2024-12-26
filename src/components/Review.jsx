import React from "react";

const Review = ({ data }) => {
  return (
    <div className="container">
      <div>
        <h1>{data?.reviews?.heading}</h1>
        <span className=" flex ">
          {data?.reviews?.reviewCards.map((reviews, index) => (
            <div key={index} className=" flex flex-col gap-4 ">
              <span>{reviews.review}</span>
              <img src={reviews.img} className=" w-10 " />
              <span>{reviews.about}</span>
              <span>{reviews.link.name}</span>
            </div>
          ))}
        </span>
      </div>
    </div>
  );
};

export default Review;
