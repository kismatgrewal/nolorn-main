import React, { useState } from "react";
import { faqData } from "../helper/Helper";

import FaqListItem from "./FaqListItem";

const FaqQuestions = () => {
    const [view, setView] = useState(null);
    const activeHandler = (value) => {
        if (value === view) {
            setView(null);
        } else {
            setView(value);
        }
    };
    return (
        <>
            <div className="container">
                <div className=" sm:mt-[60px] mt-[30px] md:mt-[100px] lg:mt-[160px] mx-auto ">
                    <h3 className="font-bold text-lg sm:text-3xl text-lightblack text-center leading-[45px] sm:leading-[70px]">
                        Frequently Asked <span className="text-primary">Questions</span>
                    </h3>
                    <p className="text-sm text-gray font-normal ff_lato max-w-[528px] mx-auto text-center mt-[10px] sm:mt-[24px]">
                        We are the agency who always gives you a priority on the free of question and you can easily make a question on the bunch.
                    </p>
                    <div className="grid lg:grid-cols-2 gap-[5px] sm:gap-[20px] mt-[20px] sm:mt-[40px]">
                        {faqData &&
                            faqData.map((item, index) => (
                                <FaqListItem item={item} key={index} activeHandler={activeHandler} id={index} view={view} />
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default FaqQuestions;
