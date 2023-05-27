import styles from "./Footer.module.css";
import logoWhite from "../../assets/logo-white.png";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <img src={logoWhite} alt="logoWhite" />
        <button>Share Car</button>
      </div>
    </div>
  );
};
