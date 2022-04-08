import React from "react"
import { container } from "../../styles/pages.module.scss"
import TextComponent from "../utils/text/TextComponent"
import OrangeShadow from "../utils/orangeShadow/OrangeShadow"
import FlexGrid from "../utils/flexGrid/FlexGrid"
import TextBookCall from "../utils/text/TextBookCall"
import DownloadFile from "../utils/links/DownloadFile"
import { consultoriaFlexList, consultoriaList } from "../utils/data/lists"
import { useIntl } from "react-intl"
import { bookCallText, consultoriaText } from "../utils/data/texts"

const Consultoria = () => {
  const { locale } = useIntl()
  const textColor = "white"
  
  return (
    <div
      style={{ backgroundColor: "#060823" }}
      className={container}
      id="consultoria"
    >
      <TextComponent
        title={consultoriaList.title[locale]}
        subTitle={consultoriaList.subTitle[locale]}
        list={consultoriaList.list}
        locale={locale}
        text={consultoriaText.text}
        textColor="white"
      />
      <FlexGrid locale={locale} list={consultoriaFlexList} />
      <DownloadFile
        textColor={textColor}
        link=""
        title={consultoriaText.title}
      />
      <TextBookCall
        textColor={textColor}
        buttonTo="contacto"
        buttonText="Contacta"
        text={bookCallText[locale]}
      />
      <OrangeShadow />
    </div>
  )
}

export default Consultoria
