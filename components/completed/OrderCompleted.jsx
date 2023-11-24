import React from "react";
import { LeftWhiteIcon } from "../helper/Icons";

function OrderCompleted() {
  return (
    <div className="container py-10 my-8 text-center">
      <h1 className="lg:text-3xl text-lg text-lightblack font-bold leading-[120%] ">
        Your Order Is <span className="text-primary "> Completed</span>
      </h1>
      <p className="text-gray text-sm ff_lato my-4 pb-6 max-w-[354px] mx-auto">
        {" "}
        Thank you for your order, our manager wil contact you in couple of
        minutes.{" "}
      </p>
      <div className="pb-6 flex justify-center">
        <button className=" px-5   py-[13px] text-white flex items-center justify-center font-bold bg-primary transition-all duration-300 hover:bg-opacity-80  rounded mx-2 ">
          <LeftWhiteIcon />
          <span className="ml-2">Return to shop</span>
        </button>{" "}
      </div>
    </div>
  );
}

export default OrderCompleted;
