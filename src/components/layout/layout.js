import React from "react"
import PropTypes from "prop-types"
import Header from "../header/Header"
import { page } from "./layout.module.scss"
import "../../styles/App.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from "../footer/Footer"

const Layout = ({ children, setChangeMode, changeMode }) => {

  if (typeof window !== "undefined") {
    require("smooth-scroll")('a[href*="#"]')
  }

  return (
    <>
      <div id="App">
        <Header pageWrapId={"page-wrap"} outerContainerId={"App"}/>
        <div id="page-wrap">
          <main className={page}>{children}</main>
        </div>
        <Footer/>
      </div>
    </>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout
