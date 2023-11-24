import React from "react";
import OrderCompleted from "../components/completed/OrderCompleted";
import Blog from "../components/common/Blog";
import Layout from "../hoc/Layout";
import PageSEO from "../components/common/PageSEO";

function Completed() {
  return (
    <>
      <PageSEO title="Your Order Is Completed" />
      <Layout>
        <OrderCompleted />
        <Blog />
      </Layout>
    </>
  );
}

export default Completed;
