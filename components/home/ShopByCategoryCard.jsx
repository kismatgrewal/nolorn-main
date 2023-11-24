import React from "react";
import ShopNowBtn from "../common/ShopNowBtn";
import Image from "next/image";

const ShopByCategoryCard = ({ item }) => {
  return (
    <>
      <div
        className={`bg-[${item.color}] mt-[10px] sm:mt-[30px]  sm:mr-2 md:mr-[30px] xl:mr-0 w-full sm:w-[300px] lg:w-[370px] rounded-[8px] z-50 relative pb-[20px] sm:pb-[30px] pl-[20px] sm:pl-[30px] fruit-card-hover  min-h-[232px] `}
      >
        <div className="z-[-1] absolute right-0 top-0">
          <Image
            className="z-[0]"
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
    </>
  );
};

export default ShopByCategoryCard;
