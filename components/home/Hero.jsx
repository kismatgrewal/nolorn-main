import React from "react";
import FreeShipping from "./FreeShipping";
import HeroSlider from "./HeroSlider";

function Hero() {
    return (
        <div className="hero-bg py-8  my-5">
            <div className="container flex flex-wrap">
                <div className="lg:w-[68.5%] w-full lg:pr-7">
                    <HeroSlider />
                </div>
                <div className="lg:w-[31.5%] sm:w-[60%] w-full mx-auto  my-6 ">
                    <FreeShipping />
                </div>
            </div>
        </div>
    );
}

export default Hero;
