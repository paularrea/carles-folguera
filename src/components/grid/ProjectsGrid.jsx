import React from "react"
import { Grid, Row, Col } from "react-flexbox-grid"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { container, item, caption } from "./grid.module.scss"
import data from "./projectsData"

const ProjectsGrid = ({ projectsList }) => {
  console.log(projectsList, 'kk')
  return (
    <div className={container}>
      <Grid
        style={{
          width: "100%",
        }}
      >
        <Row>
          {projectsList.map(project => (
            <Col
              style={{
                display: "flex",
                jusifyContent: "center",
                alignItems: "flex-start",
                padding: "0",
              }}
              md={4}
              sm={12}
              xs={12}
            >
              <div className={item}>
                <Link to={ "/projects/" + project.frontmatter.slug}>
                  <Img
                    style={{ height: "100%", width: "100%" }}
                    imgStyle={{ objectFit: "cover" }}
                    fluid={project.frontmatter.thumb.childImageSharp.fluid}
                  />
                  <div className={caption}>
                    <h3>{project.frontmatter.title}</h3>
                    <p>{project.frontmatter.stack}</p>
                  </div>
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </Grid>
    </div>
  )
}

export default ProjectsGrid
