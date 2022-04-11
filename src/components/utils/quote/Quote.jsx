import React from "react"
import Button from "../../buttons/button"
import quotes from "../../../images/icons/quotes.png"
import { container, abs_quotes } from "./quote.module.scss"
import SlideIn from "../animation/SlideIn"

const Quote = ({ text, buttonTo, buttonText }) => {
  return (
    <div className={container}>
      <section>
        <div className={abs_quotes}>
          <img src={quotes} alt="comillas" />
        </div>
        <SlideIn>
          <h4>{text}</h4>
          <br />
          <Button to={buttonTo}>{buttonText}</Button>
        </SlideIn>
      </section>
    </div>
  )
}

export default Quote
