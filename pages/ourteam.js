import React from "react";
import PageBanner from "../components/common/PageBanner";
import SignUpNewsletter from "../components/common/SignUpNewsletter";
import BestEmploye from "../components/ourTeam/BestEmploye";
import Ourteam from "../components/ourTeam/Ourteam";
import Layout from "../hoc/Layout";
import PageSEO from "../components/common/PageSEO";

function OurTeam() {
  return (
    <>
      <PageSEO title="Our Team" />
      <Layout>
        <PageBanner heading="Our Team" page="Our Team" />
        <BestEmploye />
        <Ourteam />
        <SignUpNewsletter />
      </Layout>
    </>
  );
}

export default OurTeam;
