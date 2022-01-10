import * as React from "react"
import Layout from "../components/layout/layout"
import Intro from "../components/pages/intro"
import Projects from "../components/pages/projects"
import About from "../components/pages/about"
import Contact from "../components/pages/contact"

const Home = () => {
  return (
    <Layout>
<Intro/>
      <Projects/>
      <About/>
      <Contact/>
    </Layout>
  )
}
export default Home
