import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const cartItems = useSelector((state) => state.cart.item);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const wishlistItems = useSelector((state) => state.wishlist.items);
  const wishlistCount = wishlistItems.length;

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
          <Link to={"/"}>
            <div className="text-3xl font-bold text-black font-Integral-CF">
              SHOP.CO
            </div>
          </Link>
          <ul className="flex space-x-6  text-black font-Satoshi">
            <Link to={"/shop"}>
              <li className="hover:text-primary cursor-pointer">Shop</li>
            </Link>
            <li className="hover:text-primary cursor-pointer">On Sale</li>
            <li className="hover:text-primary cursor-pointer">New Arrivals</li>
            <li className="hover:text-primary cursor-pointer">Brands</li>
          </ul>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="border rounded-full px-4 py-2 text-sm w-64 font-Satoshi focus:outline-none"
              />
            </div>
            <div className="flex space-x-4 text-xl text-black">
              <Link to={"/cart"}>
                <button
                  aria-label="Cart"
                  className="hover:text-primary focus:outline-none relative"
                >
                  <MdOutlineShoppingCart />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                      {cartCount}
                    </span>
                  )}
                </button>
              </Link>
              <button aria-label="User" className="hover:text-primary ">
                <FaRegUserCircle />
              </button>
              <Link to={"/wishlist"}>
                <button
                  aria-label="User"
                  className="hover:text-primary relative"
                >
                  <FaRegHeart />
                  {wishlistCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                      {wishlistCount}
                    </span>
                  )}
                </button>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
