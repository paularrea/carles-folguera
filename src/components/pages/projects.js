import React from "react"
import { container } from "../../styles/projects.module.scss"

const Projects = ({ projectsList }) => {
  return (
    <div className={container} id="projects">
      <p>Projects</p>
      {projectsList.map((project, key) => {})}
    </div>
  )
}
export default Projects
