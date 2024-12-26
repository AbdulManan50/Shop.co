import React from "react";
import { MdOutlineStar } from "react-icons/md";
import { BsFilterRight } from "react-icons/bs";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function Shop() {
  return (
    <>
      <div className="flex gap-5 items-start w-custom mx-auto">
        <div className="w-[20%]  p-5 border-[1px] border-black rounded-md mt-10">
          <div className="flex justify-between pb-2">
            <div>
              <h1 className="font-Satoshi text-xl font-bold">Filters</h1>
            </div>
            <div>
              <h1 className="text-2xl font-bold">
                <BsFilterRight />
              </h1>
            </div>
          </div>
          <hr />
          <div className="space-y-3 pt-3">
            <div className="flex justify-between items-center">
              <h1 className="font-Satoshi">T-shirts</h1>
              <h1 className="text-xl">
                <MdOutlineKeyboardArrowRight />
              </h1>
            </div>
            <div className="flex justify-between items-center">
              <h1 className="font-Satoshi">Shorts</h1>
              <h1 className="text-xl">
                <MdOutlineKeyboardArrowRight />
              </h1>
            </div>
            <div className="flex justify-between items-center">
              <h1 className="font-Satoshi">Shirts</h1>
              <h1 className="text-xl">
                <MdOutlineKeyboardArrowRight />
              </h1>
            </div>
            <div className="flex justify-between items-center">
              <h1 className="font-Satoshi">Hoodie</h1>
              <h1 className="text-xl">
                <MdOutlineKeyboardArrowRight />
              </h1>
            </div>

            <div className="flex justify-between items-center">
              <h1 className="font-Satoshi">Jeans</h1>
              <h1 className="text-xl">
                <MdOutlineKeyboardArrowRight />
              </h1>
            </div>
          </div>
          <hr className="my-3" />
          <div className="w-full max-w-md mx-auto">
            <div className="flex justify-between items-center">
              <h1 className="text-lg font-Satoshi">Price</h1>
              <h1 className="text-xl font-bold">
                <MdOutlineKeyboardArrowRight />
              </h1>
            </div>
            <div className="mt-4 relative">
              <div className="h-1 bg-gray-300 rounded-full"></div>

              <input
                type="range"
                min="0"
                max="200"
                defaultValue="200"
                className="absolute top-0 w-full h-1 appearance-none bg-transparent pointer-events-none"
                style={{ pointerEvents: "auto" }}
              />
            </div>
            <div className="flex justify-between mt-2 font-Satoshi">
              <span className="text-sm font-medium">$50</span>
              <span className="text-sm font-medium">$200</span>
            </div>
          </div>
          <hr className="my-3" />
          <div>
            <div className="flex justify-between pb-2">
              <h1 className="text-xl font-Satoshi font-semibold">Colors</h1>
              <h1 className="">
                <MdOutlineKeyboardArrowRight />
              </h1>
            </div>
            <div className="flex flex-wrap gap-2">
              <div className="w-8 h-8 bg-[#00C12B] rounded-full"></div>
              <div className="w-8 h-8 bg-[#F50606] rounded-full"></div>
              <div className="w-8 h-8 bg-[#F5DD06] rounded-full"></div>
              <div className="w-8 h-8 bg-[#F57906] rounded-full"></div>
              <div className="w-8 h-8 bg-[#06CAF5] rounded-full"></div>
              <div className="w-8 h-8 bg-[#063AF5] rounded-full"></div>
              <div className="w-8 h-8 bg-[#7D06F5] rounded-full"></div>
              <div className="w-8 h-8 bg-[#F506A4] rounded-full"></div>
              <div className="w-8 h-8 bg-[#FFFFFF] border border-black rounded-full"></div>
              <div className="w-8 h-8 bg-[#000000] rounded-full"></div>
            </div>
          </div>
          <hr className="my-3" />
          <div>
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-Satoshi font-semibold">Size</h1>
              <h1 className="text-xl font-bold">
                <MdOutlineKeyboardArrowRight />
              </h1>
            </div>
            <div className="flex-wrap space-x-1 space-y-1">
              <button className="px-5 py-2 rounded-full font-Satoshi  bg-[#F0F0F0]  text-black hover:text-white hover:bg-black">
                XX-Small
              </button>
              <button className="px-5 py-2 rounded-full font-Satoshi  bg-[#F0F0F0]  text-black hover:text-white hover:bg-black">
                X-Small
              </button>
              <button className="px-5 py-2 rounded-full font-Satoshi  bg-[#F0F0F0]  text-black hover:text-white hover:bg-black">
                Small
              </button>
              <button className="px-5 py-2 rounded-full font-Satoshi  bg-[#F0F0F0]  text-black hover:text-white hover:bg-black">
                Medium
              </button>
              <button className="px-5 py-2 rounded-full font-Satoshi  bg-[#F0F0F0]  text-black hover:text-white hover:bg-black">
                Large
              </button>
              <button className="px-5 py-2 rounded-full font-Satoshi  bg-[#F0F0F0]  text-black hover:text-white hover:bg-black">
                X-Large
              </button>
              <button className="px-5 py-2 rounded-full font-Satoshi  bg-[#F0F0F0]  text-black hover:text-white hover:bg-black">
                XX-Large
              </button>
              <button className="px-5 py-2 rounded-full font-Satoshi  bg-[#F0F0F0]  text-black hover:text-white hover:bg-black">
                3X-Large
              </button>
              <button className="px-5 py-2 rounded-full font-Satoshi  bg-[#F0F0F0]  text-black hover:text-white hover:bg-black">
                4X-Large
              </button>
            </div>
          </div>
          <hr className="my-3" />
          <div>
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-Satoshi font-semibold">
                Dress Style
              </h1>
              <h1 className="text-xl font-bold">
                <MdOutlineKeyboardArrowRight />
              </h1>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <h1 className="font-Satoshi">Casual</h1>
                <h1>
                  <MdOutlineKeyboardArrowRight />
                </h1>
              </div>
              <div className="flex justify-between">
                <h1 className="font-Satoshi">Formal</h1>
                <h1>
                  <MdOutlineKeyboardArrowRight />
                </h1>
              </div>
              <div className="flex justify-between">
                <h1 className="font-Satoshi">Party</h1>
                <h1>
                  <MdOutlineKeyboardArrowRight />
                </h1>
              </div>
              <div className="flex justify-between">
                <h1 className="font-Satoshi">Gym</h1>
                <h1>
                  <MdOutlineKeyboardArrowRight />
                </h1>
              </div>
            </div>
          </div>
          <div className="pt-5" >
            <button className="px-14 py-2 text-white bg-black font-Satoshi  rounded-full">
              Apply Filter
            </button>
          </div>
        </div>
        <div className="w-[80%] py-10">
          <h1 className="font-Satoshi text-2xl font-bold pb-5">Casual</h1>
          <div className="flex gap-y-5 flex-wrap">
            <div className="w-[33%]">
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
              <div className="flex items-center gap-2">
                <h1 className="flex gap-1 text-yellow-500">
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                </h1>
                <h1 className="flex">
                  <span>4.5/</span>
                  <span className="text-primary">5</span>
                </h1>
              </div>
              <h1 className="text-xl font-Satoshi font-bold">$120</h1>
            </div>
            <div className="w-[33%]">
              <div>
                <img
                  className="rounded-xl"
                  src="/public/Image/products2.png"
                  alt=""
                />
              </div>
              <div>
                <h1 className="font-Satoshi text-lg font-bold pt-2">
                  T-SHIRT WITH TAPE DETAILS
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <h1 className="flex gap-1 text-yellow-500">
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                </h1>
                <h1 className="flex">
                  <span>4.5/</span>
                  <span className="text-primary">5</span>
                </h1>
              </div>
              <h1 className="text-xl font-Satoshi font-bold">$120</h1>
            </div>
            <div className="w-[33%]">
              <div>
                <img
                  className="rounded-xl"
                  src="/public/Image/products3.png"
                  alt=""
                />
              </div>
              <div>
                <h1 className="font-Satoshi text-lg font-bold pt-2">
                  T-SHIRT WITH TAPE DETAILS
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <h1 className="flex gap-1 text-yellow-500">
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                </h1>
                <h1 className="flex">
                  <span>4.5/</span>
                  <span className="text-primary">5</span>
                </h1>
              </div>
              <h1 className="text-xl font-Satoshi font-bold">$120</h1>
            </div>
            <div className="w-[33%]">
              <div>
                <img
                  className="rounded-xl"
                  src="/public/Image/products4.png"
                  alt=""
                />
              </div>
              <div>
                <h1 className="font-Satoshi text-lg font-bold pt-2">
                  T-SHIRT WITH TAPE DETAILS
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <h1 className="flex gap-1 text-yellow-500">
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                </h1>
                <h1 className="flex">
                  <span>4.5/</span>
                  <span className="text-primary">5</span>
                </h1>
              </div>
              <h1 className="text-xl font-Satoshi font-bold">$120</h1>
            </div>
            <div className="w-[33%]">
              <div>
                <img
                  className="rounded-xl"
                  src="/public/Image/products4.png"
                  alt=""
                />
              </div>
              <div>
                <h1 className="font-Satoshi text-lg font-bold pt-2">
                  T-SHIRT WITH TAPE DETAILS
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <h1 className="flex gap-1 text-yellow-500">
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                </h1>
                <h1 className="flex">
                  <span>4.5/</span>
                  <span className="text-primary">5</span>
                </h1>
              </div>
              <h1 className="text-xl font-Satoshi font-bold">$120</h1>
            </div>
            <div className="w-[33%]">
              <div>
                <img
                  className="rounded-xl"
                  src="/public/Image/products4.png"
                  alt=""
                />
              </div>
              <div>
                <h1 className="font-Satoshi text-lg font-bold pt-2">
                  T-SHIRT WITH TAPE DETAILS
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <h1 className="flex gap-1 text-yellow-500">
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                </h1>
                <h1 className="flex">
                  <span>4.5/</span>
                  <span className="text-primary">5</span>
                </h1>
              </div>
              <h1 className="text-xl font-Satoshi font-bold">$120</h1>
            </div>
            <div className="w-[33%]">
              <div>
                <img
                  className="rounded-xl"
                  src="/public/Image/products4.png"
                  alt=""
                />
              </div>
              <div>
                <h1 className="font-Satoshi text-lg font-bold pt-2">
                  T-SHIRT WITH TAPE DETAILS
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <h1 className="flex gap-1 text-yellow-500">
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                </h1>
                <h1 className="flex">
                  <span>4.5/</span>
                  <span className="text-primary">5</span>
                </h1>
              </div>
              <h1 className="text-xl font-Satoshi font-bold">$120</h1>
            </div>
            <div className="w-[33%]">
              <div>
                <img
                  className="rounded-xl"
                  src="/public/Image/products4.png"
                  alt=""
                />
              </div>
              <div>
                <h1 className="font-Satoshi text-lg font-bold pt-2">
                  T-SHIRT WITH TAPE DETAILS
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <h1 className="flex gap-1 text-yellow-500">
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                </h1>
                <h1 className="flex">
                  <span>4.5/</span>
                  <span className="text-primary">5</span>
                </h1>
              </div>
              <h1 className="text-xl font-Satoshi font-bold">$120</h1>
            </div>
            <div className="w-[33%]">
              <div>
                <img
                  className="rounded-xl"
                  src="/public/Image/products4.png"
                  alt=""
                />
              </div>
              <div>
                <h1 className="font-Satoshi text-lg font-bold pt-2">
                  T-SHIRT WITH TAPE DETAILS
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <h1 className="flex gap-1 text-yellow-500">
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                </h1>
                <h1 className="flex">
                  <span>4.5/</span>
                  <span className="text-primary">5</span>
                </h1>
              </div>
              <h1 className="text-xl font-Satoshi font-bold">$120</h1>
            </div>
            <div className="w-[33%]">
              <div>
                <img
                  className="rounded-xl"
                  src="/public/Image/products4.png"
                  alt=""
                />
              </div>
              <div>
                <h1 className="font-Satoshi text-lg font-bold pt-2">
                  T-SHIRT WITH TAPE DETAILS
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <h1 className="flex gap-1 text-yellow-500">
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                </h1>
                <h1 className="flex">
                  <span>4.5/</span>
                  <span className="text-primary">5</span>
                </h1>
              </div>
              <h1 className="text-xl font-Satoshi font-bold">$120</h1>
            </div>
            <div className="w-[33%]">
              <div>
                <img
                  className="rounded-xl"
                  src="/public/Image/products4.png"
                  alt=""
                />
              </div>
              <div>
                <h1 className="font-Satoshi text-lg font-bold pt-2">
                  T-SHIRT WITH TAPE DETAILS
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <h1 className="flex gap-1 text-yellow-500">
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                </h1>
                <h1 className="flex">
                  <span>4.5/</span>
                  <span className="text-primary">5</span>
                </h1>
              </div>
              <h1 className="text-xl font-Satoshi font-bold">$120</h1>
            </div>
            <div className="w-[33%]">
              <div>
                <img
                  className="rounded-xl"
                  src="/public/Image/products4.png"
                  alt=""
                />
              </div>
              <div>
                <h1 className="font-Satoshi text-lg font-bold pt-2">
                  T-SHIRT WITH TAPE DETAILS
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <h1 className="flex gap-1 text-yellow-500">
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                </h1>
                <h1 className="flex">
                  <span>4.5/</span>
                  <span className="text-primary">5</span>
                </h1>
              </div>
              <h1 className="text-xl font-Satoshi font-bold">$120</h1>
            </div>
            <div className="w-[33%]">
              <div>
                <img
                  className="rounded-xl"
                  src="/public/Image/products4.png"
                  alt=""
                />
              </div>
              <div>
                <h1 className="font-Satoshi text-lg font-bold pt-2">
                  T-SHIRT WITH TAPE DETAILS
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <h1 className="flex gap-1 text-yellow-500">
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                </h1>
                <h1 className="flex">
                  <span>4.5/</span>
                  <span className="text-primary">5</span>
                </h1>
              </div>
              <h1 className="text-xl font-Satoshi font-bold">$120</h1>
            </div>
            <div className="w-[33%]">
              <div>
                <img
                  className="rounded-xl"
                  src="/public/Image/products4.png"
                  alt=""
                />
              </div>
              <div>
                <h1 className="font-Satoshi text-lg font-bold pt-2">
                  T-SHIRT WITH TAPE DETAILS
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <h1 className="flex gap-1 text-yellow-500">
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                </h1>
                <h1 className="flex">
                  <span>4.5/</span>
                  <span className="text-primary">5</span>
                </h1>
              </div>
              <h1 className="text-xl font-Satoshi font-bold">$120</h1>
            </div>
            <div className="w-[33%]">
              <div>
                <img
                  className="rounded-xl"
                  src="/public/Image/products4.png"
                  alt=""
                />
              </div>
              <div>
                <h1 className="font-Satoshi text-lg font-bold pt-2">
                  T-SHIRT WITH TAPE DETAILS
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <h1 className="flex gap-1 text-yellow-500">
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                </h1>
                <h1 className="flex">
                  <span>4.5/</span>
                  <span className="text-primary">5</span>
                </h1>
              </div>
              <h1 className="text-xl font-Satoshi font-bold">$120</h1>
            </div>
          </div>
          <div className="flex mt-10 items-center justify-center border-t  border-gray-300 py-3">
            <div className="flex items-center justify-center">
              <div>
                <nav className="rounded-md">
                  <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    ←
                  </button>

                  <button
                    aria-current="page"
                    className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                  >
                    1
                  </button>
                  <button className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                    2
                  </button>
                  <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium">
                    ...
                  </span>
                  <button className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                    8
                  </button>
                  <button className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                    9
                  </button>
                  <button className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                    10
                  </button>
                  <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    →
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
