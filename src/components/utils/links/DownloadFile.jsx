import React from "react"
import { downloadFileText } from "../data/texts"
import { container } from "./link.module.scss"
import SlideIn from "../animation/SlideIn"

const DownloadFile = ({ link, title, textColor, locale }) => {
  return (
    <div className={container}>
      <SlideIn>
        <h4 style={{ color: textColor && textColor }}>
          {downloadFileText.download[locale]}{" "}
          <a target="_blank" rel="noopener noreferrer" href={link}>
            {downloadFileText.here[locale]}
          </a>{" "}
          {downloadFileText.presentation[locale]} {title[locale]}{" "}
          {downloadFileText.information[locale]}
        </h4>
      </SlideIn>
    </div>
  )
}

export default DownloadFile
