import React, { useState } from 'react';
import InteractiveGreeting from '../InteractiveGreeting';


function About() {
  const [greeting, setGreeting] = useState([]);
  const addName = (name) => {
    console.log("What's up" + name)
  }



  return (
    <section id="about-me" >
    <h2>About Me</h2>
    <p>Laura is a born again programmer who originally started out aspiring to be a data journalist. Through an internship with the Hechinger Report, she learned the ropes of HTML, CSS and Javascript and fell in love with coding. Now she is working to become a full stack developer. If you want to see examples of my work, click the images!
    
        </p>
    
</section>
  )
}




export default About;