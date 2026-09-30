import React from "react";

function Server() {
  const skills = [
    {
      id: 1,
      icon: "bx-badge-check",
      name: "Software Architecture",
      level: "Advanced",
    },
    {
      id: 2,
      icon: "bx-badge-check",
      name: "API Design",
      level: "Advanced",
    },
    {
      id: 3,
      icon: "bx-badge-check",
      name: "System Design",
      level: "Advanced",
    },
    {
      id: 4,
      icon: "bx-badge-check",
      name: "Generative AI",
      level: "Advanced",
    },
    {
      id: 5,
      icon: "bx-badge-check",
      name: "Agentic AI",
      level: "Advanced"
    },
    {
      id: 6,
      icon: "bx-badge-check",
      name: "Prompt Engineering",
      level: "Advanced",
    },
    {
      id: 7,
      icon: "bx-badge-check",
      name: "Scalable Systems",
      level: "Advanced",
    }
  ];
  return (
    <div className="skills__content">
      <h3 className="skills__title">Architecture & AI</h3>

      <div className="skills__box">
        <div className="skills__group">
          {skills.map((data) => (
            <div key={data.id} className="skills__data">
              <i className={`bx ${data.icon}`}></i>
              <div>
                <h3 className="skills__name">{data.name}</h3>
                <span className="skills__level">{data.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Server;
