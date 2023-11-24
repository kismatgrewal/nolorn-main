import React, { useState } from "react";
import AllCardFilter from "../components/catalog/AllCardFilter";
import CatalogSidebar from "../components/catalog/CatalogSidebar";
import PageBanner from "../components/common/PageBanner";
import { catalogproductsdata } from "../components/helper/Helper";
import HotPermotion from "../components/home/HotPermotion";
import Layout from "../hoc/Layout";
import ProductCard from "../components/home/ProductCard";
import PageSEO from "../components/common/PageSEO";

function CatalogPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <PageSEO title="Catalog" />
      <Layout>
        <PageBanner heading="Vegetables" page="Catalog" />
        <AllCardFilter setSidebarOpen={setSidebarOpen} />
        <div className="container flex items-start justify-between">
          <CatalogSidebar
            isSidebarOpen={isSidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
          <div className="ml-10">
            <div className=" flex flex-wrap xl:justify-between justify-center">
              {catalogproductsdata &&
                catalogproductsdata.length > 0 &&
                catalogproductsdata.map((item, index) => (
                  <ProductCard key={index} item={item} />
                ))}
            </div>
          </div>
        </div>
        <HotPermotion />
      </Layout>
    </>
  );
}

export default CatalogPage;
