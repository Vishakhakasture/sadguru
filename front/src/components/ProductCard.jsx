import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ single }) {
  return (
    <>
      <Link
        id="dd"
        to={`/product/${single._id}`}
        className="text-decoration-none"
      >
        {/* <!--   ✅ Product card 1 - Starts Here 👇 --> */}

        <div className=" w-60 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-4xl ">
          <span className="absolute object-right-top inset-0 right-0">
            <div className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white">
              {single.stock}
            </div>
          </span>
          <a href="/">
            <img
              src={`${process.env.REACT_APP_URL}/${single.image}`}
              alt="Product"
              className="h-64 w-60 object-cover rounded-t-xl"
            />
            <div className="px-4 py-1 w-60">
              <span className="text-gray-400 mr-3 uppercase text-xs">
                {single.brand.slice(0, 10)}
              </span>
              <p className="text-lg font-bold text-black truncate block capitalize">
                {single.name}
              </p>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-black cursor-auto my-1">
                  {single.price}
                </p>
                <del>
                  <p className="text-sm text-gray-600 cursor-auto ml-2">
                    {single.price * 1.01}
                  </p>
                </del>
                <div className="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-bag-plus"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                    />
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* <!--   🛑 Product card 1 - Ends Here  --> */}
      </Link>
    </>
  );
}
