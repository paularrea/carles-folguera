import React from "react"
import { contactoText } from "../data/texts"
import { container } from "./link.module.scss"
import SlideIn from "../animation/SlideIn"

const ContactLink = ({ link, locale }) => {
  return (
    <div className={container}>
      <SlideIn>
        <h4 style={{ color: "white" }}>
          {contactoText.link.send[locale]} <a target="_blank" rel="noopener noreferrer" href={`mailto:${link}`}>AQUÍ</a>{" "}
          {contactoText.link.response[locale]}
        </h4>
      </SlideIn>
    </div>
  )
}

export default ContactLink
