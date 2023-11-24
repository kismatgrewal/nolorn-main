import Link from "next/link";
import React from "react";
import { AccountIcon, CartIcon, WishListIcon } from "../helper/Svg";
import AllCategoriesSelect from "./AllCategoriesSelect";
import MobileNavSearch from "./MobileNavSearch";
import Image from "next/image";

const Navbar = () => {
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
  return (
    <>
      <nav className="container flex items-center justify-between py-2 sm:py-4">
        <Link href="/" passHref className="text-xxl font-semibold">
          <Image src="/assets/images/logo.png" height={70} width={120} alt="" />
        </Link>

        <div className="border-lightSky rounded-[4px] border-[1px] py-2 px-3 h-[44px] hidden xl:flex items-center">
          <div className="w-[140px] border-r border-[#939393] mr-4">
            <AllCategoriesSelect categories={categories} />
          </div>
          <input
            className="w-100 outline-none"
            type="text"
            placeholder="Search..."
          />
          <span className="cursor-pointer">
            <SearchIcon />
          </span>
        </div>

        <MobileNavSearch />

        <div className="hidden sm:flex shadow-dropdown rounded-[4px] bg-white w-[180px] items-center px-3 py-2 h-[44px]">
          <span className="mr-2">
            <svg
              width="18"
              height="23"
              viewBox="0 0 18 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 6.25C6.92893 6.25 5.25 7.92893 5.25 10C5.25 12.0711 6.92893 13.75 9 13.75C11.0711 13.75 12.75 12.0711 12.75 10C12.75 7.92893 11.0711 6.25 9 6.25ZM6.75 10C6.75 8.75736 7.75736 7.75 9 7.75C10.2426 7.75 11.25 8.75736 11.25 10C11.25 11.2426 10.2426 12.25 9 12.25C7.75736 12.25 6.75 11.2426 6.75 10Z"
                fill="#939393"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 0.25C4.11666 0.25 0.25 4.49277 0.25 9.6087C0.25 11.2494 1.06511 13.1814 2.09064 14.9945C3.13277 16.837 4.46288 18.6762 5.62903 20.1633L5.66793 20.2129C6.23714 20.9388 6.72203 21.5573 7.19224 21.9844C7.70524 22.4504 8.27094 22.7555 9 22.7555C9.72906 22.7555 10.2948 22.4504 10.8078 21.9844C11.278 21.5572 11.7629 20.9388 12.3321 20.2129L12.371 20.1633C13.5371 18.6762 14.8672 16.837 15.9094 14.9945C16.9349 13.1814 17.75 11.2494 17.75 9.6087C17.75 4.49277 13.8833 0.25 9 0.25ZM1.75 9.6087C1.75 5.21571 5.04678 1.75 9 1.75C12.9532 1.75 16.25 5.21571 16.25 9.6087C16.25 10.8352 15.6104 12.4764 14.6037 14.256C13.6137 16.0063 12.3342 17.7794 11.1906 19.2377C10.5717 20.027 10.1641 20.5426 9.79918 20.8741C9.46635 21.1764 9.24418 21.2555 9 21.2555C8.75582 21.2555 8.53365 21.1764 8.20082 20.8741C7.83587 20.5426 7.42834 20.027 6.80938 19.2377C5.66578 17.7794 4.38628 16.0063 3.39625 14.256C2.38962 12.4764 1.75 10.8352 1.75 9.6087Z"
                fill="#939393"
              />
            </svg>
          </span>

          <div className="w-[170px]">
            <AllCategoriesSelect categories={categories} />
          </div>
        </div>

        <div className="flex items-center">
          <Link passHref href="/wishlist" className="flex items-center">
            <span className="relative mr-1">
              <WishListIcon />
              <span className="bg-primary flex items-center justify-center w-4 h-4 rounded-full absolute -right-1 -top-[6px] text-white text-[10px]">
                1
              </span>
            </span>

            <span className="text-gray hidden sm:inline-block">Wishlist </span>
          </Link>
          <Link passHref href="/wishlist" className="flex items-center mx-4">
            <span className="relative mr-1">
              <CartIcon />
              <span className="bg-primary flex items-center justify-center w-4 h-4 rounded-full absolute -right-1 -top-[6px] text-white text-[10px]">
                1
              </span>
            </span>

            <span className="text-gray  hidden sm:inline-block">Cart </span>
          </Link>
          <Link passHref href="/wishlist" className="flex items-center">
            <span className="mr-1">
              <AccountIcon />
            </span>

            <span className="text-gray  hidden sm:inline-block">Account </span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

export const SearchIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 0.25C5.61522 0.25 1.25 4.61522 1.25 10C1.25 15.3848 5.61522 19.75 11 19.75C16.3848 19.75 20.75 15.3848 20.75 10C20.75 4.61522 16.3848 0.25 11 0.25ZM2.75 10C2.75 5.44365 6.44365 1.75 11 1.75C15.5563 1.75 19.25 5.44365 19.25 10C19.25 14.5563 15.5563 18.25 11 18.25C6.44365 18.25 2.75 14.5563 2.75 10Z"
        fill="#939393"
      />
      <path
        d="M19.5304 17.4698C19.2375 17.1769 18.7626 17.1769 18.4697 17.4698C18.1768 17.7626 18.1768 18.2375 18.4697 18.5304L22.4696 22.5304C22.7625 22.8233 23.2374 22.8233 23.5303 22.5304C23.8232 22.2375 23.8232 21.7626 23.5303 21.4697L19.5304 17.4698Z"
        fill="#939393"
      />
    </svg>
  );
};
