import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Header from "../header/Header"
import { page } from "./layout.module.scss"
import AnimatedCursor from "../cursor/AnimatedCursor"
import MediaQuery from "react-responsive"
import "../../styles/App.scss"
import "../cursor/cursor.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from "../footer/Footer"

const Layout = ({ children, setChangeMode, changeMode }) => {
  const [show, setShow] = useState(false)

  if (typeof window !== "undefined") {
    require("smooth-scroll")('a[href*="#"]')
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true)
    }, 300)
    return () => clearTimeout(timeout)
  }, [show])

  if (!show) return null

  return (
    <>
      <MediaQuery minWidth={900}>
        <AnimatedCursor />
      </MediaQuery>
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
