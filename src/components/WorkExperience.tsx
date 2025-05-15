import React from 'react';
import '../styles/WorkExperience.css';
import resumeData from '../resume.json';

const WorkExperience: React.FC = () => {
  const { work } = resumeData;

  return (
    <div className="work-experience-container ios-section">
      <div className="timeline">
        {work.map(experience => (
          <div key={experience.id} className="timeline-item ios-card">
            <div className="timeline-content">
              <h3 className="job-title">{experience.title}</h3>
              <div className="company-info">
                <span className="company-name">{experience.company}</span>
                <span className="job-location">{experience.location}</span>
              </div>
              <div className="job-period">{experience.period}</div>
              <ul className="job-responsibilities">
                {experience.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;