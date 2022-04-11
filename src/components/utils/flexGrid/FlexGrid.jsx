import React from "react"
import { container, item_flex } from "./flexGrid.module.scss"
import SlideIn from "../animation/SlideIn"

const FlexGrid = ({ list, locale, textColor, align }) => {
  return (
    <div className={container}>
      {list &&
        list.map((item, i) => (
          <div className={item_flex} key={i}>
            <SlideIn>
              {item.img && <img src={item.img} alt={item.title[locale]} />}
              <p>{item.date}</p>
              {item.title && (
                <h5 style={{ color: textColor, textAlign: align }}>
                  {item.title[locale]}
                </h5>
              )}
              {item.text && (
                <p style={{ color: textColor, textAlign: align }}>
                  {item.text && item.text[locale]}
                </p>
              )}
              {item.superTitle && <h3>{item.superTitle[locale]}</h3>}
              {item.superText && <h4>{item.superText[locale]}</h4>}
            </SlideIn>
          </div>
        ))}
    </div>
  )
}

export default FlexGrid
