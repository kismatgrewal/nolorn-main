import React from "react";
import Image from "next/image";
import { vegetablesCategories } from "../helper/Helper";
import ShopNowBtn from "./ShopNowBtn";

function Vegetables() {
  return (
    <div>
      {" "}
      <div>
        <div className="container mx-auto mt-[50px] sm:mt-[70px] z-0 relative">
          <div className="flex flex-wrap justify-center xl:justify-between">
            {vegetablesCategories.map((item, index) => (
              <div
                key={index}
                className={`bg-[${item.color}] mt-[30px]  sm:mr-2 md:mr-[30px] xl:mr-0 w-full sm:w-[300px] lg:w-[370px] rounded-[8px] z-50 relative pb-[25px] sm:pb-[30px] pl-[20px] sm:pl-[30px] bg-white  fruit-card-hover border-[0.5px] border-[#939393] min-h-[232px]`}
              >
                <div className="z-[-1] absolute right-0 top-0">
                  <Image
                    className="z-[0] h-auto"
                    src={item.img}
                    width={370}
                    height={230}
                    alt="shop categories img"
                  />
                </div>
                <p className="font-bold pt-[50px] sm:pt-[92px] text-md text-lightblack max-w-[238px] leading-[25px] ">
                  {item.title}
                </p>
                <div className="mt-4">
                  <ShopNowBtn />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vegetables;
