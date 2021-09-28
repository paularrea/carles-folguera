import React from "react"
import { Grid, Row, Col } from "react-flexbox-grid"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { container, item, caption } from "./grid.module.scss"
import data from "../carousel/projectsData"

const ProjectsGrid = () => {
  const allImagesQuery = graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "carousel" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                base64
                aspectRatio
                src
                srcSet
                sizes
              }
            }
          }
        }
      }
    }
  `
  const {
    allFile: { edges: images },
  } = useStaticQuery(allImagesQuery)

  return (
    <div className={container}>
      <Grid>
        <Row>
          {images.map(image => (
            <Col
              style={{
                display: "flex",
                jusifyContent: "center",
                alignItems: "flex-start",
              }}
              md={4}
              sm={12}
              xs={12}
            >
              <div className={item}>
                <Link to={image.node.base.split(".")[0]}>
                  <Img
                    style={{ height: "100%", width: "100%" }}
                    imgStyle={{ objectFit: "cover" }}
                    fluid={image.node.childImageSharp.fluid}
                  />
                  {data.map(project => {
                    if (image.node.base.split(".")[0] === project.name) {
                      return (
                        <div className={caption}>
                          <h3 style={{ fontFamily: project.font_family }}>
                            {project.title}
                          </h3>
                          <p>{project.sub_title}</p>
                        </div>
                      )
                    } else {
                      return null
                    }
                  })}
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
