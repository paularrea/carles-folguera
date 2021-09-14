import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../../components/layout/layout"
import MasonryGrid from "../../components/masonry/masonry"

const LisbonProject = () => {
  const allImagesQuery = graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "projects/lisbon" }
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

  console.log(images, "lisbon")
  return (
    <Layout>
      <MasonryGrid images={images} />
    </Layout>
  )
}

export default LisbonProject
