import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userProfileAction } from "../actions/user-action";
import { userLoginAction } from "./../actions/auth-action";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userInfo } = useSelector((state) => state.user);
  const { cartItem } = useSelector((state) => state.cart);

  const [error, setError] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const loginUser = (e) => {
    e.preventDefault();
    if (email === "") {
      setError((pre) => {
        return { ...pre, email: "Please Enter Email" };
      });
    }
    if (password === "") {
      setError((pre) => {
        return { ...pre, password: "Please Enter password" };
      });
    }
    if (email !== "" || password !== "") {
      dispatch(userLoginAction({ email, password }));
    }
  };
  useEffect(() => {
    if (userInfo) {
      dispatch(userProfileAction());
      userInfo.info.isAdmin
        ? history.push("/dashboard")
        : cartItem.length > 0
        ? history.push("/checkout")
        : history.push("/");
    }
  }, [userInfo]);

  const handleError1 = (e) => {
    if (email !== "") {
      setError((pre) => {
        return { ...pre, email: "" };
      });
    } else {
      setError((pre) => {
        return { ...pre, email: "Please Enter Email" };
      });
    }
  };
  const handleError2 = (e) => {
    if (password !== "") {
      setError((pre) => {
        return { ...pre, password: "" };
      });
    } else {
      setError((pre) => {
        return { ...pre, password: "Please Enter Password" };
      });
    }
  };
  return (
    <div className="mt-20 ">
      {/* {JSON.stringify(error)} */}
      <div className="row ">
        <div className="w-1/2 mx-80 mt-5">
          <div className="grid">
            <div className="text-center text-xl py-4">Login</div>
            <div className="grid-item">
              <form onSubmit={loginUser}>
                <input
                  value={email}
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  onKeyUp={handleError1}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="text"
                  placeholder="Enter Email"
                  className={
                    error.email ? "form-control is-invalid" : "form-control"
                  }
                />
                <span className="invalid-feedback">{error.email}</span>
                <br />
                <input
                  value={password}
                  onKeyUp={handleError2}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  placeholder="Enter Password"
                  className={
                    error.password ? "form-control is-invalid" : "form-control"
                  }
                />
                <span className="invalid-feedback">{error.password}</span>
                <br />
                <button
                  className="bg-red-600 w-full text-white font-semibold py-1 rounded-md hover:bg-red-700"
                  // disabled={email === "" || password === "" ? true : false
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
