import React, { useRef } from 'react';
import '../styles/Resume.css';
import resumeData from '../resume.json';

const Resume: React.FC = () => {
  const { basics, summary, skills, languages, work, education, projects } = resumeData;
  const resumeRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-page">
      <div className="resume-container" ref={resumeRef}>
        <span className="print-icon-wrapper" onClick={handlePrint} title="Print Resume">
          🖨️
        </span>
        <div className="resume-header">
          <h1>{basics.name}</h1>
          <p className="resume-title">{basics.title}</p>
          <div className="resume-contact">
            <p>{basics.email} | {basics.phone}</p>
            <p>{basics.location}</p>
            <div className="resume-profiles">
              {basics.profiles.map((profile, index) => (
                <a key={index} href={profile.url} target="_blank" rel="noopener noreferrer">
                  {profile.network}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="resume-section">
          <h2>Professional Summary</h2>
          <p>{summary}</p>
        </div>

        <div className="resume-section">
          <h2>Work Experience</h2>
          {work.map((job) => (
            <div className="resume-work-item" key={job.id}>
              <div className="resume-job-header">
                <h3>{job.title}</h3>
                <p className="resume-job-period">{job.period}</p>
              </div>
              <p className="resume-job-company">{job.company}, {job.location}</p>
              <ul>
                {job.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="resume-section">
          <h2>Education</h2>
          {education.map((edu, index) => (
            <div className="resume-education-item" key={index}>
              <h3>{edu.degree}</h3>
              <p>{edu.institution}, {edu.period}</p>
            </div>
          ))}
        </div>

        <div className="resume-section">
          <h2>Skills</h2>
          <div className="resume-skills">
            {skills.map((skillCategory, index) => (
              <div className="resume-skill-category" key={index}>
                <h3>{skillCategory.category}</h3>
                <ul>
                  {skillCategory.items.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="resume-section">
          <h2>Languages</h2>
          <ul className="resume-language-list">
            {languages.map((lang, index) => (
              <li key={index}>
                <span className="resume-language">{lang.language}:</span> {lang.fluency}
              </li>
            ))}
          </ul>
        </div>

        <div className="resume-section resume-projects">
          <h2>Key Projects</h2>
          {projects.slice(0, 3).map((project) => (
            <div className="resume-project-item" key={project.id}>
              <h3>{project.title}</h3>
              <p className="resume-project-role">{project.role} | {project.language} | {project.technology}</p>
              <p>{project.description}</p>
              {project.appLink && (
                <a href={project.appLink} target="_blank" rel="noopener noreferrer">App Link</a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume; 