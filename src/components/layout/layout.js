import React from "react";
import PropTypes from "prop-types";
import Header from "../header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../styles/App.scss"
import {page} from "./layout.module.scss"

const Layout = ({ children }) => {
  if (typeof window !== "undefined") {
    require("smooth-scroll")('a[href*="#"]');
  }
  return (
    <>
      <Header />
      <main className={page}>{children}</main>
    </>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
