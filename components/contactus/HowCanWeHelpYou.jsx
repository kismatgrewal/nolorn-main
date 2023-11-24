import React from "react";

const HowCanWeHelpYou = () => {
  return (
    <>
      <div className="container pt-20">
        <h2 className="font-semibold text-md2 sm:text-lg md:text-xxl text-lightblack max-w-[502px] mx-auto text-center leading-[35px] sm:leading-[40px] md:leading-[52px]">
          Let us know <br />
          <span className="text-primary ">how we can help you</span>
        </h2>
        <div className="flex flex-wrap text-center sm:text-left justify-center lg:justify-between items-center my-14">
          <article className="mb-4">
            <h4 className="text-[#FF0532] text-lg font-bold">01.</h4>
            <h5 className="text-lightblack text-lg font-bold">
              Visit Feedback
            </h5>
            <p className="text-gray ff_lato text-xs max-w-[320px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </article>
          <article className="mb-4">
            <h4 className="text-[#F74B81] text-lg font-bold">02.</h4>
            <h5 className="text-lightblack text-lg font-bold">
              Employer Services
            </h5>
            <p className="text-gray ff_lato text-xs max-w-[320px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </article>
          <article className="mb-4">
            <h4 className="text-[#F59758] text-lg font-bold">03.</h4>
            <h5 className="text-lightblack text-lg font-bold">
              Billing Inquiries
            </h5>
            <p className="text-gray ff_lato text-xs max-w-[320px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </article>
        </div>
      </div>
    </>
  );
};

export default HowCanWeHelpYou;
