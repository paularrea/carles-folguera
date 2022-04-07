import React from "react"
import { container, item_flex } from "./flexGrid.module.scss"

const FlexGrid = ({ list }) => {
  return (
    <div className={container}>
      {list &&
        list.map((item, i) => (
          <div className={item_flex} key={i}>
            <img src={item.img} alt={item.title} />
            <p>{item.date}</p>
            <h5>{item.title}</h5>
            <p>{item.text}</p>
          </div>
        ))}
    </div>
  )
}

export default FlexGrid
