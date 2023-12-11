
import React from 'react'
import { getImageUrl } from '../../Photo'
import styles from '../Hero/Hero.module.css'

function Hero() {
  return (
    <section className={styles.container}  name="/">
        <div className={styles.content}>
            <h1 className={styles.title}> Hi , i am Vivek</h1>
            <p className={styles.description}>I'm  full stack developer with 1 year experince using React and Node.js Reach out if yod'd like to learn more </p>
            <a href="mailto:vivekswami806@gmail.com" className={styles.contactbtn}>Contact me </a>
        </div>             
        <div className={styles.topblur}> </div>
        
    </section>
  )
}

export default Hero