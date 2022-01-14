import * as React from "react"
import Seo from "../seo"
import {
  container,
  box,
  flex_box,
  text,
} from "../../styles/contact.module.scss"

const details = [
  {
    title: "Drop me a line",
    aTag: "mailto:paularrea12@gmail.com",
    aText: "paularrea12@gmail.com",
  },
  {
    title: "Call me",
    aTag: "tel:+351912677606",
    aText: "+34 638 305 414",
  },
]
const Contact = () => (
  <>
    <Seo title="Contact" />
    <div id="contact" className={container}>
      <section>
        <h1>I'd love to hear from you.</h1>
        <p className={text}>
          Need a hand? Let's talk about your website or project. <br /> Here's
          how to reach me.
        </p>
      </section>
      <section className={flex_box}>
        {details.map(item => {
          return (
            <div className={box}>
              <p>
                {item.title}{" "}
                <a rel="noreferrer" target="_blank" href={item.aTag}>
                  {item.aText}
                </a>
              </p>
            </div>
          )
        })}
      </section>
    </div>
  </>
)

export default Contact
