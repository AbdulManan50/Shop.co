import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="flex my-10  items-center justify-between  bg-black w-custom mx-auto text-white p-10 rounded-3xl">
        <div className="text-left">
          <h2 className="text-4xl font-bold font-Integral-CF">
            STAY UPTO DATE ABOUT <br />
            OUR LATEST OFFERS
          </h2>
        </div>
        <div className=" space-y-5">
          <div className=" bg-white rounded-full w-[350px] py-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="bg-transparent focus:outline-none text-black px-4 w-full"
            />
          </div>
          <button className="bg-white text-black w-[350px] py-2 rounded-full font-Satoshi">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
      <footer className="bg-gray-100 font-Satoshi py-10">
        <div className="w-custom mx-auto">
          <div className="grid  grid-cols-5 gap-8">
            <div>
              <h1 className="text-2xl font-bold font-Integral-CF">SHOP.CO</h1>
              <p className="mt-4 text-gray-600">
                We have clothes that suit your style and which you're proud to
                wear. From women to men.
              </p>
              <div className="flex space-x-4 mt-6">
                <a
                  href="#"
                  className="text-primary hover:text-black text-xl"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="text-primary hover:text-black text-xl"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="text-primary hover:text-black text-xl"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="text-primary hover:text-black text-xl"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
            <div>
              <h2 className="font-semibold mb-4">COMPANY</h2>
              <ul className="space-y-2 text-primary">
                <li>
                  <a href="#" className="hover:text-black">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Career
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold mb-4">HELP</h2>
              <ul className="space-y-2 text-primary">
                <li>
                  <a href="#" className="hover:text-black">
                    Customer Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Delivery Details
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold mb-4">FAQ</h2>
              <ul className="space-y-2 text-primary">
                <li>
                  <a href="#" className="hover:text-black">
                    Account
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black"></a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Orders
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Payments
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold mb-4">RESOURCES</h2>
              <ul className="space-y-2 text-primary">
                <li>
                  <a href="#" className="hover:text-black">
                    Free eBooks
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Development Tutorial
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    How to - Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    YouTube Playlist
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 border-t border-gray-300 pt-6 flex flex-col lg:flex-row items-center justify-between">
            <p className="text-primary text-sm">
              Shop.co © 2000-2023, All Rights Reserved
            </p>
            <div className="flex justify-center items-center space-x-4 mt-0">
              <img src="/image/applepay.png" alt="Visa" className="" />
              <img
                src="/image/mastercard.png"
                alt="Apple Pay"
                className="h-6"
              />
              <img
                src="/image/paypal.png"
                alt="Google Pay"
                className="h-6"
              />
              <img
                src="/image/gpay.png"
                alt="Google Pay"
                className="h-6"
              />
              <img
                src="/image/visa.png"
                alt="Google Pay"
                className="h-6"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
