import React from "react"
import check from "../../../images/icons/check.png"
import SlideIn from "../animation/SlideIn"
import FadeIn from "../animation/FadeIn"
import { container, flex_list } from "./textComponent.module.scss"

const TextComponent = ({ title, subTitle, text, list, textColor, locale }) => {
  return (
    <div className={container}>
      <SlideIn>
        <h6>{subTitle}</h6>
        <h2 style={{ color: textColor }}>{title}</h2>
      </SlideIn>
      {text && (
        <FadeIn>
          {text[locale]}
          <br />
        </FadeIn>
      )}
      <ul>
        {list &&
          list.map((item, i) => {
            return (
              <SlideIn>
                <li className={flex_list} key={i}>
                  <img src={check} alt="check" />
                  <p style={{ color: textColor }}>{item[locale]}</p>
                </li>
              </SlideIn>
            )
          })}
      </ul>
    </div>
  )
}

export default TextComponent
