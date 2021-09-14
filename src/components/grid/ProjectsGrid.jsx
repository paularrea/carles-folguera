import React from "react"
import { Grid, Row, Col } from "react-flexbox-grid"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { container, item } from "./grid.module.scss"

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
            <Col md={4} sm={12} xs={12}>
              <div className={item}>
                <Link to={image.node.base.split(".")[0]}>
                  <Img
                    style={{ height: "100%", width: "100%" }}
                    imgStyle={{ objectFit: "cover" }}
                    fluid={image.node.childImageSharp.fluid}
                  />
                  <h5>{image.node.base.split(".")[0]}</h5>
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
