import React from "react"
import Carousel from "react-grid-carousel"
import { testimonialsList } from "../data/lists"
import "./testimonials.css"
import { card } from "./testimonials.module.scss"

const Testimonials = ({ locale }) => {
  return (
    <Carousel
      cols={3}
      rows={1}
      //   gap={50}
      autoplay={10000}
      loop
      showDots
      dotColorActive="#FF914C"
    >
      {testimonialsList.list.map((person, i) => {
        return (
          <Carousel.Item key={i}>
            <div className={card}>
              <div>
                <h5>{person.type[locale]}</h5>
                <p>{person.text[locale]}</p>
              </div>
              <section>
                <img src={person.img} alt={person.name} />
                <div>
                  <p>
                    <b>{person.name}</b>
                  </p>
                  <p>{person.description[locale]}</p>
                </div>
              </section>
            </div>
          </Carousel.Item>
        )
      })}
    </Carousel>
  )
}

export default Testimonials
