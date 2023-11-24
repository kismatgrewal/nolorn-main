import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const FaqListItem = ({ activeHandler, id, item, view }) => {
    return (
        <>
            <div onClick={() => activeHandler(id)} className={`mb-2 sm:mb-0  cursor-pointer border-[0.5px]  border-gray overflow-hidden rounded-lg`}>
                <div className="">
                    <div
                        className={`${
                            id === view ? "" : "text-blueshade1"
                        }  font-bold  flex items-center justify-between text-sm sm:text-md text-lightblack px-2 sm:px-6 py-1 sm:py-2 rounded-[4px]`}
                    >
                        <h6>{item.questions}</h6>

                        <span>
                            {id === view ? (
                                <svg width="15" height="4" viewBox="0 0 15 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1.07143 3.07157C0.4797 3.07157 0 2.59189 0 2.00014C0 1.40839 0.4797 0.928711 1.07143 0.928711H13.9286C14.5203 0.928711 15 1.40839 15 2.00014C15 2.59189 14.5203 3.07157 13.9286 3.07157H1.07143Z"
                                        fill="#253D4E"
                                    />
                                </svg>
                            ) : (
                                <svg width="15" height="15" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M14.0625 7.0625H8.4375V1.4375C8.4375 1.18886 8.33873 0.950403 8.16291 0.774588C7.9871 0.598772 7.74864 0.5 7.5 0.5C7.25136 0.5 7.0129 0.598772 6.83709 0.774588C6.66127 0.950403 6.5625 1.18886 6.5625 1.4375V7.0625H0.9375C0.68886 7.0625 0.450403 7.16127 0.274588 7.33709C0.0987722 7.5129 0 7.75136 0 8C0 8.24864 0.0987722 8.4871 0.274588 8.66291C0.450403 8.83873 0.68886 8.9375 0.9375 8.9375H6.5625V14.5625C6.5625 14.8111 6.66127 15.0496 6.83709 15.2254C7.0129 15.4012 7.25136 15.5 7.5 15.5C7.74864 15.5 7.9871 15.4012 8.16291 15.2254C8.33873 15.0496 8.4375 14.8111 8.4375 14.5625V8.9375H14.0625C14.3111 8.9375 14.5496 8.83873 14.7254 8.66291C14.9012 8.4871 15 8.24864 15 8C15 7.75136 14.9012 7.5129 14.7254 7.33709C14.5496 7.16127 14.3111 7.0625 14.0625 7.0625Z"
                                        fill="#253D4E"
                                    />
                                </svg>
                            )}
                        </span>
                    </div>
                    <AnimatePresence>
                        {id === view && (
                            <>
                                <motion.div
                                    transition={{ type: "none", stiffness: 60 }}
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{
                                        height: "auto",
                                        opacity: 1,
                                    }}
                                    exit={{
                                        height: 0,
                                        opacity: 0,
                                        transition: { type: "none", stiffness: 50 },
                                    }}
                                >
                                    <p className="mb-0 text-Grey_600 font-normal text-xs sm:text-sm px-4 sm:px-6 pb-3 sm:pb-4 ff-inter">
                                        {item.answer}
                                    </p>
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </>
    );
};

export default FaqListItem;
