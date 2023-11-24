import React from "react";
import BillingDetails from "../components/checkout/BillingDetails";
import BillingItem from "../components/checkout/BillingItem";
import Blog from "../components/common/Blog";
import PageSEO from "../components/common/PageSEO";
import Layout from "../hoc/Layout";

function checkout() {
  return (
    <>
      <PageSEO title="Billing Details" />
      <Layout>
        <div className="container md:my-10 py-14">
          <h1 className="md:text-3xl text-lg font-bold text-lightblack ">
            {" "}
            Billing Details
          </h1>
          <p className="text-gray text-xs mt-4 "> Enter your details</p>

          <div className="flex md:flex-row flex-col justify-between py-6">
            <div className="md:w-[48.5%] w-full">
              <BillingDetails />
            </div>
            <div className="md:w-[48.5%] w-full mt-14 md:mt-0">
              <BillingItem />
            </div>
          </div>
        </div>

        <Blog />
      </Layout>
    </>
  );
}

export default checkout;
