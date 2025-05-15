import React from 'react';
import ProjectCard from './ProjectCard';
import '../styles/Projects.css';
import resumeData from '../resume.json';

const Projects: React.FC = () => {
  const { projects } = resumeData;

  return (
    <div className="projects-container ios-section">
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;