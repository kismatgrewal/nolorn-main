import { AnimatePresence, motion } from "framer-motion";

const SidebarForMenuList = ({ activeHandler, id, item, view }) => {
  return (
    <>
      <div
        onClick={() => activeHandler(id)}
        className={`mb-2  cursor-pointer  overflow-hidden`}
      >
        <div>
          <div
            className={`text-xs cursor-pointer font-bold text-lightblack  flex items-center justify-between py-1`}
          >
            {item.heading}

            {item.list.length > 0 && (
              <svg
                className={` transition-all  duration-200 ease-in ${
                  id === view ? "rotate-[180deg]" : ""
                }`}
                width="9"
                height="10"
                viewBox="0 0 9 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_304_2349)">
                  <path
                    d="M0.202637 2.61011L4.37451 7.32498C4.39211 7.34487 4.41372 7.3608 4.43793 7.3717C4.46214 7.38261 4.4884 7.38825 4.51495 7.38825C4.5415 7.38825 4.56775 7.38261 4.59196 7.3717C4.61617 7.3608 4.63779 7.34487 4.65539 7.32498L8.82764 2.61011"
                    stroke="#04150C"
                    strokeWidth="0.964286"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_304_2349">
                    <rect
                      width="9"
                      height="9"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            )}
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
                  <div className="pl-3">
                    {item.list.map((value, index) => (
                      <p className={`text-gray text-sm py-1`} key={index}>
                        {value}
                      </p>
                    ))}
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default SidebarForMenuList;
