import React from "react";

import Slider from "react-slick";
function HeroSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <>
      <div className="my-6 w-full">
        <Slider {...settings} className="hero-slider">
          <div>
            <div className="relative flex flex-col justify-center h-[290px] sm:h-full">
              {" "}
              <img
                src="/assets/images/milk.png"
                alt=""
                className="w-full h-full   "
              />{" "}
              <div className="absolute sm:left-12 left-4 py-6  ">
                <h1 className="md:text-3xl leading-[110%] text-lightblack font-bold text-lg sm:text-xl  ">
                  Rice drink with <br /> vitamin D3
                </h1>
                <p className="text-base text-gray ff_lato py-2">
                  {" "}
                  Up to 30% off your first order
                </p>
                <div className="my-6 flex sm:w-[420px] w-full border border-[#D4EEE2] rounded bg-white">
                  <input
                    type="email "
                    className="outline-none border-0 py-[13px] px-[24px] bg-transparent   text-xs  text-gray placeholder:text-gray rounded w-[calc(100%-106px)] "
                    placeholder="Enter your email address"
                  />
                  <button className="w-[106px] bg-primary text-white font-xs font-bold rounded transition-all duration-300 hover:opacity-80 ">
                    {" "}
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative flex flex-col justify-center h-[290px] sm:h-full">
              {" "}
              <img
                src="/assets/images/milk.png"
                alt=""
                className="w-full h-full   "
              />{" "}
              <div className="absolute sm:left-12 left-4 py-6  ">
                <h1 className="md:text-3xl leading-[110%] text-lightblack font-bold text-lg sm:text-xl  ">
                  Rice drink with <br /> vitamin D3
                </h1>
                <p className="text-base text-gray ff_lato py-2">
                  {" "}
                  Up to 30% off your first order
                </p>
                <div className="my-6 flex sm:w-[420px] w-full border border-[#D4EEE2] rounded bg-white">
                  <input
                    type="email "
                    className="outline-none border-0 py-[13px] px-[24px] bg-transparent   text-xs  text-gray placeholder:text-gray rounded w-[calc(100%-106px)] "
                    placeholder="Enter your email address"
                  />
                  <button className="w-[106px] bg-spacegrey text-white font-xs font-bold rounded transition-all duration-300 hover:opacity-80 ">
                    {" "}
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default HeroSlider;
