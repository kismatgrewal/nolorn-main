import React from "react";
import PageBanner from "../components/common/PageBanner";
import SignUpNewsletter from "../components/common/SignUpNewsletter";
import DropUsaLine from "../components/contactus/DropUsaLine";
import ContactMap from "../components/contactus/ContactMap";
import HowCanWeHelpYou from "../components/contactus/HowCanWeHelpYou";
import PageSEO from "../components/common/PageSEO";
import Layout from "../hoc/Layout";

function Contact() {
  return (
    <>
      <PageSEO title="Contact Us" />
      <Layout>
        <PageBanner heading="Contact Us" page="Contact Us" />
        <HowCanWeHelpYou />
        <ContactMap />
        <DropUsaLine />
        <div className="sm:mt-[60px] mt-[30px] md:mt-[100px]">
          <SignUpNewsletter />
        </div>
      </Layout>
    </>
  );
}

export default Contact;
