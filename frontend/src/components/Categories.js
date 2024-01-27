import React from "react";
import { useNavigate } from "react-router-dom";
import { brandingData, categoriesData } from "../static/data";
import styles from "../styles/styles";

const Categories = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="block sm:flex sm:gap-[20px] md:flex items-center justify-between px-14 py-10">
        <div className="block sm:flex md:flex items-center justify-between bg-violet-200 px-3 rounded-[4px] shadow-md">
          <img src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbundle%2F2.png&w=256&q=75" />
          <div>
            <h1 className="font-semibold">Spring cleaning for home</h1>
            <p>Get Your clean on supplies</p>
          </div>
        </div>
        <div className="flex items-center justify-between bg-green-200 px-3 rounded-[4px] shadow-md">
          {" "}
          <img src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbundle%2F3.png&w=256&q=75" />
          <div>
            <h1 className="font-semibold">Your pet choice for fresh</h1>
            <p>Get Your clean on supplies</p>
          </div>
        </div>
        <div className="flex items-center justify-between bg-purple-200 px-3 rounded-[4px] shadow-md">
          {" "}
          <img src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbundle%2F2.png&w=256&q=75" />
          <div>
            <h1 className="font-semibold">Washing item with discount</h1>
            <p>Get Your clean on supplies</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
