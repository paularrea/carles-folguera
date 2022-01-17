import React from "react"
import Seo from "../seo"
import Img from "gatsby-image"
import MediaQuery from "react-responsive"
import Fade from "react-reveal/Fade"
import {
  container,
  img,
  item,
  alternate,
  stack,
  phrase,
} from "../../styles/projects.module.scss"
import { Link } from "gatsby"

const Projects = ({ projectsList }) => {
  console.log(projectsList)
  return (
    <div className={container} id="projects">
      <Seo title="Projects" />
      {projectsList.map((project, key) => {
        console.log(key)
        return (
          <Fade bottom>
          <div className={key % 2 === 0 ? item : alternate}>
            <Link to={project.frontmatter.slug}>
              <div className={img}>
                <Img
                  style={{ height: "100%", width: "100%" }}
                  imgStyle={{ objectFit: "cover" }}
                  fluid={project.frontmatter.thumb.childImageSharp.fluid}
                />
              </div>
            </Link>
            <Link to={project.frontmatter.slug}>
                <h1>{project.frontmatter.title}</h1>
            </Link>

            <div className={stack}>
              <p>{project.frontmatter.stack}</p>
            </div>
            <MediaQuery minWidth={900}>
              <p className={phrase}>{project.frontmatter.resume}</p>
            </MediaQuery>
          </div>
          </Fade>
        )
      })}
    </div>
  )
}
export default Projects
