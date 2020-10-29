import React from 'react';
import {
  FaAt,
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
} from 'react-icons/fa'
import techstacks from './data/techstacks';
import projects from './data/projects';
import Card from './components/Card'
import Icon from './components/Icon'
import Coffee from './Coffee'
import avatar from './assets/Avatar.png'
import './App.css';

function App() {
  return (
    <div className="App">      
      <header>
        <div className="header-container">
          <div className="headline-container">
            <div className="avatar"><img src={avatar} alt='my avatar'/></div>
            <div className="header-font white-font">Neo Hsueh Yen</div>
            <div className="subheader-font white-font">Frontend Developer</div>
            <div className="icons-container">
              <a href="https://www.linkedin.com/in/hsueh-yen-neo/"><div className="icon white-bg"><FaLinkedinIn /></div></a>
              <a href="https://github.com/Hangrykat"><div className="icon white-bg"><FaGithub /></div></a>
              <a href="mailto:neo.hsuehyen@gmail.com"><div className="icon white-bg"><FaAt /></div></a>
              <a href="https://twitter.com/thehangrykat"> <div className="icon white-bg"><FaTwitter /></div></a>
            </div>
          </div>
        </div>

        <div className="svg">
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
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
        </div>
        <div className="grids-container">
          <div className="grids-wrapper">
            {projects.map(project => (<Card title={project.title} image={project.image} techStack={project.techStack} description={project.description} alt={`Screenshot of ${project.title}`} url={project.url} />))}
          </div>
        </div>
      </div>

      <div className="section-container py-5 section-bubble2">
      <div className="headline-container">
          <div className="section-font light-font text-shadow">Tech Stack</div>
          <div className="tech-icon-grid">
            <div className="tech-icon-container">
              {techstacks.filter(techstack => techstack.category === 'Frontend').map(frontend => (<Icon name={frontend.name} src={frontend.iconSrc} alt={`Icon of ${frontend.name}`}/>))}  
            </div>
            <div className="tech-icon-container">
              {techstacks.filter(techstack => techstack.category === 'Backend').map(backend => (<Icon name={backend.name} src={backend.iconSrc} alt={`Icon of ${backend.name}`}/>))}  
            </div>
            <div className="tech-icon-container">
              {techstacks.filter(techstack => techstack.category === 'Others').map(other => (<Icon name={other.name} src={other.iconSrc} alt={`Icon of ${other.name}`}/>))}  
            </div>
          </div>        
        </div>
      </div>

      <div className="section-container py-5 section-bubble3">
      <div className="headline-container light-font">
      <div className="section-font ">About Me</div>
          <div className="subheading-font white-font">
            An aspiring frontend developer based in Munich, Germany.
            I would have created more projects if I had not been distracted by cool designs of UI/UX.<br/> <br/>      
            More information about my work experience, please visit the following sites or contact me directly:
          </div>
          <div className="icons-container">
              <a href="https://www.linkedin.com/in/hsueh-yen-neo/"><div className="icon white-bg"><FaLinkedinIn /></div></a>
              <a href="https://github.com/Hangrykat"><div className="icon white-bg"><FaGithub /></div></a>
              <a href="mailto:neo.hsuehyen@gmail.com"><div className="icon white-bg"><FaAt /></div></a>
            </div>
        </div>
      </div>

      <div className="section-container py-5 section-bubble4" >
        <div className="headline-container ">
          <div className="section-font ">Hobbies & Passion </div>    
          <div className="subheading-font white-font">        
              While waiting for npm to install, I love drinking coffee & occasionally good beer and wine when the codes don't play nice with me.
              When my back hurts from sitting too long, I enjoy long walks and trying out cool restaurants around Munich.
          </div>          
        </div>
        <div className="coffee-container"><Coffee /></div>        
      </div>

      <div className="section-container py-5 section-bubble5"></div>         
    </div>
  );
}

export default App;
