import React from "react"
import { container } from "./footer.module.scss"

const Footer = () => {
  return (
    <footer className={container}>
      <p>{new Date().getFullYear()} Copyright © Carles Folguera. All rights reserved.</p>
      <p>Política de privacidad</p>
    </footer>
  )
}

export default Footer
