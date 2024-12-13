// import React from "react";
// import { data } from "../src/data/data";
// import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

// const Hero = () => {

//   const [imgHero, setImgHero] = useState(true);
//   const [img, setImg] = useState(data.sliderbanner[0]);

//   useEffect(() => {
      
//     const intervalId = setInterval(() => {
//        setImgHero((prev) => {
//           const nextIndex = prev ? 0 : 1;
//           setImg(data.sliderbanner);        
//           return !prev;
//        });
//     }, 3000); 
    
//     return () => clearInterval(intervalId);
//  }, []); 

//  const handleHeroImg = () => {
//     setImgHero((prev) => {
//        const nextIndex = prev ? 0 : 1;
//        setImg(data.sliderbanner);
//        return !prev; 
//     });
//  }


//   return (
//     <div className="relative w-full h-[500px]">
      
//       <div className="carousel-container relative w-full h-full">
//         {data.carousel.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             className="absolute inset-0 w-full h-full object-cover"
//           />
//         ))}
//       </div>

      
//       <div className="absolute top-0 left-0 w-[70%] h-full flex justify-center items-center p-4">
//         <div className="text-center">
//           <h2 className="text-3xl font-semibold mb-4">
//             {data.sliderbanner[0].heading}
//           </h2>
//           <p className="text-lg">{data.sliderbanner[0].description}</p>
//         </div>
//       </div>

//       <button onClick={handleHeroImg} className="iconButton">
//                 <FaArrowLeftLong />
//                 <FaArrowRightLong />
//       </button>

//     </div>
//   );
// };

// export default Hero;

import React, { useState, useEffect } from "react";
import { data } from "../data/data";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const { heading, description } = data.sliderbanner[currentIndex];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.sliderbanner.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  
  const handlePrevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.sliderbanner.length) % data.sliderbanner.length);
  };

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.sliderbanner.length);
  };

  return (
    <div className=" container relative w-full h-[500px] ">
      
      <div className="carousel-container relative w-full h-full">
        {data.carousel.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`hero-img`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 
              ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
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
        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
      >
        <FaArrowLeftLong />
      </button>
      <button
        onClick={handleNextImage}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
      >
        <FaArrowRightLong />
      </button>
    </div>
  );
};

export default Hero;




