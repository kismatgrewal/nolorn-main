import React, { useState } from "react";
import BlogNewsSidebar from "../../components/news/BlogNewsSidebar";
import SearchArticlesInput from "../../components/common/SearchArticlesInput";
import Recips from "../../components/news/Recips";
import Layout from "../../hoc/Layout";
import ReviewsListItem from "../../components/product/ReviewsListItem";
import { reviewsdata } from "../../components/helper/Helper";
import LeaveAComment from "../../components/news/LeaveAComment";
import Pagination from "../../components/common/Pagination";
import SignUpNewsletter from "../../components/common/SignUpNewsletter";
import PageSEO from "../../components/common/PageSEO";

function BlogAndNewsArticle() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <PageSEO title="We Always Ready to Give a Best Delivery Support" />
      <Layout>
        <>
          <div className="container mt-24 flex flex-wrap">
            <div className="max-w-[860px] mr-10">
              <Recips />
              <h2 className="text-lightblack font-bold text-base sm:text-md ">
                Reviews
              </h2>
              {reviewsdata.map((item, index) => (
                <ReviewsListItem key={index} item={item} />
              ))}
              <div className="flex justify-end mt-6">
                <Pagination />
              </div>
              <LeaveAComment />
            </div>
            <div>
              <SearchArticlesInput />

              <BlogNewsSidebar
                isSidebarOpen={isSidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
            </div>
          </div>

          <SignUpNewsletter />
        </>
      </Layout>
    </>
  );
}

export default BlogAndNewsArticle;
