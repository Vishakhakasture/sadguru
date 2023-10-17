import React from "react";
import h1 from "./../assets/h1.jpg";
import { useHistory } from "react-router-dom";

const Hero = () => {
  const history = useHistory();

  const goToHome = () => {
    history.push("/");
  };
  return (
    <>
      <div className="w-full h-screen">
        <img className="top-0 left-0 w-full h-5/6 " src={h1} alt="" />
        <div className="absolute top-0 w-full h-full flex flex-col justify-center items-end pr-20">
          <div>
            <h5 className="text-xl font-bold capitalize">new arrival</h5>
            <h1 className="text-3xl text-tertiary font-extrabold capitalize mt-3">
              discover our new collection
            </h1>
            <button
              href="#dd"
              className="mt-6 text-sm text-white bg-red-600 font-semibold rounded-md  py-2 px-5  hover:bg-red-700 uppercase"
              onClick={goToHome}
            >
              buy now
            </button>
          </div>
        </div>
      </div>
      {/* <!-- source: https://github.com/mfg888/Responsive-Tailwind-CSS-Grid/blob/main/index.html --> */}
    </>
  );
};

export default Hero;
