import React from "react"
import Carousel from "react-grid-carousel"
import { testimonials } from "./data"
import "./testimonials.css"
import { card } from "./testimonials.module.scss"

const Testimonials = () => {
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
      {testimonials.map(person => {
        return (
          <Carousel.Item>
            <div className={card}>
              <div>
                <h5>{person.type}</h5>
                <p>{person.text}</p>
              </div>
              <section>
                <img src={person.img} alt={person.name} />
                <div>
                  <p>
                    <b>{person.name}</b>
                  </p>
                  <p>{person.description}</p>
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
