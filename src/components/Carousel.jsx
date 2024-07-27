import React, { useState } from "react";
import { images } from "../data/data";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleButtonClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 h-screen">
      <div className="relative w-full max-w-xl overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${(currentIndex - 1) * 100}%)` }}
        >
          {images.map((image) => (
            <div key={image.id} className="w-full flex-shrink-0">
              <img
                src={image.url}
                alt={`Slide ${image.id}`}
                className="w-full h-96 object-cover rounded-lg mb-10"
              />
            </div>
          ))}
        </div>
        <div className="absolute bottom-4 w-full flex justify-center space-x-2">
          {images.map((image) => (
            <button
              key={image.id}
              className={`h-2 w-2 rounded-full ${
                currentIndex === image.id ? "bg-gray-800" : "bg-gray-400"
              }`}
              onClick={() => handleButtonClick(image.id)}
            ></button>
          ))}
        </div>
      </div>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Static Button
      </button>
    </div>
  );
};

export default Carousel;
