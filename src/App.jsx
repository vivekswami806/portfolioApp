import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero/Hero";
import About from "./component/About/About";
import Skills from "./component/skills/Skills";
import Project from "./component/project/Project";
import Contact from "./component/contact/Contact";

function App() {
  
    return (
     
       <div className={styles.App}>
        <Navbar/>
        <Hero/>     
        <About/>
         <Skills/>
        <Project/>
       <Contact/>    
      </div>
    
     
    );
  };
export default App;
