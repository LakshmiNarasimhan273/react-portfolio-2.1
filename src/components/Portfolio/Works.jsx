import React, { useEffect, useState } from "react";
import { portfolioData, portfolioNav } from "./Data";
import WorksItem from "./WorksItem";

function Works() {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(portfolioData);
    } else {
      const newProjects = portfolioData.filter((project) => {
        return project.category === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index);
  };

  return (
    <>
      <div className="work__filters">
        {portfolioNav.map((item, index) => {
          return (
            <div key={item.id}>
              <span
                onClick={(e) => {
                  handleClick(e, index);
                }}
                className={`${
                  active === index ? "active-work" : ""
                } work__item`}
              >
                {item.name}
              </span>
            </div>
          );
        })}
      </div>

      <div className="work__container container grid">
        {projects.map((item) => {
          return <WorksItem item={item} key={item.id} />;
        })}
      </div>
    </>
  );
}

export default Works;
