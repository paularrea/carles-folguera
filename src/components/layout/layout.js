import React from "react"
import PropTypes from "prop-types"
import Header from "../header/Header"
import { page } from "./layout.module.scss"
import AnimatedCursor from "../cursor/AnimatedCursor"
import MediaQuery from "react-responsive"
import "../../styles/App.scss"
import "bootstrap/dist/css/bootstrap.min.css"

const Layout = ({ children }) => {
  if (typeof window !== "undefined") {
    require("smooth-scroll")('a[href*="#"]')
  }
  return (
    <>
      <MediaQuery minWidth={900}>
        <AnimatedCursor />
      </MediaQuery>
      <Header />
      <main className={page}>{children}</main>
    </>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout
