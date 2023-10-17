import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOrderHistoryAction } from "../actions/order-actions";

export default function OrderHistory() {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(getOrderHistoryAction());
  }, []);
  return (
    <div className="container">
      {/* {
                JSON.stringify(orders)
            } */}
      <div className="row">
        {orders && orders.length > 0 ? (
          orders.map((order, i) => {
            return (
              <div key={i} className="col-sm-12">
                <div className="card mt-4">
                  <div className="card-header">
                    <b>Order ID: </b>
                    {order._id}
                  </div>
                  <div className="card-body">
                    <ul className="list-group">
                      {order.products.map((product, i) => {
                        return (
                          <li
                            key={i}
                            className=" w-100 list-group-item d-flex align-items-center justify-content-between"
                          >
                            <div>
                              <img
                                src={`${process.env.REACT_APP_URL}/${product.productId.image}`}
                                height="50"
                                alt=""
                              />
                              <br />
                              {product.productId.name}
                            </div>
                            <span>
                              {product.qty} X {product.productId.price}
                            </span>
                            <b>{product.qty * product.productId.price}</b>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div>No Orders Found</div>
        )}
      </div>
    </div>
  );
}
