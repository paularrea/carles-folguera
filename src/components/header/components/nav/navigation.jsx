import React from "react"
import { Link } from "react-scroll"
import { active, nav_a } from "../../header.module.scss"
import Languages from "../../../../translations/languages"
import { menuList } from "../../../utils/data/lists"
import {useIntl} from 'react-intl'

const Navigation = ({ currentLocale, handleChange }) => {
  const {locale} = useIntl();
  return (
    <nav>
      {menuList.map(tab => {
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
            {tab.title[locale]}
          </Link>
        )
      })}
      <Languages currentLocale={currentLocale} handleChange={handleChange} />
    </nav>
  )
}

export default Navigation
