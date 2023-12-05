import { useState } from 'react'

import styles from'./App.module.css'

import Hero from './component/Hero/Hero'
import About from './component/About/About'
import Navbar from './component/Navbar/Navbar'
import Skills from './component/skills/Skills'
import Project from './component/project/Project'
function App() {

  return (
    <>
   <div className={styles.App}>
  <Navbar/>
   <Hero/>
   <About/>
   <Skills/>
   <Project/>
   </div>
    </>
  )
}

export default App
