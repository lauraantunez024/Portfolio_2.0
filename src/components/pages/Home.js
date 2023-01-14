import React, { useState } from 'react';
import authorImage from '../../author.JPG'
import "../../style/style.css";
import Button from 'react-bootstrap/Button';
import InteractiveGreeting from '../InteractiveGreeting';


function Home() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <header>
    <div class="name-container">
    <h1 id="name">Laura Antunez's Portfolio</h1>

    <img src={authorImage} alt="Author" />
</div>
<p id="subtitle">Welcome!</p>

< InteractiveGreeting />


    
</header>



  );
}

export default Home;