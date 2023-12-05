import React from 'react'
import { getImageUrl } from '../../Photo'
function ProjcectCard({
    project :{title,imageSrc,description, skills, demo ,source}}) {
  return (
    <div>
        <img src={getImageUrl(imageSrc)} alt={title} width={"200px"} />
        <h3>{title} </h3>
        <p>{description} </p>
        <ul>
            {skills.map((skill, id)=>{
                <li key={id}> {skill} </li>
            })}
        </ul>
        <div>
            <a href={demo}> Demo</a>
            <a href={source}> Sorce</a>
        </div>
    </div>
  )
}

export default ProjcectCard;