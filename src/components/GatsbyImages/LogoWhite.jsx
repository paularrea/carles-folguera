import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../../styles/effects/spin-left.css"

const LogoWhite = () => {
  return (
    <StaticImage
      src="../../images/icons/logo-white.png"
      style={{
        animationName: "spinLeft",
        animationDuration: "5000ms",
        animationIterationCount: "infinite",
        animationTimingFunction: "linear",
        width: "15vw",
        height: "15vw",
        minWidth: "100px",
        minHeight: "100px",
      }}
      alt="Bacana white logo"
      placeholder="blurred"
      layout="fixed"
      imgStyle={{ width: "100%", height: "100%" }}
    />
  )
}
export default LogoWhite
