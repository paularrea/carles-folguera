import React from "react"
import check from "../../../images/icons/check.png"
import { container, flex_list } from "./textComponent.module.scss"

const TextComponent = ({ title, subTitle, text, list, textColor, locale }) => {
  return (
    <div className={container}>
      <h6>{subTitle}</h6>
      <h2 style={{ color: textColor }}>{title}</h2>
      {text && (
        <div>
          {text[locale]}
          <br />
        </div>
      )}
      <ul>
        {list &&
          list.map((item, i) => {
            return (
              <li className={flex_list} key={i}>
                <img src={check} alt="check" />
                <p style={{ color: textColor }}>{item[locale]}</p>
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default TextComponent
