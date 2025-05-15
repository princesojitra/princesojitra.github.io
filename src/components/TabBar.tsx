import React from 'react';
import { User, Briefcase, GraduationCap, Mail, FolderKanban } from 'lucide-react';
import '../styles/TabBar.css';

interface TabBarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TabBar: React.FC<TabBarProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'about', label: 'About', icon: <User size={24} /> },
    { id: 'projects', label: 'Projects', icon: <FolderKanban size={24} /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase size={24} /> },
    { id: 'education', label: 'Education', icon: <GraduationCap size={24} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={24} /> }
  ];

  return (
    <nav className="tab-bar">
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={`tab-item ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => onTabChange(tab.id)}
          aria-label={tab.label}
        >
          <div className="tab-icon">{tab.icon}</div>
          <span className="tab-label">{tab.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default TabBar;