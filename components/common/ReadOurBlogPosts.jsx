import Image from "next/image";
import React from "react";

const ReadOurBlogPosts = () => {
  return (
    <>
      <div className="container">
        <div className="flex items-center justify-between">
          <h4>Read our Blog posts</h4>

          <button>
            Go to Blog{" "}
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.53333 11.6865L9.27332 8.94651C9.39749 8.8216 9.46719 8.65263 9.46719 8.47651C9.46719 8.30039 9.39749 8.13142 9.27332 8.00651L6.60666 5.33984"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="bevel"
              />
            </svg>
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div className="w-[40%]">
            <div>
              <span class="text-xs font-semibold text-white flex items-center justify-start px-2 bg-gray-900 rounded-full">
                Dinner tips
              </span>

              <h4>
                Our chef tips for a great and tasty dinner ready in 20 minutes
              </h4>
              <img src="/assets/images/timercard.png" alt="blog post" />
              <Image
                src="/assets/images/author-img.png"
                alt="author"
                width={32}
                height={32}
              />

              <p>Author</p>
              <span>17. 6. 2020</span>
            </div>
          </div>
          <div className="w-[60%]"></div>
        </div>
      </div>
    </>
  );
};

export default ReadOurBlogPosts;
