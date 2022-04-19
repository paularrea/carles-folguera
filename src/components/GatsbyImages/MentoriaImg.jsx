import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const MentoriaImg = () => {
  return (
    <StaticImage
      src="../../images/mentorias.jpg"
      style={{
        width: "100%",
        height: "40vw",
        minHeight: "250px",
        maxWidth: "1000px",
        maxHeight: "670px",
      }}
      alt="Mentoria Carles Folguera"
      placeholder="blurred"
      layout="fixed"
      imgStyle={{width:'100%', height:'100%'}}
    />
  )
}
export default MentoriaImg
