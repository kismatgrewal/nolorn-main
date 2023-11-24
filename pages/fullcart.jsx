import React from "react";
import FullCart from "../components/fullcart/Fullcart";
import Blog from "../components/common/Blog";
import Layout from "../hoc/Layout";
// import EmptyCart from "../components/fullcart/EmptyCart";
import PageSEO from "../components/common/PageSEO";

function fullcart() {
  return (
    <>
      <>
        <PageSEO title="Shopping Cart" />
        <Layout>
          <FullCart />
          {/* <EmptyCart /> */}
          <Blog />
        </Layout>
      </>
    </>
  );
}

export default fullcart;
