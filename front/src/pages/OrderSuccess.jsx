import React from "react";
import { Link } from "react-router-dom";

export default function OrderSuccess() {
  return (
    <>
      <div className="relative my-6 flex w-full flex-col items-center sm:mt-14">
        <h4 className="mt-1 max-w-sm bg-gradient-to-br  from-red-400 to-red-500 bg-clip-text text-center text-xl font-extrabold text-transparent sm:max-w-2xl sm:text-4xl">
          Hello Dear... Your Order is Placed SuccessFully
        </h4>
        <span className="mt-8 max-w-lg text-center text-xl leading-relaxed text-gray-800">
          Discover the occasionally and availability of gifts. Gifts for Every
          Reason, Gifts for Every Season.
        </span>
        <p className="mt-3 rounded border px-3 py-1 shadow">
          🎁 <span className="text-accent font-semibold">20% off</span> for the
          first 100 customers!
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-0 sm:gap-x-4">
          <Link
            className="flex flex-row items-center justify-center gap-x-2 bg-red-600 text-white rounded-md font-bold py-2 px-4 hover:bg-red-700"
            to="/profile"
          >
            Profile
          </Link>
          <Link
            className="flex flex-row items-center justify-center gap-x-2 border bg-red-600 text-white rounded-md font-bold py-2 px-4 hover:bg-red-700 "
            to="/order-history"
          >
            Manage Order →
          </Link>
        </div>
      </div>

      {/* <div classNameName="container">
        <h1>Hello Dear...</h1>
        <h1>Your Order is Placed SuccessFully</h1>
        <Link
          classNameName="bg-red-600 text-white rounded-md font-bold py-2 px-4 hover:bg-red-700"
          to="/profile"
        >
          Profile
        </Link>
        &nbsp;&nbsp;&nbsp;
        <Link
          classNameName="bg-red-600 text-white rounded-md font-bold py-2 px-4 hover:bg-red-700"
          to="/order-history"
        >
          Manage Order
        </Link>
      </div> */}
    </>
  );
}
