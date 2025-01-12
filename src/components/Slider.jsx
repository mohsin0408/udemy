import React, { useState, useEffect } from "react";
import { data } from "../data/data";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { heading, description } = data.sliderbanner[currentIndex];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === data.sliderbanner.length - 1) {
          return 0;
        } else {
          return prevIndex + 1;
        }
      });
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const handlePrevImage = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return data.sliderbanner.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  };

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === data.sliderbanner.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  return (
    <div className="container relative w-full h-[500px]">
      <div className="carousel-container relative w-full h-full">
        {data.carousel.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`hero-img`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 
              ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
          />
        ))}
      </div>

      <div className="absolute top-0 left-0 w-[70%] h-full flex justify-center items-center p-4">
        <div className="text-center text-white">
          <h2 className="text-3xl font-semibold mb-4">{heading}</h2>
          <p className="text-lg">{description}</p>
        </div>
      </div>

      <button
        onClick={handlePrevImage}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full">
        <FaArrowLeftLong />
      </button>
      <button
        onClick={handleNextImage}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full">
        <FaArrowRightLong />
      </button>
    </div>
  );
};

export default Slider;
