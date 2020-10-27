import React from 'react'
import "../App.css"

function Card(props) {
    
    return (
        <div className="grid-card">
            <div className="project-content">
                <div className="subheading-font">{props.title}</div>
                <div className="project-img"><img src={props.img} alt={props.alt} /></div>
                <div className="stacks-wrapper"><div className="dark-bg white-font">{props.techStack}</div></div>
                <div className="description-font">{props.description}</div>
            </div>
        </div>
    )
}

export default Card
