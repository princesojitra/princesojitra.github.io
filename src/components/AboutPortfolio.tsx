import React from 'react';
import { Github } from 'lucide-react';
import '../styles/AboutPortfolio.css';

const AboutPortfolio: React.FC = () => {
  return (
    <div className="about-portfolio-container ios-section">
      <div className="about-portfolio-card ios-card">
        <div className="github-icon">
          <Github size={40} />
        </div>
        <h3>About This Portfolio</h3>
        <p>
          This portfolio is hosted on GitHub Pages and serves as a showcase of my professional 
          journey and technical expertise. Feel free to explore my projects and reach out 
          via email or LinkedIn for collaboration or opportunities.
        </p>
        <p>
          The website is designed to emulate an iOS application experience, reflecting my 
          expertise as an iOS developer. On mobile devices, it functions as a full-screen 
          application with native-like navigation, while on desktop it's presented within 
          an iPhone frame for a unique and immersive experience.
        </p>
        <div className="portfolio-tech">
          <h4>Built With</h4>
          <ul>
            <li>React</li>
            <li>TypeScript</li>
            <li>CSS</li>
          </ul>
        </div>
        <a href="https://github.com/princesojitra" target="_blank" rel="noopener noreferrer" className="ios-button">
          View Source
        </a>
      </div>
    </div>
  );
};

export default AboutPortfolio;