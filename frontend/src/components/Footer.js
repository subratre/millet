import React from "react";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { footerProductLinks } from "../static/data";

const Footer = () => {
  return (
    <div className="bg-[#000] text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#342ac8] py-7">
        <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          <span className="text-[#56d879]">Subscribe</span> us for gets news{" "}
          <br />
          events and offers
        </h1>
        <div>
          <input
            type="text"
            name=""
            id=""
            required
            placeholder="Enter your email..."
            className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded-[4px] px-2 focus:outline-none "
          />
          <button className="bg-[#56d879] hover:bg-teal-500 duration-300 px-5 py-2.5 rounded-md text-white md:w-auto w-full">
            Submit
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 sm:text-center">
        <ul className="px-5 text-center sm:text-start flex sm:block flex-col item-center">
          <img
            src="https://borobazar.vercel.app/_next/static/media/logo.026129ac.svg"
            alt=""
            className=" brightness-0 invert "
          />
          <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className="flex items-center mt-[15px]">
            <AiOutlineFacebook size={25} className="cursor-pointer" />
            <AiOutlineInstagram
              size={25}
              className="ml-[15px] cursor-pointer"
            />
            <AiOutlineTwitter size={25} className="ml-[15px] cursor-pointer" />
            <AiOutlineYoutube size={25} className="ml-[15px] cursor-pointer" />
          </div>
        </ul>
        <ul className="text-center sm:text-start ">
          <h1 className="mb-1 font-semibold">About Us</h1>
          {footerProductLinks.map((link) => (
            <li key={link.namme}>
              <Link
                to={link.link}
                className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="text-center sm:text-start ">
          <h1 className="mb-1 font-semibold">Our Information</h1>
          {footerProductLinks.map((link) => (
            <li key={link.namme}>
              <Link
                to={link.link}
                className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="text-center sm:text-start ">
          <h1 className="mb-1 font-semibold">Contact us</h1>
          {footerProductLinks.map((link) => (
            <li key={link.namme}>
              <Link
                to={link.link}
                className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
