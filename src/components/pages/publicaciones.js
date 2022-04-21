import React from "react"
import { useIntl } from "react-intl"
import { container } from "../../styles/pages.module.scss"
import { publicationsList } from "../utils/data/lists"
// import Testimonials from "../utils/testimonials/Testimonials"
import SlideIn from "../utils/animation/SlideIn"

const Publicaciones = () => {
  const { locale } = useIntl()

  return (
    <div className={container}>
      <SlideIn>
        <h6>{publicationsList.title[locale]}</h6>
        <p>{publicationsList.subTitle[locale]}</p>
      </SlideIn>
      <br />
      <ul>
        {publicationsList.list.map((item, i) => {
          return (
            <SlideIn>
              <li key={i}>
                <span style={{ color: item.color }}>{item.year}</span>
                <p> {item.text[locale]}</p>
              </li>
            </SlideIn>
          )
        })}
      </ul>
      {/* <br />
      <br />
      <SlideIn>
      <h6>{testimonialsList.title[locale]}</h6>
      <Testimonials locale={locale} />
      </SlideIn> */}
    </div>
  )
}

export default Publicaciones
