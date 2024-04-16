import React, { useState } from "react";
import "./Services.css";

function Services() {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="sevices section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-react services__icon">
              <h3 className="services__title">Web Developer</h3>
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
                with three years of industry experience. Specializing in
                crafting dynamic web applications to meet diverse business
                needs.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Developing the user-interface
                  </p>
                </li>
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Build a Full-stack Applications
                  </p>
                </li>
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Build Server side REST API's
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon">
              <h3 className="services__title">Designer</h3>
            </i>
          </div>
          <span className="services__button" onClick={() => toggleTab(2)}>
            View more{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 2
                ? "services__modal active__modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">UI/UX Designer</h3>
              <p className="services__modal-description">
                Experienced UI/UX designer adept at creating intuitive and
                visually stunning digital experiences. Passionate about crafting
                user-centric designs that elevate products and delight users.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Design and Mockup for products
                  </p>
                </li>
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Design and prototype a component in Figma
                  </p>
                </li>
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Design and Sketch custom icons
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
              <h3 className="services__title">Trainer</h3>
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
              <h3 className="services__modal-title">Fullstack Trainer</h3>
              <p className="services__modal-description">
                Experienced MERN stack trainer with a track record of delivering
                impactful solutions. Passionate about empowering individuals to
                excel in full-stack application development.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Engage with students and professional
                  </p>
                </li>
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Create a content for classes
                  </p>
                </li>
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Give a hands-on practical sessions
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
