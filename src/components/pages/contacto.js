import React from "react"
import { container } from "../../styles/pages.module.scss"
import TextComponent from "../utils/text/TextComponent"
import OrangeShadow from "../utils/orangeShadow/OrangeShadow"
import ContactLink from "../utils/links/ContactLink"
import { contactoList } from "../utils/data/lists"
import { useIntl } from "react-intl"
import { contactoText } from "../utils/data/texts"

const Contacto = () => {
  const { locale } = useIntl()
  return (
    <div
      style={{ backgroundColor: "#060823" }}
      className={container}
      id="contacto"
    >
      <TextComponent
        title={contactoList.title[locale]}
        subTitle={contactoList.subTitle[locale]}
        text={contactoText.text}
        locale={locale}
        list={contactoList.list}
        textColor="white"
      />
      <br />
      <br />
      <ContactLink locale={locale} link="carlesfolguerafelip@gmail.com" />
      <OrangeShadow />
    </div>
  )
}
export default Contacto
