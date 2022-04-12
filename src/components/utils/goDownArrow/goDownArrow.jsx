import React from "react"
import { Link } from "react-scroll"
import {container} from "./goDownArrow.module.scss"
import arrowDown from "../../../images/icons/arrow-down.png"

const GoDownArrow = ({ section }) => {
  return (
    <Link className={container} to={section} spy={true} smooth={true} offset={-40} duration={1000}>
      <img src={arrowDown} alt="go to next section" />
    </Link>
  )
}

export default GoDownArrow
