import * as React from "react"
import Seo from "../../components/seo"
import MediaQuery from "react-responsive"
import {container} from "../../styles/projects.module.scss"
import CarouselContainer from "../../components/carousel/CarouselContainer"
import ProjectsGrid from "../../components/grid/ProjectsGrid"
import ProjectsHeader from "../../components/header/ProjectsHeader"
import AnimatedCursor from "../../components/cursor/AnimatedCursor"

const Projects = () => (
  <div className={container}>
    <MediaQuery minWidth={900}>
      <AnimatedCursor />
    </MediaQuery>
    <ProjectsHeader />
    <Seo title="Projects" />
    <CarouselContainer />
    <ProjectsGrid />
  </div>
)
export default Projects
