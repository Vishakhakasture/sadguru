import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-gray-100 mt-10">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6  text-gray-800 flex flex-wrap justify-center flex justify-between">
          <div className="p-5">
            <div className="text-xs uppercase text-gray-500 font-medium">
              Links
            </div>
            <a className="my-3 block" href="/#">
              Home
            </a>
            <a className="my-3 block" href="/#">
              Products
            </a>
            <a className="my-3 block" href="/#">
              shop
            </a>
            <a className="my-3 block" href="/#">
              About Us
            </a>
          </div>
          <div className="p-5">
            <div className="text-xs uppercase text-gray-500 font-medium">
              Resources
            </div>
            <a className="my-3 block" href="/#">
              Gifts
            </a>
            <a className="my-3 block" href="/#">
              Categories
            </a>
            <a className="my-3 block" href="/#">
              Pricing
            </a>
            <a className="my-3 block" href="/#">
              Availability
            </a>
          </div>
          <div className="p-5">
            <div className="text-xs uppercase text-gray-500 font-medium">
              Support
            </div>
            <a className="my-3 block" href="/#">
              Terms and Conditions{" "}
            </a>
            <a className="my-3 block" href="/#">
              payment options
            </a>
            <a className="my-3 block" href="/#">
              Privacy Policy
            </a>
            <a className="my-3 block" href="/#">
              Legal Notice
            </a>
          </div>
          <div className="p-5">
            <div className="text-xs uppercase text-gray-500 font-medium">
              Contact us
            </div>
            <a className="my-3 block" href="/#">
              New Usmanpura, Chhatrapati SambhajiNagar
              <p>431001, Maharashtra, India</p>
            </a>
            <a className="my-3 block" href="/#">
              sadgurukrupa@gmail.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
