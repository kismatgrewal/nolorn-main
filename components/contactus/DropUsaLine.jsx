import Link from "next/link";
import React from "react";
import { CallIcon, EmailIcon, LocationIcon } from "../helper/Icons";
import ContactForm from "./ContactForm";

const DropUsaLine = () => {
  return (
    <>
      {" "}
      <div className="container">
        <div className=" flex flex-wrap text-center sm:text-left justify-around lg:justify-between items-center my-14">
          <article className="mb-4">
            <h5 className="text-lightblack text-lg font-bold">Office</h5>
            <div className="mt-3">
              <Link
                href="tel:(684)555-0102"
                className="flex justify-center sm:justify-start items-center"
              >
                <span className="mr-[10px]">
                  <CallIcon />
                </span>
                <p className="ff_lato font-normal text-xs text-gray">
                  (684) 555-0102
                </p>
              </Link>
            </div>
            <div className="mt-3">
              <Link
                href="mailto:name@email.com "
                className="flex justify-center sm:justify-start items-center"
              >
                <span className="mr-[10px]">
                  <EmailIcon />
                </span>
                <p className="ff_lato font-normal text-xs text-gray">
                  name@email.com
                </p>
              </Link>
            </div>
            <div className="mt-3 flex items-center">
              <span className="mr-[10px]">
                <LocationIcon />
              </span>
              <p className="ff_lato font-normal text-xs text-gray">
                6391 Elgin St. Celina, Delaware 10299
              </p>
            </div>
          </article>
          <article className="mb-4">
            <h5 className="text-lightblack text-lg font-bold">Studio</h5>
            <div className="mt-3">
              <Link
                href="tel:(684)555-0102"
                className="flex justify-center sm:justify-start items-center"
              >
                <span className="mr-[10px]">
                  <CallIcon />
                </span>
                <p className="ff_lato font-normal text-xs text-gray">
                  (684) 555-0102
                </p>
              </Link>
            </div>
            <div className="mt-3">
              <Link
                href="mailto:name@email.com "
                className="flex justify-center sm:justify-start items-center"
              >
                <span className="mr-[10px]">
                  <EmailIcon />
                </span>
                <p className="ff_lato font-normal text-xs text-gray">
                  name@email.com
                </p>
              </Link>
            </div>
            <div className="mt-3 flex items-center">
              <span className="mr-[10px]">
                <LocationIcon />
              </span>
              <p className="ff_lato font-normal text-xs text-gray">
                6391 Elgin St. Celina, Delaware 10299
              </p>
            </div>
          </article>
          <article className="mb-4">
            <h5 className="text-lightblack text-lg font-bold">Shop</h5>
            <div className="mt-3">
              <Link
                href="tel:(684)555-0102"
                className="flex justify-center sm:justify-start items-center"
              >
                <span className="mr-[10px]">
                  <CallIcon />
                </span>
                <p className="ff_lato font-normal text-xs text-gray">
                  (684) 555-0102
                </p>
              </Link>
            </div>
            <div className="mt-3">
              <Link
                href="mailto:name@email.com "
                className="flex justify-center sm:justify-start items-center"
              >
                <span className="mr-[10px]">
                  <EmailIcon />
                </span>
                <p className="ff_lato font-normal text-xs text-gray">
                  name@email.com
                </p>
              </Link>
            </div>
            <div className="mt-3 flex items-center">
              <span className="mr-[10px]">
                <LocationIcon />
              </span>
              <p className="ff_lato font-normal text-xs text-gray">
                6391 Elgin St. Celina, Delaware 10299
              </p>
            </div>
          </article>
        </div>
        <ContactForm />
      </div>
    </>
  );
};

export default DropUsaLine;
