import React from "react";
import ApplyCoupon from "./ApplyCoupon";
import CartTable from "./CartTable";
import Shipping from "./Shipping";
import TotalBill from "./TotalBill";

function FullCart() {
  return (
    <>
      <div className="mt-14 container md:pb-16">
        <div className="md:py-3">
          <h1 className="text-lightblack md:text-3xl text-xl font-bold my-6">
            {" "}
            Shopping Cart
          </h1>
          <p className="text-sm text-gray ff_lato">
            {" "}
            There are <span className="text-primary "> 3 products</span> in your
            cart
          </p>
        </div>
        <div className="my-6 flex flex-wrap  ">
          <CartTable />
          <div className="lg:ml-10  xl:w-[360px] lg:w-[300px] sm:w-[370px]  w-full pt-9">
            {" "}
            <TotalBill />
          </div>
        </div>
        <div className="sm:py-8 py-4 justify-between  flex flex-wrap  ">
          <div className="xl:w-[670px] lg:w-[500px] w-full ">
            {" "}
            <Shipping />
          </div>{" "}
          <div className="xl:w-[calc(100%-700px)] lg:w-[calc(100%-530px)] w-full  ">
            {" "}
            <ApplyCoupon />
          </div>
        </div>
      </div>
    </>
  );
}

export default FullCart;
