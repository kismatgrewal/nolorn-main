import Image from "next/image";
import React from "react";

const LatestPosts = ({ item }) => {
  return (
    <>
      {" "}
      <div className="w-full mt-[15px] sm:mt-[30px] flex items-center sm:items-start ">
        <div className="border-[1px] mr-4 border-gray rounded-lg max-w-[110px] ease-in duration-300 transition-all hover-shadow">
          <Image
            className="rounded-lg "
            src={item.img}
            width={100}
            height={100}
            alt="top selling img"
          />
        </div>
        <div>
          <h4 className="font-bold text-lightblack text-xs mb-0">
            {item.title}
          </h4>

          <p className="font-normal text-xs text-gray">{item.date}</p>
        </div>
      </div>
    </>
  );
};

export default LatestPosts;
