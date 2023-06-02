import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import AddProduct from "./crud/AddProduct";
import { Link } from "react-router-dom";

function Product() {
  const [plants, setPlants] = useState([]);

  // Fetch data from database
  useEffect(() => {
    const fetchPlants = async () => {
      const { data } = await axios.get("http://localhost:5000");
      setPlants(data.allProduct);
    };
    fetchPlants();
  }, []);

  return (
    <div className="">
      
      <div className="flex justify-end items-end my-8 mr-[140px] ">
        <AddProduct />
      </div>

      <div className=" relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-blue-100 dark:text-blue-100 mr-16">
          <thead className="text-xs text-white uppercase bg-gray-500 dark:text-white">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                image
              </th>
              <th scope="col" className="px-6 py-3">
                price
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                description
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          {plants &&
            plants.map((plant) => (
              <Fragment key={plant._id}>
                <tbody>
                  <tr className="bg-gray-600 border-b border-blue-400 text-white">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium  whitespace-nowrap dark:text-blue-100"
                    >
                      <h3>{plant.name}</h3>
                    </th>
                    <td className="px-6 py-4">{plant.avatar}</td>
                    <td className="px-6 py-4">{plant.price}</td>
                    <td className="px-6 py-4">{plant.category}</td>
                    <td className="px-6 py-4">{plant.description}</td>
                    <td className="px-6 py-4 flex">
                      <Link
                        to={`/dashboard/product/${plant._id}`}
                        className="font-medium text-white hover:underline mr-1 rounded p-2 bg-blue-500"
                      >
                        View
                      </Link>
                      <button className="font-medium text-white hover:underline mr-1 rounded p-2 bg-gray-500">
                        Edit
                      </button>
                      <button className="font-medium text-white hover:underline rounded p-2 bg-red-500">
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </Fragment>
            ))}
        </table>
      </div>
    </div>
  );
}

export default Product;
