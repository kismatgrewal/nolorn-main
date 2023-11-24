import React from "react";
import {
  productsWithDeliverydesc,
  productsWithDeliverylist,
} from "../helper/Helper";
import { DotsIcon } from "../helper/Icons";

const ProductsWithDelivery = () => {
  return (
    <div>
      <div className="container mx-auto mt-[30px] sm:mt-[60px] md:mt-[100px]">
        <h2 className="font-semibold text-md2 sm:text-lg md:text-xxl text-lightblack max-w-[502px] mx-auto text-center leading-[35px] sm:leading-[40px] md:leading-[52px]">
          Online Store of{" "}
          <span className="text-primary ">Products With Delivery</span>
        </h2>
        <p className="font-normal text-sm mt-[20px] sm:mt-[40px] text-gray ff_lato leading-[19px]">
          <span className="text-primary">Nolorn</span> is a direct importer of
          fruits, vegetables, fruits, salads, mushrooms. Since 2008, and already
          more than 14 years, we have been delivering products to the homes of
          Ukrainians, restaurants, cafes and other partners.
        </p>
        <p className="font-normal text-sm  text-gray ff_lato mt-[6px] sm:mt-[12px] leading-[19px]">
          Quality and service are our priorities. To the very same, we
          spіvpratsyuєmo only with nadіnym postal workers from Spain, Brazil,
          Holland, Argentine, Thailand and other lands. And for the convenience
          of customers, they created an online store for products. Here, for the
          help of an intelligent catalog and filters, you can quickly select and
          buy those that you need.
        </p>
        <h4 className="text-md font-bold text-lightblack mt-[20px] sm:mt-[40px] ">
          Assortment Nolorn
        </h4>
        <p className="font-normal text-sm  text-gray ff_lato mb-[6px] sm:mb-[12px] mt-[10px] sm:mt-[20px] leading-[19px]">
          Buying products online is very convenient! You can select and order
          products at any time directly from your smartphone. This not only
          saves time, but also avoids queues at stores and the hassle of
          carrying heavy packages. In our online store you will find fresh
          vegetables and fruits, as well as:
        </p>
        {productsWithDeliverylist.map((item, index) => (
          <div key={index} className="flex items-center mt-[8px]">
            <span className="mr-[9px]">
              <DotsIcon />
            </span>
            <p className="font-normal ff_lato text-xs text-gray">
              {item.title}
            </p>
          </div>
        ))}
        {productsWithDeliverydesc.map((item, index) => (
          <p
            key={index}
            className="font-normal text-sm  text-gray ff_lato mt-[6px] sm:mt-[12px] leading-[19px]"
          >
            {item.title}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProductsWithDelivery;
