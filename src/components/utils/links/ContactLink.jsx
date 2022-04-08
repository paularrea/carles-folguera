import React from "react"
import { contactoText } from "../data/texts"
import { container } from "./link.module.scss"

const ContactLink = ({ link, locale }) => {
  return (
    <div className={container}>
      <h4 style={{ color: "white" }}>
        {contactoText.link.send[locale]} <a href={`mailto:${link}`}>{link}</a>{" "}
        {contactoText.link.response[locale]}
      </h4>
    </div>
  )
}

export default ContactLink
