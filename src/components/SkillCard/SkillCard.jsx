// src/components/SkillCard/SkillCard.jsx
import React from 'react';
import './SkillCard.css';

function SkillCard({ name = 'Skill Name', level = '50%' }) {
  // Ensures level always has '%' formatting even if a raw number is passed
  const formattedLevel = typeof level === 'number' ? `${level}%` : level;

  return (
    <div className="skill-card">
      <div className="skill-info" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
        <h3 className="skill-name">{name}</h3>
        <span className="skill-percentage">{formattedLevel}</span>
      </div>
      <div className="progress-bar" style={{ background: '#e0e0e0', borderRadius: '4px', overflow: 'hidden', height: '10px' }}>
        <div 
          className="fill" 
          style={{ 
            width: formattedLevel, 
            height: '100%', 
            backgroundColor: '#f39c12', 
            transition: 'width 0.5s ease-in-out' 
          }}
        ></div>
      </div>
    </div>
  );
}

export default SkillCard;