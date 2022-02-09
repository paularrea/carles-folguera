import * as React from "react"
import {
  container,
} from "../../styles/contact.module.scss"

const Contact = () => {
  // const details = [
  //   {
  //     title: "Drop me a line",
  //     aTag: "mailto:paularrea12@gmail.com",
  //     aText: "paularrea12@gmail.com",
  //   },
  //   {
  //     title: "Call me",
  //     aTag: "tel:+351912677606",
  //     aText: "+34 638 305 414",
  //   },
  //   {
  //     title: "Github",
  //     aTag: "https://github.com/paularrea",
  //     aText: (
  //       <img
  //         src={changeMode === "dark" ? githubDark : githubLogo}
  //         alt="Github link"
  //       />
  //     ),
  //   },
  // ]
  return (
      <div id="contact" className={container}>
        Contacto
      </div>
  )
}

export default Contact
