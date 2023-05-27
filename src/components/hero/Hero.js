import styles from "./Hero.module.css";
import { IoIosSearch } from "react-icons/io";

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <form>
        <div className={styles.text}>
          <label>Location</label>
          <input
            className={styles.input}
            type="text"
            placeholder="Search for Location"
          />
        </div>
        <div className={styles.starting_form}>
          <span className={styles.border}></span>
          <label>Starting From</label>
          <input type="date" />
        </div>
        <div className={styles.up_until}>
          <span className={styles.border}></span>
          <label>Up Until</label>
          <input type="date" />
        </div>
        <div className={styles.search_btn}>
          <IoIosSearch className={styles.icon} />
          <button className={styles.btn}>Search</button>
        </div>
      </form>
    </div>
  );
};
