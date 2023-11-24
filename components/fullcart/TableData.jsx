import React, { useState } from "react";
import { tabledata } from "../helper/Helper";
import { DownArrowIcon, UpArrowIcon } from "../helper/Icons";

function TableData() {
  const [quantity, setQuantiy] = useState(1);
  function handleIncrease() {
    setQuantiy(quantity + 1);
  }

  function handleDecrease() {
    // IF QUANITY IS LESS THAN 1 DON'T CHANGE QUANTIY VALUE
    if (quantity > 1) {
      setQuantiy(quantity - 1);
    }
  }
  return (
    <>
      {tabledata.map((item, index) => (
        <tr
          key={index}
          className="sm:px-4 px-2   border-dashed border-[#939393] border-b-[1px] "
        >
          <td className="py-4 sm:py-6 px-3 ">
            <div className="flex items-center">
              <div className="w-[80px] h-[80px] rounded ">
                <img src={item.img} alt="" />
              </div>
              <div className="ml-3 sm:ml-5">
                <p className="text-lightblack sm:text-md text-sm font-bold  ">
                  {" "}
                  {item.title}
                </p>{" "}
                <p className="text-gray sm:text-sm text-xsm  ">
                  Category :{item.category}
                </p>{" "}
                <p className="text-gray sm:text-sm text-xsm     ">
                  Weight :{item.weight}
                </p>
              </div>
            </div>
          </td>
          <td className="ff_lato sm:text-sm text-xs text-lightblack px-3 ">
            {" "}
            {item.price}
          </td>
          <td className="px-3">
            <div className="flex items-center py-[11px] mt-[10px] px-[10px] border-[0.5px] border-gray rounded-[4px] w-[88px] mr-[20px] justify-center">
              <p className="flex items-center font-bold text-sm sm:text-md text-lightblack  ">
                <span className="ml-1   ">{quantity}</span>
              </p>
              <div className="flex flex-col ml-[10px] w-[24px]">
                <span onClick={handleIncrease} className="cursor-pointer">
                  <UpArrowIcon />
                </span>
                <span
                  className="mt-[6px] cursor-pointer"
                  onClick={handleDecrease}
                >
                  <DownArrowIcon />
                </span>
              </div>
            </div>
          </td>
          <td className="ff_lato sm:text-sm text-xs text-lightblack px-3">
            {" "}
            {item.price}
          </td>{" "}
          <td className="px-3">
            {" "}
            <span className="cursor-pointer "> {item.deletIcon}</span>
          </td>
        </tr>
      ))}
    </>
  );
}

export default TableData;
