import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../assets/logo.svg";
import styles from "./nav.module.css";

function Nav() {
  return (
    <>
      <div className={styles["nav-parent"]}>
        <div className={styles.left}>
          <img src={logo} alt="logo" />
          <h2>GeekFoods</h2>
        </div>

        <div className={styles.middle}>
          <a href="#">Home</a>
          <a href="#">Quote</a>
          <a href="#">Restaurant</a>
          <a href="#">Foods</a>
          <a href="#">Contact</a>
        </div>

        <div className={styles.right}>
          <div className={styles["hamburger-div"]}>
            <GiHamburgerMenu />
          </div>

          <button>Get Started</button>
        </div>
      </div>

      <div className={styles.false}></div>
    </>
  );
}

export default Nav;