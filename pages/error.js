import React from "react";
import Error404 from "../components/common/Error404";
import PageSEO from "../components/common/PageSEO";
import Layout from "../hoc/Layout";

function error() {
  return (
    <>
      <PageSEO title="Page not found" />
      <Layout>
        <Error404 />
      </Layout>
    </>
  );
}

export default error;
