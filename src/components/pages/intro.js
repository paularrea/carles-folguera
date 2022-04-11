import React from "react"
import Seo from "../seo"
import { container } from "../../styles/intro.module.scss"
import Button from "../buttons/button"
import { useIntl } from "react-intl"
import { buttonsText, introText } from "../utils/data/texts"
import IntroBg from "../GatsbyImages/IntroBg"
import SlideIn from "../utils/animation/SlideIn"

const Intro = () => {
  const { locale } = useIntl()
  return (
    <IntroBg>
      <div id="intro">
        <Seo title="Frontend" />
        <div className={container}>
          <SlideIn>
            <h1>{introText.title[locale]}</h1>
            <h4>{introText.subTitle[locale]}</h4>
            <br />
            <Button to="bio">{buttonsText.discover[locale]}</Button>
          </SlideIn>
        </div>
      </div>
    </IntroBg>
  )
}

export default Intro
