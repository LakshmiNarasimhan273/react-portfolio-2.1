import React, { useState } from "react";
import "./Qualifications.css";

function Qualifications() {
  const [toggleState, setToggleState] = useState(2);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>
          {/*  */}
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
            onClick={() => toggleTab(1)}
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  MCA - Distance Education
                </h3>
                <span className="qualification__subtitle">Anna University</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/*  */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">BCA</h3>
                <span className="qualification__subtitle">
                  Bharathidasan University
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2018 - 2021
                </div>
              </div>
            </div>

            {/*  */}
          </div>
          {/* Experience > */}
          {/*  */}
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
            onClick={() => toggleTab(2)}
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Fullstack Trainer</h3>
                <span className="qualification__subtitle">
                  Edureka Learning Center
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2023 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/*  */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Fullstack Trainer</h3>
                <span className="qualification__subtitle">
                  Achariya Infotech
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2023
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualifications;
