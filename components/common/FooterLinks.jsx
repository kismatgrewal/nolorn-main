import Link from "next/link";
import React from "react";

function FooterLinks({ item }) {
  return (
    <>
      <Link href={item.link}>
        <button className=" text-[12px] text-lightblack font-semibold py-1 px-[10px] bg-[#F2F0F0] rounded-xl transition-all duration-300 hover:bg-[#e6e3e3] mr-4 my-3 ">
          {item.name}
        </button>
      </Link>
    </>
  );
}

export default FooterLinks;
