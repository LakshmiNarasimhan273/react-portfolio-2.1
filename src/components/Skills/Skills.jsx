import React from "react";
import "./Skills.css";
import Client from "./Client";
import Server from "./Server";

function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Technical Expertise</h2>
      <span className="section__subtitle">Technologies and tools I work with</span>

      <div className="skills__container container grid">
        <Client />
        <Server />
      </div>
    </section>
  );
}

export default Skills;
