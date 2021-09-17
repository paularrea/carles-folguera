import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { carousel_img } from "./carousel.module.scss"
import { Carousel } from "react-bootstrap"
import "./carousel.css"

const CarouselContainer = () => {
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
    <Carousel touch wrap controls={false}>
      {images.map(image => (
        <Carousel.Item
          className={carousel_img}
          interval={3000}
          key={image.node.id}
        >
          <Link to={image.node.base.split(".")[0]}>
            <Img
              style={{ height: "100%", width: "100%" }}
              imgStyle={{ objectFit: "cover" }}
              fluid={image.node.childImageSharp.fluid}
              alt={image.node.base}
            />
            {/* <Carousel.Caption>
              <h5>{image.node.base.split(".")[0]}</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default CarouselContainer
