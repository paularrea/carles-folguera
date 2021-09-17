import React from "react"
import PropTypes from "prop-types"
import Header from "../header/Header"
import { page } from "./layout.module.scss"
import AnimatedCursor from "../cursor/AnimatedCursor"
import "../../styles/App.scss"
import "bootstrap/dist/css/bootstrap.min.css"

const Layout = ({ children }) => {
  if (typeof window !== "undefined") {
    require("smooth-scroll")('a[href*="#"]')
  }
  return (
    <>
      <AnimatedCursor />
      <Header />
      <main className={page}>{children}</main>
    </>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout
