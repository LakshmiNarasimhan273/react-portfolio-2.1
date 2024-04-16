import React from "react";

function Client() {
  const skills = [
    {
      id: 1,
      icon: "bx-badge-check",
      name: "HTML",
      level: "Advanced",
    },
    {
      id: 2,
      icon: "bx-badge-check",
      name: "CSS",
      level: "Advanced",
    },
    {
      id: 3,
      icon: "bx-badge-check",
      name: "Javascript",
      level: "Advanced",
    },
    {
      id: 4,
      icon: "bx-badge-check",
      name: "Tailwind",
      level: "Advanced",
    },
    {
      id: 5,
      icon: "bx-badge-check",
      name: "ReactJS",
      level: "Advanced",
    },
    {
      id: 6,
      icon: "bx-badge-check",
      name: "NextJS",
      level: "Intermediate",
    },
    {
      id: 7,
      icon: "bx-badge-check",
      name: "Git",
      level: "Advanced",
    },
  ];
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Development</h3>

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

export default Client;
