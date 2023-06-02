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
import { plantList } from "../../data/plantList";

const Slider = () => {
  const slideIndex = useSelector((state) => state.slider.value);
  console.log("slideIndex", slideIndex);
  const dispatch = useDispatch();
  return (
    <div className="text-white relative pb-4">
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
                    className="h=[850%] w=full"
                    src={item.cover}
                    alt={item.name}
                  />
                )}
              </div>
              <div className="absolute top-44 mx-auto inset-x-1/4">
                <p className="text-black text-4xl font-inter font-bold">
                  {parseInt(item.id) === slideIndex && item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex absolute bottom-12 left-[40%]">
        {plantList.map((dot, index) => {
          return (
            <div className="m-4" key={dot.id}>
              <div
                className={
                  index === slideIndex
                    ? "bg-green-400 rounded-full p-4 cursor-pointer"
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
          className="absolute right-4 top-[50%] bg-black rounded-full p-2 hover:bg-green-400"
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
          className="absolute left-4 top-[50%] bg-black rounded-full p-2 hover:bg-green-400"
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
