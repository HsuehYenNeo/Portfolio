import React from 'react';
import {
  FaAt,
  FaLinkedinIn,
  FaGithub,
  FaTwitter
} from 'react-icons/fa'
import Card from './components/Card'
import Icon from './components/Icon'
import projects from './data/projects';
import './App.css';


import techstacks from './data/techstacks';

function App() {
  return (
    <div className="App">
      <header className="grid-center">
        <div className="section-container">
          <div className="header-container">
            <div className="headline-container">
              <div className="heading-font white-font">Neo Hsueh Yen</div>
              <div className="subheading-font white-font">Frontend Developer</div>
              <div className="icons-container">
                <a href="https://www.linkedin.com/in/hsueh-yen-neo/"><div className="icon white-bg"><FaLinkedinIn /></div></a>
                <a href="https://github.com/Hangrykat"><div className="icon white-bg"><FaGithub /></div></a>
                <a href="mailto:neo.hsuehyen@gmail.com"><div className="icon white-bg"><FaAt /></div></a>
                <a href="https://twitter.com/thehangrykat"> <div className="icon white-bg"><FaTwitter /></div></a>
              </div>
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
            {projects.map(project => (<Card title={project.title} image={project.image} techStack={project.techStack} description={project.description} alt={project.alt} url={project.url} />))}
          </div>
        </div>
      </div>


      <div className="section-container">
        <div className="headline-container">
          <div className="heading-font">Tech Stack</div>

          <div className="tech-icon-container">
            {techstacks.filter(techstack => techstack.category === 'Frontend').map(frontend => (<Icon name={frontend.name} src={frontend.iconSrc} />))}  
          </div>
          <div className="tech-icon-container">
            {techstacks.filter(techstack => techstack.category === 'Backend').map(backend => (<Icon name={backend.name} src={backend.iconSrc} />))}  
          </div>
          <div className="tech-icon-container">
            {techstacks.filter(techstack => techstack.category === 'Others').map(other => (<Icon name={other.name} src={other.iconSrc} />))}  
          </div>        
        </div>
      </div>
      

      <div className="section-container dark-bg">
        <div className="headline-container">
          <div className="heading-font">About Me</div>
          
        </div>        
      </div>
    </div>

  );
}

export default App;
