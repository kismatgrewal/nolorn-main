import Image from "next/image";
import React from "react";
import ShopNowBtn from "../common/ShopNowBtn";

function FreeShipping() {
  return (
    <div className="">
      <div className="bg-labrador relative z-50 pl-[30px] py-[30px] sm:py-[75px]  xl:py-[102px] rounded-[8px] ">
        <div className="absolute bottom-0 right-0 z-[-1] max-w-[230px] sm:max-w-[300px] lg:max-w-none">
          <Image
            className="z-[0]"
            src="/assets/images/apple-2.png"
            width={370}
            height={438}
          />
        </div>
        <h2 className="font-semibold text-lg sm:text-xl md:text-xxl text-lightblack max-w-[180px] sm:max-w-[238px] leading-[45px] sm:leading-[52px] ">
          Buy with free shipping
        </h2>
        <div className="pt-[32px]">
          <ShopNowBtn />
        </div>
      </div>
      {/* <div className="relative py-5 flex flex-col justify-center">
        <img
          src="/assets/images/apple.png"
          alt="Hero img"
          className="w-full object-cover min-h-[160px] "
        />
        <div className="absolute sm:left-12 left-4 py-6 ">
          <h1 className="md:text-xxl text-lightblack font-semibold  text-lg leading-[110%]  ">
            Buy with <br />{" "}
            <span className=" text-primary ">
              {" "}
              free <br /> shipping
            </span>
          </h1>
          <div className="my-6 pt-3">
            <ShopNowBtn />
          </div>
        </div>
      </div>{" "} */}
    </div>
  );
}

export default FreeShipping;
