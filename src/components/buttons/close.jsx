import React from "react"
import { navigate } from "gatsby"
import {close_button} from "./buttons.module.scss"
import close from "../../images/icons/close.png"

const CloseButton = () => {
  return (
    <button className={close_button} onClick={() => navigate('/')}>
      <img src={close} alt="close" />
    </button>
  )
}

export default CloseButton
