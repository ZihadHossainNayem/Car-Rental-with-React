import styles from "./Driver.module.css";
import driver from "../../assets/driver.jpg";

export const Driver = () => {
  return (
    <div className={styles.driver}>
      <div className={styles.left}>
        <img src={driver} alt="driver" />
      </div>
      <div className={styles.right}>
        <h2>
          Ride with Ease
          <span> Premium Driver Service for Your Comfort and Convenience</span>
        </h2>
        <p>
          Experience the Ultimate in Professional Driving Services for a Smooth
          and Stress-Free Journey
        </p>
        <button> Hire Driver</button>
      </div>
    </div>
  );
};
