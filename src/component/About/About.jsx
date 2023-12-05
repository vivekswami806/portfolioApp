import React from 'react'
import styles from '../About/about.module.css'
function About() {
  return (
    <section className={styles.container}>
<h2 className={styles.header}>About</h2>
<div className={styles.title}>
    <h6 className={styles.titleHead}>Hi i'am Vivek Kumar, Nice to meet You. Please look around</h6>
    <p className={styles.titlecontent}>I'm a front end engineer with developing complex, high profile web applications . I
 specialise in JavaScript, environment modern technologies such as React and Redux. I
 pride myself in writing scalable, elegant code — creating simple solutions to complex
 problems.</p>
</div>

    </section>
  )
}

export default About