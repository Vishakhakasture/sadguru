import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogoutAction } from "../actions/auth-action";

export default function Logout({ history }) {
  const { userInfo } = useSelector((state) => state.user);
  const [count, setCount] = useState(10);
  const dispatch = useDispatch();
  useEffect(() => {
    if (userInfo) {
      dispatch(userLogoutAction());
      setTimeout(() => {
        clearInterval(rem);
        history.push("/login");
      }, 10000);

      const rem = setInterval(() => {
        setCount((pre) => pre - 1);
      }, 1000);
    } else {
      history.push("/login");
    }
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-8 offset-sm-2 mt-5">
            <h2 className="text-center">You Have Logout Successfully</h2>
            <h3 className="text-center ">
              Now You Will be Reditected to Home after {count} Sec
            </h3>
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/register">
              Register
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
