import React from "react";
import skillfile from "../../Data/skillfile.json";
import { getImageUrl } from "../../Photo";
import styles from "./skills.module.css"
function Skills() {
  return (
    <section className={styles.container} id="sectionPage" name="skill">
      <h2 className={styles.title}>Skills</h2>
      
        <div className={styles.skills}>
       
          {skillfile.map((data, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.imgstyle}> 
                  <img src={getImageUrl(data.icon)} alt={data.title} className={styles.imgcontainer}/>
                </div>
                <h4>{data.title} </h4>
              </div>
            );
          })}
           
        </div> 
       
          
    </section>
  );
}

export default Skills;
