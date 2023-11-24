import React from "react";
import BlogSidebar from "./BlogSidebar";
import BlogSinglePost from "./BlogSinglePost";
import GoToBlogBtn from "./GoToBlogBtn";
import OpenBlog from "./OpenBlog";

function Blog() {
  return (
    <div className="container my-14 ff_poppins">
      <div className="flex justify-between items-center pb-6">
        <h1 className="text-primary text-base font-semibold  ">
          {" "}
          Read our Blog posts
        </h1>
        <GoToBlogBtn />
      </div>
      <div className="flex justify-between flex-wrap ">
        <div className="xl:w-[40%] md:w-[60%] w-full my-10 md:pr-7">
          <OpenBlog />
        </div>
        <div className="xl:w-[27%] lg:w-[35%] sm:w-[40%]  my-10 xl:pr-7">
          <BlogSinglePost />
        </div>
        <div className="xl:w-[32%] lg:w-[48%] sm:w-[57%] w-full my-10  ">
          <BlogSidebar /> <BlogSidebar /> <BlogSidebar />
        </div>
      </div>
    </div>
  );
}

export default Blog;
