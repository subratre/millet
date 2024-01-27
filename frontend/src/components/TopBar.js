import React from "react";
import { Link } from "react-router-dom";
import { MdOutlinePhonePaused } from "react-icons/md";

const TopBar = () => {
  return (
    <div className="w-full">
      <div className="hidden items-center justify-between px-12 py-1 border-b sm:flex">
        <div>
          <ul className="flex items-center gap-[10px] text-gray-600 text-sm">
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
            |
            <li>
              <Link to="/my-account">My Account</Link>
            </li>
            |
            <li>
              <Link to="/wishlist">Wishlist</Link>
            </li>
          </ul>
        </div>
        <div className="font-bold text-sm text-green-400 animate-bounce">
          Get great devices up to 50% offView details
        </div>
        <div className="text-sm text-gray-600 flex leading-0">
          Need help? call us
          <MdOutlinePhonePaused className="mx-1 mt-1 font-normal" />
          &nbsp;:{"  "}
          &nbsp;
          <strong> 1800 900 500</strong>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
