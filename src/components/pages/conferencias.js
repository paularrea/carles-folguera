import React from "react"
import { container } from "../../styles/pages.module.scss"
import TextComponent from "../utils/text/TextComponent"
import OrangeShadow from "../utils/orangeShadow/OrangeShadow"
import TextBookCall from "../utils/text/TextBookCall"
import { bookCallText, conferenciasText } from "../utils/data/texts"
import { conferenciasList } from "../utils/data/lists"
import { useIntl } from "react-intl"
import ConferenciasBg from "../GatsbyImages/ConferenciasBg"

const Conferencias = () => {
  const { locale } = useIntl()
  const textColor = "white"

  return (
    <ConferenciasBg>
      <div className={container} id="conferencias">
        <TextComponent
          title={conferenciasList.title[locale]}
          subTitle={conferenciasList.subTitle[locale]}
          list={conferenciasList.list}
          locale={locale}
          text={conferenciasText.text}
          textColor="white"
        />
        <TextBookCall
          textColor={textColor}
          buttonTo="contacto"
          buttonText="Contacta"
          text={bookCallText[locale]}
        />
        <OrangeShadow />
      </div>
    </ConferenciasBg>
  )
}

export default Conferencias
