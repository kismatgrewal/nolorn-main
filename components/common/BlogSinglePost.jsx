import Image from "next/image";
import React from "react";

function BlogSinglePost() {
  return (
    <div>
      <Image
        className="object-cover rounded-xl "
        src="/assets/images/recips.png"
        width={296}
        height={180}
        alt="Blog Recipe"
      />
      <div className=" my-3 pt-4">
        {" "}
        <span className="bg-primary px-3 py-1 rounded-2xl text-white text-[12px] font-semibold ">
          {" "}
          Vegetable{" "}
        </span>{" "}
      </div>
      <p className="text-base text-lightblack font-semibold leading-[150%] pt-1  ">
        {" "}
        Which vegetable your family will love and want’s eat each day
      </p>
      <div className="flex items-center mt-4">
        <p className="text-primary text-[12px]   ff_open_sans"> Author</p>
        <p className="text-primary text-[12px]  ff_open_sans pl-4">
          {" "}
          17. 6. 2020
        </p>
      </div>
    </div>
  );
}

export default BlogSinglePost;
