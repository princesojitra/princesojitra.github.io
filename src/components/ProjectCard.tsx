import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import '../styles/ProjectCard.css';

interface Project {
  id: number;
  title: string;
  role: string;
  language: string;
  technology: string;
  description: string;
  folderName: string;
  appLink?: string;
  screenshots: string[];
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [imageError, setImageError] = useState<Record<number, boolean>>({});
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const technologies = [project.language, project.technology].join(', ').split(', ');
  
  // Use local images from project folders with fallback to remote URLs
  const getImagePath = (index: number) => {
    // If there was an error loading the local image, use the remote URL as fallback
    if (imageError[index]) {
      return project.screenshots[index] || '';
    }
    
    // Try to load from public folder
    return `/assets/projects/${project.folderName}/screenshot-${index + 1}.png`;
  };

  const handleImageError = (index: number) => {
    setImageError(prev => ({
      ...prev,
      [index]: true
    }));
  };

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  // Prepare images for lightbox
  const lightboxImages = project.screenshots.map((_, index) => ({
    src: getImagePath(index)
  }));

  return (
    <div className="project-card ios-card">
      <h3 className="project-title">{project.title}</h3>
      
      <div className="project-tags">
        {technologies.map((tech, index) => (
          <span key={index} className="project-tag">{tech}</span>
        ))}
      </div>
      
      <div className="project-info">
        <div className="project-meta">
          <p><strong>Role:</strong> {project.role}</p>
        </div>
        
        <p className="project-description">{project.description}</p>
        
        {project.appLink && (
          <a href={project.appLink} className="app-link-button" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="16" height="16" fill="currentColor" className="app-link-icon">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
            </svg>
            <span>View in App Store</span>
          </a>
        )}
      </div>
      
      {/* Thumbnail row for all screenshots */}
      <div className="project-thumbnails">
        {project.screenshots.map((_, index) => (
          <img
            key={index}
            src={getImagePath(index)}
            alt={`${project.title} thumbnail ${index + 1}`}
            onError={() => handleImageError(index)}
            className="project-thumbnail"
            onClick={() => openLightbox(index)}
          />
        ))}
      </div>

      {/* Lightbox for fullscreen viewing */}
      <Lightbox
        open={isLightboxOpen}
        close={() => setIsLightboxOpen(false)}
        slides={lightboxImages}
        index={currentImageIndex}
      />
    </div>
  );
};

export default ProjectCard;