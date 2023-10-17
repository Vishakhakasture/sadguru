import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userProfileAction } from "../actions/user-action";
import { userLoginAction } from "./../actions/auth-action";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

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
    <>
      <div className="py-16">
        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
          <div className="hidden lg:block lg:w-1/2 bg-cover">
            <img
              className="w-full"
              src="https://img.lovepik.com/background/20211029/small/lovepik-pink-beauty-gift-background-image_605821642.jpg"
            />
          </div>
          <div className="w-full p-8 lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-700 text-center">
              SadguruKrupa
            </h2>
            <p className="text-xl text-gray-600 text-center">Welcome back!</p>
            <a
              href="/"
              className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
            >
              <div className="px-4 py-3">
                <svg className="h-6 w-6" viewBox="0 0 40 40">
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#1976D2"
                  />
                </svg>
              </div>
              <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">
                Sign in with Google
              </h1>
            </a>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 lg:w-1/4"></span>
              <a
                href="/"
                className="text-xs text-center text-gray-500 uppercase"
              >
                or login with email
              </a>
              <span className="border-b w-1/5 lg:w-1/4"></span>
            </div>
            <form onSubmit={loginUser}>
              <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email Address
                </label>
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
              </div>
              <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
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
              </div>
              <div className="mt-3 items-end">
                <a href="/" className="text-xs text-gray-500">
                  Forget Password?
                </a>
              </div>
              <div className="mt-8">
                <button className="bg-red-600 w-full text-white font-semibold py-2 rounded-md hover:bg-red-700">
                  Login
                </button>
              </div>
            </form>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 md:w-1/4"></span>
              <Link to="/register" className="text-xs text-gray-500 uppercase">
                or sign up
              </Link>
              <span className="border-b w-1/5 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="mt-20 ">
        {JSON.stringify(error)}

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
                      error.password
                        ? "form-control is-invalid"
                        : "form-control"
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
      </div> */}
    </>
  );
};

export default Login;
