import React from "react";
import { IoStar } from "react-icons/io5";
import { MdOutlineStar } from "react-icons/md";

export default function Productsdetailes() {
  return (
    <>
      <>
        <div className="w-custom mx-auto py-8">
          <nav className="text-gray-600 text-sm mb-6 font-Satoshi">
            <a href="" className="hover:underline">
              Home
            </a>
            /
            <a href="" className="hover:underline">
              Shop
            </a>
            /
            <a href="" className="hover:underline">
              Men
            </a>
            / <span className="text-black">T-Shirts</span>
          </nav>
          <div className="flex gap-8">
            <div className="w-1/2 flex gap-3">
              <div className="flex flex-col space-y-4 mt-4 w-[20%]">
                <img
                  src="/Image/detailes3.png"
                  alt="Thumbnail 1"
                  className=" rounded-md cursor-pointer border border-gray-300 hover:border-black"
                />
                <img
                  src="/Image/detailes3.png"
                  alt="Thumbnail 2"
                  className="rounded-md cursor-pointer border border-gray-300 hover:border-black"
                />
                <img
                  src="/Image/detailes4.png"
                  alt="Thumbnail 3"
                  className="rounded-md cursor-pointer border border-gray-300 hover:border-black"
                />
              </div>
              <div className="rounded-lg w-[80%]">
                <img
                  src="/Image/detailes1.png"
                  alt="One Life Graphic T-Shirt"
                  className="w-full"
                />
              </div>
            </div>
            <div>
              <h1 className="text-4xl font-bold font-Integral-CF">
                ONE LIFE GRAPHIc T SHIRT
              </h1>
              <div className="flex items-center mt-2 space-x-2">
                <div className="flex text-yellow-500">
                  <span>
                    <IoStar />
                  </span>
                  <span>
                    <IoStar />
                  </span>
                  <span>
                    <IoStar />
                  </span>
                  <span>
                    <IoStar />
                  </span>
                  <span>
                    <IoStar />
                  </span>
                </div>
                <p className="text-gray-500 text-sm font-Satoshi">4.5/5</p>
              </div>
              <div className="mt-4">
                <span className="text-2xl font-bold font-Satoshi">$260</span>
                <span className="text-gray-400 line-through ml-4 font-Satoshi">
                  $300
                </span>
                <span className="text-red-500 ml-4 font-Satoshi">-40%</span>
              </div>
              <p className="text-gray-600 mt-2 font-Satoshi">
                This graphic t-shirt which is perfect for any occasion. Crafted
                from a soft and breathable fabric, it offers superior comfort
                and style.
              </p>

              <div className="mt-2">
                <h3 className="font-semibold text-xl font-Satoshi">
                  Select Colors
                </h3>
                <div className="flex space-x-4 mt-2">
                  <button className="h-8 w-8 rounded-full ring-2 bg-[#808000] ring-black"></button>
                  <button className="h-8 w-8 rounded-full bg-[#000080]"></button>
                  <button className="h-8 w-8 rounded-full bg-[#006400]"></button>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold">Choose Size</h3>
                <div className="flex space-x-4 mt-2">
                  <button className="px-10 py-2 rounded-full font-Satoshi  bg-[#F0F0F0]  text-black hover:text-white hover:bg-black">
                    Small
                  </button>
                  <button className="px-10 py-2 rounded-full font-Satoshi  bg-[#F0F0F0]  text-black hover:text-white hover:bg-black">
                    Medium
                  </button>
                  <button className="px-10 py-2 rounded-full font-Satoshi  bg-[#F0F0F0]  text-black hover:text-white hover:bg-black">
                    Large
                  </button>
                  <button className="px-10 py-2 rounded-full font-Satoshi  bg-[#F0F0F0]  text-black hover:text-white hover:bg-black">
                    X-Large
                  </button>
                </div>
              </div>
              <div className="mt-6 flex items-center space-x-4">
                <div className="flex items-center bg-[#F0F0F0] rounded-full px-5 space-x-5 py-2">
                  <button className="text-xl font-Satoshi">-</button>
                  <span className="text-xl font-Satoshi">1</span>
                  <button className="text-xl font-Satoshi">+</button>
                </div>
                <button className="px-10 py-2 rounded-full font-Satoshi  bg-black  text-white hover:text-black hover:bg-[#F0F0F0]">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-custom mx-auto ">
          <div className="py-10">
            <h1 className="text-black text-2xl font-bold text-center  border-b-[1px] border-black font-Satoshi">
              Rating & Reviews
            </h1>
          </div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold font-Satoshi">
              All Reviews (461)
            </h2>
            <div className="flex items-center space-x-4">
              <button className="px-10 py-2 rounded-full font-Satoshi  bg-[#F0F0F0]  text-black hover:text-white hover:bg-black">
                Latest
              </button>
              <button className="px-10 py-2 rounded-full font-Satoshi  bg-black  text-white hover:text-black hover:bg-[#F0F0F0]">
                Write a Review
              </button>
            </div>
          </div>
          <div className="gap-5 flex flex-wrap">
            <div className="w-[32%] p-5 border-[1px] border-primary shadow-md rounded-2xl">
              <img src="/Image/review.png" alt="" />
              <h1 className="font-Satoshi text-lg font-bold">Sarah M.</h1>
              <p className="font-Satoshi text-gray-400">
                "I'm blown away by the quality and style of the clothes I
                received from Shop.co. From casual wear to elegant dresses,
                every piece I've bought has exceeded my expectations.”
              </p>
            </div>
            <div className="w-[32%] p-5 border-[1px] border-primary shadow-md rounded-2xl">
              <img src="/Image/review.png" alt="" />
              <h1 className="font-Satoshi text-lg font-bold">Alex K.</h1>
              <p className="font-Satoshi text-gray-400">
                "Finding clothes that align with my personal style used to be a
                challenge until I discovered Shop.co. The range of options they
                offer is truly remarkable, catering to a variety of tastes and
                occasions.”
              </p>
            </div>
            <div className="w-[32%] p-5 border-[1px] border-primary shadow-md rounded-2xl">
              <img src="/Image/review.png" alt="" />
              <h1 className="font-Satoshi text-lg font-bold">James L.</h1>
              <p className="font-Satoshi text-gray-400">
                "As someone who's always on the lookout for unique fashion
                pieces, I'm thrilled to have stumbled upon Shop.co. The
                selection of clothes is not only diverse but also on-point with
                the latest trends.”
              </p>
            </div>
            <div className="w-[32%] p-5 border-[1px] border-primary shadow-md rounded-2xl">
              <img src="/Image/review.png" alt="" />
              <h1 className="font-Satoshi text-lg font-bold">James L.</h1>
              <p className="font-Satoshi text-gray-400">
                "As someone who's always on the lookout for unique fashion
                pieces, I'm thrilled to have stumbled upon Shop.co. The
                selection of clothes is not only diverse but also on-point with
                the latest trends.”
              </p>
            </div>
            <div className="w-[32%] p-5 border-[1px] border-primary shadow-md rounded-2xl">
              <img src="/Image/review.png" alt="" />
              <h1 className="font-Satoshi text-lg font-bold">James L.</h1>
              <p className="font-Satoshi text-gray-400">
                "As someone who's always on the lookout for unique fashion
                pieces, I'm thrilled to have stumbled upon Shop.co. The
                selection of clothes is not only diverse but also on-point with
                the latest trends.”
              </p>
            </div>
            <div className="w-[32%] p-5 border-[1px] border-primary shadow-md rounded-2xl">
              <img src="/Image/review.png" alt="" />
              <h1 className="font-Satoshi text-lg font-bold">James L.</h1>
              <p className="font-Satoshi text-gray-400">
                "As someone who's always on the lookout for unique fashion
                pieces, I'm thrilled to have stumbled upon Shop.co. The
                selection of clothes is not only diverse but also on-point with
                the latest trends.”
              </p>
            </div>
            <div className="w-[32%] p-5 border-[1px] border-primary shadow-md rounded-2xl">
              <img src="/Image/review.png" alt="" />
              <h1 className="font-Satoshi text-lg font-bold">James L.</h1>
              <p className="font-Satoshi text-gray-400">
                "As someone who's always on the lookout for unique fashion
                pieces, I'm thrilled to have stumbled upon Shop.co. The
                selection of clothes is not only diverse but also on-point with
                the latest trends.”
              </p>
            </div>
            <div className="w-[32%] p-5 border-[1px] border-primary shadow-md rounded-2xl">
              <img src="/Image/review.png" alt="" />
              <h1 className="font-Satoshi text-lg font-bold">James L.</h1>
              <p className="font-Satoshi text-gray-400">
                "As someone who's always on the lookout for unique fashion
                pieces, I'm thrilled to have stumbled upon Shop.co. The
                selection of clothes is not only diverse but also on-point with
                the latest trends.”
              </p>
            </div>
            <div className="w-[32%] p-5 border-[1px] border-primary shadow-md rounded-2xl">
              <img src="/Image/review.png" alt="" />
              <h1 className="font-Satoshi text-lg font-bold">James L.</h1>
              <p className="font-Satoshi text-gray-400">
                "As someone who's always on the lookout for unique fashion
                pieces, I'm thrilled to have stumbled upon Shop.co. The
                selection of clothes is not only diverse but also on-point with
                the latest trends.”
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <button className="px-10 mx-auto py-1.5 font-Satoshi border-[1px] border-primary rounded-full">
              Load More Reviews
            </button>
          </div>
        </div>
        <div className="w-custom mx-auto">
          <div>
            <h1 className="font-Integral-CF font-bold text-4xl py-16 text-center">
              You might also like
            </h1>
          </div>
          <div className="flex gap-5">
            <div className="w-[24%]">
              <div>
                <img
                  className="rounded-xl"
                  src="/Image/products1.png"
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
                  src="/Image/products2.png"
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
                  src="/Image/products3.png"
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
                  src="/Image/products4.png"
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
          <div className="flex items-center justify-center py-16">
            <button className="px-10 mx-auto py-1.5 font-Satoshi border-[1px] border-primary rounded-full ">
              View All
            </button>
          </div>
        </div>
      </>
    </>
  );
}
