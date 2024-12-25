import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";

export default function Header() {
  return (
    <>
      <header>
        <div className="bg-black">
          <div className=" w-custom mx-auto text-white font-Satoshi text-sm px-4 py-2 flex  items-center justify-between">
            <div></div>
            <div>
              <h1 className="text-center">
                Sign up and get 20% off on your first order.
                <a href="#" className="underline hover:text-gray-300">
                  Sign Up Now
                </a>
              </h1>
            </div>
            <div>
              <button
                className="text-white text-xl hover:text-gray-300 focus:outline-none"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
        <nav className="bg-white mx-auto w-custom px-4 py-3 flex items-center justify-between">
          <div className="text-3xl font-bold text-black font-Integral-CF">
            SHOP.CO
          </div>
          <ul className="flex space-x-6  text-black font-Satoshi">
            <li className="hover:text-primary cursor-pointer">Shop</li>
            <li className="hover:text-primary cursor-pointer">On Sale</li>
            <li className="hover:text-primary cursor-pointer">New Arrivals</li>
            <li className="hover:text-primary cursor-pointer">Brands</li>
          </ul>

          {/* Search and Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Box */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="border rounded-full px-4 py-2 text-sm w-64 font-Satoshi focus:outline-none"
              />
            </div>
            <div className="flex space-x-4 text-xl text-black">
              <button
                aria-label="Cart"
                className="hover:text-primary focus:outline-none"
              >
                <MdOutlineShoppingCart />
              </button>
              <button
                aria-label="User"
                className="hover:text-primary "
              >
                <FaRegUserCircle />
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
