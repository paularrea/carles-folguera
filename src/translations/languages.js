import React from "react"
import { container } from "./languages.module.scss"
import { LOCALES } from "./locales"

const Languages = ({ color, currentLocale, handleChange }) => {
  return (
    <div style={{ color: color }} className={container}>
      <button
        style={{ color: color }}
        onClick={handleChange}
        key={LOCALES.SPANISH}
        value={LOCALES.SPANISH}
      >
        ESP
      </button>
      /
      <button
        style={{ color: color }}
        onClick={handleChange}
        key={LOCALES.CATALAN}
        value={LOCALES.CATALAN}
      >
        CAT
      </button>
    </div>
  )
}

export default Languages
