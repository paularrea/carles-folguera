import React from "react"
import { container } from "./footer.module.scss"
import { useIntl } from "react-intl"
import { footerText } from "../utils/data/texts"

const Footer = () => {
  const { locale } = useIntl()
  return (
    <footer className={container}>
      <p>
        {new Date().getFullYear()} {footerText.copyright[locale]}
      </p>
      <p>{footerText.privacy[locale]}</p>
    </footer>
  )
}

export default Footer
