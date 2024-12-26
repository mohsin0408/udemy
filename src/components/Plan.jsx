import React from "react";

const Plan = ({ data }) => {
  console.log(data);

  return (
    <div className="container">
      <div>
        <h1>{data?.plans?.heading}</h1>
        <p>{data?.plans?.desc}</p>
      </div>
      <div className=" flex gap-5  w-full  ">
        {data?.plans?.planCards.map((plan, index) => (
          <div key={index} className=" flex flex-col  ">
            <div className=" flex flex-col ">
              <span className=" font-semibold text-[20px] ">{plan.name}</span>
              <span className=" text-sm ">{plan.audience}</span>
              <span>{plan.details}</span>
            </div>
            <span>{plan.price}</span>
            <span>{plan.btnText}</span>
            <div>
              {plan.features?.map((feature, index) => (
                <div key={index}>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plan;
