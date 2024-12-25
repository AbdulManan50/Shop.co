import React from "react";
import { BsTrash } from "react-icons/bs";
import { BsPlus, BsDash } from "react-icons/bs";

export default function Cart() {
  return (
    <>
      <div className="w-custom mx-auto py-8">
        <h1 className="text-gray-600 text-sm mb-6 font-Satoshi">
          <a href="/" className="hover:underline">
            Home
          </a>
          / <span className="text-black">Cart</span>
        </h1>
        <h1 className="text-3xl font-bold mb-8 font-Integral-CF">YOUR CART</h1>
        <div className="flex items-start gap-8">
          <div className="space-y-5  w-[65%]">
            <div className="flex items-center justify-between border border-gray-200 rounded-lg p-4 bg-white">
              <div className="flex items-center space-x-4">
                <img
                  src="/public/Image/cart1.png"
                  alt="Gradient Graphic T-shirt"
                  className="w-16 h-16 rounded-md"
                />
                <div>
                  <h3 className="font-semibold font-Satoshi">Gradient Graphic T-shirt</h3>
                  <p className="text-gray-500 text-sm font-Satoshi">Size: Large</p>
                  <p className="text-gray-500 text-sm font-Satoshi">Color: White</p>
                </div>
              </div>
              <div className="flex items-center space-x-10">
                <h1 className="text-lg font-bold font-Satoshi">$145</h1>
                <div className="flex items-center border rounded-md font-Satoshi">
                  <button className="px-3 py-2">
                   -
                  </button>
                  <span className="px-4">1</span>
                  <button className="px-3 py-2">
                   +
                  </button>
                </div>
                <button className="text-red-500 hover:text-red-700">
                  <BsTrash />
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between border border-gray-200 rounded-lg p-4 bg-white">
              <div className="flex items-center space-x-4">
                <img
                  src="/public/Image/cart2.png"
                  alt="Gradient Graphic T-shirt"
                  className="w-16 h-16 rounded-md"
                />
                <div>
                  <h3 className="font-semibold font-Satoshi">Gradient Graphic T-shirt</h3>
                  <p className="text-gray-500 text-sm font-Satoshi">Size: Large</p>
                  <p className="text-gray-500 text-sm font-Satoshi">Color: White</p>
                </div>
              </div>
              <div className="flex items-center space-x-10">
                <h1 className="text-lg font-bold font-Satoshi">$145</h1>
                <div className="flex items-center border rounded-md font-Satoshi">
                  <button className="px-3 py-2">
                   -
                  </button>
                  <span className="px-4">1</span>
                  <button className="px-3 py-2">
                   +
                  </button>
                </div>
                <button className="text-red-500 hover:text-red-700">
                  <BsTrash />
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between border border-gray-200 rounded-lg p-4 bg-white">
              <div className="flex items-center space-x-4">
                <img
                  src="/public/Image/cart3.png"
                  alt="Gradient Graphic T-shirt"
                  className="w-16 h-16 rounded-md"
                />
                <div>
                  <h3 className="font-semibold font-Satoshi">Gradient Graphic T-shirt</h3>
                  <p className="text-gray-500 text-sm font-Satoshi">Size: Large</p>
                  <p className="text-gray-500 text-sm font-Satoshi">Color: White</p>
                </div>
              </div>
              <div className="flex items-center space-x-10">
                <h1 className="text-lg font-bold font-Satoshi">$145</h1>
                <div className="flex items-center border rounded-md font-Satoshi">
                  <button className="px-3 py-2">
                   -
                  </button>
                  <span className="px-4">1</span>
                  <button className="px-3 py-2">
                   +
                  </button>
                </div>
                <button className="text-red-500 hover:text-red-700">
                  <BsTrash />
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between border border-gray-200 rounded-lg p-4 bg-white">
              <div className="flex items-center space-x-4">
                <img
                  src="/public/Image/cart1.png"
                  alt="Gradient Graphic T-shirt"
                  className="w-16 h-16 rounded-md"
                />
                <div>
                  <h3 className="font-semibold font-Satoshi">Gradient Graphic T-shirt</h3>
                  <p className="text-gray-500 text-sm font-Satoshi">Size: Large</p>
                  <p className="text-gray-500 text-sm font-Satoshi">Color: White</p>
                </div>
              </div>
              <div className="flex items-center space-x-10">
                <h1 className="text-lg font-bold font-Satoshi">$145</h1>
                <div className="flex items-center border rounded-md font-Satoshi">
                  <button className="px-3 py-2">
                   -
                  </button>
                  <span className="px-4">1</span>
                  <button className="px-3 py-2">
                   +
                  </button>
                </div>
                <button className="text-red-500 hover:text-red-700">
                  <BsTrash />
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between border border-gray-200 rounded-lg p-4 bg-white">
              <div className="flex items-center space-x-4">
                <img
                  src="/public/Image/cart2.png"
                  alt="Gradient Graphic T-shirt"
                  className="w-16 h-16 rounded-md"
                />
                <div>
                  <h3 className="font-semibold font-Satoshi">Gradient Graphic T-shirt</h3>
                  <p className="text-gray-500 text-sm font-Satoshi">Size: Large</p>
                  <p className="text-gray-500 text-sm font-Satoshi">Color: White</p>
                </div>
              </div>
              <div className="flex items-center space-x-10">
                <h1 className="text-lg font-bold font-Satoshi">$145</h1>
                <div className="flex items-center border rounded-md font-Satoshi">
                  <button className="px-3 py-2">
                   -
                  </button>
                  <span className="px-4">1</span>
                  <button className="px-3 py-2">
                   +
                  </button>
                </div>
                <button className="text-red-500 hover:text-red-700">
                  <BsTrash />
                </button>
              </div>
            </div>
          </div>
          <div className="border w-[35%]  border-gray-200 rounded-xl p-6 bg-white sticky top-4">
            <h2 className="font-bold text-xl mb-4 font-Satoshi">Order Summary</h2>
            <div className="space-y-4 font-Satoshi">
              <div className="flex justify-between">
                <span className="text-gray-500">Subtotal</span>
                <span className="font-bold">$565</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Discount (-20%)</span>
                <span className="text-red-500 font-bold">-$113</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Delivery Fee</span>
                <span className="font-bold">$15</span>
              </div>
              <div className="border-t pt-4 flex justify-between">
                <span className="font-bold">Total</span>
                <span className="font-bold text-xl">$467</span>
              </div>
            </div>
            <div className="mt-6 font-Satoshi">
              <div className="flex items-center border rounded-md overflow-hidden">
                <input
                  type="text"
                  placeholder="Add promo code"
                  className="w-full px-4 py-2 focus:outline-none"
                />
                <button className="bg-black text-white px-4 py-2">Apply</button>
              </div>
            </div>
            <button className="w-full mt-6 py-3 bg-black text-white rounded-md hover:bg-[#F0F0F0] flex items-center justify-center hover:text-black">
              Go to Checkout <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
