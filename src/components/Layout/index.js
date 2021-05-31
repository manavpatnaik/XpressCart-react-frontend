import React from "react";
import Header from "../Header";
import Container from "react-bootstrap/Container";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <div>Footer</div>
    </>
  );
};

export default Layout;
