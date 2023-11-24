import Image from "next/image";
import React, { useState } from "react";
import { fruitsProducts } from "../helper/Helper";
import { CartIcon, DownArrowIcon, DownUpArrowIcon, FillHeartIcon, HeartIcon, LikeHeartIcon, UpArrowIcon } from "../helper/Icons";
import ReactStars from "react-rating-stars-component";

const Fruit = () => {
    const [rating, setRating] = useState(4);
    const [isLike, setLike] = useState();
    const [quantity, setQuantiy] = useState(1);

    const ratingChanged = (newRating) => {
        setRating(newRating);
    };
    function handleIncrease() {
        setQuantiy(quantity + 1);
    }

    function handleDecrease() {
        // IF QUANITY IS LESS THAN 1 DON'T CHANGE QUANTIY VALUE
        if (quantity > 1) {
            setQuantiy(quantity - 1);
        }
    }
    return (
        <div>
            <div className="container mx-auto mt-[30px] sm:mt-[60px] md:mt-[100px]">
                <div className="flex justify-between lg:justify-start flex-wrap">
                    <div className="rounded-[8px] lg:mr-[15px] flex items-center mx-auto md:mx-0 xl:mr-[30px] border-[0.5px] sm:p-0 p-1 border-gray sm:max-w-none max-w-[250px] md:max-w-[372px]  lg:max-w-[500px] xl:max-w-[570px]">
                        <Image src="/assets/images/fruit-img-1.png" width={570} height={540} alt="fruit img" />
                    </div>
                    <div className="flex justify-center md:justify-start  mt-5 md:mt-0">
                        <div className="md:max-w-[365px] lg:max-w-none">
                            <h4 className="font-bold text-green text-md">Fruit</h4>
                            <h3 className="font-bold text-lightblack text-lg">Fresh figs</h3>
                            <div className="flex items-center ">
                                <ReactStars count={5} size={24} value={rating} edit={false} activeColor="#ffd700" />

                                <p className="text-xs text-lightblack ff_lato  ml-2">({rating}.0)</p>
                            </div>
                            <p className="font-bold text-md text-lightblack mt-[5px] sm:mt-[20px]">Price for 1 kg</p>
                            <div className="mt-[8px] flex items-center">
                                <p className="font-semibold text-lg sm:text-xxl text-tangaroa mr-[12px]">$24.00</p>
                                <div className="flex flex-col">
                                    <span className="font-normal text-xsm text-pumpingspice ff_lato">20 % OFF</span>
                                    <del className="font-normal text-base sm:text-md text-gray ff_lato">$30.00</del>
                                </div>
                            </div>
                            <p className="font-normal ff_lato max-w-[495px] mt-[10px] sm:mt-[20px]  text-base text-gray leading-[21px]">
                                Fresh figs are an amazing exotic fruit that people began to eat many years ago. Many people, for the first time faced
                                with these unusual fruits.z
                            </p>
                            <div className="mt-[4px]">
                                {fruitsProducts.map((item, index) => (
                                    <div key={index} className="flex items-center mt-[8px]">
                                        <div>
                                            <div className="h-[6px] w-[6px] bg-black rounded-[50%] mr-[9px]"></div>
                                        </div>
                                        <p className="font-normal text-xs ff_lato text-gray">{item.title}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-[10px] flex flex-wrap">
                                <div className="flex items-center py-[11px] mt-[10px] px-[10px] border-[0.5px] border-gray rounded-[4px] w-[141px] mr-[20px]">
                                    <p className="flex items-center font-bold text-xs text-spacegrey">
                                        Quantity: <span className="ml-1 text-gray w-[20px]">{quantity}</span>
                                    </p>
                                    <div className="flex flex-col ml-[10px] w-[24px]">
                                        <span onClick={handleIncrease} className="cursor-pointer">
                                            <UpArrowIcon />
                                        </span>
                                        <span className="mt-[6px] cursor-pointer" onClick={handleDecrease}>
                                            <DownArrowIcon />
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center py-[11px] mt-[10px] px-[10px] border-[0.5px] border-gray rounded-[4px] w-[177px] ">
                                    <p className="flex items-center font-bold text-xs text-spacegrey">
                                        Size / Weight:{" "}
                                        <select className="text-gray outline-none" name="" id="">
                                            <option value="">150g</option>
                                            <option value="">170g</option>
                                            <option value="">190g</option>
                                            <option value="">200g</option>
                                            <option value="">220g</option>
                                            <option value="">240g</option>
                                        </select>
                                    </p>
                                </div>
                            </div>
                            <div className="mt-[10px] flex flex-wrap justify-between sm:justify-start">
                                <div
                                    onClick={() => setLike(!isLike)}
                                    className=" w-[64px] rounded-[4px] h-[44px] mt-[10px] flex justify-center items-center border-[0.5px] border-gray"
                                >
                                    {isLike ? <HeartIcon /> : <FillHeartIcon />}
                                </div>
                                <div className=" w-[64px] sm:ml-[12px] ml-[4px] mt-[10px] rounded-[4px] h-[44px] flex justify-center items-center border-[0.5px] border-gray">
                                    <DownUpArrowIcon />
                                </div>
                                <div className="sm:ml-[12px] ml-[4px] mt-[10px]">
                                    <button className="font-bold text-xs bg-primary w-[98px] h-[44px] text-white rounded-[4px]">Buy now</button>
                                </div>
                                <div className="sm:ml-[12px] ml-[4px] mt-[10px]">
                                    <button className="font-bold rounded-[4px] text-xs text-primary bg-perfectwhite h-[44px] w-[156px] flex items-center justify-center">
                                        <span className="mr-[13px]">
                                            <CartIcon />
                                        </span>
                                        <span>Add To Cart</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fruit;
