import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removewishlist } from "../../Redux/wishlistSlice";


export default function Wishlist() {
  const dispatch = useDispatch();
  const wishlistitems = useSelector((state) => state.wishlist.items);

  console.log("Wishlist::::::", wishlistitems);

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
          <div className="flex gap-5 items-center">
            {wishlistitems.length > 0 ? (
              wishlistitems.map((item) => (
                <div
                  key={item.id}
                  className="w-[24%] flex flex-col items-center"
                >
                  <div>
                    <img
                      className="rounded-xl"
                      src={item.Image}
                      alt={item.name}
                    />
                  </div>
                  <div>
                    <h1 className="font-Satoshi text-lg font-bold pt-2">
                      {item.name}
                    </h1>
                  </div>
                  <h1 className="text-xl font-Satoshi font-bold">
                    {item.price}
                  </h1>
                  <button
                    onClick={() => handleRemoveWishlist(item.id)}
                    className="px-10 py-2 rounded-full font-Satoshi bg-[#F0F0F0] text-black hover:text-white hover:bg-black"
                  >
                    Remove
                  </button>
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
