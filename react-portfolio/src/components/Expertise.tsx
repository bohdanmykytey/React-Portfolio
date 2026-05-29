import React from "react";
import "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReact, faAws} from "@fortawesome/free-brands-svg-icons";
import {faRobot} from "@fortawesome/free-solid-svg-icons";
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
  "GraphQL",
  "Python",
  "FastAPI",
  "SQL",
  "C#",
  "ASP .Net Core",
  "REST APIs",
];

const labelsSecond = [
  "Anthropic Claude",
  "Coding Agents",
  "Prompt Engineering",
  "Automated Testing",
  "Jest",
  "Selenium",
];

const labelsThird = [
  "AWS",
  "GitHub Actions",
  "CI/CD",
  "Docker",
  "Kubernetes",
  "CloudWatch",
  "Grafana",
  "Git",
];

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
              I build and own production web applications end-to-end with React
              and TypeScript on the front end, backed by Node, Express, and
              Python/FastAPI services. From custom APIs to polished, responsive
              UIs, I've shipped scalable software for high-traffic platforms —
              including financial products at Dow Jones and enterprise systems at
              Infosys Public Services.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faRobot} size="3x" />
            <h3>AI-Assisted Development</h3>
            <p>
              I build AI into the development process itself — integrating coding
              agents (Anthropic Claude) for code generation and refactoring,
              turning prototypes into detailed specs and prompts, and automating
              test creation. This agentic workflow has cut feature delivery time
              by ~50% while raising code quality, with me acting as the quality
              backstop on everything that ships.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faAws} size="3x" />
            <h3>DevOps & Observability</h3>
            <p>
              I own delivery beyond the code: automated CI/CD pipelines with
              GitHub Actions deploying to AWS with zero-downtime releases, plus
              testing and observability (CloudWatch, Grafana) baked in. At Axcess
              Financial I built and maintained the full CI/CD pipeline for a fleet
              of automation instances I wrote and ran myself.
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
