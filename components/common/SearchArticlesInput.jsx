import React from "react";
import { GreenNextIcon } from "../helper/Icons";
import { SearchIcon } from "./Navbar";

const SearchArticlesInput = () => {
  return (
    <>
      <div className="w-[270px] my-4">
        <div className="flex items-center   px-4 border border-[#D4EEE2] py-[10px] rounded">
          <span className="">
            <SearchIcon />
          </span>
          <div className="flex items-center ">
            <input
              type="search"
              name="search"
              id="search"
              className="border-0 outline-none text-xs ff_lato placeholder:text-gray w-[170px] mx-2"
              placeholder="Search..."
            />
            <span className="cursor-pointer ">
              <GreenNextIcon />{" "}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchArticlesInput;
