import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logo from "./../logo.jpeg";

export default function Navbar() {
  const dispatch = useDispatch();
  const { cartItem } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.user);

  let [open, setOpen] = useState(false);

  return (
    <div className="bg-white sticky top-0 left-0 z-30  w-full">
      <nav className=" bg-white w-full flex relative justify-between items-center mx-auto p-2 h-17 px-5">
        {/* <!-- logo --> */}

        <div className="flex items-center">
          <a className="_o6689fn" href="/">
            {/* <img class="rounded-full w-96 h-96" src="https://www.pixibitdesign.com/wp-content/uploads/2017/07/Sadguru-dairy-farm-logo-300x169.png" alt="image description" /> */}
            <img
              src={logo}
              alt=""
              className="h-10 w-full object-cover object-center rounded-full"
            />
          </a>
          {/* <div className="p-2">
            <span className="text-lg">
              <h2>SadguruKrupa</h2>
            </span>
          </div> */}
        </div>

        {/* <!-- end logo --> */}

        {/* <!-- search bar --> */}
        <div className="hidden sm:block flex-shrink flex-grow-0 justify-start">
          <div className="inline-block">
            <div className="inline-flex items-center max-w-full">
              <button
                className="flex items-center flex-grow-0 flex-shrink relative w-60 border rounded-full px-4  py-1"
                type="button"
              >
                <form>
                  <input
                    type="search"
                    id="default-search"
                    className="border-0 outline-0"
                    placeholder="Search Gifts, Accesories..."
                    required
                  />
                </form>
                <div className="flex items-center justify-center relative  h-8 w-8 rounded-full">
                  <svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    style={{
                      display: "block",
                      fill: "none",
                      height: "12px",
                      width: "12px",
                      stroke: "currentcolor",
                      strokeWidth: "5.33333",
                      overflow: "visible",
                    }}
                  >
                    <g fill="none">
                      <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path>
                    </g>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
        {/* <!-- end search bar --> */}

        {/* <!-- login --> */}
        <div className="flex-initial">
          <div className="flex justify-end items-center relative">
            <div className="flex mr-4 justify-center items-center">
              <div className="block relative">
                <button
                  type="button"
                  className="inline-block hover:bg-gray-200 rounded-full relative "
                >
                  <Link className="nav-link" to="/cart">
                    {/* <span className='font-bold text-black absolute top-[0px] left-[-10px]'>
                                            {
                                                cartItem.reduce((acc, item) => acc + (+item.qty), 2)
                                            }
                                        </span> */}

                    <svg
                      fill="#000000"
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 902.86 902.86"
                    >
                      <g>
                        <g>
                          <path d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829zM685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z" />
                          <path d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.71c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897zM619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742S619.162,694.432,619.162,716.897z" />
                        </g>
                      </g>
                    </svg>
                  </Link>
                </button>
              </div>
              {/* <div className="block relative">
                <button
                  type="button"
                  className="inline-block py-2 px-3 hover:bg-gray-200 rounded-full relative "
                >
                  <div className="flex items-center h-5">
                    <div className="_xpkakx">
                      <svg
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                        style={{
                          display: "block",
                          height: "16px",
                          width: "16px",
                          fill: "currentcolor",
                        }}
                      >
                        <path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z"></path>
                      </svg>
                    </div>
                  </div>
                </button>
              </div> */}
            </div>

            <div className="block" onClick={() => setOpen(!open)}>
              <div className="inline relative">
                <button
                  type="button"
                  className="inline-flex items-center relative px-2 border rounded-full hover:shadow-lg"
                >
                  <div
                    className="pl-1"
                    id="dropdownDefaultButton"
                    data-dropdown-toggle="dropdown"
                  >
                    <svg
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      style={{
                        display: "block",
                        fill: "none",
                        height: "16px",
                        width: "16px",
                        stroke: "currentcolor",
                        strokeWidth: "3",
                        overflow: "visible",
                      }}
                    >
                      <g fill="none" fillRule="nonzero">
                        <path d="m2 16h28"></path>
                        <path d="m2 24h28"></path>
                        <path d="m2 8h28"></path>
                      </g>
                    </svg>

                    {/* <!-- Dropdown menu --> */}
                    <div
                      id="dropdown"
                      className={`z-10 ${
                        open ? "block" : "hidden"
                      } bg-white rounded-lg w-32 absolute right-0 top-12 shadow-[0_0_1px_black]`}
                    >
                      {!userInfo ? (
                        <ul
                          className="py-2 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="dropdownDefaultButton"
                        >
                          <li>
                            <Link
                              to="/login"
                              className="block px-4 py-2 text-black hover:bg-gray-100"
                            >
                              Login
                            </Link>
                          </li>
                        </ul>
                      ) : (
                        <ul
                          className="py-2 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="dropdownDefaultButton"
                        >
                          {userInfo.info.isAdmin ? (
                            <div>
                              <li>
                                <Link
                                  className="dropdown-item"
                                  to="./dashboard"
                                >
                                  Dashboard
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item"
                                  to="/add-product"
                                >
                                  Add Product
                                </Link>
                              </li>
                            </div>
                          ) : (
                            ""
                          )}
                          <li>
                            <Link
                              to="/profile"
                              className="block px-4 py-2 text-black hover:bg-gray-100"
                            >
                              Settings
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/admin-orders"
                              className="block px-4 py-2 text-black hover:bg-gray-100"
                            >
                              Earnings
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/summary"
                              className="block px-4 py-2 text-black hover:bg-gray-100"
                            >
                              Summary
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/order-history"
                              className="block px-4 py-2 text-black hover:bg-gray-100"
                            >
                              Earnings
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/logout"
                              className="block px-4 py-2 text-black hover:bg-gray-100"
                            >
                              Sign out
                            </Link>
                          </li>
                        </ul>
                      )}
                    </div>
                  </div>

                  <div className="block flex-grow-0 flex-shrink-0 h-10 w-12 pl-5">
                    <svg
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      style={{
                        display: "block",
                        height: "100%",
                        width: "100%",
                        fill: "currentcolor",
                      }}
                    >
                      <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end login --> */}
      </nav>
    </div>
  );
}
