import React from "react";
import "./style.css";

import Component from "./components/Component";
import State from "./State/State";
import Note_APP from "./Note Take App/Note_APP";
import Student_App from "./Student Attendence App/Student_App";


export default function App() {
  return (
    <div>
      {/* <Component/> */}
      {/* <State/> */}
      {/* <Note_APP/> */}
      <Student_App/>
    </div>
  );
}
