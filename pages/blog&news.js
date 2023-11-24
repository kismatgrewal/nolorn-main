import React from "react";
import RecipsArticles from "../components/news/RecipsArticles";
import PageBanner from "../components/common/PageBanner";
import SignUpNewsletter from "../components/common/SignUpNewsletter";
import PageSEO from "../components/common/PageSEO";
import Layout from "../hoc/Layout";

const BlogAndNews = () => {
  return (
    <>
      <PageSEO title="Blog & New" />
      <Layout>
        <PageBanner heading="Blog & News" page="Blog & News" />
        <RecipsArticles />
        <SignUpNewsletter />
      </Layout>
    </>
  );
};

export default BlogAndNews;
