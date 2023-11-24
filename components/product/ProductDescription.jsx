import React from "react";
import { fruitsProducts } from "../helper/Helper";

const ProductDescription = () => {
    return (
        <div className="p-[10px] sm:p-[20px]">
            <h4 className="font-bold text-base sm:text-md text-lightblack leading-[25px]">How to choose figs </h4>
            <p className="font-normal text-sm text-gray leading-[19px]">The characteristics of a good fruit are:</p>
            <div>
                {fruitsProducts.map((item, index) => (
                    <div key={index} className="flex items-center mt-[8px]">
                        <div>
                            <div className="h-[6px] w-[6px] bg-black rounded-[50%] mr-[9px]"></div>
                        </div>
                        <p className="font-normal text-xs ff_lato text-gray">{item.title}</p>
                    </div>
                ))}
            </div>
            <div className="mt-[20px]">
                <h4 className="font-bold text-base sm:text-md text-lightblack">General information about figs</h4>
            </div>
            <div>
                <p className="font-normal text-xs sm:text-sm text-gray leading-[19px] ff_lato">
                    Fresh figs are an amazing exotic fruit that people began to eat many years ago. Many people, having encountered these unusual
                    fruits for the first time, are wondering - what are they?
                </p>
                <p className="font-normal text-xs sm:text-sm text-gray leading-[19px] ff_lato">
                    Origin. The fig tree, native to Western Asia, has been cultivated for centuries since the Neolithic era, as early as 5000 BC.
                    Today you can buy figs of different varieties, because more than 700 varieties of fig trees are grown as ornamental plants for
                    fruit.
                </p>
                <p className="font-normal mt-2 sm:mt-5 text-xs sm:text-sm text-gray leading-[19px] ff_lato">
                    Appearance. Figs can be green, brown, yellow, or dark blue, similar to a plum. Dark-colored berries are stronger than
                    light-colored ones. The pear-shaped fruit is actually an edematous flower stem. It can be consumed fresh or dried, peeled or
                    unpeeled.
                </p>
                <p className="font-normal text-sm mt-2 sm:mt-5 text-gray leading-[19px] ff_lato">
                    Taste properties. The taste of fresh figs is sweetish, without sourness, it will be fully felt when the fruit is consumed fresh.
                </p>
                <p className="font-normal text-sm mt-2 sm:mt-5 text-gray leading-[19px] ff_lato">
                    How to eat figs. The fig berry must be clean and dry. The fruits are consumed whole, they can be eaten by hand or cut into pieces.
                    There is no need for any heat treatment of figs, since the berries themselves are so tasty and rich in nutrients that they do not
                    need to be supplemented. However, if you feel like using them as an ingredient in a salad, smug or dessert, go for it! More daring
                    cooks make fig jam, bake and even fry.
                </p>
                <p className="font-normal text-xs sm:text-sm text-gray mt-2 sm:mt-5 leading-[19px] ff_lato">Useful properties of figs</p>
                <p className="font-normal text-xs sm:text-sm text-gray leading-[19px] ff_lato">
                    Due to the low calorie content, but at the same time, the rich composition of micro and macro elements, fruits are an excellent
                    food product for those who care about their health, although the price of figs is not the lowest.
                </p>
            </div>
        </div>
    );
};

export default ProductDescription;
