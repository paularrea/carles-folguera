import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../../styles/effects/spin-right.css"

const LogoBlack = () => {
  return (
    <StaticImage
      src="../../images/bacana-logo.png"
      style={{
        animationName: "spinRight",
        animationDuration: "5000ms",
        animationIterationCount: "infinite",
        animationTimingFunction: "linear",
        width: "15vw",
        height: "15vw",
        maxWidth:200,
        maxHeight:200,
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
