import React from "react"
import { useIntl } from "react-intl"
import { container } from "../../styles/pages.module.scss"
import { publicationsList, testimonialsList } from "../utils/data/lists"
import Testimonials from "../utils/testimonials/Testimonials"

const Publicaciones = () => {
  const { locale } = useIntl()

  return (
    <div className={container}>
      <h6>{publicationsList.title[locale]}</h6>
      <p>{publicationsList.subTitle[locale]}</p>
      <br />
      <ul>
        {publicationsList.list.map((item, i) => {
          return (
            <li key={i}>
              <span style={{ color: item.color }}>{item.year}</span>
              <p> {item.text[locale]}</p>
            </li>
          )
        })}
      </ul>
      <br />
      <br />
      <h6>{testimonialsList.title[locale]}</h6>
      <Testimonials locale={locale} />
    </div>
  )
}

export default Publicaciones
