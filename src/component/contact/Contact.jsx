import React from 'react'
import { getImageUrl } from '../../Photo'
import styles from "../contact/contact.module.css"
function Contact() {
  return (<footer className={styles.container} name="contact">
            <div className={styles.text}>
                <h2>
                    Contact
                </h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li  className={styles.link}>
                    <img src={getImageUrl("contact/email.png")} alt=""  width={"20px"}/>
                    <a href="mailto:vivekswami806@gmail.com">Gmail.in</a>
                </li>
                <li  className={styles.link}>
                    <img src={getImageUrl("contact/linkedin.png")} alt="" width={"20px"} />
                    <a href="https://www.linkedin.com/in/vivek2998?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target={'_blank'}>Linkedin.in</a>
                </li>
                <li  className={styles.link}>
                    <img src={getImageUrl("contact/github.png")} alt="" width={"20px"} />
                    <a href="https:/www.github.com/vivekswami806" target={"_blank"}>Githubin</a>
                </li>
            </ul>
  </footer>
    
  )
}

export default Contact