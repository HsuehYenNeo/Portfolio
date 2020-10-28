import React from 'react'
import "../App.css"

function Card(props) {
    
    return (
        <div>
            <a href={props.url}>
                <div className="grid-card">
                    <div className="project">
                        <div className="title">{props.title}</div>
                        <div className="img">
                            <img src={props.image} alt={props.alt} />
                        </div>
                        <div className="description">{props.description}</div>
                        <div className="stacks">
                            <div className="stack">{props.techStack}</div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Card
