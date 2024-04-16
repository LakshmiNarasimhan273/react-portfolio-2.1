import React from "react";

function Social() {
  const links = [
    {
      id: 1,
      icon: "linkedin-alt",
      ref: "https://www.linkedin.com/in/lakshmi-narasimhan-developer/",
    },
    {
      id: 2,
      icon: "github-alt",
      ref: "https://github.com/LakshmiNarasimhan273",
    },
    {
      id: 3,
      icon: "envelope-alt",
      ref: "mailto:lakshminarasimhan511@gmail.com",
    },
  ];
  return (
    <div className="home__social">
      {links.map((data) => (
        <a
          href={data.ref}
          key={data.id}
          target="_blank"
          rel="noreferrer"
          className="home__social-icon"
        >
          <i className={`uil uil-${data.icon}`}></i>
        </a>
      ))}
    </div>
  );
}

export default Social;
