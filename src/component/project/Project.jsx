import React from 'react'
import projects from "../../Data/project.json"
import ProjectCard from './ProjectCard'
// import {styles} from "../project/project.module.css"

function Project() {
  return (
    <section /* className={styles.container} */>
        <h2>Project</h2>
        <div>
            {projects.map((project,id)=>{
                return ( <ProjectCard key={id} project={project}/>
                )
            })}
        </div>
    </section>
  )
}

export default Project