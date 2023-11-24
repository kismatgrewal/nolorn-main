import React from "react";
import { LeftIcon, RefreshIcon } from "../helper/Icons";
import TableData from "./TableData";

function CartTable() {
  return (
    <div className="overflow-x-scroll remove-scrlloer">
      <div className="xl:w-[770px] lg:w-[684px] md:w-[740px] w-[600px] ">
        <table className="  text-left w-full  ">
          <thead>
            <tr className="border-b ">
              <th className="sm:text-md text-sm pb-1  font-bold text-lightblack px-3  ">
                Product
              </th>
              <th className="sm:text-md text-sm  pb-1  font-bold text-lightblack px-3 ">
                Price
              </th>
              <th className="sm:text-md text-sm pb-1   font-bold text-lightblack px-3 ">
                Quantity
              </th>
              <th className="sm:text-md text-sm  pb-1   font-bold text-lightblack px-3 ">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            <TableData />
          </tbody>
        </table>
      </div>
      <div className="my-6 flex sm:justify-between justify-center  items-center flex-wrap   ">
        <button className=" px-5 my-4 py-[13px] text-primary flex items-center justify-center font-bold bg-[#F2F0F0] transition-all duration-300 hover:bg-[#e1dfdf] rounded mx-2 ">
          <LeftIcon />
          <span className="ml-2">Continue Shopping</span>
        </button>{" "}
        <button className=" px-5 my-4 py-[13px] text-white flex items-center justify-center font-bold bg-[#F59758] transition-all duration-300 hover:bg-[#ee8b4a] rounded  mx-2 ">
          <RefreshIcon />
          <span className="ml-2">Update Cart</span>
        </button>
      </div>
    </div>
  );
}

export default CartTable;
