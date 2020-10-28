import React from 'react'


function Icon(props) {
    return (
        <div className="tech-icon-wrapper">
            <div className="tech-icon">
                <img src={props.src} />              
            </div>
            <div className="tech-name">{props.name}</div>
        </div>
    )
}

export default Icon
