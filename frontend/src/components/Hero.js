import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex} bg-cover`}
      style={{
        backgroundImage:
          "url(https://nest-nextjs-13.vercel.app/assets/imgs/slider/slider-1.png)",
      }}
    >
      <div className={`px-14 w-[90%] 800px:w-[50%] flex flex-col items-start`}>
        <h1
          className={`text-[20px] leading-[1.2] 800px:text-[30px] text-[#3d3a3a] font-[600] capitalize`}
        >
          <span className="text-[green]"> Healthy vegetable that you</span>
          <br /> deserve to eat fresh
        </h1>
        <p className="pt-5 text-[16px] font-Poppins font-[400] text-[#000000ba]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit possimus
          est facilis expedita officia commodi accusamus recusandae dolor, sequi
          consectetur reiciendis sed sit rerum, ullam voluptate reprehenderit
          placeat explicabo ipsa!
        </p>
        <Link to="/products" className=" inline-block ">
          <div className={`${styles.button} mt-5 `}>
            <span className="text-[#fff] font-Poppins font-[400] text-[18px]">
              Shop Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
