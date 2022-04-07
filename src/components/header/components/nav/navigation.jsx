import React from "react"
import { Link } from "react-scroll"
import { active, nav_a } from "../../header.module.scss"
import { tabs } from "./tabs"

const Navigation = () => {
  return (
    <nav>
      {tabs.map(tab => {
        return (
          <Link
          className={nav_a}
            activeClass={active}
            to={tab.page}
            spy={true}
            smooth={true}
            offset={-40}
            duration={1000}
          >
            {tab.text}
          </Link>
        )
      })}
    </nav>
  )
}

export default Navigation
