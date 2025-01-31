import React from "react";
import "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReact, faAws, faJs} from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "React",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Node",
  "ExpressJS",
  "Python",
  "FastAPI",
  "SQL",
  "C#",
  "ASP .Net Core",
  "Kubernetes",
  "AWS",
  "Node-Red",
  "Postman",
];

const labelsSecond = [
  "Git",
  "GitHub Actions",
  "Docker",
  "AWS",
  "Linux",
  "Pandas",
  "Selenium",
];

const labelsThird = ["Node-Red", "JavaScript", "Selenium"];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Full Stack Web Development</h3>
            <p>
              I have built a diverse array of web applications from scratch
              using modern technologies such as React and C# ASP .Net, Node &
              Python with FastAPI. I have a strong proficiency in the Frontend
              Development along with building custom Api's to support user
              facing applications.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faAws} size="3x" />
            <h3>DevOps</h3>
            <p>
              Having hosted about a dozen Custom Scripts with Acxess Financial I
              was solely responsible with maintaining the entire CI/CD Pipeline
              for my each of my automation instances.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faJs} size="3x" />
            <h3>Automation</h3>
            <p>
              One of the many hats I wore at Axcess Financial was Automation
              Engineering, along with Full Stack Web Development and DevOps. My
              role included my writing scripts with Vanilla JavaScript,
              Node-Red, and Selenium. These custom Automations would traverse
              UI's and API's, scraping data from each instance and present it in
              an internal React/ASP .Net application also built and maintained
              by me.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
