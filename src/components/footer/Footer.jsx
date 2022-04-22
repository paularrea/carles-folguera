import React from "react"
import { container } from "./footer.module.scss"
import { useIntl } from "react-intl"
import { footerText } from "../utils/data/texts"
import { Link } from "gatsby"

const Footer = () => {
  const { locale } = useIntl()
  return (
    <footer className={container}>
      <p>
        {new Date().getFullYear()} {footerText.copyright[locale]}
      </p>
      <Link to="/politica-de-privacidad">
        <p>{footerText.privacy[locale]}</p>
      </Link>
      <Link to="/legal">
        <p>{footerText.legal[locale]}</p>
      </Link>
    </footer>
  )
}

export default Footer
