import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { Switch } from "./Switch"

const DarkModeToggle = () => {
  return (
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
  )
}

export default DarkModeToggle
