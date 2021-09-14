import * as React from "react"
import Layout from "../../components/layout/layout"
import Seo from "../../components/seo"
import CarouselContainer from "../../components/carousel/CarouselContainer"
import ProjectsGrid from "../../components/grid/ProjectsGrid"

const Projects = () => (
  <Layout>
    <Seo title="Projects" />
    <CarouselContainer />
    <ProjectsGrid />
  </Layout>
)
export default Projects
