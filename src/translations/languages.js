import React, { useState } from "react"
import { container } from "./languages.module.scss"
import { LOCALES } from "./locales"

const Languages = ({ currentLocale, handleChange }) => {
  return (
    <div className={container}>
      <button
        onClick={handleChange}
        key={LOCALES.SPANISH}
        value={LOCALES.SPANISH}
      >
        Esp
      </button>
      /
      <button
        onClick={handleChange}
        key={LOCALES.CATALAN}
        value={LOCALES.CATALAN}
      >
        Cat
      </button>
    </div>
  )
}

export default Languages
