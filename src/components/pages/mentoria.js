import * as React from "react"
import { container } from "../../styles/pages.module.scss"
import DownloadFile from "../utils/links/DownloadFile"
import TextComponent from "../utils/text/TextComponent"
import { useIntl } from "react-intl"
import { mentoriaList } from "../utils/data/lists"
import { mentoriaText } from "../utils/data/texts"

const Mentoria = () => {
  const { locale } = useIntl()

  return (
    <div id="mentoria" className={container}>
      <TextComponent
        title={mentoriaList.title[locale]}
        subTitle={mentoriaList.subTitle[locale]}
        list={mentoriaList.list}
        locale={locale}
        text={mentoriaText.text}
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
