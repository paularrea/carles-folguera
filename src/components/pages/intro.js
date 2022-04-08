import React from "react"
import Seo from "../seo"
import { container } from "../../styles/intro.module.scss"
import Button from "../buttons/button"
import { useIntl } from "react-intl"
import { buttonsText, introText } from "../utils/data/texts"

const Intro = () => {
  const { locale } = useIntl()
  return (
    <div id="intro">
      <Seo title="Frontend" />
      <div className={container}>
        <h1>{introText.title[locale]}</h1>
        <h4>{introText.subTitle[locale]}</h4>
        <br />
        <Button to="bio">{buttonsText.discover[locale]}</Button>
      </div>
    </div>
  )
}

export default Intro
