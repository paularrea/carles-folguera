import React from "react"
import { container } from "../../styles/intro.module.scss"
import Button from "../buttons/button"
import { useIntl } from "react-intl"
import { buttonsText, introText } from "../utils/data/texts"
import IntroBg from "../GatsbyImages/IntroBg"
import SlideIn from "../utils/animation/SlideIn"
import GoDownArrow from "../utils/goDownArrow/goDownArrow"

const Intro = () => {
  const { locale } = useIntl()
  return (
    <IntroBg>
      <div style={{position:'relative'}} id="intro">
        <div className={container}>
          <SlideIn>
            <h1>{introText.title[locale]}</h1>
            <h4>{introText.subTitle[locale]}</h4>
            <br />
            <Button to="bio">{buttonsText.discover[locale]}</Button>
          </SlideIn>
        </div>
        <GoDownArrow section='bio'/>
      </div>
    </IntroBg>
  )
}

export default Intro
