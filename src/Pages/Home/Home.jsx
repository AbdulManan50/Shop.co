import React from "react";
import Banner from "./Banner";
import { MdOutlineStar } from "react-icons/md";
import Products from "./Products";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="bg-black py-8">
        <div className=" w-custom mx-auto flex justify-between">
          <div>
            <img src="/Image/logo1.png" alt="" />
          </div>
          <div>
            <img src="/Image/logo2.png" alt="" />
          </div>
          <div>
            <img src="/Image/logo3.png" alt="" />
          </div>
          <div>
            <img src="/Image/logo4.png" alt="" />
          </div>
          <div>
            <img src="/Image/logo5.png" alt="" />
          </div>
        </div>
      </div>
      <Products />
      <div className="w-custom mx-auto">
        <div>
          <h1 className="font-Integral-CF font-bold text-5xl py-16 text-center uppercase">
            top selling
          </h1>
        </div>
        <div className="flex gap-5">
          <div className="w-[24%]">
            <div>
              <img
                className="rounded-xl"
                src="/Image/products5.png"
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
          <div className="w-[24%]">
            <div>
              <img
                className="rounded-xl"
                src="/Image/products6.png"
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
          <div className="w-[24%]">
            <div>
              <img
                className="rounded-xl"
                src="/Image/products7.png"
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
          <div className="w-[24%]">
            <div>
              <img
                className="rounded-xl"
                src="/Image/products8.png"
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
        <div className="flex items-center justify-center py-10">
          <button className="px-10 mx-auto py-1.5 font-Satoshi border-[1px] border-primary rounded-full ">
            View All
          </button>
        </div>
        <hr />
      </div>
      <div className="bg-[#F0F0F0] w-custom mx-auto rounded-xl py-10 mt-20 px-10">
        <h1 className="font-Integral-CF text-6xl font-bold pb-10 text-center">
          BROWSE BY dress STYLE
        </h1>
        <div className="flex gap-5 mb-5">
          <div className="w-[35%] bg-cover bg-[url('/Image/bg1.png')] h-[30vh] rounded-xl p-5">
            <h1 className="font-Satoshi text-xl font-bold">Casual</h1>
          </div>
          <div className="w-[65%] bg-cover bg-[url('/Image/bg3.png')] h-[30vh] rounded-xl p-5">
            <h1 className="font-Satoshi text-xl font-bold">Formal</h1>
          </div>
        </div>
        <div className="flex gap-5 mb-10">
          <div className="w-[65%] bg-cover bg-[url('/Image/bg2.png')] h-[30vh] rounded-xl p-5">
            <h1 className="font-Satoshi text-xl font-bold">Party</h1>
          </div>
          <div className="w-[35%] bg-cover bg-[url('/Image/bg4.png')] h-[30vh] rounded-xl p-5">
            <h1 className="font-Satoshi text-xl font-bold">Gym</h1>
          </div>
        </div>
      </div>
      <div className="w-custom mx-auto">
        <h1 className="font-Integral-CF font-bold text-4xl py-10">
          OUR HAPPY CUSTOMERS
        </h1>
        <div className="flex gap-5">
          <div className="w-1/3 p-5 border-[1px] border-primary shadow-md rounded-2xl">
            <img src="/Image/review.png" alt="" />
            <h1 className="font-Satoshi text-lg font-bold">Sarah M.</h1>
            <p className="font-Satoshi text-gray-400">
              "I'm blown away by the quality and style of the clothes I received
              from Shop.co. From casual wear to elegant dresses, every piece
              I've bought has exceeded my expectations.”
            </p>
          </div>
          <div className="w-1/3 p-5 border-[1px] border-primary shadow-md rounded-2xl">
            <img src="/Image/review.png" alt="" />
            <h1 className="font-Satoshi text-lg font-bold">Alex K.</h1>
            <p className="font-Satoshi text-gray-400">
              "Finding clothes that align with my personal style used to be a
              challenge until I discovered Shop.co. The range of options they
              offer is truly remarkable, catering to a variety of tastes and
              occasions.”
            </p>
          </div>
          <div className="w-1/3 p-5 border-[1px] border-primary shadow-md rounded-2xl">
            <img src="/Image/review.png" alt="" />
            <h1 className="font-Satoshi text-lg font-bold">James L.</h1>
            <p className="font-Satoshi text-gray-400">
              "As someone who's always on the lookout for unique fashion pieces,
              I'm thrilled to have stumbled upon Shop.co. The selection of
              clothes is not only diverse but also on-point with the latest
              trends.”
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
