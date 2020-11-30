import React from "react";
import { FaAt, FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import techstacks from "./data/techstacks";
import projects from "./data/projects";
import Card from "./components/Card";
import Icon from "./components/Icon";
import Coffee from "./Coffee";
import profile from "./assets/pic.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <div className="header-container">
          <div className="headline-container">
            <div className="avatar">
              <img src={profile} alt="my avatar" />
            </div>
            <div className="header-font white-font">Neo Hsueh Yen</div>
            <div className="subheader-font white-font">
              A full stack web developer <br /> with a passion for frontend
            </div>
            <div className="icons-container">
              <a href="https://www.linkedin.com/in/hsueh-yen-neo/">
                <div className="icon white-bg">
                  <FaLinkedinIn />
                </div>
              </a>
              <a
                href="https://github.com/Hangrykat"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="icon white-bg">
                  <FaGithub />
                </div>
              </a>
              <a
                href="mailto:neo.hsuehyen@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="icon white-bg">
                  <FaAt />
                </div>
              </a>
              <a
                href="https://twitter.com/thehangrykat"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <div className="icon white-bg">
                  <FaTwitter />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="wavies">
              <use xlinkHref="#gentle-wave" x={50} y={0} fill="#bfd8d5" />
              <use xlinkHref="#gentle-wave" x={50} y={3} fill="#dfdfdf" />
              <use xlinkHref="#gentle-wave" x={50} y={6} fill="#faf9f9" />
            </g>
          </svg>
        </div>
      </header>

      <div className="section-container py-5 section-bubble1">
        <div className="headline-container">
          <div className="section-font ">Projects</div>
          <div className="subheading-font white-font">
            Check out my deployed app or visit my{" "}
            <a
              href="https://github.com/Hangrykat"
              class="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>{" "}
            page to view current projects.
          </div>
        </div>
        <div className="grids-container">
          <div className="grids-wrapper">
            {projects.map((project) => (
              <Card
                title={project.title}
                image={project.image}
                techStacks={project.techStacks}
                description={project.description}
                alt={`Screenshot of ${project.title}`}
                url={project.url}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="section-container py-5 section-bubble2">
        <div className="headline-container">
          <div className="section-font light-font text-shadow">Tech Stack</div>
          <div className="tech-icon-grid">
            <div className="tech-icon-container">
              {techstacks
                .filter((techstack) => techstack.category === "Frontend")
                .map((frontend) => (
                  <Icon
                    name={frontend.name}
                    src={frontend.iconSrc}
                    alt={`Icon of ${frontend.name}`}
                  />
                ))}
            </div>
            <div className="tech-icon-container">
              {techstacks
                .filter((techstack) => techstack.category === "Backend")
                .map((backend) => (
                  <Icon
                    name={backend.name}
                    src={backend.iconSrc}
                    alt={`Icon of ${backend.name}`}
                  />
                ))}
            </div>
            <div className="tech-icon-container">
              {techstacks
                .filter((techstack) => techstack.category === "Others")
                .map((other) => (
                  <Icon
                    name={other.name}
                    src={other.iconSrc}
                    alt={`Icon of ${other.name}`}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>

      <div className="section-container py-5 section-bubble3">
        <div className="headline-container light-font">
          <div className="section-font ">Experience & Expertise </div>
          <div className="subheading-font white-font">
            More information about my work and experience, please visit the
            following sites:
          </div>
          <div className="icons-container">
            <a
              href="https://www.linkedin.com/in/hsueh-yen-neo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icon white-bg">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/Hangrykat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icon white-bg">
                <FaGithub />
              </div>
            </a>
            <a
              href="mailto:neo.hsuehyen@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icon white-bg">
                <FaAt />
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="section-container py-5 section-bubble4">
        <div className="headline-container ">
          <div className="section-font ">About Me </div>
          <div className="subheading-font white-font">
            While waiting for npm to install, I love drinking coffee &
            occasionally good beer and wine when the codes don't play nice with
            me. When my back hurts from sitting too long, I enjoy long walks and
            trying out cool restaurants around Munich.
          </div>
        </div>
        <div className="coffee">
          <div className="coffee-container">
            <Coffee />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
