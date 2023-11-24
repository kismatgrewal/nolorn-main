import React from "react";

function BestEmploye() {
  return (
    <>
      <div className="container my-16">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="py-8">
            {" "}
            <div className="lg:max-w-[490px]">
              <h1 className="md:text-xxl text-lg font-bold text-lightblack leading-[120%]">
                Best Employee of <br />{" "}
                <span className="text-primary"> the Month</span>
              </h1>
              <div className="my-6">
                <p className="text-gray ff_lato text-xs mb-3 ">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>{" "}
                <p className="text-gray ff_lato text-xs mb-3 ">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate id est laborum.
                </p>{" "}
                <p className="text-gray ff_lato text-xs mb-3 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate id est laborum.
                </p>
              </div>
              <button className=" px-5   py-[13px] text-xs text-white flex items-center justify-center font-bold bg-primary transition-all duration-300 hover:bg-opacity-80  rounded   ">
                {" "}
                Learn More
              </button>{" "}
            </div>
          </div>
          <div className="py-8 lg:ml-5">
            <div className="lg:max-w-[570px] max-w-[400px]    mx-auto lg:mx-0">
              <img
                src="/assets/images/best-employe.png"
                alt=""
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BestEmploye;
