import React, { useState } from "react";
import { popularProducts } from "../helper/Helper";
import ProductCard from "../home/ProductCard";
function PopularCardsList() {
  return (
    <>
      <div className="container flex flex-wrap gap-x-[24px] gap-y-[34px] ">
        {popularProducts.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
      </div>
    </>
  );
}

export default PopularCardsList;
