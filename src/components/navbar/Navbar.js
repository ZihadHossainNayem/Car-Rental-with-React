import styles from "./Navbar.module.css";
import logoBlack from "../../assets/logo-black.png";
import { IoIosSearch } from "react-icons/io";
import { IoPersonOutline, IoMenuSharp, IoCloseOutline } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <header className={styles.navbar}>
      <img src={logoBlack} alt="logo" />
      <nav>
        <ul
          className={
            nav ? [styles.menu, styles.active].join(" ") : [styles.menu]
          }
        >
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Log in</a>
          </li>
          <li>
            <a href="/">Sign Up</a>
          </li>
          <li>
            <IoIosSearch style={{ marginTop: "6px" }} size={25} />
          </li>
          <li>
            <IoPersonOutline style={{ marginTop: "6px" }} size={25} />
          </li>
        </ul>
      </nav>
      <div onClick={() => setNav(!nav)} className={styles.mbl_btn}>
        {nav ? <IoCloseOutline size={25} /> : <IoMenuSharp size={25} />}
      </div>
    </header>
  );
};

export default Navbar;
