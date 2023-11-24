import React, { useState } from "react";
import RecipsArticlesAllCard from "./RecipsArticlesAllCard";

const RecipsArticles = () => {
    const [activeTab, setActiveTab] = useState("All");

    return (
        <div>
            <div>
                {" "}
                <div className="container py-3 sm:py-6     ">
                    <div className="flex items-center flex-wrap justify-between  ">
                        <h1 className="md:text-xxl text-md2 sm:text-lg text-primary font-semibold    ">
                            {" "}
                            <span className="text-lightblack  ">Recips </span> Articles
                        </h1>
                        <div>
                            <ul className="list-none flex items-center md:ml-2  pl-0 flex-wrap  ">
                                <li className="">
                                    {" "}
                                    <button
                                        className={`md:text-md text-sm  p-2 relative transition-all duration-150 ease-in font-bold  ${
                                            activeTab === "All" ? "text-primary" : "font-bold  text-gray "
                                        }`}
                                        onClick={() => setActiveTab("All")}
                                    >
                                        All
                                    </button>
                                </li>
                                <li className="">
                                    <button
                                        className={`md:text-md text-sm   p-2 relative transition-all duration-150 ease-in font-bold    ${
                                            activeTab === "Milks" ? "text-primary" : "font-bold  text-gray "
                                        }`}
                                        onClick={() => setActiveTab("Milks")}
                                    >
                                        Milks
                                    </button>
                                </li>

                                <li className="">
                                    <button
                                        className={`md:text-md text-sm   p-2 relative transition-all duration-150 ease-in font-bold whitespace-nowrap ${
                                            activeTab === "Pet-Foods" ? "text-primary" : "font-bold  text-gray "
                                        }`}
                                        onClick={() => setActiveTab("Pet-Foods")}
                                    >
                                        Pet Foods
                                    </button>
                                </li>
                                <li className="">
                                    <button
                                        className={`md:text-md text-sm   p-2 relative transition-all duration-150 ease-in font-bold  ${
                                            activeTab === "Vegetables" ? "text-primary" : "font-bold  text-gray "
                                        }`}
                                        onClick={() => setActiveTab("Vegetables")}
                                    >
                                        Vegetables
                                    </button>
                                </li>
                                <li className="">
                                    <button
                                        className={`md:text-md text-sm   p-2 relative transition-all duration-150 ease-in font-bold  ${
                                            activeTab === "Fruits" ? "text-primary" : "font-bold  text-gray "
                                        }`}
                                        onClick={() => setActiveTab("Fruits")}
                                    >
                                        Fruits
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    {activeTab === "All" && <RecipsArticlesAllCard />}
                    {activeTab === "Milks" && <RecipsArticlesAllCard />}
                    {activeTab === "Pet-Foods" && <RecipsArticlesAllCard />}
                    {activeTab === "Vegetables" && <RecipsArticlesAllCard />}
                    {activeTab === "Fruits" && <RecipsArticlesAllCard />}
                </div>
            </div>
        </div>
    );
};

export default RecipsArticles;
