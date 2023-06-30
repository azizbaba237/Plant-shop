import React from "react";
// import slider slices
import {
  nextSlide,
  prevSlide,
  dotSlide,
} from "../../features/slices/SliderSlice";
// import useSelector and useDispatch
import { useSelector, useDispatch } from "react-redux";
// import de data
import { plantList } from "../../data/plantLists";

const Slider = () => {
  // slide index
  const slideIndex = useSelector((state) => state.slider.value);
  console.log("slideIndex", slideIndex);
  const dispatch = useDispatch();

  return (
    <div className=" text-white relative pb-4 pt-32">
      <div>
        {plantList.map((item) => {
          return (
            <div
              key={item.id}
              className={
                parseInt(item.id) === slideIndex
                  ? "opacity-100 duration-700 ease-in-out scale-100"
                  : "opacity-0 duration-700 ease-in-out scale-95"
              }
            >
              <div>
                {parseInt(item.id) === slideIndex && (
                  <img
                    className="lg:h=[850%] lg:w=full"
                    src={item.cover}
                    alt={item.name}
                  />
                )}
              </div>
              <div className="absolute top-16 md:top-52 lg:top-60 mx-auto md:inset-x-1/4 inset-x-1/3">
                <p className="md:text-4xl lg:text-7xl sm:text-6xl font-bold md:py-6 lg:py-12 text-[#00df9a] ">
                  {parseInt(item.id) === slideIndex && item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex absolute md:bottom-12 md:left-[35%] lg:left-[40%] bottom-2 left-[18%] ">
        {plantList.map((dot, index) => {
          return (
            <div className="m-4" key={dot.id}>
              <div
                className={
                  index === slideIndex
                    ? "bg-[#00df9a] rounded-full p-4 cursor-pointer"
                    : "bg-white rounded-full p-4 cursor-pointer"
                }
                onClick={() => dispatch(dotSlide(index))}
              ></div>
            </div>
          );
        })}
      </div>
      <div>
        <button
          className="absolute right-4 top-[55%] md:top-[50%] bg-black rounded-full p-2 hover:bg-[#00df9a]"
          onClick={() => dispatch(nextSlide(slideIndex + 1))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
        <button
          className="absolute left-4 top-[55%] md:top-[50%] bg-black rounded-full p-2 hover:bg-[#00df9a]"
          onClick={() => dispatch(prevSlide(slideIndex - 1))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Slider;
