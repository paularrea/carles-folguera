import React from "react"
import { container } from "./link.module.scss"

const DownloadFile = ({ link, title, textColor }) => {
  return (
    <div className={container}>
      <h4 style={{ color: textColor && textColor}}>
        Descarga{" "}
        <a target="_blank" rel="noopener noreferrer" href={link}>
          AQUÍ
        </a>{" "}
        la presentación de {title} para más información.
      </h4>
    </div>
  )
}

export default DownloadFile
