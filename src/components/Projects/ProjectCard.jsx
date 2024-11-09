import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, source },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subhead}>Project</p>
        <p className={styles.description}>{description}</p>
      </div>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
      <div className={styles.buttonContainer}>
        <a href={source} className={styles.button}>
          View Source
        </a>
      </div>
    </div>
  );
};
