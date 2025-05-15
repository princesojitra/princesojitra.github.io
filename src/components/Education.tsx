import React from 'react';
import { GraduationCap } from 'lucide-react';
import '../styles/Education.css';
import resumeData from '../resume.json';

const Education: React.FC = () => {
  const { education } = resumeData;

  return (
    <div className="education-container ios-section">
      {education.map((edu, index) => (
        <div className="education-card ios-card" key={index}>
          <div className="education-icon">
            <GraduationCap size={40} />
          </div>
          <div className="education-details">
            <h3 className="degree-title">{edu.degree}</h3>
            <div className="institution">{edu.institution}</div>
            <div className="education-period">{edu.period}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;