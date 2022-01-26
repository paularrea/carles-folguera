import * as React from "react"
import Seo from "../seo"
import githubLogo from "../../images/icons/github.png"
import githubDark from "../../images/icons/github-dark.png"
import {
  container,
  box,
  flex_box,
  text,
} from "../../styles/contact.module.scss"

{
  /* <div className={img}>
<img
  src={changeMode === "dark" ? githubDark : githubLogo}
  alt="Github link"
/>
<p>Github</p>
</div> */
}
const Contact = ({ changeMode }) => {
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
    {
      title: "Github",
      aTag: "https://github.com/paularrea",
      aText: (
        <img
          src={changeMode === "dark" ? githubDark : githubLogo}
          alt="Github link"
        />
      ),
    },
  ]
  return (
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
}

export default Contact
