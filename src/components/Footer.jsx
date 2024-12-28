import React from "react";

const Footer = ({ data }) => {
  return (
    <div>
      <div>
        <span>{data?.footer?.footer1?.heading}</span>
        <div>
          {data?.footer?.footer1?.img.map((imgs, index) => (
            <div key={index}>
              <img src={imgs} alt="imgs" />
            </div>
          ))}
        </div>
      </div>
      {/* ========================= */}
      <div>
        <span>{data?.footer?.footer2?.categories?.title}</span>
        <div className=" grid grid-cols-4 gap-5 ">
          {data?.footer?.footer2?.categories?.cards1.map((card, index) => (
            <div key={index}>
              {card.title}
              <div className=" pt-7 ">
                {card.items.map((item, idx) => (
                  <div key={idx}>{item}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className=" grid grid-cols-4 gap-5 ">
          {data?.footer?.footer2?.categories?.cards2.map((card, idx) => (
            <div key={idx}>
              {card.title}
              <div className=" pt-7 ">
                {card.items.map((item, idx) => (
                  <div key={idx}>{item}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div>
          <div className=" flex justify-between gap-4 ">
            <img
              src={data?.footer?.footer3?.logo}
              alt="Udemy Logo"
              className=" w-20 bg-black "
            />
            {data?.footer?.footer3?.links.map((link, index) => (
              <div key={index}>{link}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
