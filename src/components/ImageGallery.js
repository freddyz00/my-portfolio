import React, { useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import classNames from "classnames";

function ImageGallery({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const incrementIndex = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const decrementIndex = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <section className="my-10">
      <div className="group overflow-hidden relative mb-5 border-2 border-solid border-slate-200 rounded-lg">
        <div className={`translate flex transition duration-500`}>
          {data.map(({ type, src }) => {
            if (type === "image") {
              return (
                <img
                  src={src}
                  alt={src}
                  className="w-full max-h-[500px] object-contain shrink-0"
                />
              );
            } else if (type === "video") {
              return (
                <video controls>
                  <source src="hungry-now/demo.mp4" type="video/mp4" />
                </video>
              );
            }
          })}
          <style jsx>
            {`
              .translate {
                transform: translateX(-${currentIndex * 100}%);
              }
            `}
          </style>
        </div>
        <FaChevronCircleLeft
          onClick={decrementIndex}
          className="absolute top-[50%] -translate-y-[50%] select-none left-5 text-5xl cursor-pointer text-[#4ADE72] opacity-0 group-hover:opacity-100 transition"
        />
        <FaChevronCircleRight
          onClick={incrementIndex}
          className="absolute top-[50%] -translate-y-[50%] select-none right-5 text-5xl cursor-pointer text-[#4ADE72] opacity-0 group-hover:opacity-100 transition"
        />
      </div>
      <div className="flex hide-scrollbar overflow-x-scroll">
        {data.map(({ type, src, imgSrc }, index) => {
          if (type === "image") {
            return (
              <img
                onClick={() => setCurrentIndex(index)}
                src={src}
                alt={src}
                className={classNames(
                  "w-36 border-2  border-solid cursor-pointer transition max-h-24 object-contain shrink-0",
                  {
                    "border-[#4ADE72]": index === currentIndex,
                    "border-slate-200 hover:border-slate-300":
                      index !== currentIndex,
                  }
                )}
              />
            );
          } else if (type === "video") {
            return (
              <img
                onClick={() => setCurrentIndex(index)}
                src={imgSrc}
                alt={src}
                className={classNames(
                  "w-36 border-2  border-solid cursor-pointer transition max-h-24 object-contain shrink-0",
                  {
                    "border-[#4ADE72]": index === currentIndex,
                    "border-slate-200 hover:border-slate-300":
                      index !== currentIndex,
                  }
                )}
              />
            );
          }
        })}
      </div>
    </section>
  );
}

export default ImageGallery;
