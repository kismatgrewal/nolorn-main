import React from "react";
import { CartIcon } from "../helper/Icons";

function ItemAddBtn() {
  return (
    <>
      <button className="text-xs font-bol text-white flex items-center  h-[44px] w-[103px] transition-all duration-300 hover:bg-opacity-80 bg-primary cursor-pointer justify-center ml-3 font-bold rounded   ">
        <span className="mr-3">
          <CartIcon />{" "}
        </span>
        Add
      </button>
    </>
  );
}

export default ItemAddBtn;
