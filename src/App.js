import React from 'react';
import {
  FaAt,
  FaLinkedinIn,
  FaGithub,
  FaTwitter
} from 'react-icons/fa'
import Card from './components/Card'
import './App.css';
import projects from './data/projects';

function App() {
  return (
    <div className="App">
      <header className="grid-center">
        <div className="section-container">
          <div className="headline-container">
            <div className="heading-font white-font">Neo Hsueh Yen</div>
            <div className="subheading-font white-font">Frontend Developer</div>
            <div className="icons-wrapper">
              <a href="https://www.linkedin.com/in/hsueh-yen-neo/"><div className="icon white-bg"><FaLinkedinIn /></div></a>
              <a href="https://github.com/Hangrykat"><div className="icon white-bg"><FaGithub /></div></a>
              <a href="mailto:neo.hsuehyen@gmail.com"><div className="icon white-bg"><FaAt /></div></a>
              <a href="https://twitter.com/thehangrykat"> <div className="icon white-bg"><FaTwitter /></div></a>
            </div>
          </div>
        </div>
      </header>
      <div className="section-container">
        <div className="headline-container">
          <div className="heading-font">Projects</div>
        </div>
        <div className="grids-container">
          <div className="grids-wrapper">
            {projects.map(project => (<Card title={project.title} image={project.image} techStack={project.techStack} description={project.description} alt={projects.alt}/>))}
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
