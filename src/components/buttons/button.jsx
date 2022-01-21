import { Link } from "gatsby"
import React from "react"
import { button } from "./buttons.module.scss"

const Button = ({ children, to }) => {
  return (
    <Link to={to} className={button}>
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
