import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { Switch } from "./Switch"
import {container} from "./switcher.module.scss"

const DarkModeToggle = () => {
  return (
    <div className={container}>
      <p>Dark mode</p>
      <ThemeToggler>
        {({ theme, toggleTheme }) => {
          return (
            <Switch
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
              checked={theme === "dark"}
            />
          )
        }}
      </ThemeToggler>
    </div>
  )
}

export default DarkModeToggle
