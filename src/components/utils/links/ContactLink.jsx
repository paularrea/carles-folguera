import React from "react"
import { container } from "./link.module.scss"

const ContactLink = ({ link }) => {
  return (
    <div className={container}>
      <h4 style={{ color: 'white' }}>
        Envíame un correo a <a href={`mailto:${link}`}>{link}</a> y te atenderé
        lo antes posible.
      </h4>
    </div>
  )
}

export default ContactLink
