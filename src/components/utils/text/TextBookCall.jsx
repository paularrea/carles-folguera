import React from "react"
import Button from "../../buttons/button"
import { container_text } from "./textComponent.module.scss"
import SlideIn from "../animation/SlideIn"

const TextBookCall = ({ buttonTo, buttonText, text, textColor }) => {
  return (
    <div className={container_text}>
      <SlideIn>
      <h4 style={{color:textColor}}>{text}</h4>
      <br />
      <Button to={buttonTo}>{buttonText}</Button>
      </SlideIn>
    </div>
  )
}

export default TextBookCall
