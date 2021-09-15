import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../../styles/effects/spin-right.css"

const LogoBlack = () => {
  return (
    <StaticImage
      src="../../images/bacana-logo.png"
      style={{
        animationName: "spinRight",
        animationDuration: "20000ms",
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
      imgStyle={{width:'100%', height:'100%'}}
    />
  )
}
export default LogoBlack
