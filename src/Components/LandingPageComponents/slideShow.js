import React from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import Image from "next/image";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useState } from "react";

const SlideShow = () => {
  const images = [
    {
      image:
        "https://res.cloudinary.com/dpuyeblqg/image/upload/v1670087581/Market%20media/Rectangle_11_exqxli.png",
      description: "Get whatever you need from the best sellers near you",
    },
    {
      image:
        "https://res.cloudinary.com/dpuyeblqg/image/upload/v1670087581/Market%20media/w1_1_crasba.png",
      description: "Get whatever you need from the best sellers near you",
    },
  ];
  const [activeSlide, setActiveSlide] = useState(0);

  const prevSliderHandler = (index) => {
    if (index === 0) {
      setActiveSlide(images.length - 1);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  };

  const nextSliderHandler = (index) => {
    if (index === images.length - 1) {
      setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  };

  return (
    <div className="m-10">
      {images.map((item, index) => {
        return (
          <div
            key={index}
            className={
              activeSlide === index ? "flex justify-between items-center" : "hidden"
            }
          >
            <button
              className="text-6xl "
              onClick={() => prevSliderHandler(index)}
            >
              <FiChevronLeft />
            </button>
            <div className="flex justify-content-center items-center mx-20 w-full h-500">
              <p className="w-1/2 text-3xl">{item.description}</p>
              <div className="w-1/2">
                <Image
                  src={item.image}
                  alt="landscape"
                  width={500}
                  height={100}
                />
              </div>
            </div>
            <button
              className="text-6xl "
              onClick={() => nextSliderHandler(index)}
            >
              <FiChevronRight />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default SlideShow;
