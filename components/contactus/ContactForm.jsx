import React, { useState } from "react";
import { toast } from "react-toastify";
import Loader from "../common/Loader";

const ContactForm = () => {
  const initialstate = {
    name: "",
    phone: "",
    email: "",
    comment: "",
    savemyemail: false,
  };

  const [isLoading, setLoading] = useState(false);
  const [dropUsaLine, setDropUsaLine] = useState(initialstate);

  function handleDropUsaLine(event) {
    event.preventDefault();
    console.log(dropUsaLine);
    setLoading(true);

    setTimeout(() => {
      toast("Your message is send succuessfully, We will back to you soon!");
      setLoading(false);
      setDropUsaLine(initialstate);
    }, 3000);
  }

  return (
    <>
      <h2 className="my-3 font-semibold text-md2 sm:text-lg md:text-xxl text-lightblack leading-[35px] sm:leading-[40px] md:leading-[52px]">
        Drop Us a Line
      </h2>
      <p className="text-gray text-xs ff_lato mb-6">
        Your email address will not be published. Required fields are marked
      </p>
      <form onSubmit={handleDropUsaLine}>
        <input
          onChange={(e) =>
            setDropUsaLine({
              ...dropUsaLine,
              name: e.target.value,
            })
          }
          value={dropUsaLine.name}
          required
          type="text"
          className="w-full px-6 py-2 ff_lato text-xs text-gray border-[#F2F0F0] border-[1px] rounded "
          placeholder="Name*"
        />
        <div className="flex items-center my-5">
          <input
            onChange={(e) =>
              setDropUsaLine({
                ...dropUsaLine,
                phone: e.target.value,
              })
            }
            value={dropUsaLine.phone}
            required
            type="tel"
            className="w-full px-6 py-2 ff_lato text-xs text-gray border-[#F2F0F0] border-[1px] rounded mr-5"
            placeholder="Phone"
          />

          <input
            onChange={(e) =>
              setDropUsaLine({
                ...dropUsaLine,
                email: e.target.value,
              })
            }
            value={dropUsaLine.email}
            required
            type="email"
            className="w-full px-6 py-2 ff_lato text-xs text-gray border-[#F2F0F0] border-[1px] rounded"
            placeholder="Email*"
          />
        </div>
        <textarea
          onChange={(e) =>
            setDropUsaLine({
              ...dropUsaLine,
              comment: e.target.value,
            })
          }
          value={dropUsaLine.comment}
          required
          className="w-full px-6 py-2 ff_lato text-xs text-gray border-[#F2F0F0] border-[1px] rounded resize-none mb-4 sm:mb-6"
          placeholder="Write your comment*"
          rows="7"
        ></textarea>
        <label
          htmlFor="privacy"
          className="text-gray text-xs ff_lato flex items-center cursor-pointer"
        >
          <input
            onChange={(e) =>
              setDropUsaLine({
                ...dropUsaLine,
                savemyemail: e.target.checked,
              })
            }
            checked={dropUsaLine.savemyemail}
            className="w-5 h-6 mr-2"
            type="checkbox"
            id="privacy"
          />
          <span>Save my name, email, and website in this browser</span>
        </label>
        <button
          type="submit"
          className="h-12 px-5 mt-6 py-[13px] text-xs text-white flex items-center justify-center font-bold bg-primary transition-all duration-300 hover:bg-opacity-80  rounded   "
        >
          {isLoading ? <Loader /> : "Send message"}
        </button>
      </form>
    </>
  );
};

export default ContactForm;
