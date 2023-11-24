import React, { useState } from "react";
import AllCategoriesSelect from "./AllCategoriesSelect";
import SidebarForMenuList from "./SidebarForMenuList";

const SidebarForMenu = ({ isSidebarOpen, setSidebarOpen }) => {
  const groceryitems = [
    {
      heading: "Home",
      list: ["Home 1", "Home 2", "Home 3", "Home 4"],
    },
    {
      heading: "About",
      list: [],
    },
    {
      heading: "Shop",
      list: ["Local shop", "Fruit shop", "Vegetable shop"],
    },
    {
      heading: "Blog",
      list: ["Carrot", "Green Beans", "Cucumber", "Cabbage"],
    },
    {
      heading: "Our team",
      list: [],
    },
    {
      heading: "Contact",
      list: [],
    },
  ];

  const categories = [
    { name: "All Categories" },
    { name: "Sets" },
    { name: "Fruits" },
    { name: "Vegetables" },
    { name: "Greenery" },
    { name: "Fungi" },
    { name: "Groceries" },
    { name: "Sweets" },
    { name: "Drinks" },
  ];

  const [viewaccount, setViewAccount] = useState(null);
  const activeViewAccountHandler = (value) => {
    if (value === viewaccount) {
      setViewAccount(null);
    } else {
      setViewAccount(value);
    }
  };

  return (
    <>
      {isSidebarOpen && (
        <div
          onClick={() => setSidebarOpen((pre) => !pre)}
          className="z-10 fixed left-0 w-full h-full bg-black opacity-10 top-0 50 transition-all duration-300 ease-in"
        ></div>
      )}
      <div
        className={`h-screen max-h-full overflow-auto xl:overflow-visible z-[100] w-full p-3 max-w-[260px] fixed top-0 transition-all duration-200 ease-in  xl:hidden ${
          isSidebarOpen ? "left-0  bg-white" : "-left-[260px]"
        }`}
      >
        {groceryitems &&
          groceryitems.map((item, index) => (
            <SidebarForMenuList
              item={item}
              key={index}
              activeHandler={activeViewAccountHandler}
              id={index}
              view={viewaccount}
            />
          ))}

        <div className="w-[230px]">
          <AllCategoriesSelect categories={categories} />
        </div>
      </div>
    </>
  );
};

export default SidebarForMenu;
