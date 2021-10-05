import React from "react";
import Header from "../components/header";

const Layout = ({ children }) => {
  return (
    <div className="page-wrapper">
      <Header />
      <div className="content-wrapper">{children}</div>
    </div>
  );
};

export default Layout;
