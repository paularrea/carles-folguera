import React from "react"
import Button from "../../buttons/button"
import { container_text } from "./textComponent.module.scss"

const TextBookCall = ({ buttonTo, buttonText, text, textColor }) => {
  return (
    <div className={container_text}>
      <h4 style={{color:textColor}}>{text}</h4>
      <br />
      <Button to={buttonTo}>{buttonText}</Button>
    </div>
  )
}

export default TextBookCall
