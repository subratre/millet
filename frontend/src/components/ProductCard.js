import React, { useState } from "react";
import {
  AiFillHeart,
  AiFillStar,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "../styles/styles";
import ProductDetailscart from "../components/ProductDetailscart";

const ProductCard = ({ data }) => {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);

  const d = data.name;
  const product_name = d.replace(/\s+/g, "-");
  return (
    <>
      <div className="w-full h-[370px] bg-white rounded shadow-md p-3 relative cusror-pointer">
        <div className="flex justify-center">
          <Link to={`/product/${product_name}`}>
            <img
              src={data.image_Url[0].url}
              className="w-full h-[170px] object-contain"
            />
          </Link>
        </div>
        <Link to="/">
          {/* <h5 className={`${styles.shop_name}`}>{data.shop.name}</h5> */}
        </Link>
        <Link to={`/product/${product_name}`}>
          <h4 className="pb-3 font-[500]">
            {data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}
          </h4>
        </Link>
        <div className="flex">
          <AiFillStar
            className="mr-2 cursor-pointer"
            color="#f6ba00"
            size={20}
          />
          <AiFillStar
            className="mr-2 cursor-pointer"
            color="#f6ba00"
            size={20}
          />
          <AiFillStar
            className="mr-2 cursor-pointer"
            color="#f6ba00"
            size={20}
          />
          <AiFillStar
            className="mr-2 cursor-pointer"
            color="#f6ba00"
            size={20}
          />
          <AiOutlineStar
            className="mr-2 cursor-pointer"
            color="#f6ba00"
            size={20}
          />
        </div>
        <div className="py-2 flex items-center justify-between">
          <div className="flex">
            <h5 className={`${styles.productDiscountPrice}`}>
              {data.price === 0 ? data.price : data.discount_price}$
            </h5>
            <h4 className={`${styles.price}`}>
              {data.price ? data.price + " $" : null}
            </h4>
          </div>
          <span className="font-[400] text-[17px] text-[#68d284]">
            {data.total_sell} Sold
          </span>
        </div>
        {/* side options */}
        <div>
          {click ? (
            <AiFillHeart
              size={22}
              className="cursor-pointer absolute right-2 top-5"
              onClick={() => setClick(!click)}
              color={click ? "red" : "#333"}
              title="Remove from Wishlist"
            />
          ) : (
            <AiOutlineHeart
              size={22}
              className="cursor-pointer absolute right-2 top-5"
              onClick={() => setClick(!click)}
              color={click ? "red" : "#333"}
              title="Remove from Wishlist"
            />
          )}
          <AiOutlineEye
            className="cursor-pointer absolute right-2 top-14"
            size={25}
            onClick={() => setOpen(!open)}
            color={"#333"}
            title="Quick View"
          />
          <AiOutlineShoppingCart
            size={25}
            className="cursor-pointer absolute right-2 top-24"
            onClick={() => setOpen(!open)}
            color={"#333"}
            title="Add to cart"
          />
          {open ? <ProductDetailscart setOpen={setOpen} data={data} /> : null}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
