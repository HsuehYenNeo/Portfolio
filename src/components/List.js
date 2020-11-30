import React from "react";

function List(props) {
  return (
    <div className="skill-list">
      <div className="skill"><ul><li>{props.skill}</li></ul></div>
    </div>
  );
}

export default List;
