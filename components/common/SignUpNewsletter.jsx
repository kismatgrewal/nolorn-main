import React from "react";

const SignUpNewsletter = () => {
  return (
    <>
      <div className={`container sm:mt-[60px] mt-[30px] md:mt-[100px]`}>
        <div>
          <p className="font-bold text-lightblack text-md2 sm:text-[36px] ff_poppins leading-[30px] sm:leading-[36px] text-center">
            Sign up for our newsletter
          </p>
          <p className="font-medium text-base sm:text-md ff_poppins text-lightblack leading-[25px] sm:leading-[30px] text-center mt-[6px] sm:mt-[15px]">
            Stay in the loop with everything you need to know.
          </p>
          <div className="flex justify-center mt-[12px] sm:mt-[32px]">
            <div>
              <form
                className="flex flex-col sm:flex-row justify-center items-center"
                action=""
              >
                <input
                  className="max-w-[320px] w-full text-sm ff_poppins text-gray sm:w-[320px] bg-white box_shadow h-[46px] px-[8px] py-[8px] sm:px-[14px] sm:py-[11px] outline-none border-[1px] border-gray rounded-[8px]"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
                <button className="ff_poppins mt-3 sm:mt-0 sm:ml-[24px] text-sm text-medium  text-white bg-primary rounded-[6px] h-[46px] w-[117px] flex justify-center items-center">
                  Subscribe
                </button>
              </form>
              <p className="font-medium text-center sm:text-start text-xsm mt-[7px] ff_poppins text-lightblack">
                We care about your data in our privacy policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpNewsletter;
