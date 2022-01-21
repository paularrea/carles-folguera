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
import Button from "../buttons/button"

const Projects = ({ projectsList }) => {
  return (
    <div className={container} id="projects">
      <Seo title="Projects" />
      {projectsList.map((project, key) => {
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
              <p className={phrase}>
                <MediaQuery minWidth={900}>
                  {project.frontmatter.resume}
                </MediaQuery>
                <br />
                <Button to={project.frontmatter.slug}>See more {'->'}</Button>
              </p>
            </div>
          </Fade>
        )
      })}
    </div>
  )
}
export default Projects
