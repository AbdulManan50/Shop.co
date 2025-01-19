import React from "react";

export default function Banner() {
  return (
    <>
      <section className="bg-white h-[80vh] text-black py-12 px-8 bg-cover bg-no-repeat bg-[url('Image/banner.png')]">
        <div className="w-custom mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div className="w-1/2">
            <h1 className="text-6xl font-bold font-Integral-CF mb-4">
              FIND CLOTHES THAT MATCHES <br />
              YOUR STYLE
            </h1>
            <p className="text-black mb-6 font-Satoshi ">
              Browse through our diverse range of meticulously crafted garments,
              designed <br /> to bring out your individuality and cater to your
              sense of style.
            </p>
            <button className="bg-black rounded-full text-white py-2 font-Satoshi px-10">
              Shop Now
            </button>
            <div className="mt-12 flex justify-between">
              <div>
                <h3 className="text-4xl font-bold font-Satoshi">200+</h3>
                <p className="font-Satoshi text-primary">
                  International Brands
                </p>
              </div>
              <div>
                <h3 className="text-4xl font-bold font-Satoshi">2,000+</h3>
                <p className="font-Satoshi text-primary">
                  High-Quality Products
                </p>
              </div>
              <div>
                <h3 className="text-4xl font-bold font-Satoshi">30,000+</h3>
                <p className="font-Satoshi text-primary">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
