import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removewishlist } from "../../Redux/wishlistSlice";
import { addtocart } from "../../Redux/AddtocartSlice";
import { MdOutlineStar } from "react-icons/md";

export default function Wishlist() {
  const dispatch = useDispatch();
  const wishlistitems = useSelector((state) => state.wishlist.items);

  const handleAddToCart = (product) => {
    dispatch(addtocart(product));
    dispatch(removewishlist(product.id));
  };

  const handleRemoveWishlist = (id) => {
    dispatch(removewishlist(id));
  };

  return (
    <>
      <div>
        <div className="w-custom mx-auto py-10">
          <h1 className="text-2xl font-Integral-CF">Wishlist</h1>
        </div>
        <div className="mx-auto w-custom">
          <div className=" gap-5 items-center grid grid-cols-4">
            {wishlistitems.length > 0 ? (
              wishlistitems.map((product) => (
                <div
                  key={product.id}
                  className="cursor-pointer "
                >
                  <div className="relative group">
                    <img className="rounded-xl" src={product.Image} alt="" />
                  </div>
                  <div className="flex justify-between pr-4">
                    <h1 className="font-Satoshi text-lg font-bold pt-2">
                      {product.name}
                    </h1>
                    <h1 className="text-xl font-Satoshi font-bold">
                      {product.price}
                    </h1>
                  </div>
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
                    <button
                      onClick={() => handleRemoveWishlist(product.id)}
                      className="px-5 py-1 text-secondary border-[#DB4444] border-[2px] rounded-lg"
                    >
                      Remove
                    </button>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="px-5 py-1 text-secondary border-[#DB4444] border-[2px] rounded-lg"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>Your wishlist is empty</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
