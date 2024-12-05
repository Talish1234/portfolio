import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
      <h1 className={styles.title}>Hello, I'm Mohd Talish Ansari</h1>
       <p className={styles.description}>
        A skilled web developer with expertise in the MERN stack and a focus on full-stack solutions. Feel free to connect for collaboration.
       </p>
        <a href="../../../assets/Resume.pdf" download className={styles.contactBtn}>
          Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
