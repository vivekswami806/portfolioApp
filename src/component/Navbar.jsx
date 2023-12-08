import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../Photo";
import { Link } from "react-scroll";


function Navbar() {
  const [menuOpen, setmenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <Link to="home" className={styles.title}>
       <img src={getImageUrl("nav/logo.png")} alt="logo img" height={"80px"}  width={"100px"}/>
      
      </Link>
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
            <Link to="/" smooth={true}>Home</Link>
          </li>
          <li>
            <Link to="about" smooth={true}>About</Link>
          </li>
          <li>
            <Link to="skill" smooth={true}>Skills</Link>
          </li>
          <li>
            <Link to="project" smooth={true}>Project</Link>
          </li>
          <li>
            <Link to="contact" smooth={true}>Contact</Link>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1zCY96aicWWEsu3p_WGWrNVXFIftePXVG/view?usp=sharing" target={"_blank"}>Resume</a>
          </li>
        </ul>
       
      </div>
    </nav>
  );
}

export default Navbar;
