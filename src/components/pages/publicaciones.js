import React from "react"
import { useIntl } from "react-intl"
import { container, a_tag_link } from "../../styles/pages.module.scss"
import { publicationsList, mediaList } from "../utils/data/lists"
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
      <br />
      <SlideIn>
        <h6>{mediaList.title[locale]}</h6>
      </SlideIn>
      {locale === "CAT" && (
        <>
          <ul>
            {mediaList.catList.map((item, i) => {
              return (
                <li key={i}>
                  <a
                    className={a_tag_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={item.url}
                  >
                    <p> {item.text[locale]}</p>
                  </a>
                </li>
              )
            })}
          </ul>
        </>
      )}
      <ul>
        {mediaList.list.map((item, i) => {
          return (
            <SlideIn>
              <li key={i}>
                <a
                  className={a_tag_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.url}
                >
                  <p> {item.text[locale]}</p>
                </a>
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
