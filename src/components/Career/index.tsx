import React from "react";
import data from "../../data/career.json";

export default function Career() {
  return (
    <>
      <h2 className="title">
        <span data-i18n="skills.my_skills">Work Experience</span>
      </h2>

      <div className="timeline">
        <header className="timeline-header">
          <span className="tag is-primary">Now</span>
        </header>
        {data.map((career) => (
          <div className="timeline-item">
            <div className="timeline-marker is-icon"></div>
            <div className="timeline-content">
              <p className="heading">{career.date}</p>
              <div className="card">
                <div className="card-content">
                  <div className="content">
                    <h3 className="title">{career.job}</h3>
                    <h5 className="subtitle">
                      @ <a href={ career.link }>{career.name}</a>
                    </h5>
                    <p>{career.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <header className="timeline-header">
          <span className="tag is-primary">Born</span>
        </header>
      </div>
    </>
  );
}
