import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProductAction } from "../actions/product-action";

export default function Product({ match, history }) {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const { reduxSingleProduct, isLoading } = useSelector(
    (state) => state.singleProduct
  );
  useEffect(() => {
    dispatch(getSingleProductAction(match.params.id));
  }, []);
  const addToCart = () => {
    const url = `/cart/${reduxSingleProduct._id}?quantity=${qty}`;
    history.push(url);
  };
  return (
    <div className="bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-gray-300 mb-4">
              <img
                className="w-full h-full object-cover p-5 bg-white hover"
                src={`${process.env.REACT_APP_URL}/${reduxSingleProduct.image}`}
                alt=" "
              />
            </div>
            <div className="flex -mx-2 mb-4"></div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold mb-2">
              <strong>Name: </strong>
              {reduxSingleProduct.name}
            </h2>
            <div>
              <div>
                <span className="text-gray-700">
                  <strong>Brand: </strong>
                  {reduxSingleProduct.brand}
                </span>
              </div>
            </div>
            <br />
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="text-gray-700">
                  <strong>Price: </strong>
                  {reduxSingleProduct.price}
                </span>
              </div>
            </div>{" "}
            <div>
              {" "}
              <div>
                <span className="font-bold text-gray-700">Availability:</span>
                <span className="text-gray-600"> In Stock</span>{" "}
              </div>{" "}
            </div>
            <br />
            <div>
              <span className="font-bold text-gray-700">
                <strong>Description: </strong>
              </span>
              <p>{reduxSingleProduct.description}</p>
            </div>
            <div className="mt-3">
              <strong>Quantity: </strong>
              <button
                className="btn btn-dark"
                disabled={qty === 1 ? true : false}
                onClick={(e) => {
                  setQty((pre) => (pre === 1 ? 1 : pre - 1));
                }}
              >
                -
              </button>
              <strong>&nbsp;&nbsp; {qty} &nbsp;&nbsp;</strong>
              <button
                className="btn btn-dark"
                disabled={reduxSingleProduct.stock === qty ? true : false}
                onClick={(e) => {
                  setQty((pre) => pre + 1);
                }}
              >
                +
              </button>
            </div>
            <div className="w-1/2 px-2 mt-5" onClick={addToCart}>
              <button className="w-full bg-red-600 text-white py-2 px-4 rounded-full font-bold hover:bg-red-800">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div classNameName="container">
    //   <div classNameName="row">
    //     <div classNameName="col-lg-6">
    //       {/* {match.params.id} */}
    //       <img
    //         classNameName="card-img"
    //         src={`${process.env.REACT_APP_URL}/${reduxSingleProduct.image}`}
    //         alt=""
    //       />
    //     </div>
    //     <div classNameName="col-lg-6">
    //       <ul classNameName="list-group">
    //         <li classNameName="list-group-item">
    //           <strong>Name: </strong>
    //           {reduxSingleProduct.name}
    //         </li>
    //         <li classNameName="list-group-item">
    //           <strong>Brand: </strong>
    //           {reduxSingleProduct.brand}
    //         </li>
    //         <li classNameName="list-group-item">
    //           <strong>Price: </strong>
    //           {reduxSingleProduct.price}
    //         </li>
    //         <li classNameName="list-group-item">
    //           <strong>Description: </strong>
    //           {reduxSingleProduct.description}
    //         </li>
    //       </ul>
    //       <ul classNameName="list-group">
    //         {reduxSingleProduct.stock === 0 ? (
    //           <div classNameName="alert alert-info mt-3">Out of Stock</div>
    //         ) : (
    //           <div>
    //             <li classNameName="list-group-item">
    //               <strong>Quantity: </strong>
    //               <button
    //                 classNameName="btn btn-dark"
    //                 disabled={qty === 1 ? true : false}
    //                 onClick={(e) => {
    //                   setQty((pre) => (pre === 1 ? 1 : pre - 1));
    //                 }}
    //               >
    //                 -
    //               </button>
    //               <strong>&nbsp;&nbsp; {qty} &nbsp;&nbsp;</strong>
    //               <button
    //                 classNameName="btn btn-dark"
    //                 disabled={reduxSingleProduct.stock === qty ? true : false}
    //                 onClick={(e) => {
    //                   setQty((pre) => pre + 1);
    //                 }}
    //               >
    //                 +
    //               </button>
    //             </li>
    //             <li classNameName="list-group-item">
    //               <div classNameName="btn btn-dark" onClick={addToCart}>
    //                 Add to Cart
    //               </div>
    //             </li>
    //           </div>
    //         )}
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  );
}
