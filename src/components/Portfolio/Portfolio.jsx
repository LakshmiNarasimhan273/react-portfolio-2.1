import React from "react";
import "./Portfolio.css";
import Works from "./Works";

function Portfolio() {
  return (
    <section className="work section" id="portfolio">
      <h2 className="section__title">Featured Projects</h2>
      <span className="section__subtitle">A selection of my work, experiments, and solutions</span>

      <Works />
    </section>
  );
}

export default Portfolio;
