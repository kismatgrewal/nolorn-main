import Image from "next/image";
import React from "react";
import { recipsarticlesdata } from "../helper/Helper";

const RecipsArticlesAllCard = () => {
  return (
    <div>
      <div className="container">
        <div className="flex justify-center sm:justify-between flex-wrap">
          {recipsarticlesdata.map((item, index) => (
            <div
              key={index}
              className="max-w-[350px] sm:max-w-[300px] md:max-w-[330px] xl:max-w-[370px] w-full mt-[20px] sm:mt-[40px] card-hover transition-all duration-300 cursor-pointer"
            >
              <div>
                <Image
                  className="rounded-[8px] transition-all duration-300 img-shadow "
                  src={item.img}
                  alt="recips card img"
                  width={370}
                  height={267}
                />
              </div>
              <div className="mt-[24px]">
                <p className="text-xs font-normal flex leading-[16px] items-center ff_lato text-gray">
                  {" "}
                  <span>{item.category}</span>{" "}
                  <span className="ml-[7px] bg-primary rounded-[50%] w-[4px] h-[4px] "></span>{" "}
                  <span className="ml-[7px]">{item.time}</span>
                </p>
                <h4 className="font-bold text-md text-corbeau leading-[25px] mt-[16px]">
                  {item.title}
                </h4>
                <p className="text-sm font-normal ff_lato text-gray leading-[19px] mt-[16px] ">
                  {item.desc}
                </p>
                <div className="flex items-center mt-[16px] ">
                  <div className="bg-perfectwhite w-[40px] h-[40px] rounded-[50%]">
                    <Image
                      src={item.userImg}
                      width={40}
                      height={40}
                      alt="recips user img"
                    />
                  </div>
                  <p className="font-normal text-xs ff_lato text-lightblack ml-[10px]">
                    {item.userName}{" "}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipsArticlesAllCard;
