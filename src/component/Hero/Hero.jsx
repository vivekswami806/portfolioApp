import React from 'react'
import { getImageUrl } from '../../Photo'
import styles from '../Hero/Hero.module.css'

function Hero() {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}> Hi , i'm Vivek</h1>
            <p className={styles.description}>I'm a full stack developer with 1 year experince using React and Node.js Reach out if yod'd like to learn more </p>
            <a href="mailto:mtemail@gmail.com" className={styles.contactbtn}>Contact me </a>
        </div>        
        {/* <div className={styles.heroImgArea}>
        <img src={getImageUrl("hero/hero.avif")} alt="" className={styles.Heroimg}/>
        </div> */}
        
        <div className={styles.topblur}></div>
        {/* <div className={styles.bottomblur}></div> */}
    </section>
  )
}

export default Hero