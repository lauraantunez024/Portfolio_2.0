import React from 'react';
// Here we import the Navbar.css file to grant access to some additional classNames
import '../styles/Navbar.css';

// TODO: Create a styles object called "styles"

function Navbar() {
  // TODO: Add a style attribute to `nav`
  return (
    <nav>
    
    <a href="#about-me">About Me</a>
    <a href="#work">Work</a>
    <a href="#contact">Contact Me</a>
    <a href="./assets/images/Resume2022.pdf" target="_blank">Resume</a>

    
</nav>
  );
}

export default Navbar;
