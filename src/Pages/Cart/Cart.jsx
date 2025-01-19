import React from "react";
import { BsTrash } from "react-icons/bs";
import { BsPlus, BsDash } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { removecart, updatequantity } from "../../Redux/AddtocartSlice";

export default function Cart() {
  const cartitem = useSelector((state) => state.cart.item);
  const dispatch = useDispatch();

  console.log("cart item", cartitem);

  
  const handelremove = (id) => {
    dispatch(removecart(id));
  };

  
  const handleIncrement = (id, currentQuantity) => {
    dispatch(updatequantity({ id, quantity: currentQuantity + 1 }));
  };

   const handleDecrement = (id, currentQuantity) => {
    if (currentQuantity > 1) {
      dispatch(updatequantity({ id, quantity: currentQuantity - 1 }));
    }
  };


  const calculateSubtotal = () => {
    return cartitem.reduce((total, item) => total + item.price * item.quantity, 0);
  };

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
            {cartitem.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              cartitem.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border border-gray-200 rounded-lg p-4 bg-white"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.Image}
                      alt={item.name}
                      className="w-16 h-16 rounded-md"
                    />
                    <div>
                      <h3 className="font-semibold font-Satoshi">{item.name}</h3>
                      <p className="text-gray-500 text-sm font-Satoshi">
                        Size: Large
                      </p>
                      <p className="text-gray-500 text-sm font-Satoshi">
                        Color: White
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-10">
                    <h1 className="text-lg font-bold font-Satoshi">
                      ${item.price * item.quantity}
                    </h1>
                    <div className="flex items-center border rounded-md font-Satoshi">
                      <button
                        onClick={() =>
                          handleDecrement(item.id, item.quantity)
                        }
                        className="px-3 py-2"
                      >
                        <BsDash />
                      </button>
                      <span className="px-4">{item.quantity}</span>
                      <button
                        onClick={() =>
                          handleIncrement(item.id, item.quantity)
                        }
                        className="px-3 py-2"
                      >
                        <BsPlus />
                      </button>
                    </div>
                    <button
                      onClick={() => handelremove(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <BsTrash />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="border w-[35%]  border-gray-200 rounded-xl p-6 bg-white sticky top-4">
            <h2 className="font-bold text-xl mb-4 font-Satoshi">
              Order Summary
            </h2>
            <div className="space-y-4 font-Satoshi">
              <div className="flex justify-between">
                <span className="text-gray-500">Subtotal</span>
                <span className="font-bold">${calculateSubtotal()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Delivery Fee</span>
                <span className="font-bold">$15</span>
              </div>
              <div className="border-t pt-4 flex justify-between">
                <span className="font-bold">Total</span>
                <span className="font-bold text-xl">
                  ${(
                    calculateSubtotal() -
                    calculateSubtotal() * 0.2 +
                    15
                  ).toFixed(2)}
                </span>
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
