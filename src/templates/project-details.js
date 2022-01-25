import React from "react"
import Layout from "../components/layout/layout"
import { container, flex, md, abs } from "../styles/project-details.module.scss"
import { graphql } from "gatsby"
import TemplateHeader from "../components/header/TemplateHeader"

export default function ProjectDetails({ data, pageContext }) {
  const { previous, next } = pageContext
  const { html } = data.markdownRemark
  const { title, stack } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <div className={abs}>
        <TemplateHeader />
      </div>
      <div className={container}>
        <div className={flex}>
          {previous && <a href={previous.slug}>{"<"} Previous</a>}
          <h3>{title}</h3>
          {next && <a href={next.slug}>Next {">"}</a>}
        </div>
        <h6>{stack}</h6>
        <div className={md} dangerouslySetInnerHTML={{ __html: html }} />
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
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
        }
      }
    }
  }
`
