import React from "react";
import AppBottomNav from "../components/common/AppBottomNav";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import DailyNeedFrom from "../components/home/DailyNeedFrom";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <AppBottomNav />
      {children}
      {/* <DailyNeedFrom /> */}
      <Footer />
    </>
  );
};

export default Layout;
