import React from "react";
import BackToPage from "../common/BackToPage";
import SignUpNewsletter from "../common/SignUpNewsletter";

const BackToPageSignUp = () => {
  return (
    <div>
      <div className="flex justify-center  mt-[40px]">
        <BackToPage link={`#`} title={`Back to Catalog`} />
      </div>
      <SignUpNewsletter />
    </div>
  );
};

export default BackToPageSignUp;
