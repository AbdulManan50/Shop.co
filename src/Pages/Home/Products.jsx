import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../../Redux/Slice";
import { MdOutlineStar } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { addtowishlist } from "../../Redux/wishlistSlice";
import { FaHeart } from "react-icons/fa";

const Categories = () => {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector(
    (state) => state.categories
  );

  const wishlistItems = useSelector((state) => state.wishlist.items);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const handelwishlist = (product) => {
    dispatch(addtowishlist(product));
    console.log("wishlist products :", product);
  };

  const isProductInWishlist = (id) => {
    return wishlistItems.some((item) => item.id === id);
  };

  return (
    <>
      <div className="w-custom mx-auto">
        <div>
          <h1 className="font-Integral-CF font-bold text-5xl py-16 text-center uppercase">
            top selling
          </h1>
        </div>
        <div className="flex flex-wrap justify-between gap-y-10">
          {categories.map((category) => (
            <>
              {category.products.map((product) => (
                <>
                  <div key={product.id} className="w-[24%] cursor-pointer">
                    <div className="relative group">
                      <h1
                        onClick={() => handelwishlist(product)}
                        className="absolute p-2 rounded-full bg-white top-3 right-5 text-xl hover:text-secondary cursor-pointer opacity-0 group-hover:opacity-100 transition-all ease-out duration-500 translate-x-5 group-hover:translate-x-0"
                      >
                        {isProductInWishlist(product.id) ? (
                          <FaHeart className="text-secondary"  />
                        ) : (
                          <FaRegHeart  />
                        )}
                      </h1>
                      <img className="rounded-xl" src={product.Image} alt="" />
                    </div>
                    <div>
                      <h1 className="font-Satoshi text-lg font-bold pt-2">
                        {product.name}
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
                        <span>{product.rating}/</span>
                        <span className="text-primary">5</span>
                      </h1>
                    </div>
                    <div className="flex justify-between items-center pr-5">
                      <h1 className="text-xl font-Satoshi font-bold">
                        {product.price}
                      </h1>
                      <button className="px-5 py-1 text-secondary border-[#DB4444] border-[2px] rounded-lg">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </>
              ))}
            </>
          ))}
        </div>
        <div className="flex items-center justify-center py-10">
          <button className="px-10 mx-auto py-1.5 font-Satoshi border-[1px] border-primary rounded-full ">
            View All
          </button>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Categories;
