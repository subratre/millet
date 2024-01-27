import React from "react";
import styles from "../styles/styles";
import CountDown from "../components/CountDown.js";

const EventCard = () => {
  return (
    <div className={`w-full block bg-white rounded-lg lg:flex p-2`}>
      <div className="w-full lg:w-[50%] m-auto">
        <img src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-3-1.png&w=750&q=75" />
      </div>
      <div className="w-full lg:w-[50%] flex flex-col justify-center">
        <h2 className={`${styles.productTitle}`}>
          Fresh Express Iceberg Garden Salad Blend
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
          cumque, voluptatum labore tempore necessitatibus nostrum error. Quos
          obcaecati omnis corrupti facere quo tempora eaque ad iste libero.
          Excepturi, laudantium quidem!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
          cumque, voluptatum labore tempore necessitatibus nostrum error. Quos
          obcaecati omnis corrupti facere quo tempora eaque ad iste libero.
          Excepturi, laudantium quidem!
        </p>
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="font-[500] text-[18px] text-[#d55b45] pr-2 line-through">
              1099$
            </h5>
            <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
              999$
            </h5>
          </div>
          <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">
            120 sold
          </span>
        </div>
        <CountDown />
      </div>
    </div>
  );
};

export default EventCard;
