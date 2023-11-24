import React from "react";

import Slider from "react-slick";
import { LeftArrowIcon, RightArrowIcon } from "../helper/Icons";
import DailyBestCard from "../home/DailyBestCard";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="slider-btns slider-right flex flex-col justify-center items-center right-0 md:top-[-75px] sm:top-[-60px] top-[-40px] "
      onClick={onClick}
    >
      <span>
        <LeftArrowIcon />
      </span>
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="slider-btns slider-left flex flex-col justify-center items-center right-[50px] md:top-[-75px] sm:top-[-60px] top-[-40px]"
      onClick={onClick}
    >
      {" "}
      <span>
        <RightArrowIcon />
      </span>
    </div>
  );
}
function PromotionalGoods() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          centerMode: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="md:my-16 my-6 sm:my-10 container">
      <div className="mb-14 sm:mb-0">
        <h1 className="md:text-xxl text-md2 sm:text-lg text-lightblack  font-semibold    ">
          Promotional
          <span className="text-primary  "> Goods </span>
        </h1>
      </div>
      <div className="my-6">
        <div className="">
          <Slider {...settings}>
            <div>
              <DailyBestCard
                img={`/assets/images/Picture (1).png`}
                sale={`-5%`}
                title={`Garbuz Ukraine`}
                color={`bg-pink`}
                category={`Category`}
              />
            </div>
            <div>
              <DailyBestCard
                img={`/assets/images/Picture (2).png`}
                sale={`-5%`}
                title={`Garbuz Ukraine`}
                color={`bg-pink`}
                category={`Category`}
              />
            </div>
            <div>
              <DailyBestCard
                img={`/assets/images/Picture (3).png`}
                sale={`-5%`}
                title={`Garbuz Ukraine`}
                color={`bg-pink`}
                category={`Category`}
              />
            </div>
            <div>
              <DailyBestCard
                img={`/assets/images/Picture (4).png`}
                sale={`-5%`}
                title={`Garbuz Ukraine`}
                color={`bg-pink`}
                category={`Category`}
              />
            </div>
            <div>
              <DailyBestCard
                img={`/assets/images/Picture (5).png`}
                sale={`-5%`}
                title={`Garbuz Ukraine`}
                color={`bg-pink`}
                category={`Category`}
              />
            </div>
            <div>
              <DailyBestCard
                img={`/assets/images/Picture (6).png`}
                sale={`-5%`}
                title={`Garbuz Ukraine`}
                color={`bg-pink`}
                category={`Category`}
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default PromotionalGoods;
