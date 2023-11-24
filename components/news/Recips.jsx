import React from "react";
import { DotsIcon, LikeIcon, TextIcon } from "../helper/Icons";
import SocailMediaIcons from "../common/SocailMediaIcons";
function Recips() {
  return (
    <>
      <div>
        <div>
          <p className="text-md font-bold text-primary pb-3  "> Recipes</p>
          <p className="text-lightblack font-bold md:text-xxl text-lg leading-[120%] ">
            {" "}
            We Always Ready to Give <br /> a Best Delivery Support
          </p>
          <div className="my-5 flex items-center">
            <div className="mr-2">
              {" "}
              <img
                src="/assets/images/dp.png"
                alt="img"
                className="w-[40px] h-[40px] rounded-full "
              />
            </div>
            <p className="text-xs text-lightblack ff_lato flex items-center  ">
              {" "}
              Jenny Wilson{" "}
              <span className="mx-2">
                {" "}
                <DotsIcon />{" "}
              </span>{" "}
              June 22, 2022
            </p>
          </div>
          <div className="py-5">
            <img src="/assets/images/recips.png" alt="img" className="w-full" />
          </div>
          <div className="pb-4">
            <p className="text-gray text-sm  ff_lato mb-4 leading-[130%]">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              varius molestie tellus, gravida maximus felis facilisis id.
              Phasellus imperdiet, nunc vel lacinia sollicitudin, lectus justo
              molestie massa, ac auctor tortor justo vel eros. Proin ut est eu
              quam iaculis pellentesque quis nec mi.{" "}
            </p>
            <p className="text-gray text-sm  ff_lato mb-4 leading-[130%]">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              varius molestie tellus, gravida maximus felis facilisis id.
              Phasellus imperdiet, nunc vel lacinia sollicitudin, lectus justo
              molestie massa, ac auctor tortor justo vel eros. Proin ut est eu
              quam iaculis pellentesque quis nec mi.{" "}
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="py-4 sm:mr-5 md:max-w-[420px] leading-[130%]">
              <p className="text-gray text-sm  ff_lato mb-4">
                Until the Digital Age, typography was a specialized occupation.
                Digitization opened up typography to new generations of
                previously unrelated designers and lay users, and David Jury,
                head of graphic design at Colchester Institute in England,
                states that “typography is now something everybody does.{" "}
              </p>
              <p className="text-gray text-sm  ff_lato mb-4">
                As the capability to create typography has become ubiquitous,
                the application of principles and best practices developed over
                generations of skilled workers and professionals has diminished.
                Ironically, at a time when scientific techniques.{" "}
              </p>
              <p className="text-gray text-sm  ff_lato mb-4">
                Until the Digital Age, typography was a specialized occupation.
                Digitization opened up typography to new generations of
                previously unrelated designers and lay users, and David Jury,
                head of graphic design at Colchester Institute in England,
                states that “typography is now something everybody does.{" "}
              </p>
            </div>
            <div className="py-4">
              <img
                src="/assets/images/cack.png"
                alt="img"
                className="w-[300px] mx-auto md:mx-0 md:w-[420px]"
              />
            </div>
          </div>
          <div className="my-4">
            <p className="text-gray text-sm  ff_lato mb-4 leading-[130%]">
              {" "}
              Typography is the work of typesetters, compositors, typographers,
              graphic designers, art directors, manga artists, comic book
              artists, graffiti artists, and now—anyone who arranges words,
              letters, numbers, and symbols for publication, display, or
              distribution—from clerical workers and newsletter writers to
              anyone self-publishing materials.
            </p>
          </div>
          <div className="border-[0.5px] border-gray sm:p-8 p-4 flex my-9 rounded-lg ">
            <div>
              <img
                src="/assets/images/quotation.png"
                alt=""
                className="w-[50px]"
              />{" "}
            </div>
            <p className="text-gray text-sm  ff_lato mb-4 leading-[130%] sm:ml-10 ml-3">
              As the capability to create typography has become ubiquitous, the
              application of principles and best practices developed over
              generations of skilled workers and professionals has diminished.
              Ironically, at a time when scientific techniques.
            </p>
          </div>{" "}
          <p className="text-gray text-sm  ff_lato mb-4 leading-[130%]">
            {" "}
            Until the Digital Age, typography was a specialized occupation.
            Digitization opened up typography to new generations of previously
            unrelated designers and lay users, and David Jury, head of graphic
            design at Colchester Institute in England, states that “typography
            is now something everybody does. As the capability to create
            typography has become ubiquitous, the application of principles and
            best practices developed over generations of skilled workers and
            professionals has diminished. Ironically, at a time when scientific
            techniques.
          </p>
          <p className="text-gray text-sm  ff_lato mb-4 leading-[130%]">
            {" "}
            Saperet probatus hendrerit ad eum. Qui autem augue tamquam ne, ne
            veri iracundia constituto eum. Sit utroque etiam id, quo debitis
            fabellas recteque an impetus suas voluptaria mollis.
          </p>
        </div>
        <div className="flex justify-between flex-wrap items-center">
          <div className="flex items-center py-4">
            <div className="flex items-center mr-3 ">
              <span className="mr-2 cursor-pointer">
                {" "}
                <TextIcon />{" "}
              </span>
              <span className="text-sm  ff_lato text-lightblack">
                {" "}
                Review(3)
              </span>
            </div>{" "}
            <div className="flex items-center mr-3">
              <span className="mr-2 cursor-pointer">
                {" "}
                <LikeIcon />{" "}
              </span>
              <span className="text-sm  ff_lato text-lightblack">
                {" "}
                like (0)
              </span>
            </div>
          </div>
          <div className="flex items-center mr-3 py-4">
            <span className="text-sm  ff_lato text-lightblack"> Share :</span>{" "}
            <span className="flex">
              <SocailMediaIcons />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Recips;
