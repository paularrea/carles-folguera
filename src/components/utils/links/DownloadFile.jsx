import React from "react"
import { downloadFileText } from "../data/texts"
import { container } from "./link.module.scss"

const DownloadFile = ({ link, title, textColor, locale }) => {
  return (
    <div className={container}>
      <h4 style={{ color: textColor && textColor }}>
        {downloadFileText.download[locale]}{" "}
        <a target="_blank" rel="noopener noreferrer" href={link}>
          {downloadFileText.here[locale]}
        </a>{" "}
        {downloadFileText.presentation[locale]} {title[locale]}{" "}
        {downloadFileText.information[locale]}
      </h4>
    </div>
  )
}

export default DownloadFile
