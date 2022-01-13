import React from "react"
import Layout from "../components/layout/layout"
import { container, img, text } from "../styles/project-details.module.scss"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, stack, featuredImg } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <div className={container}>
        <h3>{title}</h3>
        <h6>{stack}</h6>
        <div className={img}>
          <GatsbyImage
            image={featuredImg.childImageSharp.gatsbyImageData}
            alt="featured"
          />
        </div>
        <div className={text} dangerouslySetInnerHTML={{ __html: html }} />
          <Link to="/">Go back</Link>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
            )
          }
        }
      }
    }
  }
`
