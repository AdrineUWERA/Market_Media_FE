import React from "react";
// import { GrNext, GrPrevious } from "react-icons/gr";
import Image from "next/image";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useState } from "react";

const SlideShow = () => {
  const images = [
    {
      image:
        "https://res.cloudinary.com/dpuyeblqg/image/upload/v1670251705/Market%20media/businesswoman-standing-thinking-near-big-question-mark-isolated-white-background_126523-3114_p68rnc.webp",
      description:
        "Ever needed a product but not sure who and where to get it from?",
    },
    {
      image:
        "https://res.cloudinary.com/dpuyeblqg/image/upload/v1670252976/Market%20media/Screenshot_2022-12-05_170922_ulqgwv.png",
      description: "Get whatever you need from the best sellers near you",
    },
    {
      image:
        "https://res.cloudinary.com/dpuyeblqg/image/upload/v1670253094/Market%20media/Screenshot_2022-12-05_171116_yyh7j8.png",
      description:
        "Use seller profiles and reviews to choose the best seller you can buy from",
    },
    {
      image:
        "https://res.cloudinary.com/dpuyeblqg/image/upload/v1670251705/Market%20media/way-concept-illustration_114360-1191_vdv47q.webp",
      description:
        "You can easily order products and they will be safely delivered instantly",
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
    <div className="mt-24 mb-[45px] mx-32 h-[300px]">
      {images.map((item, index) => {
        return (
          <div
            key={index}
            className={
              activeSlide === index
                ? "flex justify-between items-center"
                : "hidden"
            }
          >
            <button
              className="text-6xl "
              onClick={() => prevSliderHandler(index)}
            >
              <FiChevronLeft />
            </button>
            <div className="flex justify-content-center items-center mx-20 w-full">
              <p className="w-[50%] text-3xl">{item.description}</p>
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
