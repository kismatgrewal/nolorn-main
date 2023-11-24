import React from "react";
import PageBanner from "../components/common/PageBanner";
import SignUpNewsletter from "../components/common/SignUpNewsletter";
import FaqQuestions from "../components/faq/FaqQuestions";
import Layout from "../hoc/Layout";
import PageSEO from "../components/common/PageSEO";

const Faq = () => {
  return (
    <>
      <PageSEO title="FAQs" />
      <Layout>
        {" "}
        <PageBanner heading="F.A.Q. " page="F.A.Q. " />
        <FaqQuestions />
        <SignUpNewsletter />
      </Layout>
    </>
  );
};

export default Faq;
