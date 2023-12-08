import React from "react";
import { getImageUrl } from "../../Photo";
import styles from "../project/projectCard.module.css";
function ProjcectCard({
  project: { title, imageSrc, description, skills, demo, source },
}) {
  return (
    <div className={styles.container} name="project">
      <img
        src={getImageUrl(imageSrc)}
        alt={title}
        width={"200px"}
        className={styles.image}
      />
      <h3 className={styles.title}>{title} </h3>
      <p className={styles.description}>{description} </p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {" "}
              {skill}{" "}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link} target={"_blank"}>
          {" "}
          Demo
        </a>
        <a href={source} className={styles.link} target={"_blank"}>
          {" "}
          Source
        </a>
      </div>
    </div>
  );
}

export default ProjcectCard;
