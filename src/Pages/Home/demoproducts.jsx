import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdOutlineStar } from "react-icons/md";

export default function Products() {
  const [data, setdata] = useState();
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/categories")
      .then((response) => {
        setdata(response.data);
        setloading(false);
      })
      .catch((error) => {
        seterror(true);
        setloading(false);
      });
  }, []);

  return (
    <>
      <div className="w-custom mx-auto">
        <div>
          <h1 className="font-Integral-CF font-bold text-5xl py-16 text-center">
            NEW ARRIVALS
          </h1>
        </div>
        <div className="flex flex-wrap justify-between space-y-5">
          {loading && <>{"loading................"}</>}
          {error && <>{"you are facing the error"}</>}

          {data?.map((category) =>
            category.products?.map((product) => (
              <div key={product.id} className="w-[24%] cursor-pointer">
                <div>
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
                    <span>4.5/</span>
                    <span className="text-primary">5</span>
                  </h1>
                </div>
                <h1 className="text-xl font-Satoshi font-bold">
                  {product.price}
                </h1>
              </div>
            ))
          )}
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
}


