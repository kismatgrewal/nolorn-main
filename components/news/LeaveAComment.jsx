import ReactStars from "react-rating-stars-component";
import React from "react";

const LeaveAComment = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <>
      <h2 className="font-bold text-md sm:text-lg text-lightblack mt-10">
        Leave a Comment
      </h2>
      <div className="mt-[10px] sm:mt-[20px]">
        <form action="">
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
          />
          <textarea
            name=""
            className="w-full border-[1px] rounded-[4px] border-perfectwhite h-[130px] sm:h-[169px] p-[12px] sm:p-[26px] outline-none mt-3"
            placeholder="Write your comment"
            id=""
          ></textarea>
          <div className="flex items-center mt-3 sm:mt-5">
            <input
              type="text"
              className="w-full  mr-5 border-[1px] font-normal ff_lato text-xs rounded-[4px] border-perfectwhite outline-none  h-[42px] py-[6px] sm:py-[12px] px-[12px] sm:px-[26px]"
              placeholder="Name"
            />
            <input
              type="email"
              className="w-full  border-[1px] font-normal ff_lato text-xs rounded-[4px] border-perfectwhite outline-none h-[42px] py-[6px] sm:py-[12px] px-[12px] sm:px-[26px]"
              placeholder="E-mail"
            />
          </div>
          <button className="px-6 py-2 h-[44px] rounded-[4px] mt-3 sm:mt-8 bg-spacegrey text-xs font-bold text-white">
            Post Comment
          </button>
        </form>
      </div>
    </>
  );
};

export default LeaveAComment;
