import React from "react";

const Plan = ({ data }) => {
  console.log(data);

  return (
    <div className="container">
      <div>
        <h1>{data?.plans?.heading}</h1>
        <p>{data?.plans?.desc}</p>
      </div>
      <div className=" flex gap-5 p-6 w-full  ">
        {data?.plans?.planCards.map((plan, index) => (
          <div
            key={index}
            className=" flex flex-col border border-blue-500 p-8 ">
            <span>{plan.name}</span>
            <span>{plan.audience}</span>
            <span>{plan.details}</span>
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
