import React from "react"
import { container, item_flex } from "./flexGrid.module.scss"

const FlexGrid = ({ list , locale}) => {
  return (
    <div className={container}>
      {list &&
        list.map((item, i) => (
          <div className={item_flex} key={i}>
            <img src={item.img} alt={item.title[locale]} />
            <p>{item.date}</p>
            <h5>{item.title[locale]}</h5>
            <p>{item.text && item.text[locale]}</p>
          </div>
        ))}
    </div>
  )
}

export default FlexGrid
