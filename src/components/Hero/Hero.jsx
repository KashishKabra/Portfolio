// import React from "react";

// import styles from "./Hero.module.css";
// import { getImageUrl } from "../../utils";

// export const Hero = () => {
//     return (
//     <section>
//         <div>
//             <h1>Hi, I'm Kashish</h1>
//             <p>
//             A software developer passionate about building solutions that make a difference. With experience in web development, data analytics, and machine learning, I bring ideas to life through code and innovative design. Let’s create impactful digital experiences together!"
//             </p>
//             <a href="mailto:kashishkabra2004@gmail.com">Contact me</a>
//             <p>You can download my resume here:</p>
//             <a href="assets/Kashish_Kabra_Resume.pdf" download="Kashish_Kabra_Resume.pdf" class="resume-button">
//             Download Resume
//             </a>
//         </div>
//         <img src={getImageUrl("hero/photo.png")} alt="ME!"/>
//     </section>
//     );
// };

import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Kashish</h1>
        <p className={styles.description}>
        Software developer passionate about creating impactful solutions. With expertise in web development, data analytics, and machine learning, I turn ideas into engaging digital experiences.
        </p>
        <div className={styles.contactMenu}>
            <a href="mailto:myemail@email.com" 
                className={styles.contactBtn}>
            Contact Me
            </a>
            <a href="../../public/Kashish_Kabra_Resume.pdf" 
                download="Kashish_Kabra_Resume.pdf" 
                className={styles.contactBtn}>
            Download Resume
            </a>
        </div>
        
      </div>
      <img
        src={getImageUrl("hero/photo.png")}
        alt="ME!"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
