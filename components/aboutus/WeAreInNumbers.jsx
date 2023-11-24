import React from "react";

const WeAreInNumbers = () => {
  return (
    <>
      <div className="container">
        <div className="weareinnumber-bg shadow-what-weprovide-card flex-wrap rounded-[13px]  p-8 sm:p-10 lg:px-28 lg:py-12 flex items-center justify-between text-center">
          <div className="w-1/2  sm:w-fit mb-4 sm:mb-0">
            <h5 className="text-xl sm:text-3xl font-bold text-lightblack">
              10k
            </h5>
            <p className="text-xsm sm:text-xs text-primary ff_lato">
              Glorious years
            </p>
          </div>
          <span className="w-[1px] h-[99px] bg-gray hidden sm:block"></span>
          <div className="w-1/2  sm:w-fit mb-4 sm:mb-0">
            <h5 className="text-xl sm:text-3xl font-bold text-lightblack">
              34+
            </h5>
            <p className="text-xsm sm:text-xs text-primary ff_lato">
              Happy clients
            </p>
          </div>
          <span className="w-[1px] h-[99px] bg-gray hidden sm:block"></span>
          <div className="w-1/2  sm:w-fit">
            <h5 className="text-xl sm:text-3xl font-bold text-lightblack">
              12+
            </h5>
            <p className="text-xsm sm:text-xs text-primary ff_lato">
              Projects complete
            </p>
          </div>
          <span className="w-[1px] h-[99px] bg-gray hidden sm:block"></span>
          <div className="w-1/2  sm:w-fit">
            <h5 className="text-xl sm:text-3xl font-bold text-lightblack">
              110+
            </h5>
            <p className="text-xsm sm:text-xs text-primary ff_lato">
              Products Sale
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeAreInNumbers;
