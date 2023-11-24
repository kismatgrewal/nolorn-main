import React from "react";
import AllCategoriesSelect from "../common/AllCategoriesSelect";
import { SearchIcon } from "../common/Navbar";
import SearchArticlesInput from "../common/SearchArticlesInput";
import { GreenNextIcon } from "../helper/Icons";
import { FilterIcon, HamburgerMenu } from "../helper/Svg";

function AllCardFilter({ setSidebarOpen }) {
    const sortbynprice = [
        { name: "10" },
        { name: "15" },
        { name: "20" },
        { name: "25" },
        { name: "30" },
        { name: "35" },
        { name: "40" },
        { name: "45" },
        { name: "50" },
    ];
    const sortbyfeatured = [
        { name: "Featured" },
        { name: "Featured" },
        { name: "Featured" },
        { name: "Featured" },
        { name: "Featured" },
        { name: "Featured" },
        { name: "Featured" },
        { name: "Featured" },
    ];
    return (
        <>
            <div className="container flex flex-wrap justify-between mt-14 py-4 items-center">
                <SearchArticlesInput />
                <div className="flex items-center my-4">
                    <div className="flex items-center ml-2 border-[0.5px] border-gray p-3   rounded">
                        <FilterIcon />
                        <span className="text-xs font-bold text-primary ml-[4px]"> Sort By</span>
                        <div className="ml-3 w-[60px]">
                            <AllCategoriesSelect categories={sortbynprice} />
                        </div>
                    </div>
                    <div className="flex items-center ml-2 border-[0.5px] border-gray p-3   rounded">
                        <FilterIcon />
                        <span className="text-xs font-bold text-primary ml-[4px]"> Sort By</span>
                        <div className="ml-3 w-[120px]">
                            <AllCategoriesSelect categories={sortbyfeatured} />
                        </div>
                    </div>
                </div>
                <span className="cursor-pointer lg:hidden" onClick={() => setSidebarOpen(true)}>
                    <HamburgerMenu />
                </span>
            </div>
        </>
    );
}

export default AllCardFilter;
