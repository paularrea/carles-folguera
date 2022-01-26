import React from "react"
import { skills } from "./skills"
import { container, skill, bar, bar_component } from "./skills.module.scss"
import { InView } from "react-intersection-observer"
import AnimatedCounter from "./AnimatedCounter"

const SkillsComponent = () => {
  return (
    <InView>
      {({ inView, ref, entry }) => (
        <div ref={ref} className={container}>
          {skills.map(item => {
            return (
              <div className={skill}>
                <p>{item.name}</p>
                <div className={bar_component}>
                  <div className={bar}>
                    <div style={{ width: inView && item.knowledge }}></div>
                  </div>
                  <p>
                    <AnimatedCounter
                      inView={inView}
                      number={item.knowledge}
                      duration="2"
                    />
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </InView>
  )
}

export default SkillsComponent
