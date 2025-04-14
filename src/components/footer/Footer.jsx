import React from "react";
import { PiHamburgerBold } from "react-icons/pi";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { CiBasketball } from "react-icons/ci";
import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Logo with animation */}
        <div className={styles.logoContainer}>
          <PiHamburgerBold className={styles.logoIcon} />
          <h1 className={styles.logoText}>Our Logo</h1>
        </div>
        
        {/* Description with fade-in effect */}
        <p className={styles.description}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.
        </p>
       
        {/* Links with hover animations */}
        <nav className={styles.links}>
          {['About', 'Social', 'History', 'Services', 'Projects', 'Blogs'].map((link, index) => (
            <a 
              key={index} 
              href="#" 
              className={styles.link}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Social icons with hover effects */}
        <div className={styles.socials}>
          {[
            { icon: <FaFacebook />, name: 'Facebook' },
            { icon: <FaTwitter />, name: 'Twitter' },
            { icon: <FaInstagram />, name: 'Instagram' },
            { icon: <FaGithub />, name: 'GitHub' },
            { icon: <CiBasketball />, name: 'Dribbble' }
          ].map((social, index) => (
            <a 
              key={index}
              href="#"
              className={styles.socialIcon}
              aria-label={social.name}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;