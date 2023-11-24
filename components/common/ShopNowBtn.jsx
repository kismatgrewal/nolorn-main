import Link from "next/link";
import React from "react";
import { NextIcon } from "../helper/Icons";

function ShopNowBtn() {
  return (
    <>
      <Link href={"/catalog"}>
        {" "}
        <button className="bg-primary text-white text-xs font-bold  rounded transition-all duration-200 ease-in group hover:opacity-80 py-3 px-5 flex items-center">
          {" "}
          Shop Now{" "}
          <span className="ml-4 group-hover:translate-x-1 transition-all duration-200 ease-in">
            <NextIcon />
          </span>
        </button>
      </Link>
    </>
  );
}

export default ShopNowBtn;
