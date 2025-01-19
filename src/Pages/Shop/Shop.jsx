import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../../Redux/Slice";
import { MdOutlineKeyboardArrowRight, MdOutlineStar } from "react-icons/md";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { addtowishlist } from "../../Redux/wishlistSlice";
import { addtocart } from "../../Redux/AddtocartSlice";
import { BsFilterRight } from "react-icons/bs";

export default function Shop() {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector(
    (state) => state.categories
  );
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const cart = useSelector((state) => state.cart.items); // Fixed the cart selector to `items`

  const [allCategory, setAllCategory] = useState([]);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handelwishlist = useCallback(
    (product) => {
      dispatch(addtowishlist(product));
      console.log("Wishlist updated:", product);
    },
    [dispatch]
  );

  const isProductInWishlist = (id) => {
    return wishlistItems.some((item) => item.id === id);
  };

  const handleAddToCart = useCallback(
    (product) => {
      dispatch(addtocart(product));
      console.log("Product added to cart:", product);
    },
    [dispatch]
  );

  if (loading)
    return (
      <div className="text-center py-10">
        <p className="text-lg font-semibold">Loading...</p>
      </div>
    );
  if (error)
    return (
      <div className="text-center py-10 text-red-500">
        <p>Error: {error}</p>
      </div>
    );

  const handleSelectCategory = (category_name) => {
    console.log("category_name", category_name);

    const filterCategory = categories.filter((el) => el.name === category_name);

    if (filterCategory?.length > 0) {
      setAllCategory(filterCategory); // This will now work because the state is defined
    }

    console.log("filterCategory", filterCategory);
  };
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
            <div
               onClick={() => handleSelectCategory("T-Shirts")}
              className="flex justify-between items-center cursor-pointer"
            >
              <h1 className="font-Satoshi">T-shirts</h1>
              <h1 className="text-xl">
                <MdOutlineKeyboardArrowRight />
              </h1>
            </div>
            <div
              onClick={() => handleSelectCategory("Shorts")}
              className="flex justify-between items-center cursor-pointer"
            >
              <h1 className="font-Satoshi">Shorts</h1>
              <h1 className="text-xl">
                <MdOutlineKeyboardArrowRight />
              </h1>
            </div>
            <div
              onClick={() => handleSelectCategory("Shirts")}
              className="flex justify-between items-center cursor-pointer"
            >
              <h1 className="font-Satoshi">Shirts</h1>
              <h1 className="text-xl">
                <MdOutlineKeyboardArrowRight />
              </h1>
            </div>
            <div
              onClick={() => handleSelectCategory("Hoodie")}
              className="flex justify-between items-center cursor-pointer"
            >
              <h1 className="font-Satoshi">Hoodie</h1>
              <h1 className="text-xl">
                <MdOutlineKeyboardArrowRight />
              </h1>
            </div>
            <div
              onClick={() => handleSelectCategory("Jeans")}
              className="flex justify-between items-center cursor-pointer"
            >
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
          <div className="pt-5">
            <button className="px-14 py-2 text-white bg-black font-Satoshi  rounded-full">
              Apply Filter
            </button>
          </div>
        </div>
        <div className="w-[80%] py-10">
          <h1 className="font-Satoshi text-2xl font-bold pb-5">Casual</h1>
          <div className="flex gap-y-5 gap-5 flex-wrap">
            {categories?.slice(0, 4).map((category) =>
              category?.products?.slice(0, 4).map((product) => (
                <div
                  key={product.id}
                  className="w-full sm:w-[48%] lg:w-[23%] cursor-pointer"
                >
                  <div className="relative group">
                    <h1
                      onClick={() => handelwishlist(product)}
                      className="absolute p-2 rounded-full bg-white top-3 right-5 text-xl hover:text-secondary cursor-pointer opacity-0 group-hover:opacity-100 transition-all ease-out duration-500 translate-x-5 group-hover:translate-x-0"
                    >
                      {isProductInWishlist(product.id) ? (
                        <FaHeart className="text-secondary" />
                      ) : (
                        <FaRegHeart />
                      )}
                    </h1>
                    <img
                      className="rounded-xl"
                      src={product.Image || "default-image-path"} // Ensure fallback image
                      alt={product.name}
                    />
                  </div>
                  <h1 className="font-Satoshi text-lg font-bold pt-2">
                    {product.name}
                  </h1>
                  <div className="flex items-center gap-2">
                    <h1 className="flex gap-1 text-yellow-500">
                      {Array.from({ length: product.rating }).map(
                        (_, index) => (
                          <MdOutlineStar key={index} />
                        )
                      )}
                    </h1>
                    <h1>
                      <span>{product.rating}/</span>
                      <span className="text-primary">5</span>
                    </h1>
                  </div>
                  <div className="flex justify-between items-center pr-5">
                    <h1 className="text-xl font-Satoshi font-bold">
                      {product.price}
                    </h1>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="px-5 py-1 text-secondary border-[#DB4444] hover:bg-secondary hover:text-white border-[2px] rounded-lg"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              ))
            )}
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
