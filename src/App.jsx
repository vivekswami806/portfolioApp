import { useState } from 'react'

import styles from'./App.module.css'
import Navbar from './component/Navbar'
import Hero from './component/Hero/Hero'
import About from './component/About/About'
function App() {

  return (
    <>
   <div className={styles.App}>
   <Navbar/>
   <Hero/>
   <About/>
   </div>
    </>
  )
}

export default App
