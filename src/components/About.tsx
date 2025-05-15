import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.css';
import resumeData from '../resume.json';
import ThemeToggle from './ThemeToggle';

const About: React.FC = () => {
  const { basics, summary, skills, languages } = resumeData;

  return (
    <div className="about-container ios-section">
      <div className="profile-section">
        <div className="profile-image-container">
          <img 
            src={basics.image} 
            alt={basics.name} 
            className="profile-image" 
          />
        </div>
        <div className="name-toggle-container">
          <div className="theme-toggle-placeholder"></div>
          <h2 className="profile-name">{basics.name}</h2>
        </div>
        <p className="profile-title">{basics.title}</p>
        <Link to="/resume" className="resume-link" target="_blank">View Resume</Link>
        <div className="theme-toggle-link">
          <ThemeToggle />
        </div>
      </div>

      <div className="ios-card">
        <h3 className="section-title">Professional Summary</h3>
        <p className="section-content">{summary}</p>
      </div>

      <div className="ios-card">
        <h3 className="section-title">Key Skills</h3>
        <div className="skills-container">
          {skills.map((skillCategory, index) => (
            <div className="skill-category" key={index}>
              <h4>{skillCategory.category}</h4>
              <ul>
                {skillCategory.items.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="ios-card">
        <h3 className="section-title">Languages</h3>
        <ul className="language-list">
          {languages.map((lang, index) => (
            <li key={index}>
              <span className="language">{lang.language}:</span> {lang.fluency}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;