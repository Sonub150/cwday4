import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../assets/logo.svg";
import styles from "./nav.module.css";

function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className={`${styles["nav-parent"]} ${scrolled ? styles.scrolled : ''}`}>
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
          <div className={styles["hamburger-div"]} onClick={toggleMobileMenu}>
            <GiHamburgerMenu />
          </div>
          <button>Get Started</button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className={styles["mobile-menu"]}>
          <a href="#" onClick={toggleMobileMenu}>Home</a>
          <a href="#" onClick={toggleMobileMenu}>Quote</a>
          <a href="#" onClick={toggleMobileMenu}>Restaurant</a>
          <a href="#" onClick={toggleMobileMenu}>Foods</a>
          <a href="#" onClick={toggleMobileMenu}>Contact</a>
        </div>
      )}
    </>
  );
}

export default Nav;