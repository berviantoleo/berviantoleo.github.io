import React from "react";
import data from "../../data/education.json";

export default function Education() {
  return (
    <>
      <h2 className="title">
        <span data-i18n="skills.my_skills">Education</span>
      </h2>

      <div className="timeline">
        <header className="timeline-header">
          <span className="tag is-primary">Now</span>
        </header>
        {data.map((education) => (
          <div className="timeline-item">
            <div className="timeline-marker is-icon"></div>
            <div className="timeline-content">
              <p className="heading">{education.date}</p>
              <p>
                <h3 className="title">{education.level}</h3>
                <h4 className="subtitle">
                  <a href={education.link}>{education.name}</a>
                </h4>
              </p>
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
