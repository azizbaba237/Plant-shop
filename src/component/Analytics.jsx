import React from "react";
import woman from "../assets/woman.jpg";

export const Analytics = () => {
  return (
    <div className="w-full bg-white py-6 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={woman} alt="woman" className="w-[300px] h-[350px] mx-auto my-4" />
        <div className="flex flex-col justify-center items-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Manage Data Analytics Centrally</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            sed omnis vitae quas impedit error, laudantium minima, architecto,
            facilis blanditiis tenetur illum deleniti dolor ullam veniam
            distinctio praesentium nesciunt at!
          </p>
          <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 md:mx-0 text-[#00df9a]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
export default Analytics;
