import React from 'react';
import { Phone, Mail, MapPin, Linkedin, Github } from 'lucide-react';
import '../styles/Contact.css';
import resumeData from '../resume.json';

const Contact: React.FC = () => {
  const { basics } = resumeData;
  const linkedinProfile = basics.profiles.find(profile => profile.network === 'LinkedIn');
  const githubProfile = basics.profiles.find(profile => profile.network === 'GitHub');

  return (
    <div className="contact-container ios-section">
      <div className="contact-cards">
        <a href={`tel:${basics.phone}`} className="contact-card ios-card">
          <div className="contact-icon">
            <Phone size={24} />
          </div>
          <div className="contact-info">
            <h3>Phone</h3>
            <p>{basics.phone}</p>
          </div>
        </a>
        
        <a href={`mailto:${basics.email}`} className="contact-card ios-card">
          <div className="contact-icon">
            <Mail size={24} />
          </div>
          <div className="contact-info">
            <h3>Email</h3>
            <p>{basics.email}</p>
          </div>
        </a>
        
        <div className="contact-card ios-card">
          <div className="contact-icon">
            <MapPin size={24} />
          </div>
          <div className="contact-info">
            <h3>Location</h3>
            <p>{basics.location}</p>
          </div>
        </div>
        
        {linkedinProfile && (
          <a href={linkedinProfile.url} target="_blank" rel="noopener noreferrer" className="contact-card ios-card">
            <div className="contact-icon">
              <Linkedin size={24} />
            </div>
            <div className="contact-info">
              <h3>LinkedIn</h3>
              <p>{linkedinProfile.username}</p>
            </div>
          </a>
        )}
        
        {githubProfile && (
          <a href={githubProfile.url} target="_blank" rel="noopener noreferrer" className="contact-card ios-card">
            <div className="contact-icon">
              <Github size={24} />
            </div>
            <div className="contact-info">
              <h3>GitHub</h3>
              <p>{githubProfile.username}</p>
            </div>
          </a>
        )}
      </div>
    </div>
  );
};

export default Contact;