import * as React from "react"
import Seo from "../../components/seo"
import CarouselContainer from "../../components/carousel/CarouselContainer"
import ProjectsGrid from "../../components/grid/ProjectsGrid"
import ProjectsHeader from "../../components/header/ProjectsHeader"
import AnimatedCursor from "../../components/cursor/AnimatedCursor"

const Projects = () => (
  <>
    <AnimatedCursor />
    <ProjectsHeader />
    <Seo title="Projects" />
    <CarouselContainer />
    <ProjectsGrid />
  </>
)
export default Projects
