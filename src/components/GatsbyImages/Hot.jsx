import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Hot = () => {
  return (
    <StaticImage
      src="../../images/hot.png"
      alt="Bacana white logo"
      placeholder="blurred"
      layout="fixed"
      style={{width:'50vw', height:'30vw', minWidth:'300px', minHeight:'200px'}}
      imgStyle={{width:'100%', height:'100%'}}
    />
  )
}
export default Hot
