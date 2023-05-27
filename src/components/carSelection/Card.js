import React from "react";
import styles from "./CarSelection.module.css";
export const Card = ({ image, text }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt="" />
      <p>{text}</p>
    </div>
  );
};
