import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto p-20 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaDribbbleSquare size={30} />
          <FaFacebookSquare size={30} />
          <FaGithubSquare size={30} />
          <FaInstagramSquare size={30} />
          <FaTwitterSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-3 flex justify-between">
        <div>
          <h6 className="font-Medium text-gray-400 text-3xl">Solution</h6>
          <ul>
            <li className="py-2 text-sm">Anlytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
          </ul>
        </div>
        <div>
          <h6 className="font-Medium text-gray-400 text-3xl">Support</h6>
          <ul>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">Guides</li>
          </ul>
        </div>
        <div>
          <h6 className="font-Medium text-gray-400 text-3xl">Support</h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Jobs</li>
          </ul>
        </div>
        <div>
          <h6 className="font-Medium text-gray-400 text-3xl">Legal</h6>
          <ul>
            <li className="py-2 text-sm">Clair</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div>
      </div>
      <div className="pb-2">Copyrith Aziz baba | all right reserved 2023</div>
    </div>
  );
};
export default Footer;
