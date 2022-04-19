import React from "react"
import { Link } from "react-scroll"
import { active, nav_a } from "../../header.module.scss"
import Languages from "../../../../translations/languages"
import { menuList } from "../../../utils/data/lists"
import { useIntl } from "react-intl"
import FadeIn from "../../../utils/animation/FadeIn"

const Navigation = ({ currentLocale, handleChange }) => {
  const { locale } = useIntl()
  return (
    <FadeIn>
      <nav>
        {menuList.map(tab => {
          return (
            <Link
              className={nav_a}
              activeClass={active}
              to={tab.page}
              spy={true}
              smooth={true}
              offset={-10}
              duration={1000}
            >
              {tab.title[locale]}
            </Link>
          )
        })}
        <Languages
          color="white"
          currentLocale={currentLocale}
          handleChange={handleChange}
        />
      </nav>
    </FadeIn>
  )
}

export default Navigation
