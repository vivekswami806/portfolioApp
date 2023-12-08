import React from 'react'
import projects from "../../Data/project.json"
import ProjectCard from './ProjectCard'
 import styles from "../project/project.module.css"

function Project() {
  return (
    <section  className={styles.container} name="project" >
        <h2  className={styles.title}>Project</h2>
        <div className={styles.projects}>
            {projects.map((project,id)=>{
                return ( <ProjectCard key={id} project={project}/>
                )
            })}
        </div>
        <div className={styles.bottomblur}></div> 
    </section>
  )
}

export default Project