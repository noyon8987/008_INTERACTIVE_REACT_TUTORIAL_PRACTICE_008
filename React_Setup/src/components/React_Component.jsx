import React from "react";

export default function React_Component(props) {
  return (
    <>
      <div className="info">
        <h1>Bio Data of {props.bioData}</h1>
        <br />
        <p>
          <strong>Name:</strong>
          {props.name}
        </p>
        <p>
          <strong>Email:</strong>
          {props.email}
        </p>
        <p>
          <strong>Phone:</strong>
          {props.phone}
        </p>
        <br />
        <div className="skill">
          <h2>Skills of {props.skill}</h2>
          <br />
          <ul>
            <li>{props.skills}</li>
          </ul>
          <br />
        </div>
        <div className="hobby">
          <h2>Hobby of {props.skill}</h2>
          <br />
          <ul>
            <li>{props.hobby}</li>
          </ul>
          <br />
          <br />
          <br />
        </div>
      </div>
    </>
  );
}
