import React from "react";
import { MdOutlineStar } from "react-icons/md";

export default function Wishlist() {
  return (
    <>
      <div>
        <div className=" w-custom mx-auto py-10 ">
          <h1 className="text-2xl font-Integral-CF">Wishlist</h1>
        </div>
        <div className="mx-auto w-custom">
          <div className="flex gap-5 items-center">
            <div className="w-[24%] flex flex-col items-center">
              <div>
                <img
                  className="rounded-xl"
                  src="/public/Image/products1.png"
                  alt=""
                />
              </div>
              <div>
                <h1 className="font-Satoshi text-lg font-bold pt-2">
                  T-SHIRT WITH TAPE DETAILS
                </h1>
              </div>
              <h1 className="text-xl font-Satoshi font-bold">$120</h1>
              <button className="px-10 py-2 rounded-full font-Satoshi  bg-[#F0F0F0]  text-black hover:text-white hover:bg-black">
                remove
              </button>
            </div>
            <div className="w-[24%] flex flex-col items-center">
              <div>
                <img
                  className="rounded-xl"
                  src="/public/Image/products1.png"
                  alt=""
                />
              </div>
              <div>
                <h1 className="font-Satoshi text-lg font-bold pt-2">
                  T-SHIRT WITH TAPE DETAILS
                </h1>
              </div>
              <h1 className="text-xl font-Satoshi font-bold">$120</h1>
              <button className="px-10 py-2 rounded-full font-Satoshi  bg-[#F0F0F0]  text-black hover:text-white hover:bg-black">
                remove
              </button>
            </div>
            <div className="w-[24%] flex flex-col items-center">
              <div>
                <img
                  className="rounded-xl"
                  src="/public/Image/products1.png"
                  alt=""
                />
              </div>
              <div>
                <h1 className="font-Satoshi text-lg font-bold pt-2">
                  T-SHIRT WITH TAPE DETAILS
                </h1>
              </div>
              <h1 className="text-xl font-Satoshi font-bold">$120</h1>
              <button className="px-10 py-2 rounded-full font-Satoshi  bg-[#F0F0F0]  text-black hover:text-white hover:bg-black">
                remove
              </button>
            </div>
            <div className="w-[24%] flex flex-col items-center">
              <div>
                <img
                  className="rounded-xl"
                  src="/public/Image/products1.png"
                  alt=""
                />
              </div>
              <div>
                <h1 className="font-Satoshi text-lg font-bold pt-2">
                  T-SHIRT WITH TAPE DETAILS
                </h1>
              </div>
              <h1 className="text-xl font-Satoshi font-bold">$120</h1>
              <button className="px-10 py-2 rounded-full font-Satoshi  bg-[#F0F0F0]  text-black hover:text-white hover:bg-black">
                remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
