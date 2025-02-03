import React from "react";
import React_Component from "./React_Component";

export default function Component() {
  return (
    <div>
      <React_Component
        bioData="Noyon"
        name="Shahadat Hosen Noyon"
        email="noyon@gmail.com"
        phone="01585735520"
        skill="Noyon"
        skills="Skills: Html, Css, Js, React, Next"
        hobby="Football, Criket, Reading Books"
      />

      <React_Component
        bioData="Sakib"
        name="Md Sakib Kan"
        email="kan@gmail.com"
        phone="01585384950"
        skill="Sakib"
        skills="Skills: Html, Css, Tailwind, Bootstrap, Js"
        hobby="Football, Gerdening, Pegions Lover, Writing Notes"
      />

      <React_Component
        bioData="Rakib"
        name="Rakib Uddin"
        email="rakib@gmail.com"
        phone="019353324950"
        skill="Rakib"
        skills="Skills: Html, Css,Bootstrap, Js, React"
        hobby="Cricket, Reading Books, Gerdening, Exercise"
      />
    </div>
  );
}
