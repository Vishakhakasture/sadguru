import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAddressAction, userProfileAction } from "./../actions/user-action";
import { Link } from "react-router-dom";

export default function Checkout({ history }) {
  const { userInfo } = useSelector((state) => state.user);
  const { cartItem } = useSelector((state) => state.cart);
  const { profile } = useSelector((state) => state.profile);
  const [houseNo, setHouseNo] = useState("123");
  const [street, setStreet] = useState("SkillHub IT Solution");
  const [pincode, setPincode] = useState(431001);
  const [city, setCity] = useState("Aurangabad");

  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      !profile?.address && dispatch(userProfileAction());
      if (cartItem.length == 0) {
        history.push("/");
      }
    } else {
      history.push("/");
    }
  }, []);

  const handleAddAddress = (e) => {
    e.preventDefault();
    dispatch(userAddressAction({ houseNo, street, pincode, city }));
    console.warn({ houseNo, street, pincode, city });
  };
  // console.log(JSON.stringify(profile));
  return (
    <>
      {/* {
                JSON.stringify(profile)
            } */}
      {profile?.address ? (
        <div className="container">
          <div className="form-check">
            <input
              type="radio"
              name=""
              checked
              id="cod"
              className="form-check-input"
            />
            <label htmlFor="cod">Pay via COD</label>
          </div>
          <Link
            to="/summary"
            className="bg-red-600 text-white rounded-md font-bold py-2 px-4 hover:bg-red-700"
          >
            Checkout
          </Link>
        </div>
      ) : (
        <div className="contaner">
          <div className="row">
            <div className="col-sm-6 offset-sm-3">
              <div className="card">
                <div className="card-header"></div>
                <div className="card-body">
                  <form onSubmit={handleAddAddress}>
                    <input
                      value={houseNo}
                      onChange={(e) => setHouseNo(e.target.value)}
                      type="text"
                      className="form-control"
                      placeholder="Home No."
                    />
                    <br />
                    <input
                      value={street}
                      onChange={(e) => setStreet(e.target.value)}
                      type="text"
                      className="form-control"
                      placeholder="Street"
                    />
                    <br />
                    <input
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      type="number"
                      className="form-control"
                      placeholder="pincode"
                    />
                    <br />
                    <input
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      type="text"
                      className="form-control"
                      placeholder="City"
                    />
                    <br />
                    <input type="submit" className="btn btn-success w-100" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
