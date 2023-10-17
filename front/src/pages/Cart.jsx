import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCartAction,
  removeFromCartAction,
} from "./../actions/cart-actions";
import { Link } from "react-router-dom";

const Cart = ({ location, match }) => {
  const dispatch = useDispatch();
  const { cartItem } = useSelector((state) => state.cart);

  useEffect(() => {
    /*                               ID*/ /*Quantity*/
    location.search.split("=")[1] &&
      dispatch(addToCartAction(match.params.id, location.search.split("=")[1]));
  }, []);

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <h1 className="text-2xl font-bold my-4">Shopping Cart</h1>
          <Link
            className="bg-red-600 text-white rounded-md font-bold py-2 px-4 hover:bg-red-700"
            to="/checkout"
          >
            Checkout
          </Link>
        </div>
        <div className="mt-8">
          {cartItem.length > 0 ? (
            <div className="ml-5">
              {cartItem.map((item) => (
                <div
                  key={item._id}
                  className="flex flex-col md:flex-row border-b border-gray-400 py-4 hover:bg-gray-100"
                >
                  <div className="flex-shrink-0">
                    <img
                      src={`${process.env.REACT_APP_URL}/${item.image}`}
                      alt=""
                      className="w-52 h-52 object-cover"
                    />
                  </div>

                  <div className="mt-4 md:mt-0 md:ml-24">
                    <h2 className="text-lg font-bold">{item.name}</h2>
                    <p className="mt-2 text-gray-600">
                      <p>{item.brand}</p>
                    </p>
                    <div className="mt-2 flex items-center">
                      <span className="mr-3 text-gray-600">
                        Quantity:<strong>{item.qty}</strong>
                      </span>

                      <span className="ml-auto">
                        Price: <strong>{item.price}</strong>
                      </span>
                    </div>
                    <button
                      classNameName="mt-4 bg-red-600 text-white py-1 px-4 rounded-md hover:bg-red-700"
                      onClick={(e) => dispatch(removeFromCartAction(item._id))}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <h1>Your Cart</h1>
          )}
        </div>
        <div className="flex justify-end items-end mt-8 flex-col">
          <div className="text-xl font-bold">
            {" "}
            <h1>
              Deleverable Quantity :{" "}
              {cartItem.reduce((acc, item) => acc + +item.qty, 0)}
            </h1>
          </div>
          <div className="text-xl font-bold">
            {" "}
            <h1>
              Total Payble Amount :{" "}
              {cartItem.reduce((acc, item) => acc + item.qty * item.price, 0)}
            </h1>
          </div>
        </div>
      </div>

      {/* <div classNameName="w-1/2 mt-20 mx-60">
        {cartItem.length > 0 ? (
          <div classNameName="flex items-center justify-between mx-20">
            {cartItem.map((item) => (
              <div key={item._id} classNameName="col-lg-8">
                <img
                  src={`${process.env.REACT_APP_URL}/${item.image}`}
                  alt=""
                />
                <h2>{item.name}</h2>
                <p>
                  Quantity: <strong>{item.qty}</strong>
                </p>
                <p>
                  Price: <strong>{item.price}</strong>
                </p>
                <button
                  classNameName="bg-red-600 text-white py-1 px-4 rounded-sm hover:bg-red-700"
                  onClick={(e) => dispatch(removeFromCartAction(item._id))}
                >
                  Remove
                </button>
              </div>
            ))}
            <div classNameName="col-sm-4">
              <h1>
                Deleverable Quantity :{" "}
                {cartItem.reduce((acc, item) => acc + +item.qty, 0)}
              </h1>
              <h1>
                Total Payble Amount :{" "}
                {cartItem.reduce((acc, item) => acc + item.qty * item.price, 0)}
              </h1>
              <Link classNameName="btn btn-outline-success w-100" to="/checkout">
                Checkout
              </Link>
            </div>
          </div>
        ) : (
          <h1>Item Not Available</h1>
        )}
      </div> */}
    </>
  );
};

export default Cart;
