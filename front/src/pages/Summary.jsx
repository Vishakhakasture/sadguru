import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { placeOrderAction } from "./../actions/order-actions";
import { userProfileAction } from "../actions/user-action";
import { emptyCartAction } from "./../actions/cart-actions";

export default function Summary() {
  const { profile } = useSelector((state) => state.profile);
  const { cartItem } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  // dispatch(placeOrderAction({
  //     userId: profile.id,
  //     products: [],
  // }))

  const placeOrder = async () => {
    const formData = cartItem.map((item) => {
      return { productId: item._id, qty: item.qty };
    });

    console.log({ products: [...formData], userId: profile.id });

    const { data } = await axios.post("http://localhost:5000/api/orders", {
      products: [...formData],
      userId: profile.id,
    });
    console.warn(data);
    dispatch(emptyCartAction());
  };
  useEffect(() => {
    if (!profile) {
      console.log("No Profile");
      dispatch(userProfileAction());
    }
  }, []);
  return (
    <div>
      {/* {
                JSON.stringify(profile)
            } */}
      <br />
      {/* {
                JSON.stringify(profile.address)
            } */}
      <br />
      {/* {
                JSON.stringify(cartItem)
            } */}

      {
        profile && (
          <div className="bg-white rounded-lg shadow-lg px-8 py-10 max-w-xxl mx-52 mb-10">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <div className="text-gray-700 font-semibold text-lg">
                  {profile.name}
                </div>
              </div>
            </div>
            <div className="border-b-2 border-gray-300 pb-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Details:</h2>
              <div className="text-gray-700 mb-2">{profile.email}</div>
              <div className="text-gray-700 mb-2">
                {"Houser No: " + profile.address[0].houseNo}
              </div>
              <div className="text-gray-700 mb-2">
                {"Street: " + profile.address[0].street}
              </div>
              <div className="text-gray-700 mb-2">
                {"City: " + profile.address[0].city}
              </div>
              <div className="text-gray-700">
                {"Pincode: " + profile.address[0].pincode}
              </div>
            </div>
            <table className="w-full text-left mb-8">
              <thead>
                <tr>
                  <th className="text-gray-700 font-bold uppercase py-2">
                    Description
                  </th>
                  <th className="text-gray-700 font-bold uppercase py-2">
                    Quantity
                  </th>
                  <th className="text-gray-700 font-bold uppercase py-2">
                    Price
                  </th>
                  <th className="text-gray-700 font-bold uppercase py-2">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartItem.map((item, i) => (
                  <tr key={i}>
                    <td className="py-4 text-gray-700">{item.name}</td>
                    <td className="py-4 text-gray-700">{item.qty}</td>
                    <td className="py-4 text-gray-700">{item.price}</td>
                    <td className="py-4 text-gray-700">
                      {item.price * item.qty}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex justify-end mb-8">
              <div className="text-gray-700 mr-2">Total:</div>
              <div className="text-gray-700 font-bold text-xl">
                {cartItem.reduce((acc, item) => acc + item.qty * item.price, 0)}
              </div>
            </div>
            <div className="border-t-2 border-gray-300 pt-8 mb-8">
              <div className="text-gray-700">Check all details.</div>
            </div>
            <Link
              to="/order-success"
              className="bg-red-600 text-white rounded-md font-bold py-2 px-4 hover:bg-red-700"
              onClick={placeOrder}
            >
              Place Order
            </Link>
          </div>
        )
        //   profile && (
        //     <div classNameName="container">
        //       <div classNameName="row">
        //         <div classNameName="col-sm-8 offset-sm-2">
        //           <div classNameName="card">
        //             <div classNameName="card-header">User Info</div>
        //             <div classNameName="card-body">
        //               <ul classNameName="list-group">
        //                 <li classNameName="list-group-item">{profile.name}</li>
        //                 <li classNameName="list-group-item">{profile.email}</li>
        //               </ul>
        //             </div>
        //           </div>
        //           <br />
        //           <div classNameName="card">
        //             <div classNameName="card-header alert-success">Cart Info</div>
        //             <div classNameName="card-body">
        //               <ul classNameName="list-group">
        //                 {cartItem.map((item, i) => (
        //                   <li
        //                     key={i}
        //                     classNameName="list-group-item d-flex justify-content-between"
        //                   >
        //                     {item.name}
        //                     <div>
        //                       <span>
        //                         {item.price}*{item.qty} = {item.price * item.qty}
        //                       </span>
        //                     </div>
        //                   </li>
        //                 ))}
        //               </ul>
        //             </div>
        //             <div classNameName="card-footer">
        //               <h5>
        //                 Total Payble Amount is:{" "}
        //                 {cartItem.reduce(
        //                   (acc, item) => acc + item.qty * item.price,
        //                   0
        //                 )}
        //               </h5>
        //             </div>
        //           </div>
        //           <br />
        //           <div classNameName="card">
        //             <div classNameName="card-header alert-success">Address Info</div>
        //             <div classNameName="card-body">
        //               <ul classNameName="list-group">
        //                 <li classNameName="list-group-item">
        //                   {"Houser No: " + profile.address[0].houseNo}
        //                 </li>
        //                 <li classNameName="list-group-item">
        //                   {"Street: " + profile.address[0].street}
        //                 </li>
        //                 <li classNameName="list-group-item">
        //                   {"City: " + profile.address[0].city}
        //                 </li>
        //                 <li classNameName="list-group-item">
        //                   {"Pincode: " + profile.address[0].pincode}
        //                 </li>
        //               </ul>
        //             </div>
        //           </div>
        //           <br />
        //           <br />
        //           <Link
        //             to="/order-success"
        //             classNameName="btn btn-success"
        //             onClick={placeOrder}
        //           >
        //             Place Order
        //           </Link>
        //         </div>
        //       </div>
        //     </div>
        //   )
      }
    </div>
  );
}
