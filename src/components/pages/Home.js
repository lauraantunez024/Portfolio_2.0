import React from 'react';
import authorImage from '../../author.JPG'
import "../../style/style.css";



export default function Home() {
  return (
    <header>
    <div class="name-container">
    <h1 id="name">Laura Antunez</h1>

   
    <img src={authorImage} alt="Author" />
</div>
<p id="subtitle">Welcome!</p>

</header>

  );
}
