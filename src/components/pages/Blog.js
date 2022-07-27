import React from "react";
import codeQuiz from "../../codequiz.png";
import gravityLines from "../../gravity-lines.png";
import sexEdMap from "../../SexEdMap.png";
import MyTraffic from "../../MyTraffic.png";
import Talespinner from "../../talespindemo.png";


const projects = [
  {
    name: "TaleSpinner",
    image: Talespinner,
    deployedURL: "https://talespinner.herokuapp.com/",
    repoURL: "https://github.com/lauraantunez024/Talespinner",
    altAttribute: "TaleSpinner ",
  },
  {
    name: "CodeQuiz",
    image: codeQuiz,
    deployedURL: "https://lauraantunez024.github.io/CodeQuiz/",
    repoURL: "https://github.com/lauraantunez024/CodeQuiz",
    altAttribute: "A Kingdom Hearts Code Quiz",
  },
  {
    name: "My Traffic",
    image: MyTraffic,
    deployedURL: "https://lauraantunez024.github.io/My-Traffic/",
    repoURL: "https://github.com/lauraantunez024/My-Traffic",
    altAttribute: "Helps you see traffic around real estate",
  },
  {
    name: "Interactive Sex Ed Map",
    image: sexEdMap,
    deployedURL:
      "https://lauraantunez024.github.io/SexEd_MapInteractive/",
    repoURL: "https://github.com/lauraantunez024/SexEd_MapInteractive",
    altAttribute: "Interactive map of sex education laws from 2021",
  },
  {
    name: "Gravity Lines Data Viz",
    image: gravityLines,
    deployedURL:
      "https://lauraantunez024.github.io/gravity-lines/",
    repoURL: "https://github.com/lauraantunez024/gravity-lines",
    altAttribute: "Data Vizualization showing South Carolina housing information",
  },
];

export default function Portfolio() {
  return (
    <section className="flex-container" id="work">
        <h2>Portfolio</h2>
      <section className="content-section" id="work-card-container">
        {projects.map((project, index) => (
          <div
            className={
              index === 0 ? "work-card big-card" : "work-card small-card"
            }
          >
            <a
              className="deployed-link"
              rel="noreferrer"
              target="_blank"
              href={project.deployedURL}
            >
              <h3>{project.name}</h3>
              <img src={project.image} alt={project.altAttribute} />
            </a>
            <a
              className="repo-link"
              rel="noreferrer"
              target="_blank"
              href={project.repoURL}
            >
              <h4>Repo Link</h4>
            </a>
          </div>
        ))}
      </section>
    </section>
  );
}