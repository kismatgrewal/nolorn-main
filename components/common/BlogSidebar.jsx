import Image from "next/image";
import React from "react";

function BlogSidebar() {
  return (
    <div>
      <div className="flex justify-between mb-10">
        <div className="sm:max-w-[225px] max-w-[205px]     ">
          {" "}
          <p className="text-lightblack font-medium  text-[15px] pt-2">
            {" "}
            Salat is kinda good start to your morning routines
          </p>{" "}
          <div className="flex items-center mt-4">
            <p className="text-primary text-[12px]   ff_open_sans"> Author</p>
            <p className="text-primary text-[12px]  ff_open_sans pl-4">
              {" "}
              17. 6. 2020
            </p>
          </div>
        </div>
        <Image
          className="object-cover rounded-xl ml-3"
          src="/assets/images/cack.png"
          width={96}
          height={96}
          alt="Blog"
        />
      </div>
    </div>
  );
}

export default BlogSidebar;
