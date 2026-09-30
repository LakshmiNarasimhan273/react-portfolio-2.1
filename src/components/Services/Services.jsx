import React, { useState } from "react";
import "./Services.css";

function Services() {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="sevices section" id="services">
      <h2 className="section__title">Capabilities</h2>
      <span className="section__subtitle">The areas where I can contribute and add value</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-react services__icon">
              <h3 className="services__title">Developer</h3>
            </i>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            View more{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 1
                ? "services__modal active__modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Fullstack Developer</h3>
              <p className="services__modal-description">
                Experienced full-stack developer proficient in the MERN stack
                with 5+ years of industry experience. Specializing in
                crafting dynamic web applications to meet diverse business
                needs.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Build a AI Integrated Applications
                  </p>
                </li>
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Build a Scalable Applications
                  </p>
                </li>
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Build a Scalable REST API's
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon">
              <h3 className="services__title">AI MERN - SME</h3>
            </i>
          </div>
          <span className="services__button" onClick={() => toggleTab(3)}>
            View more{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 3
                ? "services__modal active__modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Subject Matter Expert</h3>
              <p className="services__modal-description">
                Experienced MERN stack SME with a track record of delivering
                impactful solutions. Passionate about empowering individuals to
                excel in AI Enhanced Full Stack development.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Lead technical mentoring
                  </p>
                </li>
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Conduct architecture and code reviews
                  </p>
                </li>
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Design and deliver curriculum covering FSD
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
