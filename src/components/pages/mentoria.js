import * as React from "react"
import {
  container,
  photo_container,
  float_section,
} from "../../styles/pages.module.scss"
import DownloadFile from "../utils/links/DownloadFile"
import TextComponent from "../utils/text/TextComponent"
import MentoriaImg from "../GatsbyImages/MentoriaImg"
import { useIntl } from "react-intl"
import {
  mentoriaFlexList,
  mentoriaList,
  mentoriaRecomendedList,
} from "../utils/data/lists"
import { mentoriaText } from "../utils/data/texts"
import FlexGrid from "../utils/flexGrid/FlexGrid"
import FadeIn from "../utils/animation/FadeIn"

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
      <FadeIn>
        <div className={photo_container}>
          <MentoriaImg />
          <section className={float_section}>
            <h2>{mentoriaRecomendedList.title[locale]}</h2>
            <FlexGrid
              list={mentoriaRecomendedList.list}
              locale={locale}
              textColor="#060823"
              align="center"
            />
          </section>
        </div>
      </FadeIn>
      <FlexGrid
        list={mentoriaFlexList}
        locale={locale}
        textColor="#060823"
        align="center"
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
