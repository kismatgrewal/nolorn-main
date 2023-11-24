import React from "react";
import { WhiteCartIcon } from "../helper/Icons";

function AddToCartBtn() {
  return (
    <>
      <button className="py-3 flex justify-center w-full text-white text-xs font-bold items-center bg-primary transition-all duration-300 hover:opacity-80 rounded ">
        <span className="mr-2">
          <WhiteCartIcon />{" "}
        </span>
        Add To Cart
      </button>
    </>
  );
}

export default AddToCartBtn;
