import React from "react";

const Articles = ({ data }) => {
  return (
    <div className="container">
      <div className=" flex  gap-4 ">
        {data?.article?.map((articles, index) => (
          <div key={index}>
            <div>
              <img src={articles.articleCard?.logo} />
              <span>{articles.articleCard?.heading}</span>
              <div>
                {articles.articleCard.achievements?.map((achievement, idx) => (
                  <div key={idx}>
                    <span>{achievement.percent}</span>
                    <span>{achievement.desc}</span>
                  </div>
                ))}
              </div>
              <button>{articles.articleCard?.btn}</button>
            </div>
            <div>
              <img src={articles.articleCard?.img} className=" w-28 " />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
