import React from 'react';
import resume from '../../Resume2022.pdf'

export default function Contact() {
  return (
    <footer  id="contact">
    <h2>Contact Info</h2>

    <p>Phone number: 305-290-1430 </p>
    <p>Email: LauraAntunez024@gmail.com      </p>
    <a href="https://github.com/lauraantunez024" taget="_blank">Github</a>
    <a href="https://www.linkedin.com/in/laura-antunez-2a4a12182/" target="_blank">LinkedIn</a>
    <a href={resume} target="_blank">Resume</a>



</footer>
  );
}
