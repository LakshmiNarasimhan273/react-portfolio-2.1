import React, { useState } from "react";
import "./Header.css";

function Header() {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  const links = [
    {
      id: 1,
      icons: "estate",
      name: "Home",
      ref: "#home",
    },
    {
      id: 2,
      icons: "user",
      name: "About",
      ref: "#about",
    },
    {
      id: 3,
      icons: "file-alt",
      name: "Skills",
      ref: "#skills",
    },
    {
      id: 4,
      icons: "briefcase-alt",
      name: "Services",
      ref: "#services",
    },
    {
      id: 5,
      icons: "scenery",
      name: "Portfolio",
      ref: "#portfolio",
    },
    {
      id: 6,
      icons: "message",
      name: "Contact",
      ref: "#contact",
    },
  ];
  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          SLN
        </a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            {links.map((data) => (
              <li className="nav__item" key={data.id}>
                <a
                  href={data.ref}
                  onClick={() => setActiveNav(data.ref)}
                  className={
                    activeNav === "#home"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className={`uil uil-${data.icons} nav__icon`}></i>
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
