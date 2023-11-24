import React from "react";
import {
  DrinksIcon,
  FruitsIcon,
  FungiIcon,
  GreeneryIcon,
  GroceryIcon,
  LeftArrowIcon,
  SetsIcon,
  SweetsIcon,
  VegetablesIcon,
} from "../helper/Svg";

const CategoryCatalog = () => {
  const catalogocategory = [
    {
      icon: <SetsIcon />,
      cateogryname: "Sets",
      item: 12,
    },
    {
      icon: <FruitsIcon />,
      cateogryname: "Fruits",
      item: 87,
    },
    {
      icon: <VegetablesIcon />,
      cateogryname: "Vegetables",
      item: 35,
    },
    {
      icon: <GreeneryIcon />,
      cateogryname: "Greenery",
      item: 63,
    },
    {
      icon: <FungiIcon />,
      cateogryname: "Fungi",
      item: 27,
    },
    {
      icon: <GroceryIcon />,
      cateogryname: "Groceries",
      item: 77,
    },
    {
      icon: <SweetsIcon />,
      cateogryname: "Sweets",
      item: 44,
    },
    {
      icon: <DrinksIcon />,
      cateogryname: "Drinks",
      item: 45,
    },
  ];
  return (
    <>
      {" "}
      <div className="flex items-center justify-between border-b  border-gray mb-4 pb-3">
        <h4 className="text-lightblack font-bold text-md">Category</h4>
        <LeftArrowIcon />
      </div>
      {catalogocategory &&
        catalogocategory.map((obj, index) => (
          <div
            key={index}
            className="mb-3 ff_lato bg-white border rounded border-whisperblue p-2 flex  items-center justify-between transition-all duration-200 ease-in hover:shadow-categorycard cursor-pointer"
          >
            <div className="flex items-center ">
              {obj.icon}
              <p className="text-base text-lightblack ml-2">
                {obj.cateogryname}
              </p>
            </div>
            <span className="text-xsm text-lightblack bg-whisperblue rounded-full flex justify-center items-center w-6 h-6">
              {obj.item}
            </span>
          </div>
        ))}
    </>
  );
};

export default CategoryCatalog;
