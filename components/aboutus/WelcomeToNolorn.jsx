import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import { LeftArrowIcon, RightArrowIcon } from "../helper/Icons";

const WelcomeToNolorn = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  return (
    <>
      <div className="container flex flex-col lg:flex-row justify-between my-10 sm:my-24">
        <div className="w-full lg:w-[49%]">
          <div className="relative products-details-slider">
            <Slider
              className="product-details-main-slider"
              autoplay={false}
              asNavFor={nav2}
              ref={(slider1) => setNav1(slider1)}
            >
              <MainSliderItem />
              <MainSliderItem />
              <MainSliderItem />
              <MainSliderItem />
              <MainSliderItem />
              <MainSliderItem />
              <MainSliderItem />
            </Slider>
          </div>
        </div>
        <div className="w-full lg:w-[49%]">
          <h2 className="text-lightblack font-semibold text-lg sm:text-xxl mt-6 sm:mb-4 sm:-mt-4">
            Welcome to Nolorn
          </h2>
          <p className="text-gray text-sm mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-gray text-sm mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-gray text-sm mb-[104px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <Slider
            className="product-details-asnav-slider "
            arrows={true}
            nextArrow={<NextArrow />}
            prevArrow={<PrevArrow />}
            autoplay={false}
            asNavFor={nav1}
            ref={(slider2) => setNav2(slider2)}
            slidesToShow={3}
            swipeToSlide={true}
            focusOnSelect={true}
            responsive={[
              {
                breakpoint: 640,
                settings: {
                  slidesToShow: 3,
                },
              },
            ]}
          >
            <NavSliderItem />
            <NavSliderItem />
            <NavSliderItem />
            <NavSliderItem />
            <NavSliderItem />
            <NavSliderItem />
            <NavSliderItem />
          </Slider>
        </div>
      </div>
    </>
  );
};

export default WelcomeToNolorn;

export const NavSliderItem = () => {
  return (
    <>
      <div className="mx-2">
        <Image
          width={170}
          height={170}
          className="rounded-lg"
          alt="slider-img"
          src="/assets/images/about-img1.png"
        />
      </div>
    </>
  );
};
export const MainSliderItem = () => {
  return (
    <>
      <Image
        className="object-cover rounded-lg"
        width={570}
        height={605}
        alt="slider-img"
        src="/assets/images/about-img1.png"
      />
    </>
  );
};

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="slider-btns slider-right flex flex-col justify-center items-center right-0 md:top-[-75px] top-[-60px] "
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
      className="slider-btns slider-left flex flex-col justify-center items-center right-[50px] md:top-[-75px] top-[-60px]"
      onClick={onClick}
    >
      <span>
        <RightArrowIcon />
      </span>
    </div>
  );
}
