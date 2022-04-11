import * as React from "react"
import { container } from "../../styles/pages.module.scss"
import DownloadFile from "../utils/links/DownloadFile"
import TextComponent from "../utils/text/TextComponent"
import { useIntl } from "react-intl"
import {
  mentoriaFlexList,
  mentoriaList,
  mentoriaRecomendedList,
} from "../utils/data/lists"
import { mentoriaText } from "../utils/data/texts"
import FlexGrid from "../utils/flexGrid/FlexGrid"

const Mentoria = () => {
  const { locale } = useIntl()

  return (
    <div
      id="mentoria"
      className={container}
      style={{ backgroundColor: "whitesmoke" }}
    >
      <TextComponent
        title={mentoriaList.title[locale]}
        subTitle={mentoriaList.subTitle[locale]}
        list={mentoriaList.list}
        locale={locale}
        text={mentoriaText.text}
      />
      <FlexGrid
        list={mentoriaRecomendedList}
        locale={locale}
        textColor="#060823"
        align="left"
      />
      <FlexGrid
        list={mentoriaFlexList}
        locale={locale}
        textColor="#060823"
        align="left"
      />
      <DownloadFile
        locale={locale}
        title={mentoriaText.title}
        link="https://www.google.com/"
      />
    </div>
  )
}

export default Mentoria
