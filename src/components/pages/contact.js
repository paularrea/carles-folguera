import * as React from "react"
import Seo from "../seo"
import { container, box, flex_box } from "../../styles/contact.module.scss"

const Contact = () => (
  <div id="contact">
    <Seo title="Contact" />
    <div className={container}>
      <section className={box} style={{ marginBottom: "3rem" }}>
        <h1 style={{ fontWeight: 700 }}>I'd love to hear from you.</h1>
        <p>
          Need a hand? Let's talk about your website or project. <br /> Here's
          how to reach me.
        </p>
      </section>
      <section className={flex_box}>
        <div className={box}>
          <p style={{ fontWeight: 700 }}>Drop me a line</p>
          <p>
            <a
              rel="noreferrer"
              target="_blank"
              href="mailto:paularrea12@gmail.com"
            >
              paularrea12@gmail.com
            </a>
          </p>
        </div>
        <div className={box}>
          <p style={{ fontWeight: 700 }}>Call me</p>
          <p>
            <a rel="noreferrer" target="_blank" href="tel:+351912677606">
              +34 638 305 414
            </a>
          </p>
        </div>
        <div className={box}>
          <p style={{ fontWeight: 700 }}>Follow me</p>
          <p>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.instagram.com/paularrea/"
            >
              @paularrea
            </a>
          </p>
        </div>
      </section>
    </div>
  </div>
)

export default Contact
