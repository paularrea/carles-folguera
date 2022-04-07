import React from "react"
import { Link } from "react-scroll"
import { button } from "./buttons.module.scss"

const Button = ({ children, to }) => {
  return (
    <Link
      className={button}
      to={to}
      spy={true}
      smooth={true}
      offset={-40}
      duration={1000}
    >
      {children}
    </Link>
  )
}
export default Button

{
  /* <a href={to} target="_blank" rel="noopener noreferrer" className={button}>
{children}
</a> */
}
