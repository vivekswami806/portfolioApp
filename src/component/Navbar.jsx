import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../Photo";

function Navbar() {
  const [menuOpen, setmenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.title}>
        {" "}
        Portfolio
      </a>
      <div className={styles.menu}>
      <img
          src={
            menuOpen
              ? getImageUrl("nav/closemenu.png")
              : getImageUrl("nav/menu.png")
          }
          alt="menu-btn"
          className={styles.menuBtn}
          onClick={() => {
            setmenuOpen(!menuOpen);
          }}
        />
        <ul className={`${styles.menuItems} ${menuOpen&& styles.menuOpen}`} 
        onClick={()=>{
          setmenuOpen(false)
        }}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
       
      </div>
    </nav>
  );
}

export default Navbar;
