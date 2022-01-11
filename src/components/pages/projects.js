
import React from "react"
import Seo from "../seo"
import ProjectsGrid from "../grid/ProjectsGrid"

const Projects = ({ projectsList }) => {
  return (
    <div id="projects">
      <Seo title="Projects" />
      <ProjectsGrid projectsList={projectsList}/>
    </div>
  )
}
export default Projects