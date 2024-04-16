import React from "react";

function Content() {
  const sections = [
    {
      id: 1,
      title: "Experience",
      icon: "award",
      subTitle: "3 Years Working",
    },
    {
      id: 2,
      title: "Projects",
      icon: "briefcase-alt",
      subTitle: "20+ Completed projects",
    },
    {
      id: 3,
      title: "Service",
      icon: "support",
      subTitle: "Online 24/7",
    },
  ];
  return (
    <div className="about__info grid">
      {sections.map((data) => (
        <div key={data.id} className="about__box">
          <i className={`bx bx-${data.icon} about__icon`}></i>
          <h3 className="about__title">{data.title}</h3>
          <span className="about__subtitle">{data.subTitle}</span>
        </div>
      ))}
    </div>
  );
}

export default Content;
