import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

export default function AddProduct() {
  const { userInfo } = useSelector((state) => state.user);
  const [name, setName] = useState();
  const [brand, setbrand] = useState();
  const [price, setPrice] = useState();
  const [image, setImage] = useState();
  const [description, setdescription] = useState();
  const [stock, setStock] = useState();
  const [category, setcategory] = useState();
  const [preview, setPreview] = useState();

  /* A function that will be called when the user click on the image input. */
  const handleImage = (e) => {
    console.log(e.target.files[0]);
    setImage((pre) => e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
  };
  const handleAddProduct = async (e) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append("name", name);
    fd.append("brand", brand);
    fd.append("description", description);
    fd.append("stock", stock);
    fd.append("price", price);
    fd.append("category", category);
    fd.append("image", image);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: userInfo.token,
      },
    };
    const { data } = await axios.post(
      `${process.env.REACT_APP_URL}/api/products/addProduct`,
      fd,
      config
    );
    console.log(data);
    e.target.reset();
  };
  return (
    <>
      <div className="container">
        {/* {JSON.stringify(userInfo.token)} */}

        <div>
          <h4 className="text-2xl font-semibold text-center pt-5">
            Add Product
          </h4>
        </div>
        <div className="inline-block align-center shadow-md rounded-md w-auto h-auto p-5 ml-60 mt-2 mr-20">
          <div className="flex">
            <div>
              <form onSubmit={handleAddProduct}>
                <div class="mb-2">
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-black capitalize"
                  >
                    product title
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    onChange={(e) => setName(e.target.value)}
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-zinc-100 focus:border-zinc-100 block w-full p-2.5 dark:bg-slate-100 dark:border-zinc-400 dark:placeholder-gray-400 dark:text-black  focus:outline-none dark:shadow-sm-light"
                    required
                  />
                </div>
                <div class="mb-2">
                  <label
                    for="product"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-black capitalize"
                  >
                    product brand
                  </label>
                  <input
                    type="text"
                    placeholder="brand"
                    onChange={(e) => setbrand(e.target.value)}
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-zinc-100 focus:border-zinc-100 block w-full p-2.5 dark:bg-slate-100 dark:border-zinc-400 dark:placeholder-gray-400 dark:text-black  focus:outline-none dark:shadow-sm-light"
                    required
                  />
                </div>
                <div class="mb-2">
                  <label
                    for="product"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-black capitalize"
                  >
                    product description
                  </label>
                  <textarea
                    type="text"
                    placeholder="description"
                    onChange={(e) => setdescription(e.target.value)}
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-zinc-100 focus:border-zinc-100 block w-full p-2.5 dark:bg-slate-100 dark:border-zinc-400 dark:placeholder-gray-400 dark:text-black  focus:outline-none dark:shadow-sm-light"
                    required
                  />
                </div>
                <div class="flex mb-2">
                  <div>
                    <label
                      for="price"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-black capitalize"
                    >
                      stock quantity
                    </label>
                    <input
                      type="text"
                      placeholder="stock"
                      onChange={(e) => setStock(e.target.value)}
                      class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-zinc-100 focus:border-zinc-100 block w-full p-2.5 dark:bg-slate-100 dark:border-zinc-400 dark:placeholder-gray-400 dark:text-black  focus:outline-none dark:shadow-sm-light"
                      required
                    />
                  </div>
                  <div className="ml-4">
                    <label
                      for="price"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-black capitalize"
                    >
                      price
                    </label>
                    <input
                      type="text"
                      placeholder="price"
                      onChange={(e) => setPrice(e.target.value)}
                      class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-zinc-100 focus:border-zinc-100 block w-full p-2.5 dark:bg-slate-100 dark:border-zinc-400 dark:placeholder-gray-400 dark:text-black focus:outline-none dark:shadow-sm-light"
                      required
                    />
                  </div>
                </div>
                <div class="flex mb-5">
                  <div>
                    <label
                      for="stock"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-black capitalize"
                    >
                      category
                    </label>
                    <input
                      type="text"
                      placeholder="category"
                      onChange={(e) => setcategory(e.target.value)}
                      class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-zinc-100 focus:border-zinc-100 block w-full p-2.5 dark:bg-slate-100 dark:border-zinc-400 dark:placeholder-gray-400 dark:text-black  focus:outline-none dark:shadow-sm-light"
                      required
                    />
                  </div>
                  <div className="inline-block ml-3">
                    <input
                      id="terms"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 border border-gray-300 rounded shadow-md bg-gray-50  focus:ring-red-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-red-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      required
                    />
                    <p className="">Change tax on this product</p>
                  </div>
                </div>
              </form>
            </div>
            <div className="ml-10 mt-7">
              <div className="d-flex gap-5 ">
                <div className="rounded-md">
                  <a href={preview} target="_blank">
                    <img src={preview} alt="" className="w-72 h-40" />
                  </a>
                </div>
              </div>
              <div class="flex items-center justify-center h-2 w-72 mt-20">
                <label
                  for="dropzone-file"
                  class="flex flex-col items-center justify-center w-full h-40 border-2 border-slate-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-slate-100 hover:bg-gray-100 dark:border-slate-200 dark:hover:border-slate-200 dark:hover:bg-slate-100 mt-20"
                >
                  <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span class="font-semibold">Click to upload</span> or drag
                      and drop
                    </p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    class="hidden"
                    onChange={handleImage}
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="">
            <button
              type="submit"
              class="text-white w-full capitalize bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-zinc-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              save all product info
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
