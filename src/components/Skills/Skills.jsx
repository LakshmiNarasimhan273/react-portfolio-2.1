import React from "react";
import "./Skills.css";
import Client from "./Client";
import Server from "./Server";

function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Tech Stacks</span>

      <div className="skills__container container grid">
        <Client />
        <Server />
      </div>
    </section>
  );
}

export default Skills;
