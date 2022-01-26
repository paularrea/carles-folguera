import React, {useState, useEffect} from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Intro from "../components/pages/intro"
import Projects from "../components/pages/projects"
import About from "../components/pages/about"
import Contact from "../components/pages/contact"

const Home = ({ data }) => {
  const [changeMode, setChangeMode] = useState('');
  
  useEffect(() => {
    setChangeMode(changeMode)
  }, [changeMode]);
  
  const projectsList = data.allMarkdownRemark.nodes
  return (
    <Layout changeMode={changeMode} setChangeMode={setChangeMode}>
      <Intro />
      <Projects projectsList={projectsList} />
      <About/>
      <Contact changeMode={changeMode} />
    </Layout>
  )
}
export default Home

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        frontmatter {
          slug
          stack
          title
          resume
          url
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        html
        id
      }
    }
  }
`
